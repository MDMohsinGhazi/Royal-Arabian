"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function TransitContact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    division: "ict",
    location: "abu-dhabi",
    scope: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-condensed text-xs uppercase tracking-widest text-orange-500 font-bold mb-2">
            TALK TO AN EXPERT
          </div>
          <h2 className="font-condensed text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
            INITIATE YOUR ENTERPRISE SYSTEM INTEGRATION
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Connect directly with a certified solutions architect in Abu Dhabi or Dubai. We review your specifications, site requirements, and regulatory criteria to formulate a tailored engineering roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-[#0c0c0e] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-orange-600/20 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-condensed text-3xl font-bold uppercase text-white mb-3">
                    CONSULTATION REQUEST RECEIVED
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A senior solutions architect from our {formData.division.toUpperCase()} division will contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        division: "ict",
                        location: "abu-dhabi",
                        scope: "",
                      });
                    }}
                    className="transit-btn-outline"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Division Selection Pills */}
                  <div>
                    <label className="block font-condensed text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-3">
                      SELECT CORE DIVISION OR SCOPE:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "ict", label: "ICT Infra" },
                        { id: "smart", label: "Smart BMS" },
                        { id: "cyber", label: "Cybersecurity" },
                        { id: "elv", label: "Turnkey ELV" },
                      ].map((div) => (
                        <button
                          key={div.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, division: div.id })}
                          className={`py-2 px-3 font-condensed text-xs uppercase font-bold tracking-wider border text-center transition-all ${
                            formData.division === div.id
                              ? "bg-orange-500 text-white border-orange-500"
                              : "bg-zinc-900 text-zinc-400 border-white/10 hover:text-white"
                          }`}
                        >
                          {div.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block font-condensed text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                        FULL NAME *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al Mansoori"
                        className="w-full bg-zinc-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block font-condensed text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                        ORGANIZATION / COMPANY *
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Abu Dhabi Investment Authority"
                        className="w-full bg-zinc-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block font-condensed text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                        OFFICIAL EMAIL *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@organization.ae"
                        className="w-full bg-zinc-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block font-condensed text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                        MOBILE / WHATSAPP NUMBER *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-zinc-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label htmlFor="contact-location" className="block font-condensed text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      PROJECT LOCATION IN UAE
                    </label>
                    <select
                      id="contact-location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="abu-dhabi">Abu Dhabi (HQ &amp; Western Region)</option>
                      <option value="dubai">Dubai &amp; Freezones</option>
                      <option value="sharjah">Sharjah &amp; Northern Emirates</option>
                      <option value="federal">Federal / Multi-Emirate Rollout</option>
                    </select>
                  </div>

                  {/* Scope / Message */}
                  <div>
                    <label htmlFor="contact-scope" className="block font-condensed text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      BRIEF SCOPE OR TECHNICAL SPECIFICATIONS
                    </label>
                    <textarea
                      id="contact-scope"
                      rows={4}
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      placeholder="Outline your requirements (e.g. 150-camera ADMCC installation, datacenter fiber backbone, Crestron boardrooms, or cybersecurity audit)..."
                      className="w-full bg-zinc-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="transit-btn w-full flex items-center justify-center gap-2 py-3.5"
                  >
                    {loading ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <span>SUBMIT CONSULTATION REQUEST</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect Box */}
            <div className="p-6 bg-[#0c0c0e] border border-white/10">
              <div className="font-condensed text-xs uppercase tracking-widest text-orange-500 font-bold mb-3">
                DIRECT CONTACT CHANNELS
              </div>
              <div className="space-y-4">
                <a
                  href="tel:+97126212354"
                  className="flex items-center gap-4 p-3 bg-zinc-900/60 border border-white/5 hover:border-orange-500/50 transition-colors group"
                >
                  <div className="p-2.5 bg-orange-600/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 uppercase font-mono">Head Office Hotline</div>
                    <div className="font-condensed text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                      +971 2 6212354
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@arabiancomputers.com"
                  className="flex items-center gap-4 p-3 bg-zinc-900/60 border border-white/5 hover:border-orange-500/50 transition-colors group"
                >
                  <div className="p-2.5 bg-orange-600/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 uppercase font-mono">Direct Technical Inquiries</div>
                    <div className="font-condensed text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                      info@arabiancomputers.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="p-6 bg-[#0c0c0e] border border-white/10">
              <div className="font-condensed text-xs uppercase tracking-widest text-orange-500 font-bold mb-4">
                UAE OFFICE LOCATIONS
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="font-condensed text-base font-bold text-white uppercase">
                      Abu Dhabi Headquarters
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                    Al Salam Street, Commercial Tower, Abu Dhabi, United Arab Emirates
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="font-condensed text-base font-bold text-white uppercase">
                      Dubai Regional Hub
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                    Business Bay, Iris Bay Tower, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            {/* Portal Link Box */}
            <div className="p-6 bg-gradient-to-r from-orange-950/30 to-zinc-900 border border-orange-500/30">
              <div className="font-condensed text-sm font-bold text-white uppercase mb-1">
                LOOKING FOR SPECIALIZED PLATFORMS?
              </div>
              <p className="text-xs text-zinc-400 mb-4">
                Browse our dedicated portals for in-depth data sheets and configuration calculators.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://ict-infra-92k28e8ep-mdmohsinghazis-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-condensed font-bold uppercase text-orange-400 hover:text-white transition-colors py-1"
                >
                  <span>ICT Infrastructure Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://royalarabiansmart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-condensed font-bold uppercase text-orange-400 hover:text-white transition-colors py-1"
                >
                  <span>Smart Automation Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
