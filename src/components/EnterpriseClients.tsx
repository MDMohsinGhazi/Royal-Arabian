export default function EnterpriseClients() {
  const clients = [
    { label: "FINTECH GCC", icon: "account_balance" },
    { label: "GOV ENTITY", icon: "policy" },
    { label: "TELECOM HQ", icon: "cell_tower" },
    { label: "HEALTHCARE", icon: "local_hospital" },
    { label: "AVIATION", icon: "flight_takeoff" },
    { label: "HOSPITALITY", icon: "hotel" },
  ];

  return (
    <section
      id="enterprise-clients"
      className="w-full py-16 lg:py-20 bg-white border-t border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Enterprise Provenance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Trusted by Governments &amp; Leading Enterprises
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-700">Global Presence:</span>
            <span className="text-slate-900 font-bold">UAE • India • China • United Kingdom</span>
          </div>
        </div>

        {/* Clients Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {clients.map((client) => (
            <div
              key={client.label}
              className="h-24 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-3 text-center hover:bg-white hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-[24px] mb-1 transition-colors">
                {client.icon}
              </span>
              <span className="text-xs sm:text-sm tracking-wider text-slate-700 uppercase font-bold group-hover:text-slate-900 transition-colors">
                {client.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
