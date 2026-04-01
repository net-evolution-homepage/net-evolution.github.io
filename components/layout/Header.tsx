"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/data/navigation";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 font-mono text-lg font-bold tracking-tight text-[#0f172a]">
              Net
              <span className="text-[#00875a]">-</span>
              Evolution
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#475569] transition-colors hover:text-[#00875a]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="rounded-md bg-[#00875a] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Erstgespräch buchen
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-[#475569] hover:text-[#0f172a]"
              aria-label="Menü öffnen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
