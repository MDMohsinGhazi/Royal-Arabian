"use client";

import {
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

interface TransitHeaderProps {
  onOpenConsultation?: () => void;
}

export default function TransitHeader({ onOpenConsultation }: TransitHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    {
      label: "ICT Infra Portal",
      href: "https://ict-infra-92k28e8ep-mdmohsinghazis-projects.vercel.app/",
      isExternal: true,
    },
    {
      label: "Smart Automation Portal",
      href: "https://royalarabiansmart.com/",
      isExternal: true,
    },
    {
      label: "Cybersecurity",
      href: "https://royalarabiansmart.com/cybersecurity",
      isExternal: true,
    },
    { label: "Contact Us", href: "#contact" },
  ];

  const handleConsultationClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm">
      {/* Top Utility Bar (lg+) in Dark Charcoal for High-End Contrast */}
      <div className="hidden lg:block bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between font-condensed text-xs tracking-wider text-zinc-300">
          <div className="flex items-center gap-6">
            <a
              href="tel:+97126212354"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>+971 2 6212354</span>
            </a>
            <a
              href="mailto:info@arabiancomputers.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>info@arabiancomputers.com</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Abu Dhabi HQ &amp; Dubai Regional Hub, UAE</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 bg-zinc-900 text-[11px] text-zinc-300 border border-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              ADMCC Certified • SIRA Compliant • ISO 9001:2015
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar (White Theme) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-orange-600 flex items-center justify-center text-white font-bold font-condensed text-xl shadow-sm group-hover:scale-105 transition-transform">
            RA
          </div>
          <div className="flex flex-col">
            <span className="font-condensed text-2xl text-zinc-950 tracking-wider font-extrabold leading-tight group-hover:text-orange-600 transition-colors">
              Royal Arabian
            </span>
            <span className="text-[10px] text-zinc-500 tracking-widest uppercase font-semibold leading-none">
              Smart Technologies LLC • UAE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-condensed uppercase tracking-wider text-sm font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-0.5 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className="relative font-condensed uppercase tracking-wider text-sm font-bold text-zinc-700 hover:text-orange-600 transition-colors group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-200" />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={handleConsultationClick}
            className="transit-btn"
          >
            <span>TALK TO AN EXPERT</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors border border-zinc-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (White Theme) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 shadow-xl px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`font-condensed uppercase tracking-wider text-base font-bold py-2 border-b border-zinc-100 flex items-center justify-between ${
                  link.isExternal ? "text-orange-600" : "text-zinc-800 hover:text-orange-600"
                }`}
              >
                <span>{link.label}</span>
                {link.isExternal ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleConsultationClick();
              }}
              className="w-full transit-btn"
            >
              <span>TALK TO AN EXPERT</span>
            </button>

            <a
              href="tel:+97126212354"
              className="w-full transit-btn-outline"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>+971 2 6212354</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
