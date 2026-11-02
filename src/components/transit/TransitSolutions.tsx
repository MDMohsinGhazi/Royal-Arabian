"use client";

import { useState } from "react";
import {
  Cctv,
  KeyRound,
  Flame,
  Tv,
  Presentation,
  Cable,
  Volume2,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function TransitSolutions() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const solutions = [
    {
      id: "cctv",
      category: "security",
      title: "CCTV & Video Surveillance",
      badge: "ADMCC & SIRA CERTIFIED",
      desc: "Turnkey IP video surveillance engineered for strict UAE regulatory compliance. Featuring AI facial recognition, automated license plate recognition (ANPR), perimeter breach detection, and high-retention SAN storage architectures.",
      specs: ["Ultra HD 4K / Multi-Sensor PTZ", "SIRA / ADMCC Approved NVR/SAN", "Edge AI Deep Learning Analytics"],
      icon: Cctv,
    },
    {
      id: "access",
      category: "security",
      title: "Access Control & Biometrics",
      badge: "BIOMETRIC & RFID",
      desc: "Enterprise access control systems including contactless biometric face terminals, palm-vein scanners, speed gates, optical turnstiles, and integrated visitor management software.",
      specs: ["Sub-0.2s Facial Recognition", "Anti-Tailgating Speed Turnstiles", "Multi-Site Cloud / On-Prem Controller"],
      icon: KeyRound,
    },
    {
      id: "fire",
      category: "life-safety",
      title: "Fire Alarm & Detection Systems",
      badge: "CIVIL DEFENCE APPROVED",
      desc: "Comprehensive life safety systems engineered in accordance with UAE Civil Defence codes and NFPA standards. Includes addressable smoke detection, aspirating VESDA smoke systems, and FM200/Novec clean agent fire suppression for server rooms.",
      specs: ["Addressable Intelligent Panels", "Aspirating VESDA Smoke Detection", "Clean Agent Server Room Suppression"],
      icon: Flame,
    },
    {
      id: "videowall",
      category: "av",
      title: "Control Room Video Walls",
      badge: "COMMAND & CONTROL",
      desc: "Mission-critical visual display solutions for security operations centers (SOC), emergency dispatch, and traffic management facilities. Ultra-narrow bezel LCD displays and seamless fine-pitch MicroLED video walls.",
      specs: ["24/7 Continuous Mission-Critical Duty", "Multi-Source IP Video Wall Processors", "Sub-Millimeter Direct View MicroLED"],
      icon: Tv,
    },
    {
      id: "signage",
      category: "av",
      title: "Commercial Digital Signage",
      badge: "DYNAMIC CONTENT & CMS",
      desc: "Commercial-grade digital displays, outdoor LED billboards, interactive touchscreen kiosks, and centralized cloud CMS for corporate lobbies, retail malls, and transportation hubs across UAE.",
      specs: ["High-Brightness 2,500+ Nits Outdoor", "Ultra-Slim Indoor Kiosks & Totems", "Centralized Cloud Content Scheduling"],
      icon: Presentation,
    },
    {
      id: "cabling",
      category: "infrastructure",
      title: "Structured Cabling & Fiber Optics",
      badge: "BICSI STANDARDS",
      desc: "Certified copper and optical fiber cabling infrastructure. Cat6A, Cat7 shielded cabling, and OM4/OM5/OS2 backbone fiber optic networks tested and verified using Fluke DSX-8000 analyzers with up to 25-year manufacturer warranties.",
      specs: ["Cat6A 10G Shielded Infrastructure", "MPO/MTP Ultra-Low-Loss Fiber Splicing", "25-Year System Performance Warranty"],
      icon: Cable,
    },
    {
      id: "pava",
      category: "av",
      title: "Public Address & Voice Alarm (PA/VA)",
      badge: "EN54 ACOUSTIC STANDARDS",
      desc: "Integrated emergency voice evacuation and multi-zone ambient acoustic systems. EN54-16 and EN54-24 certified for emergency evacuation messaging, background music distribution, and zoned paging.",
      specs: ["EN54 Certified Life Safety Amplifiers", "Acoustically Tuned Zoned Paging", "Automated Ambient Noise Compensation"],
      icon: Volume2,
    },
    {
      id: "bms",
      category: "infrastructure",
      title: "Smart BMS & Automation",
      badge: "ENERGY EFFICIENCY & IOT",
      desc: "Intelligent Building Management Systems unifying HVAC chillers, VAV units, variable frequency drives, smart architectural lighting (DALI), and energy sub-metering onto BACnet/IP open platforms.",
      specs: ["BACnet/IP & Modbus Open Protocols", "Real-Time Energy Analytics Dashboard", "Predictive Predictive Maintenance AI"],
      icon: Building2,
    },
  ];

  const filtered =
    activeCategory === "all"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <section id="solutions" className="py-24 bg-[#050505] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-condensed text-xs uppercase tracking-widest text-orange-500 font-bold mb-2">
              ENGINEERED ELV &amp; ICT PORTFOLIO
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              ADVANCED SOLUTIONS SHOWCASE
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-normal leading-relaxed">
            Every solution is precision engineered to satisfy UAE government mandates and international reliability benchmarks.
          </p>
        </div>

        {/* Filter Category Tabs in Transit Industrial Style */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-4">
          {[
            { id: "all", label: "ALL SOLUTIONS" },
            { id: "security", label: "SECURITY & SURVEILLANCE" },
            { id: "infrastructure", label: "ICT & CABLING" },
            { id: "av", label: "AUDIO-VISUAL & DISPLAYS" },
            { id: "life-safety", label: "LIFE SAFETY" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 font-condensed text-xs uppercase font-bold tracking-wider transition-all duration-200 border ${
                activeCategory === tab.id
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                  : "bg-zinc-950 text-zinc-400 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="group relative p-6 bg-[#0c0c0e] border border-white/10 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-orange-950/60 text-orange-400 border border-orange-500/20">
                      {sol.badge}
                    </span>
                    <div className="p-2.5 bg-zinc-900 text-zinc-400 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-condensed text-xl font-bold uppercase text-white tracking-wide mb-3 group-hover:text-orange-500 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  {/* Spec Bullet Points */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {sol.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-condensed text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Technical Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
