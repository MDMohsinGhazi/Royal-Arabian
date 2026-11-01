"use client";

import { useState } from "react";

export interface SolutionItem {
  id: string;
  category: "security" | "network" | "cloud" | "all";
  title: string;
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  summary: string;
  actionText: string;
  deliverables: string[];
  standards: string;
  brands: string;
  sla: string;
}

const solutions: SolutionItem[] = [
  {
    id: "cctv",
    category: "security",
    title: "Visual Surveillance & CCTV",
    badge: "ADMCC CERTIFIED",
    badgeColor: "bg-primary-fixed-dim",
    badgeTextColor: "text-on-primary-fixed",
    icon: "videocam",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    summary:
      "Supply, configuration, ANPR vehicle tracking, thermal inspection, and end-to-end Abu Dhabi Police compliance integration.",
    actionText: "Camera feed audit, PABX & VMS integration",
    deliverables: [
      "ADMCC compliant 4K & thermal IP cameras",
      "ANPR license plate recognition matrices",
      "90-day RAID6 tamper-proof NVR storage vaults",
      "Centralized Video Management System (VMS)",
      "Official Abu Dhabi Police inspection sign-off",
    ],
    standards: "ADMCC Version 3.2, SIRA, ISO 27001",
    brands: "Milesight, Axis Communications, Hanwha Vision, Hikvision",
    sla: "2-hour on-site dispatch, 24/7 proactive camera feed monitoring",
  },
  {
    id: "wifi",
    category: "network",
    title: "Enterprise Wi-Fi & WLAN",
    badge: "HIGH-DENSITY",
    badgeColor: "bg-secondary-fixed",
    badgeTextColor: "text-on-secondary-fixed",
    icon: "wifi",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    summary:
      "Public and private cloud-managed wireless, heatmapped coverage for retail malls, corporate offices, campuses, and hotels.",
    actionText: "RF mapping, guest captive portals & QoS",
    deliverables: [
      "Predictive & active Ekahau RF site heatmaps",
      "Wi-Fi 6 / 6E / Wi-Fi 7 multi-gigabit access points",
      "Custom branded captive portals with SMS OTP",
      "Dynamic RF channel balancing & roaming handoff",
      "VLAN segregation for corporate, IoT & guest networks",
    ],
    standards: "IEEE 802.11ax/be, WPA3-Enterprise, TDRA Aligned",
    brands: "Aruba HPE, Cisco Meraki, DrayTek, Ruckus",
    sla: "99.99% wireless availability with auto-failover controller backup",
  },
  {
    id: "cabling",
    category: "network",
    title: "Fiber & Structured Cabling",
    badge: "OTDR / OLTS",
    badgeColor: "bg-tertiary-fixed",
    badgeTextColor: "text-on-tertiary-fixed",
    icon: "cable",
    iconBg: "bg-surface-container-high",
    iconColor: "text-on-surface",
    summary:
      "Cat6A, Cat7, single & multi-mode optical fiber splicing, patch distribution frames, and lab-certified calibration reports.",
    actionText: "Fluke testing and lifetime harness warranty",
    deliverables: [
      "Single-mode (OS2) and Multi-mode (OM3/OM4/OM5) fiber pulls",
      "Fusion splicing with core-alignment & precision OTDR tests",
      "Cat6A shielded twisted-pair (STP/FTP) data channels",
      "Data center server rack elevations & wire cable trays",
      "Comprehensive Fluke Versiv calibration certificate per node",
    ],
    standards: "TIA/EIA-568-D, ISO/IEC 11801, BICSI Certified Installation",
    brands: "Schneider Electric, CommScope / Systimax, Panduit, Nexans",
    sla: "25-year manufacturer system performance and warranty harness",
  },
  {
    id: "cloud",
    category: "cloud",
    title: "Cloud & Microsoft 365 Suite",
    badge: "PARTNER TIER",
    badgeColor: "bg-secondary-container",
    badgeTextColor: "text-on-secondary-fixed",
    icon: "cloud_sync",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    summary:
      "Azure virtual infrastructure migration, hybrid tenancy backup, identity access management, and Exchange email threat protection.",
    actionText: "Migration blueprints & disaster recovery",
    deliverables: [
      "Seamless on-premise Exchange to Microsoft 365 migration",
      "Azure Virtual Machines, VPN gateways & cloud fileshares",
      "Entra ID (Azure AD) conditional access & multi-factor setup",
      "Immutable cloud backup for ransomware & disaster recovery",
      "End-user license optimization and cost governance",
    ],
    standards: "Microsoft Certified Solutions Partner, SOC 2 Type II",
    brands: "Microsoft Azure, Microsoft 365, Veeam Cloud, Acronis",
    sla: "15-minute response for critical tenant access issues",
  },
  {
    id: "automation",
    category: "cloud",
    title: "Smart Automation & ELV",
    badge: "BMS & IOT",
    badgeColor: "bg-primary-fixed-dim",
    badgeTextColor: "text-on-primary-fixed",
    icon: "home_iot_device",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    summary:
      "Integrated building management, lighting scene presets, HVAC controls, biometric turnstiles, and boardroom AV automation.",
    actionText: "Centralized control & energy telemetry",
    deliverables: [
      "BACnet / Modbus protocol smart building integration",
      "Smart boardroom video conferencing matrices & motorized screens",
      "Biometric facial recognition turnstiles & access gates",
      "Automated energy consumption reduction scheduling",
      "Unified touch-panel control for HVAC, lights & sound",
    ],
    standards: "KNX Association Certified, BACnet Testing Laboratories (BTL)",
    brands: "Crestron, Magnizon, Honeywell, Control4, Hikvision Intercom",
    sla: "Regular preventive quarterly ELV maintenance & calibration visits",
  },
  {
    id: "cybersecurity",
    category: "security",
    title: "Cybersecurity & Perimeter Defense",
    badge: "24/7 SOC",
    badgeColor: "bg-error-container",
    badgeTextColor: "text-on-error-container",
    icon: "shield_lock",
    iconBg: "bg-error-container",
    iconColor: "text-on-error-container",
    summary:
      "Next-gen firewalling, multi-factor credential authentication, ransomware mitigation, and continuous threat telemetry.",
    actionText: "Endpoint detection & network quarantine",
    deliverables: [
      "Next-Gen Firewall (NGFW) deployment with deep packet inspection",
      "Intrusion Prevention Systems (IPS) & geo-IP filtering",
      "Zero Trust Network Access (ZTNA) and secure remote VPNs",
      "Endpoint Detection & Response (EDR) with automated quarantine",
      "UAE National Electronic Security Authority (NESA) gap analysis",
    ],
    standards: "UAE NESA, ISO 27001, CIS Critical Security Controls",
    brands: "Fortinet, Sophos, DrayTek, Palo Alto Networks",
    sla: "Real-time threat isolation within 5 minutes of security alert",
  },
];

