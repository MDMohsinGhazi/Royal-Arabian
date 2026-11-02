"use client";

import {
  FileText,
  DraftingCompass,
  Layers,
  Wrench,
  Clock,
  Shuffle,
  Binary,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

export default function TransitServices() {
  const services = [
    {
      num: "01",
      title: "Consultancy & Audits",
      desc: "Feasibility evaluations, technology roadmaps, regulatory gap analysis for ADMCC/SIRA compliance, and lifecycle budgeting.",
      icon: FileText,
      linkText: "Request Audit",
    },
    {
      num: "02",
      title: "Design & Engineering",
      desc: "CAD and BIM-ready schematics, low-voltage wiring topologies, acoustic modeling, and Tier-III datacenter cooling/power plans.",
      icon: DraftingCompass,
      linkText: "Engineering Specs",
    },
    {
      num: "03",
      title: "Project Management",
      desc: "PMP-certified project directors, milestone schedules, HSE protocol adherence, and direct liaison with UAE statutory authorities.",
      icon: Layers,
      linkText: "Our Methodology",
    },
    {
      num: "04",
      title: "Implementation & Build",
      desc: "Precision hardware mounting, optical fiber fusion splicing, core switch configuration, and rigorous system commissioning.",
      icon: Wrench,
      linkText: "Deployment Details",
    },
    {
      num: "05",
      title: "24/7 SLA Maintenance",
      desc: "Guaranteed 2-hour emergency on-site response in Abu Dhabi & Dubai, preventive maintenance visits, and hot-swap spare pooling.",
      icon: Clock,
      linkText: "SLA Tiers",
    },
    {
      num: "06",
      title: "Multi-Vendor Integration",
      desc: "Seamless consolidation of disparate ELV, HVAC, CCTV, and access control vendors into unified open-standard BACnet/Modbus/IP controllers.",
      icon: Shuffle,
      linkText: "Interoperability",
    },
    {
      num: "07",
      title: "Software & BMS Control",
      desc: "Custom SCADA supervisory dashboards, energy management algorithms, and integrated visitor management software.",
      icon: Binary,
      linkText: "Automation Scope",
    },
    {
      num: "08",
      title: "AI Video & Telemetry",
      desc: "Facial recognition, license plate recognition (ANPR), perimeter breach detection, and deep learning analytics at the network edge.",
      icon: BrainCircuit,
      linkText: "AI Capabilities",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white text-zinc-900 border-b border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-condensed text-xs uppercase tracking-widest text-orange-600 font-bold mb-2">
              LIFECYCLE ENGINEERING SERVICES
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-extrabold uppercase text-zinc-950 tracking-tight">
              END-TO-END SYSTEM INTEGRATION SERVICES
            </h2>
          </div>
          <a
            href="#contact"
            className="transit-btn-outline group shrink-0"
          >
            <span>DISCUSS YOUR PROJECT REQUIREMENTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 8-Card Grid in Transit SI Industrial Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="group relative p-6 bg-zinc-50 border border-zinc-200 hover:border-orange-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200">
                    <span className="font-mono text-xs text-orange-600 font-bold">
                      {service.num}
                    </span>
                    <div className="p-2.5 bg-white border border-zinc-200 text-zinc-700 group-hover:text-white group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-condensed text-xl font-bold uppercase text-zinc-950 tracking-wide mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-900 transition-colors">
                  <span className="font-condensed font-bold tracking-wider uppercase">
                    {service.linkText}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
