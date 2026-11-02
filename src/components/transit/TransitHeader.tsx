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
    { label: "About", href: "#about" },
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
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
      {/* Top Utility Bar (lg+) */}
      <div className="hidden lg:block bg-[#000000] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between font-label-sm text-xs text-zinc-400">
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
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Abu Dhabi &amp; Dubai, UAE</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-white/5 font-label-sm text-[11px] text-zinc-300 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              ADMCC Certified • SIRA Compliant • ISO 9001:2015
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar (Desktop & Mobile) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-sm bg-orange-600 flex items-center justify-center text-white font-bold font-condensed text-xl shadow-md group-hover:scale-105 transition-transform">
            RA
          </div>
          <div className="flex flex-col">
            <span className="font-condensed text-2xl text-white tracking-wider font-bold leading-tight group-hover:text-orange-500 transition-colors">
              Royal Arabian
            </span>
            <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-semibold leading-none">
              Smart Technologies LLC • UAE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="font-condensed text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-200 inline-flex items-center gap-1"
            >
              <span>{link.label}</span>
              {link.isExternal && (
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+97126212354"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Direct Phone Line"
          >
            <Phone className="w-4 h-4 text-orange-500" />
          </a>

          <button
            type="button"
            onClick={handleConsultationClick}
            className="hidden sm:inline-flex transit-btn text-xs tracking-wider uppercase py-2.5 px-5"
          >
            Talk to an Expert
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="font-condensed text-base uppercase tracking-wider font-bold text-zinc-200 hover:text-white py-2 border-b border-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isExternal ? (
                  <ArrowUpRight className="w-4 h-4 text-orange-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                )}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleConsultationClick();
                }}
                className="w-full transit-btn text-center justify-center py-3 text-sm"
              >
                Talk to an Expert
              </button>
              <a
                href="tel:+97126212354"
                className="w-full transit-btn-outline text-center justify-center py-2.5 text-xs flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>Call +971 2 6212354</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
