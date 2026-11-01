export default function EnterpriseTelemetryRibbon() {
  return (
    <section className="w-full bg-slate-100 border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-4 text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" />
            <strong className="text-slate-900 font-semibold">SOC Command:</strong>
            <span>Operational</span>
          </span>
          <span className="hidden sm:inline-block text-slate-300">•</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <strong className="text-slate-900 font-semibold">NOC Telemetry:</strong>
            <span>All GCC Gateways Synchronized</span>
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-slate-600 font-medium">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-emerald-600">
              verified
            </span>
            <span>ISO 27001 Certified</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-emerald-600">
              verified
            </span>
            <span>SIRA Certified Security</span>
          </span>
          <span className="text-primary font-bold">Tier-IV Compliant</span>
        </div>
      </div>
    </section>
  );
}
