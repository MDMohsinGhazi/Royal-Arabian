export default function EnterpriseHero() {
  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 py-16 lg:py-24 border-b border-slate-200"
    >
      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-orange-500/10 via-amber-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-50 border border-orange-200 shadow-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold">
            An Ideal Destination for Total IT Solutions
          </span>
        </div>

        {/* Main Headline with Typographic Drama */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-[64px] md:leading-[1.12] text-slate-900 tracking-tight max-w-5xl font-extrabold">
          TOTAL IT SOLUTIONS.
          <span className="block text-2xl sm:text-3xl md:text-[34px] md:leading-[1.25] text-slate-600 font-semibold mt-3">
            Empowering Businesses with Smart Infrastructure, Robust Security &amp; Intelligent Automation
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-4 leading-relaxed font-normal">
          Unified engineering architecture across physical low-voltage risers, mission-critical enterprise cloud networks, and autonomous zero-trust cyber defense — consolidated under a single accountable SLA.
        </p>

        {/* Tactical CTA Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#divisions-showcase"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg bg-primary text-white hover:bg-amber-active hover:shadow-md transition-all duration-200 shadow-sm"
          >
            <span>Explore Enterprise Divisions</span>
            <span className="material-symbols-outlined text-[18px]">south</span>
          </a>

          <a
            href="#architecture-matrix"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:text-primary transition-all duration-200 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">tune</span>
            <span>Unified Architecture Matrix</span>
          </a>
        </div>

        {/* Hero Metrics Strip */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-6">
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900">
                99.999%
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold mt-1">
              Mission-Critical Uptime SLA
            </span>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 text-center">
              Engineered Tier-3 &amp; 4 continuous failover resilience
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900">
                15
              </span>
              <span className="text-2xl font-bold text-tertiary">ms</span>
            </div>
            <span className="text-xs uppercase tracking-wider text-tertiary font-bold mt-1">
              Failover Response Rate
            </span>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 text-center">
              Sub-second zero packet-loss hardware switching
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900">
                4,500+
              </span>
            </div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold mt-1">
              Facilities Deployed
            </span>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 text-center">
              Commercial towers, sovereign datacenters &amp; campuses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
