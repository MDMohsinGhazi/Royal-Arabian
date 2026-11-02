"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

export default function TransitFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What ELV & ICT services does Royal Arabian provide in Abu Dhabi and Dubai?",
      a: "Royal Arabian delivers comprehensive turnkey system integration across the entire project lifecycle. Our scope includes ADMCC/SIRA CCTV surveillance, biometric access control, turnstiles, public address and voice alarms (PA/VA), Tier-III data center infrastructure, structured fiber optic cabling, smart building automation (BMS), audio-visual video walls, and managed cybersecurity SOC services.",
    },
    {
      q: "How does Royal Arabian assist clients with ADMCC and SIRA regulatory approvals?",
      a: "As an officially accredited and approved security system integrator in the UAE, we manage the entire statutory approval process end-to-end. We prepare architectural CAD schematics, submit camera layout designs according to ADMCC (Abu Dhabi) and SIRA (Dubai) guidelines, conduct pre-inspection testing, and liaise with statutory inspectors until the official completion certificate is issued.",
    },
    {
      q: "Can you integrate multi-vendor systems without proprietary vendor lock-in?",
      a: "Yes. Our core engineering principle is vendor-neutral, open-standard integration. We utilize industry-standard protocols including BACnet/IP, Modbus, ONVIF Profile S/G/T, MQTT, and RESTful APIs to interconnect disparate hardware brands (e.g. Cisco, Honeywell, Crestron, Schneider Electric) into a unified single-pane-of-glass management console.",
    },
    {
      q: "What are your standard SLA response times and maintenance terms?",
      a: "We offer tiered Service Level Agreements (Bronze, Silver, Gold, and 24/7 Mission-Critical). For Gold and Mission-Critical tiers, we guarantee on-site engineer dispatch within 2 hours in Abu Dhabi and Dubai, supported by locally stocked hot-swap hardware spares, quarterly preventive maintenance routines, and round-the-clock remote monitoring.",
    },
    {
      q: "What warranties are provided on structured cabling and hardware installations?",
      a: "All active hardware carries full manufacturer warranties backed by local UAE service depots. Structured cabling installations utilizing certified solutions (such as CommScope SYSTIMAX, Belden, or Schneider) receive up to a 25-year manufacturer performance warranty after passing Fluke DSX-8000 OTDR and copper certification testing.",
    },
    {
      q: "How do I engage Royal Arabian for a project or RFP tender?",
      a: "You can submit your project requirements, BOQ, or architectural tender drawings through our consultation form on this website or call our engineering team at +971 2 6212354. We typically assign a dedicated senior solutions architect within 24 business hours to conduct a preliminary site audit or provide a formal proposal.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Support Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-condensed text-xs uppercase tracking-widest text-orange-600 font-bold mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="font-condensed text-3xl sm:text-5xl font-extrabold uppercase text-zinc-950 tracking-tight mb-6">
                CLEAR ANSWERS FOR ENTERPRISE DECISION MAKERS
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                Find answers to common questions regarding our UAE regulatory compliance, project delivery frameworks, multi-vendor support, and warranty coverage.
              </p>
            </div>

            <div className="p-6 bg-zinc-950 text-white border border-zinc-800 shadow-xl">
              <div className="font-condensed text-lg font-bold text-white uppercase mb-2">
                HAVE A SPECIFIC TENDER OR RFP?
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Our solutions engineering team can review your specifications and provide a preliminary feasibility report within 24 hours.
              </p>
              <a href="#contact" className="transit-btn w-full flex items-center justify-center gap-2">
                <span>TALK TO AN ENGINEER</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-zinc-50 border border-zinc-200 hover:border-orange-500 transition-colors duration-200 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 group bg-zinc-50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-condensed text-lg sm:text-xl font-bold uppercase text-zinc-950 tracking-wide group-hover:text-orange-600 transition-colors">
                      {faq.q}
                    </span>
                    <span className="p-2 bg-white border border-zinc-200 text-zinc-700 group-hover:text-orange-600 shrink-0 transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-3 text-zinc-600 text-sm leading-relaxed bg-white border-t border-zinc-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
