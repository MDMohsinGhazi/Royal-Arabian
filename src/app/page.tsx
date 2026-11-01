"use client";

import { useState } from "react";
import EnterpriseHeader from "@/components/EnterpriseHeader";
import EnterpriseHero from "@/components/EnterpriseHero";
import EnterpriseTelemetryRibbon from "@/components/EnterpriseTelemetryRibbon";
import EnterpriseDivisions from "@/components/EnterpriseDivisions";
import EnterpriseArchitectureMatrix from "@/components/EnterpriseArchitectureMatrix";
import EnterpriseAiFacilities from "@/components/EnterpriseAiFacilities";
import EnterpriseClients from "@/components/EnterpriseClients";
import EnterpriseConsultationModule from "@/components/EnterpriseConsultationModule";
import EnterpriseFooter from "@/components/EnterpriseFooter";

export default function Home() {
  const [selectedDivision, setSelectedDivision] = useState<"ict" | "cyber" | "smart">("ict");

  const handleSelectDivision = (division: "smart" | "ict" | "cyber") => {
    setSelectedDivision(division);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans text-on-surface antialiased">
      {/* Top Fixed Header with Global Presence and Navigation */}
      <EnterpriseHeader />

      {/* Main Content */}
      <main className="flex-1 w-full pt-28 bg-surface">
        {/* Hero Section with Typography & Metrics Strip */}
        <EnterpriseHero />

        {/* Live Telemetry Status Ribbon */}
        <EnterpriseTelemetryRibbon />

        {/* Three Specialized Core Divisions */}
        <EnterpriseDivisions onSelectDivision={handleSelectDivision} />

        {/* Eliminate Vendor Fragmentation Architecture Matrix */}
        <EnterpriseArchitectureMatrix />

        {/* AI-Powered Smart Surveillance & Facilities */}
        <EnterpriseAiFacilities />

        {/* Valued Clients & Regional Footprint */}
        <EnterpriseClients />

        {/* Direct Contact & SLA Consultation Request Module */}
        <EnterpriseConsultationModule selectedDivision={selectedDivision} />
      </main>

      {/* Dark Executive Footer */}
      <EnterpriseFooter />
    </div>
  );
}