interface CoreSolutionsProps {
  onSelectSolutionForRfq?: (solutionId: string) => void;
}

export default function CoreSolutions({
  onSelectSolutionForRfq,
}: CoreSolutionsProps) {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "security" | "network" | "cloud"
  >("all");
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(
    null,
  );

  const filteredSolutions =
    activeFilter === "all"
      ? solutions
      : solutions.filter((s) => s.category === activeFilter);

  const handleSelectRfq = (solId: string) => {
    setSelectedSolution(null);
    if (onSelectSolutionForRfq) {
      onSelectSolutionForRfq(solId);
    } else {
      const formEl = document.getElementById("quick-rfq");
      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="systems"
      className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Turnkey Engineering
            </span>
            <span className="text-[10px] font-semibold text-secondary bg-surface-container px-2 py-0.5 rounded-full">
              6 Core Disciplines
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-1">
            Enterprise Infrastructure Solutions
          </h2>
          <p className="text-sm text-secondary max-w-xl mt-1">
            End-to-end design, supply, testing, and regulatory certification
            tailored for commercial and government environments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-container rounded-xl overflow-x-auto no-scrollbar">
          {[
            { id: "all", label: "All Systems" },
            { id: "security", label: "Security & CCTV" },
            { id: "network", label: "Cabling & Wi-Fi" },
            { id: "cloud", label: "Cloud & ELV" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === tab.id
                  ? "bg-surface-container-lowest text-primary shadow-xs"
                  : "text-secondary hover:text-on-surface"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSolutions.map((sol) => (
          <div
            key={sol.id}
            className="bg-surface-container-lowest rounded-2xl p-5 shadow-xs border border-surface-container hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className={`w-12 h-12 rounded-xl ${sol.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <span
                    className={`material-symbols-outlined ${sol.iconColor} text-[26px]`}
                  >
                    {sol.icon}
                  </span>
                </div>
                <span
                  className={`text-[10px] ${sol.badgeColor} ${sol.badgeTextColor} px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider`}
                >
                  {sol.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                {sol.title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
                {sol.summary}
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-surface-container-high flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedSolution(sol)}
                className="text-xs font-bold text-primary flex items-center gap-1 group-hover:underline text-left"
              >
                <span>{sol.actionText}</span>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectRfq(sol.id)}
                title="Request RFQ for this system"
                className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_task
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Spec Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close modal overlay"
            className="fixed inset-0 bg-on-surface/50 backdrop-blur-xs transition-opacity cursor-default w-full h-full border-none p-0"
            onClick={() => setSelectedSolution(null)}
          />
          <div className="relative bg-surface rounded-2xl max-w-lg w-full p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-surface-container-highest">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-surface-container-high">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl ${selectedSolution.iconBg} flex items-center justify-center`}
                >
                  <span
                    className={`material-symbols-outlined ${selectedSolution.iconColor} text-[24px]`}
                  >
                    {selectedSolution.icon}
                  </span>
                </div>
                <div>
                  <span
                    className={`text-[9px] ${selectedSolution.badgeColor} ${selectedSolution.badgeTextColor} px-2 py-0.2 rounded font-bold uppercase`}
                  >
                    {selectedSolution.badge}
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mt-0.5">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-on-surface block mb-1.5 uppercase text-[11px] text-primary">
                  Engineering Scope &amp; Deliverables
                </span>
                <ul className="space-y-1.5">
                  {selectedSolution.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-secondary"
                    >
                      <span className="material-symbols-outlined text-primary text-[16px] flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="bg-surface-container-low p-2.5 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-secondary block">
                    Standards &amp; Codes
                  </span>
                  <span className="font-semibold text-on-surface text-xs mt-0.5 block">
                    {selectedSolution.standards}
                  </span>
                </div>
                <div className="bg-surface-container-low p-2.5 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-secondary block">
                    Supported Hardware
                  </span>
                  <span className="font-semibold text-on-surface text-xs mt-0.5 block">
                    {selectedSolution.brands}
                  </span>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-3 rounded-xl">
                <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  <span>Guaranteed SLA Commitment</span>
                </div>
                <p className="text-xs text-secondary mt-1">
                  {selectedSolution.sla}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-container-high flex gap-2">
              <button
                type="button"
                onClick={() => handleSelectRfq(selectedSolution.id)}
                className="flex-1 h-11 rounded-xl bg-primary-container text-on-primary font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:opacity-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  assignment_add
                </span>
                <span>Include in Site Survey / RFQ</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="px-4 h-11 rounded-xl bg-surface-container text-on-surface font-semibold text-xs hover:bg-surface-container-high"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
