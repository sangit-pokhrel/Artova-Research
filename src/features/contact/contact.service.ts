import type { ContactInquiry } from "@/src/domain/contact/contact.types";

export async function submitContactInquiry(
  inquiry: ContactInquiry
) {
  console.log("Processing contact inquiry:", inquiry);

  return {
    success: true,
    message: "Your inquiry has been received.",
  };
}