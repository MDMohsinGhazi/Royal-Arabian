"use client";

import { CheckCircle2, Award, Shield, Cpu, ArrowRight } from "lucide-react";

export default function TransitAbout() {
  const highlights = [
    {
      title: "Turnkey System Integration",
      desc: "Complete end-to-end lifecycle delivery from preliminary consulting and architecture engineering to rapid rollout, commissioning, and continuous SLA support.",
      icon: Cpu,
    },
    {
      title: "ADMCC & SIRA Certified",
      desc: "Officially certified by the Abu Dhabi Monitoring and Control Centre (ADMCC) and Dubai Security Industry Regulatory Agency (SIRA) for public and private safety installations.",
      icon: Shield,
    },
    {
      title: "Vendor-Agnostic Tier-1 Alliances",
      desc: "Certified partnerships with global market leaders including Cisco, Honeywell, Aruba, Fortinet, Crestron, Schneider Electric, and Hikvision for resilient deployments.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-4 font-condensed tracking-widest text-xs uppercase font-bold text-orange-600">
              <span className="w-6 h-[2px] bg-orange-600" />
              <span>WE ARE ROYAL ARABIAN</span>
            </div>

            <h2 className="font-condensed text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 leading-tight mb-6">
              TRANSFORMING UAE ENTERPRISE SPACES THROUGH INTELLIGENT TECHNOLOGY INTEGRATION
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Headquartered in Abu Dhabi with regional operations in Dubai, <strong className="text-zinc-950">Royal Arabian Smart Technologies LLC</strong> is a premier system integrator and engineering firm. We engineer resilient ELV systems, enterprise ICT infrastructure, smart building automation, and high-assurance cybersecurity architectures.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
              We empower government ministries, financial headquarters, luxury hospitality developments, healthcare institutes, and critical industrial infrastructure to operate securely, optimize energy footprint, and scale without vendor lock-in.
            </p>

            {/* Highlights List */}
            <div className="space-y-4 mb-10">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 hover:border-orange-500 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="p-2.5 bg-orange-100 text-orange-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-condensed text-lg font-bold text-zinc-950 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#divisions" className="transit-btn group">
                <span>OUR 3 CORE DIVISIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="transit-btn-outline">
                <span>CONSULT WITH AN ARCHITECT</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Accreditations & Experience Card */}
          <div className="lg:col-span-5">
            <div className="relative p-8 bg-zinc-950 text-white border border-zinc-800 shadow-2xl">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-500 pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-condensed text-xs uppercase tracking-widest text-orange-500 font-bold">
                  EXPERIENCE &amp; ACCREDITATIONS
                </span>
                <span className="text-xs text-zinc-400 font-mono">EST. UAE</span>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <div className="font-condensed text-6xl font-black text-white tracking-tight leading-none">
                    20<span className="text-orange-500">+</span>
                  </div>
                  <div className="font-condensed text-sm font-bold uppercase tracking-wider text-zinc-300 mt-1">
                    Years of Engineering Leadership in UAE
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">
                    Established track record delivering multi-million AED turnkey projects across Abu Dhabi, Dubai, Sharjah, and the Northern Emirates.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-zinc-900 border border-white/5">
                    <div className="font-condensed text-xl font-bold text-orange-400">ADMCC</div>
                    <div className="text-[11px] text-zinc-400 uppercase mt-0.5">Approved Security Integrator</div>
                  </div>
                  <div className="p-3 bg-zinc-900 border border-white/5">
                    <div className="font-condensed text-xl font-bold text-orange-400">SIRA</div>
                    <div className="text-[11px] text-zinc-400 uppercase mt-0.5">Dubai Licensed Specialist</div>
                  </div>
                  <div className="p-3 bg-zinc-900 border border-white/5">
                    <div className="font-condensed text-xl font-bold text-white">ISO 9001:2015</div>
                    <div className="text-[11px] text-zinc-400 uppercase mt-0.5">Quality Management</div>
                  </div>
                  <div className="p-3 bg-zinc-900 border border-white/5">
                    <div className="font-condensed text-xl font-bold text-white">ISO 27001</div>
                    <div className="text-[11px] text-zinc-400 uppercase mt-0.5">InfoSec Certified</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>In-Country Value (ICV) Certified Partner</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium mt-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>24/7/365 Rapid On-Site SLA Response Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
