"use client";

import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function TransitFooter() {
  const year = 2026;

  return (
    <footer className="bg-[#000000] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-600 flex items-center justify-center text-white font-bold font-condensed text-xl">
                RA
              </div>
              <div className="flex flex-col">
                <span className="font-condensed text-2xl font-bold uppercase tracking-wider text-white">
                  Royal Arabian
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                  Smart Technologies LLC • UAE
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Premier UAE system integrator delivering turnkey ELV, ICT enterprise infrastructure, smart building automation, and high-assurance cybersecurity for public and private sectors.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                ADMCC • SIRA • ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-condensed text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Lifecycle Services</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">ELV &amp; ICT Solutions</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Three Specialized Portals */}
          <div>
            <h4 className="font-condensed text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">
              SPECIALIZED PORTALS
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li>
                <a
                  href="https://ict-infra-92k28e8ep-mdmohsinghazis-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors text-zinc-300 font-medium"
                >
                  <span>ICT Infrastructure</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
                </a>
                <span className="text-[10px] text-zinc-500 block">Tier-III Datacenters &amp; Backbones</span>
              </li>
              <li>
                <a
                  href="https://royalarabiansmart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors text-zinc-300 font-medium"
                >
                  <span>Smart Automation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
                </a>
                <span className="text-[10px] text-zinc-500 block">IoT, BMS &amp; Audio-Visual</span>
              </li>
              <li>
                <a
                  href="https://royalarabiansmart.com/cybersecurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors text-zinc-300 font-medium"
                >
                  <span>Cybersecurity Defense</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
                </a>
                <span className="text-[10px] text-zinc-500 block">SOC, XDR &amp; Compliance</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <h4 className="font-condensed text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">
              UAE CONTACT
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <a href="tel:+97126212354" className="hover:text-white transition-colors">
                  +971 2 6212354
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <a href="mailto:info@arabiancomputers.com" className="hover:text-white transition-colors">
                  info@arabiancomputers.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Abu Dhabi HQ &amp; Dubai Regional Hub, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {year} Royal Arabian Smart Technologies LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>ADMCC Approved</span>
            <span>•</span>
            <span>SIRA Compliant</span>
            <span>•</span>
            <span>ISO 9001:2015</span>
            <span>•</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
