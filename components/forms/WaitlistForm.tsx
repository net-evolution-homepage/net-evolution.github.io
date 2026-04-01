"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const waitlistSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  company: z.string().optional(),
  dsgvo: z.boolean().refine((val) => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen.",
  }),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      dsgvo: false,
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const formspreeId =
      process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST_ID || "xplaceholder";

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.company || "–",
            _subject: "Neue Wartelisten-Anmeldung: Recovery & Monitoring Suite",
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setSubmitError(
          "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
        );
      }
    } catch {
      setSubmitError(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-[var(--color-accent-green)] bg-[var(--color-bg-card)] p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-green)]/10">
          <svg
            width="32"
            height="32"
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
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)] mb-2">
          Sie stehen auf der Warteliste!
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          Ich melde mich, sobald die Recovery &amp; Monitoring Suite verfügbar
          ist.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-8 space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="wl-name"
          className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5"
        >
          Name <span className="text-[var(--color-severity-critical)]">*</span>
        </label>
        <input
          id="wl-name"
          type="text"
          placeholder="Max Mustermann"
          className={cn(
            "w-full rounded-md border bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors",
            errors.name
              ? "border-[var(--color-severity-critical)]"
              : "border-[var(--color-border-default)] focus:border-[var(--color-accent-cyan)]"
          )}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-[var(--color-severity-critical)]">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="wl-email"
          className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5"
        >
          E-Mail{" "}
          <span className="text-[var(--color-severity-critical)]">*</span>
        </label>
        <input
          id="wl-email"
          type="email"
          placeholder="max@unternehmen.de"
          className={cn(
            "w-full rounded-md border bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors",
            errors.email
              ? "border-[var(--color-severity-critical)]"
              : "border-[var(--color-border-default)] focus:border-[var(--color-accent-cyan)]"
          )}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-[var(--color-severity-critical)]">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="wl-company"
          className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5"
        >
          Unternehmen{" "}
          <span className="text-[var(--color-text-muted)]">(optional)</span>
        </label>
        <input
          id="wl-company"
          type="text"
          placeholder="Unternehmen GmbH"
          className="w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent-cyan)]"
          {...register("company")}
        />
      </div>

      {/* DSGVO */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[var(--color-border-default)] bg-[var(--color-bg-primary)] accent-[var(--color-accent-green)]"
            {...register("dsgvo")}
          />
          <span className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Ich stimme zu, dass meine Daten zur Kontaktaufnahme bezüglich der
            Recovery &amp; Monitoring Suite verarbeitet werden. Weitere
            Informationen finden Sie in unserer{" "}
            <a
              href="/datenschutz"
              className="text-[var(--color-accent-cyan)] underline underline-offset-2 hover:text-[var(--color-accent-green)] transition-colors"
            >
              Datenschutzerklärung
            </a>
            . <span className="text-[var(--color-severity-critical)]">*</span>
          </span>
        </label>
        {errors.dsgvo && (
          <p className="mt-1 text-xs text-[var(--color-severity-critical)]">
            {errors.dsgvo.message}
          </p>
        )}
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className="rounded-md border border-[var(--color-severity-critical)] bg-[var(--color-severity-critical)]/10 p-3 text-sm text-[var(--color-severity-critical)]">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full rounded-md px-6 py-3 text-sm font-semibold transition-colors",
          isSubmitting
            ? "bg-[var(--color-accent-cyan-dim)] text-[var(--color-bg-primary)] cursor-wait"
            : "bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-cyan-dim)]"
        )}
      >
        {isSubmitting ? "Wird gesendet..." : "Auf die Warteliste setzen"}
      </button>
    </form>
  );
}
