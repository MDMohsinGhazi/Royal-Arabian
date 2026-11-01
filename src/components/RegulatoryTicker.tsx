export default function RegulatoryTicker() {
  return (
    <section className="w-full bg-surface-container-high border-b border-surface-container-highest px-4 sm:px-6 lg:px-8 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-on-surface truncate">
            <strong className="text-on-surface">ADMCC Approved</strong>
            <span className="text-secondary opacity-60 mx-1.5">•</span>
            <span>ISO 9001:2015</span>
            <span className="text-secondary opacity-60 mx-1.5">•</span>
            <span>ADNOC ICV Certified</span>
            <span className="hidden md:inline text-secondary opacity-60 mx-1.5">
              •
            </span>
            <span className="hidden md:inline text-secondary">
              SIRA &amp; DoH Aligned
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1 rounded-full shadow-xs border border-surface-container-high">
            <span className="material-symbols-outlined text-[15px] text-tertiary">
              verified
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-on-surface tracking-wide uppercase">
              Gov Accredited
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-secondary">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>NOC Live 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
