"use client";

import Image from "next/image";
import { useState } from "react";

import { links } from "@/lib/links";
import { images } from "@/lib/images";
import { contactSchema } from "@/src/features/contact/contact.schema";

const content = {
  en: {
    hero: {
      eyebrow: "CONTACT US",
      title: "Let's talk about your research.",
      intro:
        "Have a research idea, academic project, or a question about our services? Tell us what you are working on and let's start the conversation.",
      highlights: [
        {
          title: "Expert Guidance",
          description: "Tailored to your needs",
          icon: "guidance",
        },
        {
          title: "Quick Response",
          description: "We usually respond soon",
          icon: "response",
        },
        {
          title: "Confidential",
          description: "Your information is safe",
          icon: "secure",
        },
      ],
    },

    contact: {
      eyebrow: "CONTACT INFORMATION",
      title: "Get in touch",
      description:
        "Reach us directly or connect with us on social media. We are here to understand your requirements and guide you through the next step.",

      phone: {
        label: "Phone",
        value: "+977 9744588551",
        description: "Call us directly for a quick discussion.",
      },

      email: {
        label: "Email",
        value: "artovaresearch@gmail.com",
        description: "Send us an email for detailed inquiries.",
      },

      whatsapp: {
        label: "WhatsApp",
        value: "Chat with us",
        description: "Get instant support on WhatsApp.",
      },

      location: {
        label: "Location",
        value: "Chardobato, Thimi, Bhaktapur",
        description: "M9FJ+R66 Madhyapur Thimi",
      },

      follow: "Follow us on",
    },

    form: {
      eyebrow: "SEND AN INQUIRY",
      title: "Tell us about your research",
      description:
        "Share a few details about your research or academic requirement so we can understand how to support you.",

      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Research Subject",
      message: "Research Description",

      namePlaceholder: "Enter your full name",
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

    include: {
      eyebrow: "HELP US UNDERSTAND",
      title: "What to include",
      description:
        "A clear brief helps us understand your requirements and respond more effectively.",
      items: [
        "Your academic level or programme",
        "Your research topic or area",
        "The type of support you need",
        "Any important academic requirements",
        "Your expected deadline, if applicable",
      ],
      note: "A clear and detailed brief helps us provide more accurate guidance and support.",
    },

    map: {
      eyebrow: "FIND US",
      title: "Visit Artova Research",
      description:
        "Our office is located in Chardobato, Thimi, Bhaktapur. Feel free to visit us or open the location in Google Maps.",
      button: "Open in Google Maps",
    },

    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
  },

  ne: {
    hero: {
      eyebrow: "सम्पर्क गर्नुहोस्",
      title: "तपाईंको अनुसन्धानबारे छलफल गरौँ।",
      intro:
        "तपाईंसँग अनुसन्धानको विचार, शैक्षिक परियोजना वा हाम्रा सेवासम्बन्धी प्रश्न छ? तपाईंले गरिरहनुभएको कामबारे जानकारी दिनुहोस् र कुराकानी सुरु गरौँ।",
      highlights: [
        {
          title: "विशेषज्ञ मार्गदर्शन",
          description: "तपाईंको आवश्यकताअनुसार",
          icon: "guidance",
        },
        {
          title: "छिटो प्रतिक्रिया",
          description: "हामी सकेसम्म छिटो प्रतिक्रिया दिन्छौँ",
          icon: "response",
        },
        {
          title: "गोपनीयता",
          description: "तपाईंको जानकारी सुरक्षित छ",
          icon: "secure",
        },
      ],
    },

    contact: {
      eyebrow: "सम्पर्क जानकारी",
      title: "हामीसँग सम्पर्क गर्नुहोस्",
      description:
        "हामीलाई सिधै सम्पर्क गर्नुहोस् वा सामाजिक सञ्जालमार्फत जोडिनुहोस्। तपाईंको आवश्यकता बुझेर अर्को चरणका लागि मार्गदर्शन गर्न हामी तयार छौँ।",

      phone: {
        label: "फोन",
        value: "+977 9744588551",
        description: "छोटो छलफलका लागि हामीलाई सिधै फोन गर्नुहोस्।",
      },

      email: {
        label: "इमेल",
        value: "artovaresearch@gmail.com",
        description: "विस्तृत जानकारीका लागि हामीलाई इमेल गर्नुहोस्।",
      },

      whatsapp: {
        label: "WhatsApp",
        value: "कुराकानी गर्नुहोस्",
        description: "WhatsApp मार्फत तुरुन्त सम्पर्क गर्नुहोस्।",
      },

      location: {
        label: "स्थान",
        value: "Chardobato, Thimi, Bhaktapur",
        description: "M9FJ+R66 Madhyapur Thimi",
      },

      follow: "हामीलाई फलो गर्नुहोस्",
    },

    form: {
      eyebrow: "जानकारी पठाउनुहोस्",
      title: "तपाईंको अनुसन्धानबारे जानकारी दिनुहोस्",
      description:
        "तपाईंको अनुसन्धान वा शैक्षिक आवश्यकताबारे केही जानकारी दिनुहोस् ताकि हामीले आवश्यक सहयोग बुझ्न सकौँ।",

      name: "पूरा नाम",
      email: "इमेल ठेगाना",
      phone: "फोन नम्बर",
      subject: "अनुसन्धान विषय",
      message: "अनुसन्धानबारे जानकारी",

      namePlaceholder: "आफ्नो पूरा नाम लेख्नुहोस्",
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

    include: {
      eyebrow: "हामीलाई बुझ्न सहयोग गर्नुहोस्",
      title: "के जानकारी समावेश गर्ने?",
      description:
        "स्पष्ट जानकारीले तपाईंको आवश्यकता बुझ्न र प्रभावकारी रूपमा प्रतिक्रिया दिन हामीलाई सहयोग गर्छ।",
      items: [
        "तपाईंको शैक्षिक स्तर वा कार्यक्रम",
        "तपाईंको अनुसन्धान विषय वा क्षेत्र",
        "तपाईंलाई आवश्यक सहयोगको प्रकार",
        "महत्वपूर्ण शैक्षिक आवश्यकता",
        "सम्भावित समयसीमा, यदि लागू हुन्छ भने",
      ],
      note: "स्पष्ट र विस्तृत जानकारीले हामीलाई अझ सही मार्गदर्शन र सहयोग प्रदान गर्न मद्दत गर्छ।",
    },

    map: {
      eyebrow: "हामीलाई भेट्नुहोस्",
      title: "Artova Research मा आउनुहोस्",
      description:
        "हाम्रो कार्यालय Chardobato, Thimi, Bhaktapur मा अवस्थित छ। तपाईं हामीलाई भेट्न आउन सक्नुहुन्छ वा Google Maps मा स्थान हेर्न सक्नुहुन्छ।",
      button: "Google Maps मा खोल्नुहोस्",
    },

    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
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

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 7 9 6 9-6"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.5 11.2a8.5 8.5 0 0 1-12.56 7.46L4 20l1.38-3.73A8.5 8.5 0 1 1 20.5 11.2Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.8 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.7 1.3 1.7 2.3 3 3l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-2.8-.8-5.1-3.1-5.9-5.9-.2-.5-.1-1.1.1-1.5Z"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.6v8h2.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.4"
        cy="6.6"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 12 4 4L19 6"
      />
    </svg>
  );
}

function HighlightIcon({ type }: { type: string }) {
  if (type === "response") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"
        />
      </svg>
    );
  }

  if (type === "secure") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3 20 6v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 12 2 2 4-4"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5h16v11H4z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 20h8M12 16v4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 9h8M8 12h5"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact Card                                                               */
/* -------------------------------------------------------------------------- */

function ContactCard({
  icon,
  label,
  value,
  description,
  href,
  target,
  iconClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  href: string;
  target?: string;
  iconClass: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className="
        group relative overflow-hidden rounded-2xl border
        border-border bg-background
        p-6
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-purple-bright/50
        hover:shadow-[0_18px_45px_rgba(123,44,191,0.16)]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none absolute -right-12 -top-12
          h-28 w-28 rounded-full
          bg-purple-bright/0 blur-3xl
          transition-all duration-500
          group-hover:bg-purple-bright/20
        "
      />

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`
            flex h-12 w-12 items-center justify-center rounded-xl
            ${iconClass}
            transition-all duration-300
            group-hover:scale-110
            group-hover:rotate-2
          `}
        >
          {icon}
        </div>

        <span
          className="
            flex h-8 w-8 items-center justify-center rounded-full
            border border-border text-muted
            transition-all duration-300
            group-hover:border-purple-bright
            group-hover:bg-purple-brand
            group-hover:text-white
            group-hover:translate-x-0.5
          "
        >
          <ArrowIcon />
        </span>
      </div>

      <div className="relative z-10">
        <p
          className="
            mt-6 text-sm font-semibold text-muted
            transition-colors duration-300
            group-hover:text-purple-brand
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1 break-words text-base font-bold text-foreground
            transition-colors duration-300
            group-hover:text-purple-deep
            dark:group-hover:text-purple-bright
          "
        >
          {value}
        </p>

        <p className="mt-2 text-sm leading-6 text-soft">
          {description}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        className="
          absolute bottom-0 left-0 h-1 w-0
          bg-gradient-to-r from-[#7B2CBF] via-[#B100E8] to-[#D100D1]
          transition-all duration-500
          group-hover:w-full
        "
      />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Form Field                                                                 */
/* -------------------------------------------------------------------------- */

function FormField({
  id,
  label,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-foreground"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
          mt-2 w-full rounded-xl border
          bg-surface-elevated
          px-4 py-3.5
          text-foreground
          outline-none
          transition
          placeholder:text-soft
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
              : "border-border focus:border-purple-bright focus:ring-purple-bright/10"
          }
          focus:ring-2
        `}
      />

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  const [locale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.location.pathname.split("/")[1] === "ne" ? "ne" : "en";
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("idle");
    setErrors({});

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};

      for (const issue of validation.error.issues) {
        const field = issue.path[0];

        if (typeof field === "string" && !fieldErrors[field]) {
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

      if (!response.ok) {
        if (data.errors) {
          const fieldErrors: Record<string, string> = {};

          for (const [field, messages] of Object.entries(data.errors)) {
            if (Array.isArray(messages) && messages.length > 0) {
              fieldErrors[field] = String(messages[0]);
            }
          }

          setErrors(fieldErrors);
          return;
        }

        setStatus("error");
        return;
      }

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
    <main className="bg-background text-foreground transition-colors duration-300">
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-bright/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            {/* Hero copy */}
            <div>
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-purple-brand">
                  {t.hero.eyebrow}
                </p>

                <span className="h-px w-16 bg-purple-bright/60" />
              </div>

              <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
                {t.hero.title}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg">
                {t.hero.intro}
              </p>

              {/* Highlights */}
              <div className="mt-9 grid gap-5 sm:grid-cols-3 lg:max-w-2xl">
                {t.hero.highlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-bright/20 bg-purple-bright/10 text-purple-brand">
                      <HighlightIcon type={item.icon} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-bright/15 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-purple-brand/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-purple-bright/15 bg-purple-bright/5 shadow-[0_25px_70px_rgba(123,44,191,0.16)]">
                <Image
                  src={images.contact.hero}
                  alt="Artova Research workspace"
                  width={1000}
                  height={760}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-purple-brand/10 via-transparent to-purple-bright/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CONTACT INFORMATION                                                */}
      {/* ================================================================== */}

      <section className="border-y border-purple-bright/10 bg-purple-bright/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
          <div className="flex flex-col gap-8">
            {/* Heading + social */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-purple-brand">
                    {t.contact.eyebrow}
                  </p>

                  <span className="h-px w-12 bg-purple-bright/60" />
                </div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {t.contact.title}
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-muted">
                  {t.contact.description}
                </p>
              </div>

              {/* Social icons are part of Contact Information */}
              <div>
                <p className="mb-3 text-sm font-semibold text-muted">
                  {t.contact.follow}
                </p>

                <div className="flex gap-2.5">
                  <a
                    href={links.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.social.facebook}
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full bg-[#1877F2] text-white
                      shadow-[0_8px_20px_rgba(24,119,242,0.2)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_28px_rgba(24,119,242,0.3)]
                    "
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href={links.social.instagram || "#"}
                    target={links.social.instagram ? "_blank" : undefined}
                    rel={
                      links.social.instagram
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={t.social.instagram}
                    aria-disabled={!links.social.instagram}
                    onClick={(event) => {
                      if (!links.social.instagram) {
                        event.preventDefault();
                      }
                    }}
                    className={`
                      flex h-11 w-11 items-center justify-center
                      rounded-full text-white
                      transition-all duration-300
                      ${
                        links.social.instagram
                          ? "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] shadow-[0_8px_20px_rgba(225,48,108,0.2)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(225,48,108,0.3)]"
                          : "cursor-not-allowed bg-muted text-soft opacity-50"
                      }
                    `}
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href={links.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.social.whatsapp}
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full bg-[#25D366] text-white
                      shadow-[0_8px_20px_rgba(37,211,102,0.2)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_28px_rgba(37,211,102,0.3)]
                    "
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <ContactCard
                icon={<PhoneIcon />}
                label={t.contact.phone.label}
                value={links.contact.phone}
                description={t.contact.phone.description}
                href={`tel:${links.contact.phone}`}
                iconClass="bg-purple-brand/15 text-purple-brand"
              />

              <ContactCard
                icon={<MailIcon />}
                label={t.contact.email.label}
                value={links.contact.email}
                description={t.contact.email.description}
                href={`mailto:${links.contact.email}`}
                iconClass="bg-sky-500/15 text-sky-600 dark:text-sky-400"
              />

              <ContactCard
                icon={<WhatsAppIcon />}
                label={t.contact.whatsapp.label}
                value={t.contact.whatsapp.value}
                description={t.contact.whatsapp.description}
                href={links.contact.whatsapp}
                target="_blank"
                iconClass="bg-[#25D366]/15 text-[#20B957]"
              />

              <ContactCard
                icon={<MapPinIcon />}
                label={t.contact.location.label}
                value={t.contact.location.value}
                description={t.contact.location.description}
                href={links.location.googleMaps}
                target="_blank"
                iconClass="bg-orange-500/15 text-orange-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FORM + WHAT TO INCLUDE                                             */}
      {/* ================================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* Form */}
          <div className="theme-card rounded-3xl p-7 sm:p-9 lg:p-10">
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-purple-brand">
                {t.form.eyebrow}
              </p>

              <span className="h-px w-12 bg-purple-bright/60" />
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.form.title}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              {t.form.description}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  id="name"
                  label={t.form.name}
                  value={formData.name}
                  placeholder={t.form.namePlaceholder}
                  error={errors.name}
                  onChange={handleChange}
                />

                <FormField
                  id="email"
                  label={t.form.email}
                  type="email"
                  value={formData.email}
                  placeholder={t.form.emailPlaceholder}
                  error={errors.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  id="phone"
                  label={t.form.phone}
                  type="tel"
                  value={formData.phone}
                  placeholder={t.form.phonePlaceholder}
                  error={errors.phone}
                  onChange={handleChange}
                />

                <FormField
                  id="subject"
                  label={t.form.subject}
                  value={formData.subject}
                  placeholder={t.form.subjectPlaceholder}
                  error={errors.subject}
                  onChange={handleChange}
                />
              </div>

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
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                        : "border-border focus:border-purple-bright focus:ring-purple-bright/10"
                    }
                    focus:ring-2
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

              {status === "success" && (
                <p className="rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-400">
                  {t.form.success}
                </p>
              )}

              {status === "error" && (
                <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-400">
                  {t.form.error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group flex w-full items-center justify-center gap-3
                  rounded-xl
                  bg-gradient-to-r from-[#7B2CBF] via-[#B100E8] to-[#D100D1]
                  px-6 py-4
                  font-bold text-white
                  shadow-[0_10px_30px_rgba(177,0,232,0.28)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_14px_40px_rgba(209,0,209,0.4)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {t.form[isSubmitting ? "sending" : "submit"]}

                {!isSubmitting && (
                  <>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* What to include */}
          <aside className="theme-card rounded-3xl p-7 sm:p-8 lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-bright/10 text-purple-brand">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 3h9l3 3v15H6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 3v4h4M9 11h6M9 15h6M9 19h4"
                />
              </svg>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-brand">
                {t.include.eyebrow}
              </p>

              <span className="h-px w-10 bg-purple-bright/60" />
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              {t.include.title}
            </h2>

            <p className="mt-4 leading-7 text-muted">
              {t.include.description}
            </p>

            <ul className="mt-7 space-y-5">
              {t.include.items.map((item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-brand/10 text-xs font-bold text-purple-brand">
                    {index + 1}
                  </span>

                  <span className="pt-0.5 text-sm leading-6 text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-purple-bright/15 bg-purple-bright/5 p-5">
              <div className="flex gap-3">
                <div className="mt-0.5 text-purple-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3a7 7 0 0 0-4 12.74V19h8v-3.26A7 7 0 0 0 12 3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 22h6"
                    />
                  </svg>
                </div>

                <p className="text-sm font-semibold leading-6 text-purple-deep dark:text-purple-bright">
                  {t.include.note}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MAP                                                                */}
      {/* ================================================================== */}

      <section className="border-y border-purple-bright/10 bg-purple-bright/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-purple-brand">
                  {t.map.eyebrow}
                </p>

                <span className="h-px w-10 bg-purple-bright/60" />
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.map.title}
              </h2>

              <p className="mt-4 leading-7 text-muted">
                {t.map.description}
              </p>
            </div>

            <a
              href={links.location.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex shrink-0 items-center justify-center gap-2
                rounded-xl border border-purple-bright
                px-5 py-3
                text-sm font-bold text-purple-brand
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-purple-brand
                hover:text-white
                hover:shadow-[var(--glow-purple)]
              "
            >
              {t.map.button}
              <ArrowIcon />
            </a>
          </div>

          <div className="theme-card overflow-hidden rounded-3xl">
            <div className="h-[360px] w-full sm:h-[460px] lg:h-[520px]">
              <iframe
                title="Artova Research location"
                src={`https://www.google.com/maps?q=${links.location.coordinates.latitude},${links.location.coordinates.longitude}&z=17&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-border p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <MapPinIcon />
                </div>

                <div>
                  <p className="font-bold text-foreground">
                    {links.location.address}
                  </p>

                  <p className="mt-1 text-sm text-soft">
                    {links.location.plusCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}