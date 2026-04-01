"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  background: z.string().min(10, "Bitte beschreiben Sie kurz Ihren Hintergrund"),
  privacy: z.literal(true, {
    error: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type FormData = z.infer<typeof schema>;

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_PARTNER_ID || "PLACEHOLDER";
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || "–",
          background: data.background,
          _subject: `Partneranfrage von ${data.name}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-green)]/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          Nachricht erhalten
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Ich melde mich innerhalb von 48 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="p-name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
            Name *
          </label>
          <input
            id="p-name"
            type="text"
            placeholder="Ihr Name"
            {...register("name")}
            className="w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-green)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-green)]"
          />
          {errors.name && <p className="mt-1 text-xs text-[var(--color-severity-critical)]">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="p-email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
            E-Mail *
          </label>
          <input
            id="p-email"
            type="email"
            placeholder="ihre@email.de"
            {...register("email")}
            className="w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-green)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-green)]"
          />
          {errors.email && <p className="mt-1 text-xs text-[var(--color-severity-critical)]">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="p-phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
          Telefon
        </label>
        <input
          id="p-phone"
          type="tel"
          placeholder="+49 ... (optional)"
          {...register("phone")}
          className="w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-green)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-green)]"
        />
      </div>

      <div>
        <label htmlFor="p-bg" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
          Über Sie *
        </label>
        <textarea
          id="p-bg"
          rows={6}
          placeholder="Kurz zu Ihrem Hintergrund und warum Sie Interesse haben."
          {...register("background")}
          className="w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-green)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-green)] resize-y"
        />
        {errors.background && <p className="mt-1 text-xs text-[var(--color-severity-critical)]">{errors.background.message}</p>}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("privacy")}
          className="mt-0.5 h-4 w-4 rounded border-[var(--color-border-default)] accent-[var(--color-accent-green)]"
        />
        <span className="text-xs text-[var(--color-text-secondary)]">
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-[var(--color-accent-cyan)] underline hover:no-underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </span>
      </label>
      {errors.privacy && <p className="text-xs text-[var(--color-severity-critical)]">{errors.privacy.message}</p>}

      {error && (
        <p className="text-sm text-[var(--color-severity-critical)]">
          Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie an info@net-evolution.de.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[var(--color-accent-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-green-dim)] disabled:opacity-50"
      >
        {isSubmitting ? "Wird gesendet..." : "Nachricht absenden"}
      </button>
    </form>
  );
}
