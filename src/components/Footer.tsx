export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-high border-t border-surface-container-highest px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[20px]">token</span>
          </div>
          <span className="text-lg sm:text-xl font-extrabold text-on-surface">
            Royal Arabian Smart Technologies
          </span>
        </div>

        <p className="text-xs sm:text-sm text-secondary max-w-lg leading-relaxed">
          Pioneering certified ICT cabling, smart ELV systems, cloud
          modernization, and ADMCC surveillance systems across Abu Dhabi &amp;
          Dubai since 2007.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-secondary pt-2">
          <span className="bg-surface-container-lowest px-3 py-1 rounded-full shadow-2xs">
            ISO 9001:2015
          </span>
          <span className="bg-surface-container-lowest px-3 py-1 rounded-full shadow-2xs">
            ADMCC Approved
          </span>
          <span className="bg-surface-container-lowest px-3 py-1 rounded-full shadow-2xs">
            ADNOC ICV Certified
          </span>
          <span className="bg-surface-container-lowest px-3 py-1 rounded-full shadow-2xs">
            SIRA Aligned
          </span>
        </div>

        <div className="pt-4 border-t border-surface-container-highest w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-secondary gap-2">
          <p>
            © 2026 Royal Arabian Smart Technologies (RACT). All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#overview"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#overview"
              className="hover:text-primary transition-colors"
            >
              Terms of SLA Service
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-primary transition-colors">
              Abu Dhabi Command Desk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
