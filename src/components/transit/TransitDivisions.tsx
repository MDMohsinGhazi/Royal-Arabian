"use client";

import { ArrowUpRight, Cpu, Network, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TransitDivisions() {
  const divisions = [
    {
      num: "01",
      name: "Smart Automation & Innovations",
      tagline: "INTELLIGENT IoT, BMS & AMBIENT SPACES",
      portalUrl: "https://royalarabiansmart.com/",
      portalName: "royalarabiansmart.com",
      status: "LIVE DEDICATED PORTAL",
      desc: "Delivering intelligent home and commercial building automation, smart lighting (DALI/KNX), unified audiovisual control, multi-zone HVAC optimization, and IoT telemetry across the UAE.",
      points: [
        "KNX, Crestron & Control4 Certified Automation",
        "Smart Hospitality & Luxury Villa Ecosystems",
        "AI Energy Optimization & Carbon Footprint Reduction",
        "Acoustic Audio-Visual Integration & Video Walls",
      ],
      icon: Cpu,
      cardAccent: "border-t-4 border-t-orange-500",
    },
    {
      num: "02",
      name: "ICT Solutions & Infrastructure",
      tagline: "TIER-III DATA CENTERS, BACKBONES & CLOUD",
      portalUrl: "https://ict-infra-92k28e8ep-mdmohsinghazis-projects.vercel.app/",
      portalName: "ict-infra.royal-arabian.com",
      status: "LIVE DEDICATED PORTAL",
      desc: "Architecting hyper-converged enterprise networks, high-density structured fiber cabling, server room containment, SD-WAN topologies, and 24/7/365 managed network operations centers.",
      points: [
        "Tier-III & Tier-IV Data Center Precision Cooling & Power",
        "Cat6A / OM4 / OM5 Fluke-Certified Fiber Infrastructure",
        "Cisco, Aruba & Fortinet Enterprise Routing & Switching",
        "Proactive 24/7 SLA Telemetry & Managed NOC Services",
      ],
      icon: Network,
      cardAccent: "border-t-4 border-t-blue-600",
    },
    {
      num: "03",
      name: "Cyber Security Solutions",
      tagline: "ZERO-TRUST DEFENSE, SOC & COMPLIANCE",
      portalUrl: "https://royalarabiansmart.com/cybersecurity",
      portalName: "royalarabiansmart.com/cybersecurity",
      status: "SPECIALIZED DEFENSE PORTAL",
      desc: "Protecting sovereign assets, banking institutions, and critical utility networks with AI-driven Extended Detection and Response (XDR), next-generation firewalls, penetration testing, and ISO 27001 compliance.",
      points: [
        "24/7 Continuous Threat Hunting & Managed SOC",
        "Next-Gen AI Firewalls, SASE & Zero-Trust Architecture",
        "Vulnerability Assessment & UAE Compliance Audits",
        "Incident Response SLA with Under-15-Min Containment",
      ],
      icon: ShieldCheck,
      cardAccent: "border-t-4 border-t-emerald-600",
    },
  ];

  return (
    <section id="divisions" className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-condensed text-xs uppercase tracking-widest text-orange-600 font-bold mb-2">
              SPECIALIZED CENTERS OF EXCELLENCE
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-extrabold uppercase text-zinc-950 tracking-tight">
              THREE CORE OPERATIONAL DIVISIONS
            </h2>
          </div>
          <p className="text-zinc-600 text-sm max-w-md font-normal leading-relaxed">
            Each specialized division operates with its own certified engineering practice, dedicated R&amp;D team, and specialized online portal.
          </p>
        </div>

        {/* 3 Core Divisions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((div) => {
            const Icon = div.icon;
            return (
              <div
                key={div.num}
                className={`group relative p-8 bg-white border border-zinc-200 ${div.cardAccent} hover:border-orange-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-6">
                    <span className="font-mono text-sm text-orange-600 font-bold">
                      DIVISION {div.num}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-zinc-100 border border-zinc-200 text-[10px] text-zinc-700 font-mono uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      {div.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-50 text-orange-600 border border-orange-200 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[11px] font-condensed uppercase tracking-wider text-orange-600 font-semibold">
                        {div.tagline}
                      </div>
                      <h3 className="font-condensed text-2xl font-bold uppercase text-zinc-950 tracking-tight">
                        {div.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {div.desc}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-zinc-100 mb-8">
                    {div.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom External Portal Button */}
                <div className="pt-4 border-t border-zinc-100">
                  <a
                    href={div.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full transit-btn flex items-center justify-center gap-2 group-hover:bg-orange-600"
                  >
                    <span>VISIT {div.name.toUpperCase()}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <div className="text-center font-mono text-[11px] text-zinc-500 mt-2 truncate">
                    {div.portalName}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
