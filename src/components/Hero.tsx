"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [telemetryMode, setTelemetryMode] = useState<"sla" | "security" | "network">("sla");

  return (
    <section id="overview" className="w-full px-4 sm:px-6 lg:px-8 pt-8 pb-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headlines & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 self-start bg-secondary-container/80 text-on-secondary-fixed px-3 py-1.5 rounded-full border border-secondary-container shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">
              security
            </span>
            <span className="text-xs uppercase font-bold tracking-wider">
              Tier-1 UAE Systems Integrator
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.15]">
              Next-Gen <span className="text-primary">ICT Infrastructure</span> &amp; Smart Technology Solutions
            </h1>
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
              Delivering mission-critical fiber networking, ADMCC-compliant surveillance, and cloud ecosystems for enterprise entities and government authorities across Abu Dhabi &amp; Dubai.
            </p>
          </div>

          {/* Quick SLA highlights */}
          <div className="flex flex-wrap gap-2.5 pt-1 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">
                check_circle
              </span>
              <span>Sub-4hr RFQ Response</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface">
              <span className="material-symbols-outlined text-[16px] text-tertiary">
                task_alt
              </span>
              <span>100% Abu Dhabi Police Aligned</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface">
              <span className="material-symbols-outlined text-[16px] text-primary">
                verified
              </span>
              <span>ADNOC ICV Certified</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#quick-rfq"
              className="h-12 px-6 rounded-xl bg-primary-container text-on-primary font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-primary-container/90 active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">assignment_add</span>
              <span>Request Site Survey / RFQ</span>
            </a>

            <a
              href="tel:+97126212354"
              className="h-12 px-5 rounded-xl bg-inverse-surface text-inverse-on-surface font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-inverse-surface/90 active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Abu Dhabi HQ (+971 2 6212354)</span>
            </a>

            <a
              href="https://wa.me/971544443635"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-4 rounded-xl border border-surface-container-highest bg-surface-container-lowest text-on-surface hover:text-emerald-700 hover:border-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
              title="Quick WhatsApp Chat"
            >
              <span className="material-symbols-outlined text-[20px] text-emerald-600">
                chat
              </span>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Live Telemetry Visual Card */}
        <div className="lg:col-span-5">
          <div className="relative w-full rounded-2xl overflow-hidden bg-inverse-surface shadow-xl border border-surface-container-highest group">
            {/* Visual Hero Image */}
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgZnR5qBMIEuh7NY-CQfZDCDKUh9aNzSBP6UMRZ6mpscaomoUvXjYMb-Gb_ZObE9P9yFDgvNfF-H7qwJm2KdeITmHLNPR9TP7B_r2Y054Ehc9oiBPRvBpUfmvAo-T-mx1J7vdoXB-17KI10_Qd3_yuKBjDRuqx5U30ingqCnPQAyt4FDGjsgWAAIMC3e7BevAq38xCbemQEMnTWi8gemw9W1KHOFSAAAN0DlF79Q"
                alt="High-tech enterprise operations center in Abu Dhabi UAE, featuring engineers monitoring large multi-screen command wall"
                fill
                priority
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/50 to-transparent" />
            </div>

            {/* Top Interactive Mode Tabs */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1 z-10">
              <div className="flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-md p-1 rounded-lg text-[10px] font-bold shadow-xs">
                <button
                  type="button"
                  onClick={() => setTelemetryMode("sla")}
                  className={`px-2 py-0.5 rounded transition-all ${
                    telemetryMode === "sla"
                      ? "bg-primary text-on-primary shadow-xs"
                      : "text-secondary hover:text-on-surface"
                  }`}
                >
                  SLA Health
                </button>
                <button
                  type="button"
                  onClick={() => setTelemetryMode("security")}
                  className={`px-2 py-0.5 rounded transition-all ${
                    telemetryMode === "security"
                      ? "bg-primary text-on-primary shadow-xs"
                      : "text-secondary hover:text-on-surface"
                  }`}
                >
                  ADMCC CCTV
                </button>
                <button
                  type="button"
                  onClick={() => setTelemetryMode("network")}
                  className={`px-2 py-0.5 rounded transition-all ${
                    telemetryMode === "network"
                      ? "bg-primary text-on-primary shadow-xs"
                      : "text-secondary hover:text-on-surface"
                  }`}
                >
                  Fiber Grid
                </button>
              </div>

              <span className="flex items-center gap-1 text-[10px] font-bold bg-emerald-500/90 text-white px-2 py-0.5 rounded-full backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                LIVE NOC
              </span>
            </div>

            {/* Bottom Telemetry HUD */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2">
              {telemetryMode === "sla" && (
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-xl shadow-xs border border-white/10">
                    <div className="flex items-center gap-1.5 text-primary mb-0.5">
                      <span className="material-symbols-outlined text-[16px]">speed</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">UPTIME STATUS</span>
                    </div>
                    <div className="text-xs font-bold text-on-surface">99.99% Guaranteed SLA</div>
                  </div>
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-xl shadow-xs border border-white/10">
                    <div className="flex items-center gap-1.5 text-tertiary mb-0.5">
                      <span className="material-symbols-outlined text-[16px]">support_agent</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">RESPONSE TIME</span>
                    </div>
                    <div className="text-xs font-bold text-on-surface">&lt; 15 Mins Emergency</div>
                  </div>
                </div>
              )}

              {telemetryMode === "security" && (
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-xl shadow-xs border border-white/10">
                    <div className="flex items-center gap-1.5 text-tertiary mb-0.5">
                      <span className="material-symbols-outlined text-[16px]">videocam</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">COMPLIANCE</span>
                    </div>
                    <div className="text-xs font-bold text-on-surface">ADMCC Approved Live</div>
                  </div>
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-xl shadow-xs border border-white/10">
                    <div className="flex items-center gap-1.5 text-primary mb-0.5">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">AUDIT READY</span>
                    </div>
                    <div className="text-xs font-bold text-on-surface">Abu Dhabi Police Spec</div>
                  </div>
                </div>
              )}

              {telemetryMode === "network" && (
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-xl shadow-xs border border-white/10">
                    <div className="flex items-center gap-1.5 text-primary mb-0.5">
                      <span className="material-symbols-outlined text-[16px]">cable</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">FIBER SPECS</span>
                    </div>
                    <div className="text-xs font-bold text-on-surface">OTDR / Fluke Calibrated</div>
                  </div>
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md p-2.5 rounded-xl shadow-xs border border-white/10">
                    <div className="flex items-center gap-1.5 text-tertiary mb-0.5">
                      <span className="material-symbols-outlined text-[16px]">hub</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">CAPACITY</span>
                    </div>
                    <div className="text-xs font-bold text-on-surface">100G Multi-Core Ready</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
