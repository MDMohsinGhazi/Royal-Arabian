"use client";

import { useEffect, useState } from "react";

interface EnterpriseConsultationModuleProps {
  selectedDivision?: "ict" | "cyber" | "smart";
}

export default function EnterpriseConsultationModule({
  selectedDivision = "ict",
}: EnterpriseConsultationModuleProps) {
  const [division, setDivision] = useState<"ict" | "cyber" | "smart">(selectedDivision);

  useEffect(() => {
    if (selectedDivision) {
      setDivision(selectedDivision);
    }
  }, [selectedDivision]);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    scope: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [refId, setRefId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setRefId(`RACT-SLA-${Math.floor(100000 + Math.random() * 900000)}`);
      setStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      org: "",
      email: "",
      phone: "",
      scope: "",
    });
    setStatus("idle");
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50" id="quick-inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: HQ Details & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                Immediate Assistance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Request Your SLA &amp; Solution Proposal
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Connect with our enterprise engineering directors. Receive an end-to-end technical scope, bill of materials (BoM) audit, and certified SLA guarantee within 24 hours.
              </p>

              <div className="flex flex-col gap-3 mt-8">
                {/* Regional HQ */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">apartment</span>
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Regional Headquarters
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600 mt-0.5 block leading-snug">
                      Al Salam St., Salam HQ Building, P.O. Box 47120, Abu Dhabi, UAE
                    </span>
                  </div>
                </div>

                {/* Direct Telephony */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Direct Telephony Lines
                    </strong>
                    <a
                      href="tel:+97126212354"
                      className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors block mt-0.5"
                    >
                      +971 2 6212354 (HQ Landline)
                    </a>
                    <a
                      href="tel:+971544443635"
                      className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors block"
                    >
                      +971 54 4443635 / +971 56 4479783 (Direct Mobility)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      mark_email_read
                    </span>
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Electronic Correspondence
                    </strong>
                    <a
                      href="mailto:info@arabiancomputers.com"
                      className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors block mt-0.5"
                    >
                      info@arabiancomputers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-[28px] shrink-0">
                support_agent
              </span>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                  24/7 Mission-Critical Support Desk
                </span>
                <span className="text-xs text-slate-600">
                  Active response protocols for Tier-1 to Tier-4 enterprise incidents.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              Initiate Technical Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Choose your core domain and outline your project parameters.
            </p>

            {status === "success" ? (
              <div className="py-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    SLA Consultation Dispatched
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mt-1">
                    An engineering consultant from Royal Arabian has received your request and will follow up with an executive proposal within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm w-full">
                  <span className="text-xs uppercase font-bold text-slate-500 block">
                    Assigned File Reference
                  </span>
                  <span className="text-lg font-mono font-extrabold text-primary block mt-0.5">
                    {refId}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Submit Another Project Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Division Selector Radio Group */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm text-slate-800 font-semibold">
                    Target Architecture Division
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "ict", label: "ICT Infrastructure" },
                      { id: "cyber", label: "Cyber Security" },
                      { id: "smart", label: "Smart Automation" },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                          division === item.id
                            ? "bg-orange-50/70 border-primary text-primary font-bold shadow-xs"
                            : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                        }`}
                      >
                        <input
                          type="radio"
                          name="division"
                          value={item.id}
                          checked={division === item.id}
                          onChange={() => setDivision(item.id as any)}
                          className="accent-primary"
                        />
                        <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Two Column Input Pairs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs sm:text-sm text-slate-800 font-semibold"
                    >
                      Executive / Technical Lead Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Eng. Mohammed Al Mansoori"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-org"
                      className="text-xs sm:text-sm text-slate-800 font-semibold"
                    >
                      Enterprise / Organization Name
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      required
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="Organization / Entity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs sm:text-sm text-slate-800 font-semibold"
                    >
                      Corporate Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="lead@organization.ae"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs sm:text-sm text-slate-800 font-semibold"
                    >
                      Contact Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Project Details Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-scope"
                    className="text-xs sm:text-sm text-slate-800 font-semibold"
                  >
                    Deployment Parameters / RFP Scope
                  </label>
                  <textarea
                    id="contact-scope"
                    rows={3}
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    placeholder="Outline specific site details, number of endpoints, server room requirements, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold py-3.5 rounded-xl bg-primary text-white hover:bg-amber-active transition-all duration-200 shadow-md disabled:opacity-70 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="material-symbols-outlined text-[20px] animate-spin">
                        refresh
                      </span>
                      <span>Transmitting Consultation Scope...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit for Executive Technical Review</span>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
