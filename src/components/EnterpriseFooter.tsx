import { ArrowUpRight, Building, Phone, Mail } from "lucide-react";

export default function EnterpriseFooter() {
  return (
    <footer className="w-full bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 px-2.5 py-0.5 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                <span className="text-primary font-mono font-bold text-xs tracking-wider">
                  RACT
                </span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Royal Arabian
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Pioneering advanced ICT enterprise infrastructure, Tier-4 data architecture, cyber defense systems, and smart mission-critical automation across the Middle East and international markets.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-300 font-medium">
                Mission Critical Operations Active
              </span>
            </div>
          </div>

          {/* Pillars with External Portal Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              Core Business Pillars &amp; Portals
            </span>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a
                href="https://ict-infra-92k28e8ep-mdmohsinghazis-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>ICT Infrastructure Portal</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://royalarabiansmart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>Smart Automation Portal</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://royalarabiansmart.com/cybersecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>Cyber Security Portal</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#architecture-matrix"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Unified Architecture Matrix
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a href="#overview" className="text-slate-300 hover:text-white transition-colors">
                Overview
              </a>
              <a
                href="#enterprise-clients"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Enterprise Clients
              </a>
              <a
                href="#quick-inquiry"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Get Consultation
              </a>
              <a
                href="#quick-inquiry"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact Center
              </a>
            </div>
          </div>

          {/* HQ Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              Headquarters Contact
            </span>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Al Salam St., Salam HQ Building, P.O. Box 47120, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+971 2 6212354 / +971 2 6212355</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@arabiancomputers.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Royal Arabian Smart Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>ISO 27001 Certified</span>
            <span className="text-slate-600">•</span>
            <span>Enterprise ICT SLA</span>
            <span className="text-slate-600">•</span>
            <a href="#overview" className="text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
