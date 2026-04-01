"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  checklistBlocks,
  type ChecklistBlock,
} from "@/data/checklist-blocks";

const severityColors: Record<string, string> = {
  critical: "bg-[var(--color-severity-critical)] text-white",
  high: "bg-[var(--color-severity-high)] text-white",
  medium: "bg-[var(--color-severity-medium)] text-white",
  low: "bg-[var(--color-severity-low)] text-white",
  info: "bg-[var(--color-severity-info)] text-white",
};

const severityLabels: Record<string, string> = {
  critical: "Kritisch",
  high: "Hoch",
  medium: "Mittel",
  low: "Niedrig",
  info: "Info",
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

export default function ChecklisteClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [direction, setDirection] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const totalBlocks = checklistBlocks.length;
  const currentBlock = checklistBlocks[currentStep];

  const handleToggle = useCallback((questionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  }, []);

  const goNext = () => {
    if (currentStep < totalBlocks - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    } else {
      setShowResults(true);
    }
  };

  const goPrev = () => {
    if (showResults) {
      setShowResults(false);
      return;
    }
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const goToBlock = (index: number) => {
    setShowResults(false);
    setDirection(index > currentStep ? 1 : -1);
    setCurrentStep(index);
  };

  // Calculate results
  const totalQuestions = checklistBlocks.reduce(
    (sum, block) => sum + block.questions.length,
    0
  );
  const answeredYes = Object.values(answers).filter(Boolean).length;
  const scorePercent = Math.round((answeredYes / totalQuestions) * 100);

  const getBlockScore = (block: ChecklistBlock) => {
    const yes = block.questions.filter((q) => answers[q.id]).length;
    return { yes, total: block.questions.length };
  };

  // Count critical/high issues
  const openIssues = useMemo(() => {
    let critical = 0;
    let high = 0;
    checklistBlocks.forEach((block) => {
      block.questions.forEach((q) => {
        if (!answers[q.id]) {
          if (q.severity === "critical") critical++;
          if (q.severity === "high") high++;
        }
      });
    });
    return { critical, high };
  }, [answers]);

  const getTrafficLight = () => {
    if (scorePercent > 80) {
      return {
        color: "var(--color-accent-green)",
        label: "Gute Basis",
        text: "Ihre IT-Sicherheit ist auf einem soliden Niveau. Einzelne Lücken können gezielt geschlossen werden.",
        emoji: "✓",
      };
    }
    if (scorePercent >= 50) {
      return {
        color: "var(--color-severity-medium)",
        label: "Handlungsbedarf",
        text: "In mehreren Bereichen bestehen Lücken, die Angriffsflächen bieten. Ein gezielter Audit kann die kritischsten Punkte identifizieren.",
        emoji: "!",
      };
    }
    return {
      color: "var(--color-severity-critical)",
      label: "Dringender Handlungsbedarf",
      text: "Es bestehen grundlegende Sicherheitslücken. Ein professionelles Audit ist dringend empfohlen, bevor ein Vorfall eintritt.",
      emoji: "!!",
    };
  };

  // Answered count for current block
  const currentBlockAnswered = currentBlock.questions.filter(
    (q) => answers[q.id]
  ).length;

  // --- RESULTS VIEW ---
  if (showResults) {
    const traffic = getTrafficLight();
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* Score Overview */}
        <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
            Ihr Ergebnis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
            {/* Score Circle */}
            <div className="flex justify-center">
              <div className="relative w-36 h-36">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-border-default)" strokeWidth="8" />
                  <circle
                    cx="60" cy="60" r="52" fill="none"
                    stroke={traffic.color} strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={`${(scorePercent / 100) * 327} 327`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold" style={{ color: traffic.color }}>
                    {scorePercent}%
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {answeredYes} von {totalQuestions}
                  </span>
                </div>
              </div>
            </div>

            {/* Traffic Light Text */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
                  style={{ backgroundColor: traffic.color }}
                >
                  {traffic.emoji}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold" style={{ color: traffic.color }}>
                  {traffic.label}
                </h3>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {traffic.text}
              </p>
              {(openIssues.critical > 0 || openIssues.high > 0) && (
                <div className="mt-4 flex gap-4 text-sm">
                  {openIssues.critical > 0 && (
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-severity-critical)] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-severity-critical)]" />
                      {openIssues.critical} kritische Lücken
                    </span>
                  )}
                  {openIssues.high > 0 && (
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-severity-high)] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-severity-high)]" />
                      {openIssues.high} hohe Risiken
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Per-Block Breakdown */}
        <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] mb-6">
            Auswertung nach Bereichen
          </h3>
          <div className="space-y-5">
            {checklistBlocks.map((block, index) => {
              const score = getBlockScore(block);
              const pct = Math.round((score.yes / score.total) * 100);
              const barColor =
                pct > 80
                  ? "var(--color-accent-green)"
                  : pct >= 50
                    ? "var(--color-severity-medium)"
                    : "var(--color-severity-critical)";
              return (
                <button
                  key={block.id}
                  onClick={() => goToBlock(index)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-[var(--color-text-primary)] font-medium group-hover:text-[var(--color-accent-green)] transition-colors">
                      {block.title}
                    </span>
                    <span className="text-[var(--color-text-muted)] tabular-nums">
                      {score.yes}/{score.total}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[var(--color-border-default)] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: barColor }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-[var(--color-accent-green)] bg-[var(--color-accent-green)]/5 p-6 md:p-8 text-center">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)] mb-3">
            Möchten Sie die Lücken professionell bewerten lassen?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
            In einem kostenlosen Erstgespräch bespreche ich mit Ihnen die Ergebnisse und zeige, welche Maßnahmen den größten Effekt haben.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[var(--color-accent-green)] text-white font-semibold text-sm hover:bg-[var(--color-accent-green-dim)] transition-colors"
            >
              Erstgespräch vereinbaren
            </Link>
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentStep(0);
              }}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-green)] transition-colors"
            >
              Checkliste erneut durchgehen
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // --- CHECKLIST VIEW ---
  return (
    <div>
      {/* Step Indicator */}
      <div className="mb-6 flex items-center gap-1.5">
        {checklistBlocks.map((_, index) => {
          const blockScore = getBlockScore(checklistBlocks[index]);
          const isComplete = blockScore.yes === blockScore.total && blockScore.total > 0;
          return (
            <button
              key={index}
              onClick={() => goToBlock(index)}
              className={cn(
                "h-2 flex-1 rounded-full transition-all duration-300",
                index === currentStep
                  ? "bg-[var(--color-accent-green)]"
                  : index < currentStep || isComplete
                    ? "bg-[var(--color-accent-green)]/40"
                    : "bg-[var(--color-border-default)]"
              )}
            />
          );
        })}
      </div>

      {/* Progress Info */}
      <div className="mb-6 flex items-center justify-between text-sm text-[var(--color-text-muted)]">
        <span>
          Bereich {currentStep + 1} von {totalBlocks}
        </span>
        <span>
          {currentBlockAnswered}/{currentBlock.questions.length} beantwortet
        </span>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, ease: "easeInOut" as const }}
        >
          <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-8">
            {/* Block Header */}
            <div className="mb-6">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)]">
                {currentBlock.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {currentBlock.description}
              </p>
            </div>

            {/* Questions */}
            <div className="space-y-3">
              {currentBlock.questions.map((question) => (
                <label
                  key={question.id}
                  className={cn(
                    "flex items-start gap-4 rounded-lg border p-4 cursor-pointer transition-all duration-200",
                    answers[question.id]
                      ? "border-[var(--color-accent-green)] bg-[var(--color-accent-green)]/5"
                      : "border-[var(--color-border-default)] hover:border-[var(--color-text-muted)]/30"
                  )}
                >
                  <div className="pt-0.5 flex-shrink-0">
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                        answers[question.id]
                          ? "bg-[var(--color-accent-green)] border-[var(--color-accent-green)]"
                          : "border-[var(--color-border-default)]"
                      )}
                    >
                      {answers[question.id] && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      checked={!!answers[question.id]}
                      onChange={() => handleToggle(question.id)}
                      className="sr-only"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-[var(--color-text-primary)] leading-relaxed">
                      {question.text}
                    </span>
                    {question.hint && (
                      <span className="block mt-1 text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {question.hint}
                      </span>
                    )}
                  </div>

                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide flex-shrink-0",
                      severityColors[question.severity]
                    )}
                  >
                    {severityLabels[question.severity]}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={currentStep === 0}
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors",
            currentStep === 0
              ? "text-[var(--color-text-muted)]/40 cursor-not-allowed"
              : "border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-green)] hover:text-[var(--color-accent-green)]"
          )}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Zurück
        </button>

        <button
          onClick={goNext}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-accent-green)] text-white hover:bg-[var(--color-accent-green-dim)] transition-colors"
        >
          {currentStep < totalBlocks - 1 ? "Weiter" : "Ergebnis anzeigen"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
