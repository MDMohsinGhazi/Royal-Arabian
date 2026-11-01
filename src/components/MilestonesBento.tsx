export default function MilestonesBento() {
  const stats = [
    {
      id: "clients",
      value: "8,041+",
      label: "Enterprise Clients",
      desc: "Gov entities, hospitality & commercial firms across UAE",
      icon: "corporate_fare",
      bgColor: "bg-primary-fixed",
      iconColor: "text-primary",
      borderColor: "border-primary-fixed-dim",
    },
    {
      id: "projects",
      value: "100+",
      label: "Mega Projects Live",
      desc: "Turnkey ELV, data centers, CCTV & campuses delivered",
      icon: "layers",
      bgColor: "bg-tertiary-fixed",
      iconColor: "text-tertiary",
      borderColor: "border-tertiary-fixed-dim",
    },
    {
      id: "history",
      value: "20+",
      label: "Years in UAE",
      desc: "Pioneering systems integration continuously since 2007",
      icon: "history",
      bgColor: "bg-secondary-fixed",
      iconColor: "text-secondary",
      borderColor: "border-secondary-fixed-dim",
    },
    {
      id: "certs",
      value: "10+",
      label: "Regulatory Certs",
      desc: "ADMCC, ADNOC ICV, SIRA, ISO 9001:2015 & partner tiers",
      icon: "workspace_premium",
      bgColor: "bg-surface-container-high",
      iconColor: "text-tertiary",
      borderColor: "border-surface-container-highest",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-8 px-4 sm:px-6 lg:px-8 border-y border-surface-container">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Enterprise Reliability
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mt-0.5">
              Proven UAE &amp; GCC Track Record
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-secondary max-w-md">
            Trusted by Abu Dhabi government departments, healthcare
            institutions, offshore operators, and retail giants.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-xs border ${stat.borderColor} hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                >
                  <span
                    className={`material-symbols-outlined ${stat.iconColor} text-[22px]`}
                  >
                    {stat.icon}
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight block">
                  {stat.value}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-on-surface mt-1">
                  {stat.label}
                </h3>
                <p className="text-[11px] sm:text-xs text-secondary mt-1 leading-snug">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
