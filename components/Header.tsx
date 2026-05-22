"use client";

import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream border-b border-brand-sage/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" aria-label="Ashley's Pet Care — home">
            <Logo size="md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-brand-charcoal/65 hover:text-brand-charcoal transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 -mr-1 text-brand-charcoal"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sage/20 px-4 py-2 pb-5">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base text-brand-charcoal py-3 border-b border-brand-sage/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
