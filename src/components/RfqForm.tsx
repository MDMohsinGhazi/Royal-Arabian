"use client";

import { useState, useEffect } from "react";

interface RfqFormProps {
  selectedDiscipline?: string;
}

export default function RfqForm({ selectedDiscipline }: RfqFormProps) {
  const [formData, setFormData] = useState({
    contactName: "",
    companyName: "",
    contactPhone: "",
    solutionType: "cctv",
    scopeNotes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (selectedDiscipline) {
      setFormData((prev) => ({
        ...prev,
        solutionType: selectedDiscipline,
      }));
    }
  }, [selectedDiscipline]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate reliable API dispatch
    setTimeout(() => {
      const generatedCode = `RACT-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedCode);
      setStatus("success");
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      contactName: "",
      companyName: "",
      contactPhone: "",
      solutionType: "cctv",
      scopeNotes: "",
    });
    setStatus("idle");
    setReferenceId("");
  };

  return (
    <section
      id="quick-rfq"
      className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-surface-container-low border-y border-surface-container"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[20px]">
                schedule_send
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Fast Turnaround
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-1">
              Request Site Survey / RFQ
            </h2>
            <p className="text-xs sm:text-sm text-secondary mt-1">
              Direct dispatch to certified field engineers in Abu Dhabi and
              Dubai. Average formal proposal turnaround: under 4 hours.
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest rounded-full text-xs font-semibold text-on-surface border border-surface-container-high self-start sm:self-auto">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">
              verified
            </span>
            <span>NDA Protected</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-surface-container">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px]">
                  check_circle
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-on-surface">
                  Site Survey Request Dispatched
                </h3>
                <p className="text-sm text-secondary max-w-md">
                  A Senior Technical Liaison and Project Engineer will contact
                  you within 4 hours to review drawings or schedule an on-site
                  survey.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-high max-w-sm w-full">
                <span className="text-xs uppercase font-bold text-secondary block">
                  Reference Tracking Code
                </span>
                <span className="text-lg font-mono font-extrabold text-primary block mt-0.5">
                  {referenceId}
                </span>
                <span className="text-[11px] text-secondary mt-1 block">
                  Keep this ID for inquiries with our Abu Dhabi Command Desk
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+97126212354"
                  className="h-10 px-5 rounded-xl bg-inverse-surface text-inverse-on-surface font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    call
                  </span>
                  <span>Direct Hotline (+971 2 6212354)</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="h-10 px-5 rounded-xl border border-surface-container-highest bg-surface hover:bg-surface-container font-semibold text-xs text-on-surface"
                >
                  Submit Another Scope
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact_name"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Full Name &amp; Designation{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                      person
                    </span>
                    <input
                      id="contact_name"
                      required
                      type="text"
                      value={formData.contactName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactName: e.target.value,
                        })
                      }
                      placeholder="e.g. Eng. Tariq Al Nuaimi"
                      className="w-full h-11 pl-10 pr-3 rounded-xl bg-surface border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Organization & Emirate */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company_name"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Organization / Emirate{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                      business
                    </span>
                    <input
                      id="company_name"
                      required
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      placeholder="e.g. Alsa Properties (Abu Dhabi)"
                      className="w-full h-11 pl-10 pr-3 rounded-xl bg-surface border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact_phone"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    UAE Phone Number <span className="text-primary">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                      call
                    </span>
                    <input
                      id="contact_phone"
                      required
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactPhone: e.target.value,
                        })
                      }
                      placeholder="+971 50 XXX XXXX"
                      className="w-full h-11 pl-10 pr-3 rounded-xl bg-surface border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Discipline Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="solution_type"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Required Core Discipline{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px] pointer-events-none">
                      hub
                    </span>
                    <select
                      id="solution_type"
                      value={formData.solutionType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          solutionType: e.target.value,
                        })
                      }
                      className="w-full h-11 pl-10 pr-10 rounded-xl bg-surface border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none cursor-pointer transition-all"
                    >
                      <option value="cctv">
                        Visual Surveillance &amp; CCTV (ADMCC Certified)
                      </option>
                      <option value="wifi">
                        Enterprise Wi-Fi &amp; WLAN Infrastructure
                      </option>
                      <option value="cabling">
                        Fiber &amp; Structured Cabling (OTDR/OLTS)
                      </option>
                      <option value="cloud">
                        Microsoft 365 &amp; Azure Cloud Solutions
                      </option>
                      <option value="automation">
                        Smart Building / Office ELV Automation
                      </option>
                      <option value="cybersecurity">
                        Cybersecurity &amp; Perimeter Defense
                      </option>
                      <option value="amc">
                        Annual Maintenance Contract (24/7 SLA)
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 text-secondary text-[20px] pointer-events-none">
                      arrow_drop_down
                    </span>
                  </div>
                </div>
              </div>

              {/* Scope Notes */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="scope_notes"
                  className="text-xs sm:text-sm font-semibold text-on-surface"
                >
                  Project Scope &amp; Site Details
                </label>
                <textarea
                  id="scope_notes"
                  rows={3}
                  value={formData.scopeNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, scopeNotes: e.target.value })
                  }
                  placeholder="Describe number of camera channels, building floor count, tender requirements, or required completion timeline..."
                  className="w-full p-3.5 rounded-xl bg-surface border border-surface-container-high text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-70 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="material-symbols-outlined text-[20px] animate-spin">
                        refresh
                      </span>
                      <span>Transmitting Site Survey Request...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">
                        send
                      </span>
                      <span>Submit Request (Guaranteed &lt; 4hr Response)</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-secondary">
                  Strict confidentiality guaranteed. Official Non-Disclosure
                  Agreements (NDAs) respected for sensitive government and
                  enterprise tenders.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
