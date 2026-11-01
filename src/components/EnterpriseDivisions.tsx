"use client";

import {
  Lightbulb,
  Network,
  Shield,
  Building,
  Radio,
  Tv,
  Video,
  Zap,
  Brain,
  Server,
  Workflow,
  Wifi,
  Headphones,
  Cloud,
  LifeBuoy,
  ShieldAlert,
  Laptop,
  Radar,
  Fingerprint,
  Lock,
  GraduationCap,
  ArrowUpRight,
  FileText,
  ExternalLink,
} from "lucide-react";

interface EnterpriseDivisionsProps {
  onSelectDivision?: (division: "smart" | "ict" | "cyber") => void;
}

export default function EnterpriseDivisions({ onSelectDivision }: EnterpriseDivisionsProps) {
  const divisions = [
    {
      id: "smart" as const,
      number: "Division 01",
      title: "Smart Solutions & Innovations",
      subtitle:
        "Connecting, automating, and transforming physical built environments into intelligent, self-optimizing ecosystems.",
      portalUrl: "https://royalarabiansmart.com/",
      portalDomain: "royalarabiansmart.com",
      portalButtonText: "Visit Smart Automation Portal",
      accentColor: "text-primary",
      icon: Lightbulb,
      iconBg: "bg-orange-50 border-orange-100 text-primary",
      hoverBorder: "hover:border-orange-300",
      capabilities: [
        { label: "Smart Building Solutions & BMS", icon: Building },
        { label: "IoT Infrastructure & Smart Automation", icon: Radio },
        { label: "High-End Audio Visual (AV) Systems", icon: Tv },
        { label: "CCTV Surveillance & Biometric Access", icon: Video },
        { label: "Intelligent Energy Management Systems", icon: Zap },
        { label: "Facility AI & Predictive Analytics", icon: Brain },
      ],
    },
    {
      id: "ict" as const,
      number: "Division 02",
      title: "ICT Solutions & Infrastructure",
      subtitle:
        "End-to-end ICT infrastructure, hyperconverged server stacks, and enterprise managed cloud operations.",
      portalUrl: "https://ict-infra-92k28e8ep-mdmohsinghazis-projects.vercel.app/",
      portalDomain: "ict-infra.vercel.app",
      portalButtonText: "Visit ICT Infrastructure Portal",
      accentColor: "text-primary",
      icon: Network,
      iconBg: "bg-orange-50 border-orange-100 text-primary",
      hoverBorder: "hover:border-orange-300",
      capabilities: [
        { label: "Tier-3/4 Data Center & Cloud Architecture", icon: Server },
        { label: "Enterprise Core Switching & Routing", icon: Workflow },
        { label: "High-Density Wi-Fi 7 & Mobility", icon: Wifi },
        { label: "Collaboration & Unified Communications", icon: Headphones },
        { label: "Microsoft 365 & Azure Cloud Migration", icon: Cloud },
        { label: "24/7 Managed IT Services & NOC Runbooks", icon: LifeBuoy },
      ],
    },
    {
      id: "cyber" as const,
      number: "Division 03",
      title: "Cyber Security Solutions",
      subtitle:
        "Zero-trust perimeters, 24/7 autonomous SOC threat containment, and rigorous cryptographic governance.",
      portalUrl: "https://royalarabiansmart.com/cybersecurity",
      portalDomain: "royalarabiansmart.com/cybersecurity",
      portalButtonText: "Visit Cyber Defense Portal",
      accentColor: "text-tertiary",
      icon: Shield,
      iconBg: "bg-sky-50 border-sky-100 text-tertiary",
      hoverBorder: "hover:border-sky-300",
      capabilities: [
        { label: "Next-Gen Firewall & Network Defense", icon: ShieldAlert },
        { label: "Endpoint Protection (EDR & XDR)", icon: Laptop },
        { label: "Managed Detection & Response (MDR)", icon: Radar },
        { label: "Identity & Access Management (IAM / PAM)", icon: Fingerprint },
        { label: "Data Loss Prevention (DLP) & Privacy", icon: Lock },
        { label: "Security Awareness & Simulated Phishing", icon: GraduationCap },
      ],
    },
  ];

  const handleSelectRfq = (divId: "smart" | "ict" | "cyber") => {
    if (onSelectDivision) {
      onSelectDivision(divId);
    }
    const el = document.getElementById("quick-inquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50" id="divisions-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-primary font-bold mb-1">
              Integrated Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Three Core Divisions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
              Each specialized division maintains its dedicated engineering portal and specialized infrastructure stack, consolidated under a unified SLA contract.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-slate-600 text-xs bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-xs">
            <span>Specialized Division Portals Active</span>
            <ExternalLink className="w-3.5 h-3.5 text-primary" />
          </div>
        </div>

        {/* 3 Divisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {divisions.map((div) => {
            const MainIcon = div.icon;
            return (
              <div
                key={div.id}
                className={`group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:shadow-xl ${div.hoverBorder}`}
              >
                <div className="flex flex-col">
                  {/* Header row with Icon and External Domain Badge */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-xs ${div.iconBg}`}
                    >
                      <MainIcon className="w-8 h-8" />
                    </div>

                    <a
                      href={div.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition-colors"
                      title={`Open ${div.portalDomain}`}
                    >
                      <span className="truncate max-w-[140px]">{div.portalDomain}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <span className={`text-xs uppercase tracking-wider font-bold ${div.accentColor}`}>
                    {div.number}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 group-hover:text-primary transition-colors">
                    {div.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{div.subtitle}</p>

                  <div className="h-px w-full bg-slate-200 my-4" />

                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 block">
                    Domain Capabilities:
                  </span>
                  <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700">
                    {div.capabilities.map((cap) => {
                      const CapIcon = cap.icon;
                      return (
                        <li key={cap.label} className="flex items-center gap-2.5">
                          <CapIcon className={`w-4 h-4 shrink-0 ${div.accentColor}`} />
                          <span className="font-medium">{cap.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <a
                    href={div.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white hover:bg-primary text-xs sm:text-sm font-semibold transition-all shadow-xs group/btn"
                  >
                    <span>{div.portalButtonText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleSelectRfq(div.id)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    <span>Request Proposal for this Division</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
