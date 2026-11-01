export default function AccreditationsPartners() {
  const alliances = [
    {
      title: "ADMCC Abu Dhabi",
      role: "Approved Integrator",
      icon: "policy",
      category: "Government",
      iconColor: "text-primary",
      desc: "Licensed for surveillance design, municipal permits, and Abu Dhabi Police compliance sign-offs.",
    },
    {
      title: "ADNOC ICV",
      role: "Certified Supplier",
      icon: "local_gas_station",
      category: "Oil & Gas",
      iconColor: "text-primary",
      desc: "High In-Country Value score supplier authorized for ADNOC onshore and offshore concessions.",
    },
    {
      title: "Microsoft Cloud",
      role: "Solutions Partner",
      icon: "cloud_done",
      category: "Ecosystem",
      iconColor: "text-tertiary",
      desc: "Tier-1 Modern Work and Azure infrastructure deployment, migration, and licensing architect.",
    },
    {
      title: "Magnizon Green",
      role: "Authorized Systems",
      icon: "solar_power",
      category: "Power & ELV",
      iconColor: "text-secondary",
      desc: "Enterprise solar inverters, industrial UPS backup systems, and green power solutions.",
    },
    {
      title: "Milesight",
      role: "Enterprise CCTV",
      icon: "videocam",
      category: "Security",
      iconColor: "text-on-surface",
      desc: "AI video analytics, 4K panoramic cameras, radar sensors, and smart city traffic systems.",
    },
    {
      title: "DrayTek",
      role: "Security Routing",
      icon: "router",
      category: "Networking",
      iconColor: "text-tertiary",
      desc: "Multi-WAN failover routers, high-throughput SSL VPN gateways, and centralized VigorACS management.",
    },
  ];

  return (
    <section
      id="alliances"
      className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Official Endorsements
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-0.5">
            Accreditations &amp; Global Alliances
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            Engineered with Tier-1 vendor warranties and stringent local
            authority approvals.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-secondary">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>All Certifications Current 2026/2027</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {alliances.map((partner) => (
          <div
            key={partner.title}
            className="bg-surface-container-lowest p-4 rounded-2xl shadow-xs border border-surface-container-high hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0">
                <span
                  className={`material-symbols-outlined ${partner.iconColor} text-[22px]`}
                >
                  {partner.icon}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-bold text-on-surface truncate">
                  {partner.title}
                </div>
                <span className="text-[10px] sm:text-xs text-primary font-semibold block">
                  {partner.role}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-secondary mt-3 leading-snug line-clamp-2">
              {partner.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
