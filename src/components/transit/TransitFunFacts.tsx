"use client";

import { Users, Briefcase, HeartHandshake, Calendar, Globe2 } from "lucide-react";

export default function TransitFunFacts() {
  const funFacts = [
    {
      value: "150+",
      label: "FULL-TIME ENGINEERS & SPECIALISTS",
      desc: "ADMCC-certified engineers, BICSI-certified cabling installers & CCIE network architects.",
      icon: Users,
    },
    {
      value: "1,200+",
      label: "SUCCESSFUL PROJECTS DELIVERED",
      desc: "Turnkey government, banking, hospital, commercial, and critical infrastructure installations.",
      icon: Briefcase,
    },
    {
      value: "8,041+",
      label: "ACTIVE ENDPOINTS MANAGED",
      desc: "Surveillance streams, access control turnstiles, and IoT sensors under 24/7 SLA monitoring.",
      icon: HeartHandshake,
    },
    {
      value: "20+",
      label: "YEARS PROVEN EXCELLENCE",
      desc: "Two decades of unwavering technical reliability across Abu Dhabi and Dubai.",
      icon: Calendar,
    },
    {
      value: "50+",
      label: "GLOBAL BRAND PARTNERS",
      desc: "Direct tier-1 integration partnerships with world leaders in IT, ELV, and security.",
      icon: Globe2,
    },
  ];

  const certifications = [
    { name: "ADMCC Approved", tag: "Abu Dhabi Security" },
    { name: "SIRA Compliant", tag: "Dubai Security" },
    { name: "ISO 9001:2015", tag: "Quality Management" },
    { name: "ISO 27001", tag: "Information Security" },
    { name: "ADNOC ICV Certified", tag: "In-Country Value" },
    { name: "BICSI Certified", tag: "Telecommunications" },
  ];

  return (
    <section className="py-20 bg-[#050505] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-950/10 via-transparent to-orange-950/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-condensed text-xs uppercase tracking-widest text-orange-500 font-bold mb-2">
              QUANTIFIABLE IMPACT &amp; SCALE
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              PROVEN RESULTS. MEASURABLE EXCELLENCE.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-normal leading-relaxed">
            Our benchmarks reflect decades of operational dedication to engineering integrity, safety regulations, and client trust across the United Arab Emirates.
          </p>
        </div>

        {/* 5 Fun Facts Counter Grid in Transit SI Industrial Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {funFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label}
                className="p-6 bg-[#0c0c0e] border border-white/10 hover:border-orange-500/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 bg-orange-600/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60" />
                  </div>
                  <div className="font-condensed text-4xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-orange-500 transition-colors">
                    {fact.value}
                  </div>
                  <h3 className="font-condensed text-sm font-bold uppercase tracking-wider text-zinc-300 mt-2 mb-3">
                    {fact.label}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-3 border-t border-white/5">
                  {fact.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications Badge Strip */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="text-center font-condensed text-xs uppercase tracking-widest text-zinc-400 mb-6 font-semibold">
            OFFICIALLY ACCREDITED &amp; COMPLIANT WITH UAE REGULATORY BODIES
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-3 bg-zinc-950/80 border border-white/10 text-center hover:border-orange-500/40 transition-colors"
              >
                <div className="font-condensed text-sm font-bold text-white tracking-wide">
                  {cert.name}
                </div>
                <div className="text-[10px] text-orange-400 uppercase tracking-wider font-mono mt-0.5">
                  {cert.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
