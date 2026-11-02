"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Cpu, Network } from "lucide-react";

interface SlideData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  accentIcon: typeof ShieldCheck;
  bgGradient: string;
}

const slides: SlideData[] = [
  {
    id: "slide-1",
    badge: "SYSTEM INTEGRATION & DIGITAL INFRASTRUCTURE",
    title: "SECURE, SIMPLIFY, SCALE WITHOUT COMPLEXITY",
    subtitle:
      "Delivering turnkey ELV, ICT infrastructure, enterprise cybersecurity, and intelligent building automation for mission-critical operations across the UAE.",
    stats: [
      { value: "20+", label: "Years in UAE" },
      { value: "1,200+", label: "Delivered Projects" },
      { value: "99.99%", label: "Uptime Reliability" },
    ],
    accentIcon: Network,
    bgGradient: "from-zinc-950 via-[#0a0a0c] to-zinc-900",
  },
  {
    id: "slide-2",
    badge: "GOVERNMENT ACCREDITED SECURITY & DEFENSE",
    title: "INTEGRATE, SIMPLIFY, PROTECT INDUSTRIAL OPERATIONS",
    subtitle:
      "ADMCC-approved surveillance architecture, SIRA-compliant biometrics, and automated perimeter defense for government, financial, and industrial sectors.",
    stats: [
      { value: "ADMCC", label: "Abu Dhabi Certified" },
      { value: "SIRA", label: "Dubai Compliant" },
      { value: "24/7/365", label: "Rapid Response SLA" },
    ],
    accentIcon: ShieldCheck,
    bgGradient: "from-zinc-950 via-[#0d0905] to-zinc-900",
  },
  {
    id: "slide-3",
    badge: "NEXT-GENERATION AI & HYPER-CONVERGENCE",
    title: "INNOVATION, INTELLIGENCE & COST-EFFECTIVE INTEGRATION",
    subtitle:
      "High-speed fiber optic backbones, Tier-III modular datacenters, audio-visual command centers, and smart energy BMS engineered to reduce operational overhead.",
    stats: [
      { value: "Tier III", label: "Data Center Architecture" },
      { value: "100 Gbps", label: "Backbone Speeds" },
      { value: "50+", label: "Global Brand Alliances" },
    ],
    accentIcon: Cpu,
    bgGradient: "from-zinc-950 via-[#080a0e] to-zinc-900",
  },
];

export default function TransitHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];
  const IconComponent = active.accentIcon;

  return (
    <section
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050505] text-white pt-28 lg:pt-36 pb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Highlights"
    >
      {/* Background High-Tech Grid & Lighting */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${active.bgGradient} transition-all duration-1000 ease-in-out`}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 85, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 85, 0, 0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-between py-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-950/40 border border-orange-500/30 text-orange-400 font-condensed tracking-widest text-xs font-bold uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <IconComponent className="w-4 h-4 text-orange-400" />
            <span>{active.badge}</span>
          </div>

          {/* Heading with Transit Condensed Style */}
          <h1 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6">
            {active.title}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-10">
            {active.subtitle}
          </p>

          {/* Dual CTAs in Transit Industrial Rectangular Form */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="#contact" className="transit-btn group">
              <span>TALK TO AN EXPERT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#solutions" className="transit-btn-outline-white group">
              <span>OUR SOLUTIONS</span>
            </a>
          </div>

          {/* Key Metrics Strip for Current Slide */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-white/10 max-w-2xl">
            {active.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-condensed text-2xl sm:text-3xl font-bold text-orange-500 tracking-wide">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wider font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Controls & Progress Navigation */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
          {/* Bullet Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-10 bg-orange-500"
                    : "w-3 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 border border-white/20 bg-black/40 hover:bg-orange-500 hover:border-orange-500 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 border border-white/20 bg-black/40 hover:bg-orange-500 hover:border-orange-500 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
