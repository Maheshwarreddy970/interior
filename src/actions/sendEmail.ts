"use server";

import ContactFormEmail from "@/components/email/contact-form-email";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.Resend_API);

type formDataType={
  email:string,
  message:string
}

export const sendEmail = async (formData: formDataType) => {
  const senderEmail = formData.email;
  const message = formData.message;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sales@casamobilia.in",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

const validateString = (
    value: unknown,
    maxLength: number
  ): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
      return false;
    }
  
    return true;
  };
  
   const getErrorMessage = (error: unknown): string => {
    let message: string;
  
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Something went wrong";
    }
  
    return message;
  };