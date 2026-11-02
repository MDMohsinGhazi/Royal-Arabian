"use client";

import { ShieldCheck, Handshake } from "lucide-react";

export default function TransitMarquee() {
  const partners = [
    { name: "CISCO", role: "Gold Partner" },
    { name: "HONEYWELL", role: "Elite Security" },
    { name: "ARUBA NETWORKS", role: "Platinum Network" },
    { name: "FORTINET", role: "Advanced SOC" },
    { name: "CRESTRON", role: "Commercial AV" },
    { name: "SCHNEIDER ELECTRIC", role: "EcoStruxure BMS" },
    { name: "HIKVISION", role: "Certified Diamond" },
    { name: "MICROSOFT", role: "Cloud Solutions" },
    { name: "DRAYTEK", role: "Networking Partner" },
    { name: "BELDEN", role: "Structured Cabling" },
    { name: "COMMSCOPE", role: "SYSTIMAX Certified" },
    { name: "MILESTONE SYSTEMS", role: "VMS Premier" },
  ];

  const clients = [
    { name: "ADNOC Group", sector: "Oil & Energy" },
    { name: "Emirates Group", sector: "Aviation" },
    { name: "Rotana Hotels & Resorts", sector: "Hospitality" },
    { name: "Abu Dhabi Commercial Bank", sector: "Banking" },
    { name: "Department of Finance", sector: "Government" },
    { name: "Abu Dhabi Global Market", sector: "Financial Freezone" },
    { name: "Masdar City", sector: "Clean Tech" },
    { name: "Aldar Properties", sector: "Real Estate" },
    { name: "Dubai Silicon Oasis", sector: "Technology Freezone" },
    { name: "Aster DM Healthcare", sector: "Healthcare" },
  ];

  return (
    <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-condensed text-xs uppercase tracking-widest text-orange-600 font-bold mb-2 flex items-center gap-2">
              <Handshake className="w-4 h-4" />
              <span>GLOBAL ALLIANCES &amp; CLIENT TRUST</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-4xl font-extrabold uppercase text-zinc-950 tracking-tight">
              BACKED BY INDUSTRY LEADERS, TRUSTED BY UAE ICONS
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>100% GENUINE OEM HARDWARE &amp; LOCAL WARRANTIES</span>
          </div>
        </div>
      </div>

      {/* Row 1: Global Technology Partners Marquee */}
      <div className="mb-8">
        <div className="px-6 max-w-7xl mx-auto mb-3">
          <span className="font-condensed text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            GLOBAL TECHNOLOGY PARTNERS
          </span>
        </div>
        <div className="relative w-full overflow-hidden py-3 bg-zinc-50 border-y border-zinc-200">
          <div className="animate-marquee flex items-center gap-6">
            {[...partners, ...partners].map((p, idx) => (
              <div
                key={`partner-${p.name}-${idx}`}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-zinc-200 hover:border-orange-500 hover:shadow-sm transition-colors shrink-0"
              >
                <span className="font-condensed text-lg font-bold text-zinc-950 tracking-wider">
                  {p.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="font-mono text-[10px] text-zinc-500 uppercase">
                  {p.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Valued Enterprise Clients Marquee */}
      <div>
        <div className="px-6 max-w-7xl mx-auto mb-3">
          <span className="font-condensed text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            VALUED CLIENT DEPLOYMENTS ACROSS UAE
          </span>
        </div>
        <div className="relative w-full overflow-hidden py-3 bg-zinc-50 border-y border-zinc-200">
          <div
            className="animate-marquee flex items-center gap-6"
            style={{ animationDirection: "reverse", animationDuration: "40s" }}
          >
            {[...clients, ...clients].map((c, idx) => (
              <div
                key={`client-${c.name}-${idx}`}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-zinc-200 hover:border-orange-500 hover:shadow-sm transition-colors shrink-0"
              >
                <span className="font-condensed text-lg font-bold text-zinc-950 tracking-wider">
                  {c.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="font-mono text-[10px] text-zinc-500 uppercase">
                  {c.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
