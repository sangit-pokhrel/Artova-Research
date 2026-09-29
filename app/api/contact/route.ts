import { NextResponse } from "next/server";

import { contactSchema } from "@/src/features/contact/contact.schema";
import { submitContactInquiry } from "@/src/features/contact/contact.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const inquiry = validation.data;

    const result = await submitContactInquiry(inquiry);

    return NextResponse.json(result);
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}