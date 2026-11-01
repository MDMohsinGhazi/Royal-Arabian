import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  ArrowUpDown,
  Cpu,
  Layers,
  Network,
} from "lucide-react";

export default function EnterpriseArchitectureMatrix() {
  return (
    <section
      id="architecture-matrix"
      className="w-full py-16 lg:py-24 bg-white border-t border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 w-fit text-xs text-primary font-bold">
              <span>CONSOLIDATED OPERATIONAL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Eliminate Vendor Fragmentation.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Managing disparate vendors for physical low-voltage, enterprise networking, and cybersecurity causes communication voids, security gaps, and operational overhead.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Royal Arabian consolidates your entire digital backbone into a unified engineering methodology. From copper risers to Azure cloud policies, you receive singular accountability, one contract, and guaranteed interoperability.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-7 h-7 text-primary shrink-0" />
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">
                    Single Responsible Entity
                  </strong>
                  <span className="text-xs text-slate-600">
                    No finger-pointing between cabling technicians and SOC analysts.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                <Zap className="w-7 h-7 text-primary shrink-0" />
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">
                    Rapid Incident Remediation
                  </strong>
                  <span className="text-xs text-slate-600">
                    Mean time to repair (MTTR) reduced by 64% with centralized telemetry.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Topology Stack */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">
                  System Topology
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Unified 3-Tier Enterprise Stack
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-orange-100 text-primary text-xs font-bold">
                Synchronous Control
              </span>
            </div>

            {/* Stack Visual */}
            <div className="flex flex-col gap-4 mt-6">
              {/* Layer 3: Cyber Security */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-tertiary shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-tertiary uppercase font-bold block">
                      Tier 3: Cyber Defense Layer
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      24/7 Managed SOC &amp; Zero-Trust EDR
                    </p>
                    <span className="text-xs text-slate-600">
                      Real-time deep packet threat neutralization and compliance audits.
                    </span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-sky-50 border border-sky-200 rounded text-sky-800 font-semibold self-start md:self-auto shrink-0">
                  Active Protection
                </span>
              </div>

              {/* Inter-layer Bridge Line */}
              <div className="flex justify-center -my-2 text-slate-400">
                <ArrowUpDown className="w-4 h-4" />
              </div>

              {/* Layer 2: Core ICT Infrastructure */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary shrink-0">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-primary uppercase font-bold block">
                      Tier 2: Core Networking &amp; Compute
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      100GbE Spine-Leaf Data Center Backbones
                    </p>
                    <span className="text-xs text-slate-600">
                      M365 hybrid migrations, high-density enterprise routing &amp; Wi-Fi 7.
                    </span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-orange-50 border border-orange-200 rounded text-orange-800 font-semibold self-start md:self-auto shrink-0">
                  99.999% Uptime
                </span>
              </div>

              {/* Inter-layer Bridge Line */}
              <div className="flex justify-center -my-2 text-slate-400">
                <ArrowUpDown className="w-4 h-4" />
              </div>

              {/* Layer 1: Smart Physical Infrastructure */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-700 uppercase font-bold block">
                      Tier 1: Physical Low-Voltage &amp; IoT
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      Structured Fiber Risers &amp; Smart Building Automation
                    </p>
                    <span className="text-xs text-slate-600">
                      SIRA-approved CCTV, integrated BMS sensors, and access turnstiles.
                    </span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-slate-100 border border-slate-200 rounded text-slate-800 font-semibold self-start md:self-auto shrink-0">
                  Direct Low-Voltage
                </span>
              </div>
            </div>

            {/* Bottom Summary Stat */}
            <div className="mt-6 pt-4 bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <span className="text-xs text-slate-600 font-medium">
                Enterprise SLA Scope: All 3 Tiers Combined
              </span>
              <span className="text-xs sm:text-sm text-primary font-bold">
                1 Contract • 1 NOC Portal • Zero Gaps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
