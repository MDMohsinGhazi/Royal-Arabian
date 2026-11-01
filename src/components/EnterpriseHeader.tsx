"use client";

import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Network,
  ArrowUpRight,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

interface EnterpriseHeaderProps {
  activeSection?: string;
}

export default function EnterpriseHeader({ activeSection }: EnterpriseHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview", isExternal: false },
    {
      label: "ICT Solutions",
      href: "https://ict-infra-92k28e8ep-mdmohsinghazis-projects.vercel.app/",
      isExternal: true,
      badge: "Portal",
    },
    {
      label: "Smart Automation",
      href: "https://royalarabiansmart.com/",
      isExternal: true,
      badge: "Portal",
    },
    {
      label: "Cyber Security",
      href: "https://royalarabiansmart.com/cybersecurity",
      isExternal: true,
      badge: "Portal",
    },
    { label: "Architecture", href: "#architecture-matrix", isExternal: false },
    { label: "Clients", href: "#enterprise-clients", isExternal: false },
    { label: "Contact Us", href: "#quick-inquiry", isExternal: false },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
        {/* Top Utility Bar */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+97126212354"
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">+971 2 6212354</span>
              </a>
              <a
                href="mailto:info@arabiancomputers.com"
                className="hidden md:flex items-center gap-1.5 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">info@arabiancomputers.com</span>
              </a>
              <span className="hidden xl:flex items-center gap-1.5 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">Abu Dhabi, UAE</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold hidden sm:inline">
                Global Presence:
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span>UAE</span>
                <span className="text-slate-300">|</span>
                <span>India</span>
                <span className="text-slate-300">|</span>
                <span>China</span>
                <span className="text-slate-300">|</span>
                <span>UK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white/95 backdrop-blur-xl">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle mobile menu"
                className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-100"
              >
                <Menu className="w-6 h-6" />
              </button>

              <a href="#overview" className="flex items-center gap-3 group">
                
                <div className="flex flex-col">
                  <span className="text-lg text-slate-900 tracking-tight leading-none font-bold group-hover:text-primary transition-colors">
                    Royal Arabian
                  </span>
                  <span className="text-[11px] text-primary tracking-wider uppercase mt-1 font-semibold">
                    Smart Technologies
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-1 ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.isExternal && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
          
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            aria-label="Close navigation overlay"
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity cursor-default w-full h-full border-none p-0"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85%] bg-white h-full shadow-2xl flex flex-col z-10 p-5 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase">Royal Arabian</div>
                  <div className="text-sm font-bold text-slate-900">Enterprise Navigation</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-1.5">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-orange-100 text-primary px-1.5 py-0.2 rounded font-bold">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  {link.isExternal ? (
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="#quick-inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-primary text-white text-center font-semibold text-xs shadow-sm hover:bg-amber-active"
              >
                Request SLA Proposal
              </a>
              <div className="text-xs text-slate-500 text-center">
                HQ Landline: +971 2 6212354
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
