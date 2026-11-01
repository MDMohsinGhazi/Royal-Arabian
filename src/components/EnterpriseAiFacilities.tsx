import { MonitorPlay, AlertTriangle, Leaf, LineChart } from "lucide-react";

export default function EnterpriseAiFacilities() {
  const features = [
    {
      title: "Facial & ANPR Recognition",
      icon: MonitorPlay,
      description:
        "Sub-millisecond license plate recognition and frictionless facial biometric access with SIRA-compliant encryption.",
      metric: "99.8% Accuracy Rating",
    },
    {
      title: "Perimeter Breach Detection",
      icon: AlertTriangle,
      description:
        "Virtual tripwires and heat-mapping analytics automatically identify intrusions without false-alarm environmental noise.",
      metric: "Zero False Positives",
    },
    {
      title: "Energy Consumption Telemetry",
      icon: Leaf,
      description:
        "Occupancy-based HVAC modulation and lighting controls deliver measurable carbon reduction and energy expense savings.",
      metric: "Up to 34% Power Reduction",
    },
    {
      title: "Predictive Hardware Health",
      icon: LineChart,
      description:
        "Automated sensor monitoring flags low-voltage cable degradation, power spikes, and NVR disk degradation before downtime.",
      metric: "Autonomous Diagnostics",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Next-Generation Computer Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            AI-Powered Smart Surveillance &amp; Facilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Integrating artificial intelligence into commercial video surveillance, perimeter detection, access telemetry, and thermal efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-primary uppercase tracking-wider">
                  {item.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
