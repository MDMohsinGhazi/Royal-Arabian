"use client";

import TransitHeader from "@/components/transit/TransitHeader";
import TransitHeroSlider from "@/components/transit/TransitHeroSlider";
import TransitAbout from "@/components/transit/TransitAbout";
import TransitFunFacts from "@/components/transit/TransitFunFacts";
import TransitServices from "@/components/transit/TransitServices";
import TransitSolutions from "@/components/transit/TransitSolutions";
import TransitDivisions from "@/components/transit/TransitDivisions";
import TransitMarquee from "@/components/transit/TransitMarquee";
import TransitFaq from "@/components/transit/TransitFaq";
import TransitContact from "@/components/transit/TransitContact";
import TransitFooter from "@/components/transit/TransitFooter";

export default function Home() {
  const handleOpenConsultation = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] font-sans text-zinc-100 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Fixed Header with Transit utility strip & navigation */}
      <TransitHeader onOpenConsultation={handleOpenConsultation} />

      {/* Main Content */}
      <main className="flex-1 w-full bg-[#050505]">
        {/* Hero Slider Section */}
        <TransitHeroSlider />

        {/* Agency / About Us Section ("WE ARE ROYAL ARABIAN") */}
        <TransitAbout />

        {/* Quantifiable Impact & Fun Facts Metric Counters */}
        <TransitFunFacts />

        {/* End-to-End Lifecycle Services Grid */}
        <TransitServices />

        {/* Core Solutions Showcase (ELV, ICT, AV, Life Safety) */}
        <TransitSolutions />

        {/* Three Core Divisions Portals Gateway */}
        <TransitDivisions />

        {/* Global Partners & UAE Clients Infinite Marquee */}
        <TransitMarquee />

        {/* Technical FAQ Accordion */}
        <TransitFaq />

        {/* "Talk to an Expert" Consultation Form & UAE Offices */}
        <TransitContact />
      </main>

      {/* Dark Executive Footer */}
      <TransitFooter />
    </div>
  );
}
