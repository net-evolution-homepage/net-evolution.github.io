"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavigation } from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white border-l border-[#e2e8f0] shadow-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-end p-4">
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#475569] hover:text-[#0f172a]"
                aria-label="Menü schließen"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-2 px-6">
              {mainNavigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-md px-4 py-3 text-lg text-[#475569] transition-colors hover:bg-[#f1f5f9] hover:text-[#00875a]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto p-6">
              <Link
                href="/kontakt"
                onClick={onClose}
                className="block w-full rounded-md bg-[#00875a] px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Erstgespräch buchen
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
