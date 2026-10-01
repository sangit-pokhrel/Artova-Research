import type { ContactInquiry } from "@/src/domain/contact/contact.types";

export async function submitContactInquiry(
  inquiry: ContactInquiry
) {
  const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    console.error("GOOGLE_APPS_SCRIPT_URL is not configured.");

    return {
      success: false,
      message: "Contact service is not configured.",
    };
  }

  try {
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
        subject: inquiry.subject,
        message: inquiry.message,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Google Apps Script error:",
        response.status,
        response.statusText
      );

      return {
        success: false,
        message: "Unable to submit your inquiry. Please try again.",
      };
    }

    const result = await response.json();

    if (!result.success) {
      console.error("Google Apps Script rejected inquiry:", result);

      return {
        success: false,
        message: "Unable to submit your inquiry. Please try again.",
      };
    }

    return {
      success: true,
      message: "Your inquiry has been received.",
    };
  } catch (error) {
    console.error("CONTACT SERVICE ERROR:", error);

    return {
      success: false,
      message: "Unable to submit your inquiry. Please try again.",
    };
  }
}