"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  onOpenEmergency: () => void;
  activeSection: string;
}

export default function Header({ onOpenEmergency, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Systems", href: "#systems" },
    { label: "Verticals", href: "#verticals" },
    { label: "Alliances", href: "#alliances" },
    { label: "RFQ Hub", href: "#quick-rfq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe ${
          scrolled
            ? "bg-surface-container-lowest/95 backdrop-blur-xl shadow-md border-b border-surface-container-high"
            : "bg-surface-container-lowest/90 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Left: Hamburger & Brand Identity */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="w-10 h-10 -ml-1 rounded-lg flex md:hidden items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            <a href="#overview" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-sm text-on-primary">
                <span className="material-symbols-outlined text-[20px]">router</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-primary">
                    Royal Arabian
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.2 bg-primary-fixed text-on-primary-fixed text-[9px] font-semibold rounded">
                    UAE
                  </span>
                </div>
                <span className="text-base font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors truncate">
                  Smart Technologies
                </span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold shadow-xs"
                      : "text-secondary hover:text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Emergency & Call-To-Action */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onOpenEmergency}
              title="24/7 Field Tech & Emergency Support"
              className="h-10 px-3 rounded-full bg-error-container text-on-error-container flex items-center gap-1.5 hover:bg-error hover:text-on-error transition-all shadow-xs"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] animate-pulse">
                emergency
              </span>
              <span className="text-xs font-semibold hidden sm:inline">24/7 NOC</span>
            </button>

            <a
              href="#quick-rfq"
              className="hidden lg:inline-flex items-center gap-1.5 h-10 px-4 rounded-lg bg-primary-container text-on-primary font-semibold text-xs tracking-wide shadow-xs hover:opacity-95 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">assignment_add</span>
              <span>Fast RFQ</span>
            </a>

            <a
              href="tel:+97126212354"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary-fixed hover:text-primary transition-colors"
              title="Call Central Desk"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            aria-label="Close navigation overlay"
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs transition-opacity cursor-default w-full h-full border-none p-0"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85%] bg-surface h-full shadow-2xl flex flex-col z-10 p-5 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[18px]">domain</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase">Royal Arabian</div>
                  <div className="text-sm font-bold text-on-surface">Main Navigation</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            <div className="py-4 flex flex-col gap-1.5 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    chevron_right
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-surface-container-high flex flex-col gap-2.5">
              <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1 text-xs">
                <span className="font-semibold text-on-surface">Abu Dhabi Headquarters</span>
                <span className="text-secondary">+971 2 6212354</span>
                <span className="text-primary font-medium">ADMCC Approved Vendor</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full py-2.5 rounded-xl bg-error-container text-on-error-container font-semibold text-xs flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">emergency</span>
                <span>Emergency Support Dispatch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
