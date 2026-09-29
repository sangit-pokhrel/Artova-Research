"use client";

import { useState } from "react";
import { contactSchema } from "@/src/features/contact/contact.schema";

const content = {
  en: {
    eyebrow: "CONTACT US",
    title: "Let's talk about your research.",
    intro:
      "Tell us about your research topic, academic requirements, or the area where you need support.",

    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Research Subject",
      message: "Tell us about your research",

      namePlaceholder: "Enter your name",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "Enter your phone number",
      subjectPlaceholder: "e.g. Business, IT, Finance",
      messagePlaceholder:
        "Briefly describe your research topic and the support you need...",

      submit: "Send Inquiry",
      sending: "Sending...",
      success: "Your inquiry has been sent successfully.",
      error: "Something went wrong. Please try again.",
    },

    infoTitle: "What to include",
    info: [
      "Your academic level or programme",
      "Your research topic or area",
      "The type of support you need",
      "Any important academic requirements or deadlines",
    ],

    note:
      "Please provide accurate information so we can better understand your requirements.",
  },

  ne: {
    eyebrow: "सम्पर्क गर्नुहोस्",
    title: "तपाईंको अनुसन्धानबारे छलफल गरौँ।",
    intro:
      "आफ्नो अनुसन्धान विषय, शैक्षिक आवश्यकता वा आफूलाई आवश्यक सहयोगबारे जानकारी दिनुहोस्।",

    form: {
      name: "पूरा नाम",
      email: "इमेल ठेगाना",
      phone: "फोन नम्बर",
      subject: "अनुसन्धान विषय",
      message: "तपाईंको अनुसन्धानबारे जानकारी",

      namePlaceholder: "आफ्नो नाम लेख्नुहोस्",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "फोन नम्बर लेख्नुहोस्",
      subjectPlaceholder: "जस्तै: Business, IT, Finance",
      messagePlaceholder:
        "आफ्नो अनुसन्धान विषय र आवश्यक सहयोगबारे छोटकरीमा लेख्नुहोस्...",

      submit: "अनुसन्धान पठाउनुहोस्",
      sending: "पठाउँदै...",
      success: "तपाईंको जानकारी सफलतापूर्वक पठाइएको छ।",
      error: "केही समस्या भयो। कृपया पुनः प्रयास गर्नुहोस्।",
    },

    infoTitle: "के जानकारी समावेश गर्ने?",
    info: [
      "तपाईंको शैक्षिक स्तर वा कार्यक्रम",
      "तपाईंको अनुसन्धान विषय वा क्षेत्र",
      "तपाईंलाई आवश्यक सहयोगको प्रकार",
      "महत्वपूर्ण शैक्षिक आवश्यकता वा समयसीमा",
    ],

    note:
      "तपाईंको आवश्यकतालाई राम्रोसँग बुझ्न सकियोस् भनेर सही जानकारी प्रदान गर्नुहोस्।",
  },
} as const;

type Locale = keyof typeof content;

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [locale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.location.pathname.split("/")[1] === "ne"
      ? "ne"
      : "en";
  });

  const t = content[locale];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => {
      if (!previous[name]) {
        return previous;
      }

      const updated = { ...previous };
      delete updated[name];

      return updated;
    });

    setStatus("idle");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("idle");
    setErrors({});

    // Frontend validation
    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};

      for (const issue of validation.error.issues) {
        const field = issue.path[0];

        if (
          typeof field === "string" &&
          !fieldErrors[field]
        ) {
          fieldErrors[field] = issue.message;
        }
      }

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json();

      // Backend validation errors
      if (!response.ok) {
        if (data.errors) {
          const fieldErrors: Record<string, string> = {};

          for (const [field, messages] of Object.entries(
            data.errors
          )) {
            if (
              Array.isArray(messages) &&
              messages.length > 0
            ) {
              fieldErrors[field] = String(messages[0]);
            }
          }

          setErrors(fieldErrors);
          return;
        }

        setStatus("error");
        return;
      }

      // Successful submission
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-background text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Left Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              {t.intro}
            </p>

            <div className="theme-card mt-12 rounded-2xl p-7 shadow-none">
              <h2 className="text-xl font-semibold text-foreground">
                {t.infoTitle}
              </h2>

              <ul className="mt-5 space-y-3">
                {t.info.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-muted"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm leading-6 text-soft">
              {t.note}
            </p>
          </div>

          {/* Contact Form */}
          <div className="theme-card rounded-3xl p-7 sm:p-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >

              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground"
                  >
                    {t.form.name}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "name-error" : undefined
                    }
                    className={`
                      mt-2 w-full rounded-xl border
                      bg-surface-elevated
                      px-4 py-3.5
                      text-foreground
                      outline-none
                      transition
                      placeholder:text-soft
                      ${
                        errors.name
                          ? "border-red-500"
                          : "border-border"
                      }
                      focus:border-accent
                    `}
                  />

                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground"
                  >
                    {t.form.email}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    className={`
                      mt-2 w-full rounded-xl border
                      bg-surface-elevated
                      px-4 py-3.5
                      text-foreground
                      outline-none
                      transition
                      placeholder:text-soft
                      ${
                        errors.email
                          ? "border-red-500"
                          : "border-border"
                      }
                      focus:border-accent
                    `}
                  />

                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid gap-6 sm:grid-cols-2">

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-foreground"
                  >
                    {t.form.phone}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.form.phonePlaceholder}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? "phone-error" : undefined
                    }
                    className={`
                      mt-2 w-full rounded-xl border
                      bg-surface-elevated
                      px-4 py-3.5
                      text-foreground
                      outline-none
                      transition
                      placeholder:text-soft
                      ${
                        errors.phone
                          ? "border-red-500"
                          : "border-border"
                      }
                      focus:border-accent
                    `}
                  />

                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-foreground"
                  >
                    {t.form.subject}
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.form.subjectPlaceholder}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject
                        ? "subject-error"
                        : undefined
                    }
                    className={`
                      mt-2 w-full rounded-xl border
                      bg-surface-elevated
                      px-4 py-3.5
                      text-foreground
                      outline-none
                      transition
                      placeholder:text-soft
                      ${
                        errors.subject
                          ? "border-red-500"
                          : "border-border"
                      }
                      focus:border-accent
                    `}
                  />

                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Research Description */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  {t.form.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`
                    mt-2 w-full resize-none rounded-xl border
                    bg-surface-elevated
                    px-4 py-3.5
                    text-foreground
                    outline-none
                    transition
                    placeholder:text-soft
                    ${
                      errors.message
                        ? "border-red-500"
                        : "border-border"
                    }
                    focus:border-accent
                  `}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success */}
              {status === "success" && (
                <p className="rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-400">
                  {t.form.success}
                </p>
              )}

              {/* General Server Error */}
              {status === "error" && (
                <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-400">
                  {t.form.error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  rounded-xl
                  bg-primary
                  px-6 py-4
                  font-semibold
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-primary-soft
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSubmitting
                  ? t.form.sending
                  : t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}