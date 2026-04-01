"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  company: z.string().optional(),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen ausführlicher"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
    },
  });

  const formId =
    process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORMSPREE_ID";

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-lg border border-[var(--color-accent-green)]/30 bg-[var(--color-accent-green)]/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-green)]/10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-accent-green)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          Nachricht gesendet
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden
          bei Ihnen.
        </p>
        <button
          onClick={() => setSubmitState("idle")}
          className="mt-6 text-sm text-[var(--color-accent-green)] hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]"
        >
          Name <span className="text-[var(--color-accent-green)]">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className={cn(
            "w-full rounded-md border bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors",
            "focus:border-[var(--color-accent-green)] focus:ring-1 focus:ring-[var(--color-accent-green)]/30",
            errors.name
              ? "border-[var(--color-severity-critical)]"
              : "border-[var(--color-border-default)]"
          )}
          placeholder="Ihr vollständiger Name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-[var(--color-severity-critical)]">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Unternehmen */}
      <div>
        <label
          htmlFor="company"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]"
        >
          Unternehmen
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          {...register("company")}
          className="w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent-green)] focus:ring-1 focus:ring-[var(--color-accent-green)]/30"
          placeholder="Firma (optional)"
        />
      </div>

      {/* E-Mail */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]"
        >
          E-Mail <span className="text-[var(--color-accent-green)]">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={cn(
            "w-full rounded-md border bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors",
            "focus:border-[var(--color-accent-green)] focus:ring-1 focus:ring-[var(--color-accent-green)]/30",
            errors.email
              ? "border-[var(--color-severity-critical)]"
              : "border-[var(--color-border-default)]"
          )}
          placeholder="ihre@email.de"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-[var(--color-severity-critical)]">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]"
        >
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className="w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent-green)] focus:ring-1 focus:ring-[var(--color-accent-green)]/30"
          placeholder="+49 ... (optional)"
        />
      </div>

      {/* Nachricht */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]"
        >
          Nachricht <span className="text-[var(--color-accent-green)]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={cn(
            "w-full resize-y rounded-md border bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors",
            "focus:border-[var(--color-accent-green)] focus:ring-1 focus:ring-[var(--color-accent-green)]/30",
            errors.message
              ? "border-[var(--color-severity-critical)]"
              : "border-[var(--color-border-default)]"
          )}
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[var(--color-severity-critical)]">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* DSGVO Checkbox */}
      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("privacy")}
            className="mt-1 h-4 w-4 shrink-0 appearance-none rounded border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] checked:border-[var(--color-accent-green)] checked:bg-[var(--color-accent-green)] transition-colors cursor-pointer"
          />
          <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Ich habe die{" "}
            <Link
              href="/datenschutz"
              className="text-[var(--color-accent-green)] underline underline-offset-2 hover:text-[var(--color-accent-green-dim)]"
            >
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
            <span className="text-[var(--color-accent-green)]">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1 text-xs text-[var(--color-severity-critical)]">
            {errors.privacy.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {submitState === "error" && (
        <div className="rounded-md border border-[var(--color-severity-critical)]/30 bg-[var(--color-severity-critical)]/5 p-4">
          <p className="text-sm text-[var(--color-severity-critical)]">
            Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es
            erneut oder kontaktieren Sie uns direkt per E-Mail.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === "loading"}
        className={cn(
          "w-full rounded-md bg-[var(--color-accent-green)] px-6 py-3 text-sm font-semibold text-[var(--color-bg-primary)] transition-all",
          "hover:bg-[var(--color-accent-green-dim)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-green)]/50 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]",
          submitState === "loading" && "cursor-not-allowed opacity-70"
        )}
      >
        {submitState === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Wird gesendet...
          </span>
        ) : (
          "Nachricht senden"
        )}
      </button>
    </form>
  );
}
