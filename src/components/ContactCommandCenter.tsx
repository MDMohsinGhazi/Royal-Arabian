"use client";

import { useState } from "react";

export default function ContactCommandCenter() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Immediate Engineering Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-0.5">
            Abu Dhabi Command Center
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            24/7 technical desk dispatching certified systems engineers across
            UAE.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Engineers On Call Right Now</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Central Desk */}
        <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-xs border border-surface-container hover:shadow-md transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  phone_in_talk
                </span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-secondary block">
                  Central Desk
                </span>
                <span className="text-base font-extrabold text-on-surface block mt-0.5">
                  +971 2 6212354
                </span>
              </div>
            </div>
            <a
              href="tel:+97126212354"
              className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              title="Call Central Desk"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-surface-container-high flex items-center justify-between text-xs">
            <span className="text-secondary">
              Official Inquiries &amp; Tenders
            </span>
            <button
              type="button"
              onClick={() => copyToClipboard("+97126212354", "tel1")}
              className="text-primary font-semibold hover:underline"
            >
              {copied === "tel1" ? "Copied!" : "Copy Number"}
            </button>
          </div>
        </div>

        {/* 24/7 Field Tech Hotline */}
        <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-xs border border-surface-container hover:shadow-md transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-secondary-fixed flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  engineering
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs uppercase font-bold text-secondary">
                    Field Engineering
                  </span>
                  <span className="text-[9px] bg-primary text-on-primary px-1.5 py-0.2 rounded font-extrabold">
                    HOTLINE
                  </span>
                </div>
                <span className="text-base font-extrabold text-on-surface block mt-0.5">
                  +971 54 4443635
                </span>
              </div>
            </div>
            <a
              href="tel:+971544443635"
              className="w-9 h-9 rounded-lg bg-error-container text-on-error-container hover:bg-error hover:text-white flex items-center justify-center transition-colors"
              title="Emergency Field Call"
            >
              <span className="material-symbols-outlined text-[18px]">
                emergency
              </span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-surface-container-high flex items-center justify-between text-xs">
            <span className="text-secondary">24/7 Outage &amp; SLA Calls</span>
            <a
              href="https://wa.me/971544443635"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-bold hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">
                chat
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Regional HQ Address */}
        <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-xs border border-surface-container hover:shadow-md transition-all flex flex-col justify-between">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-surface text-[22px]">
                pin_drop
              </span>
            </div>
            <div className="min-w-0">
              <span className="text-xs uppercase font-bold text-secondary block">
                Regional Headquarters
              </span>
              <p className="text-xs text-on-surface font-semibold mt-1 leading-snug">
                123 M4, Alsa Apollo Building, Salam Street, TCA, Abu Dhabi,
                United Arab Emirates.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-surface-container-high flex items-center justify-between text-xs">
            <span className="text-primary font-semibold truncate">
              info@arabiancomputers.com
            </span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard("info@arabiancomputers.com", "email")
              }
              className="text-secondary hover:text-on-surface font-semibold"
            >
              {copied === "email" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
