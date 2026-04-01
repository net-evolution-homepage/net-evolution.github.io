"use client";

import { useState } from "react";

function formatEuro(value: number) {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function SliderInput({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
        <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)]">
          {display}
        </span>
      </div>
      <div className="relative h-10 flex items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-[var(--color-border-default)]" />
        <div
          className="absolute left-0 h-1.5 rounded-full bg-[var(--color-accent-green)] transition-[width] duration-75"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative z-10 w-full appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[var(--color-accent-green)]
            [&::-webkit-slider-thumb]:border-[3px]
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgba(0,0,0,0.2)]
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-[var(--color-accent-green)]
            [&::-moz-range-thumb]:border-[3px]
            [&::-moz-range-thumb]:border-white
            [&::-moz-range-thumb]:shadow-[0_1px_4px_rgba(0,0,0,0.2)]
            [&::-moz-range-track]:bg-transparent
            [&::-webkit-slider-runnable-track]:bg-transparent"
        />
      </div>
    </div>
  );
}

export default function ProvisionsRechner() {
  const [auditsProMonat, setAuditsProMonat] = useState(3);
  const [auftragswert, setAuftragswert] = useState(3000);

  const provisionRate = 0.15;
  const provisionProAudit = Math.round(auftragswert * provisionRate);
  const monatlich = provisionProAudit * auditsProMonat;
  const jaehrlich = monatlich * 12;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Links: Slider */}
      <div className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-sm p-8 md:p-10 space-y-8">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)]">
            Provisionsrechner
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">
            Schieben Sie die Regler.
          </p>
        </div>

        <SliderInput
          label="Audits pro Monat"
          value={auditsProMonat}
          display={`${auditsProMonat}`}
          min={1}
          max={25}
          step={1}
          onChange={setAuditsProMonat}
        />
        <SliderInput
          label="Ø Auftragswert"
          value={auftragswert}
          display={formatEuro(auftragswert)}
          min={500}
          max={15000}
          step={250}
          onChange={setAuftragswert}
        />
      </div>

      {/* Rechts: Kassenzettel */}
      <div className="rounded-2xl border border-[var(--color-border-default)] bg-white shadow-sm overflow-hidden flex flex-col">
        {/* Kopf */}
        <div className="px-8 pt-8 pb-4 md:px-10 md:pt-10 text-center border-b border-dashed border-[var(--color-border-default)]">
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
            Ihre Provision
          </p>
        </div>

        {/* Positionen */}
        <div className="px-8 md:px-10 py-6 space-y-4 flex-1 font-[family-name:var(--font-mono)] text-sm">
          <div className="flex justify-between">
            <span className="text-[var(--color-text-secondary)]">Auftragswert</span>
            <span className="text-[var(--color-text-primary)] tabular-nums">{formatEuro(auftragswert)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-text-secondary)]">× Provision</span>
            <span className="text-[var(--color-text-primary)] tabular-nums">15 %</span>
          </div>
          <div className="border-t border-dashed border-[var(--color-border-default)] pt-4 flex justify-between">
            <span className="text-[var(--color-text-secondary)]">Pro Audit</span>
            <span className="text-[var(--color-text-primary)] font-semibold tabular-nums">{formatEuro(provisionProAudit)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-text-secondary)]">× {auditsProMonat} Audit{auditsProMonat > 1 ? "s" : ""}/Monat</span>
            <span className="text-[var(--color-text-primary)] tabular-nums" />
          </div>
          <div className="border-t border-dashed border-[var(--color-border-default)] pt-4 flex justify-between">
            <span className="text-[var(--color-text-secondary)]">Pro Monat</span>
            <span className="text-[var(--color-text-primary)] font-semibold tabular-nums">{formatEuro(monatlich)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-text-secondary)]">× 12 Monate</span>
            <span className="text-[var(--color-text-primary)] tabular-nums" />
          </div>
        </div>

        {/* Summe */}
        <div className="bg-[var(--color-accent-green)] px-8 py-6 md:px-10">
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-white/80 uppercase tracking-wider">
              Gesamt/Jahr
            </span>
            <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-white tabular-nums">
              {formatEuro(jaehrlich)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
