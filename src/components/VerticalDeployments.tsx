"use client";

import Image from "next/image";

interface VerticalDeploymentsProps {
  onSelectVerticalForRfq?: (verticalName: string) => void;
}

export default function VerticalDeployments({
  onSelectVerticalForRfq,
}: VerticalDeploymentsProps) {
  const verticals = [
    {
      id: "oil-gas",
      title: "Oil & Gas / Offshore",
      badge: "ADNOC ICV",
      badgeBg: "bg-amber-500/90 text-white",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBW89TyqHCz1vNtV3XF2fWtMkJybThSUJClnFniKAkjNQX3vrEyE6o5DOCXLsRUVa9O8flRXQVPu_v1UggrIjDEwUFqxUvblf5BRn1EtL2MTWfoPfBCb9PNnkxOkB9vfg0wa4fd-oyx6lNTikp0VOEzWzioqs0KEjpMSe8bojRy7tGJg1a59QtjyG_czwskTwsxrUpjKNLiEvqAzTWdVojDxdwj6zBHxYlHnMx8uA",
      description:
        "Explosion-proof ATEX CCTV, ruggedized long-range microwave telemetry, and isolated offshore control networks.",
      tag: "ICV Certified Vendor",
      icon: "verified",
      keyTech: [
        "ATEX Zone 1/2 Cameras",
        "Offshore Microwave Links",
        "Redundant SCADA Networks",
      ],
    },
    {
      id: "hospitality",
      title: "Luxury Hotels & Resorts",
      badge: "Hospitality",
      badgeBg: "bg-blue-600/90 text-white",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmqYYJGh2_Z_t6l7WKIqmsML2RvjUYLUoO7hH1fFxvVjAuFBnkBCjcJGTFNhOgs6Vc0fUI5u0trmHwKXYh4y2fA_51E1T4Ivzofhjmyo0PDAZ61123iMzrDowH8BZPtANQ3JHTuivbKISnJqrd3jqwTqFUsP9fowikESvbIIku6Gu2OaFxxTQ7ZbwSrIj9uzaL_6ifXh8x7g4xagxvat4ft8TaP0nMHCqgAarNVw",
      description:
        "High-density guest room Wi-Fi, IPTV distribution, ballroom audio-visual matrices, and contactless card access.",
      tag: "Zero-Roaming Latency",
      icon: "hotel",
      keyTech: [
        "High-Density Wi-Fi 6E",
        "IPTV & Digital Signage",
        "Mobile Keycard Integration",
      ],
    },
    {
      id: "healthcare",
      title: "Hospitals & Medical Centers",
      badge: "Healthcare",
      badgeBg: "bg-emerald-600/90 text-white",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDakNp8_vrJnQ_7Qp_WSfpBijXhjqyTW_c8ZZT_uoZfC1QFo0xfBgHcQ6juW0RNDKd7v-Wgtcwv57v3Wx53L-b74eZ1BxcuyWJQ1mTAO1DlEKzRaK6ah1KpyCvGsXz4Tw9TBAUejN6bwDuMgPQICJs_1YCc_-fejXViUnzR3neb3vsbYQybU5KuaTSEmJK7TB_7M-i168qacrOlUm9sRSwRFv8FJdp2JKfGCh7t0A",
      description:
        "Queue management (Q-Systems), IP nurse-call systems, clean-room certified structured cabling, and patient telemetry.",
      tag: "DoH Standards Compliant",
      icon: "local_hospital",
      keyTech: [
        "IP Nurse Call Integration",
        "Clean-Room Fiber Cabling",
        "Department of Health Compliant",
      ],
    },
    {
      id: "corporate",
      title: "Government & Enterprise HQ",
      badge: "Commercial",
      badgeBg: "bg-slate-800/90 text-white",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC07kqQOC5fSqPuOEDPm4rRNX0oYeycrM0uOJqpM0MLQRq4bJmDpx_Q0ZHR5FGSFanZuQg5DIjVJcVOif_4VD4bbbjqEMqMkZqdTpQd-zHt-fW3WUSjLZi2e5LBv3z7zwKNJ-Z8naSoRZ6De-wdqCXNM2fAayg5hnrcuw9P3UYQGMytGZG5tZBlDCM-ZNOF5wkr8bpY_UvYakS6_zGvqwdwv8bPb5aE7OeMyUArpA",
      description:
        "Tier-3 data center room buildouts, precision cooling, fire suppression integration, and biometric access controls.",
      tag: "High-Security Perimeters",
      icon: "domain",
      keyTech: [
        "Tier-3 DC Containment",
        "FM200 Fire Suppression",
        "Facial Biometric Turnstiles",
      ],
    },
  ];

  const handleSelect = (vertical: string) => {
    if (onSelectVerticalForRfq) {
      onSelectVerticalForRfq(vertical);
    } else {
      const el = document.getElementById("quick-rfq");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="verticals"
      className="w-full py-10 bg-surface-container border-y border-surface-container-highest"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Sector Specialization
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-0.5">
              UAE Vertical Deployments
            </h2>
            <p className="text-xs sm:text-sm text-secondary mt-1">
              Tailored systems engineered in full alignment with local
              municipal, police, and sector authority regulations.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-secondary font-medium">
            <span className="material-symbols-outlined text-[16px] text-primary">
              verified
            </span>
            <span>Abu Dhabi &amp; Dubai Projects</span>
          </div>
        </div>

        {/* Scrollable Track on Mobile, Grid on Tablet/Desktop */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2 no-scrollbar scroll-smooth">
          {verticals.map((v) => (
            <div
              key={v.id}
              className="flex-shrink-0 w-72 sm:w-auto bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs border border-surface-container-highest hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span
                    className={`absolute top-2.5 left-2.5 backdrop-blur-md font-bold text-[10px] px-2.5 py-0.5 rounded-full ${v.badgeBg} shadow-xs`}
                  >
                    {v.badge}
                  </span>
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {v.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {v.keyTech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-surface-container px-2 py-0.5 rounded text-secondary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 border-t border-surface-container-high flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-primary text-xs font-bold">
                  <span className="material-symbols-outlined text-[16px]">
                    {v.icon}
                  </span>
                  <span>{v.tag}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelect(v.title)}
                  title="Inquire about this sector"
                  className="w-7 h-7 rounded-lg bg-surface-container hover:bg-primary hover:text-white flex items-center justify-center text-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
