"use client";

interface BottomNavProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function BottomNav({
  activeSection,
  setActiveSection,
}: BottomNavProps) {
  const tabs = [
    { id: "overview", label: "Overview", icon: "domain", href: "#overview" },
    { id: "systems", label: "Systems", icon: "hub", href: "#systems" },
    {
      id: "quick-rfq",
      label: "RFQ Hub",
      icon: "assignment",
      href: "#quick-rfq",
    },
    {
      id: "alliances",
      label: "Audit",
      icon: "verified_user",
      href: "#alliances",
    },
    {
      id: "contact",
      label: "Executive",
      icon: "corporate_fare",
      href: "#contact",
    },
  ];

  const handleClick = (tabId: string, href: string) => {
    setActiveSection(tabId);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 pb-safe md:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-t border-surface-container-high shadow-[0_-2px_12px_rgba(11,28,48,0.06)]"
    >
      <div className="h-16 px-2 flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleClick(tab.id, tab.href)}
              className={`flex flex-col items-center justify-center min-w-[56px] h-12 gap-0.5 transition-all ${
                isActive
                  ? "text-primary font-bold scale-105"
                  : "text-secondary hover:text-on-surface"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? "scale-110" : ""
                }`}
              >
                {tab.icon}
              </span>
              <span className="text-[10px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
