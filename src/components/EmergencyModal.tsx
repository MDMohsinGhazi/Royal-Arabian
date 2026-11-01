"use client";

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal overlay"
        className="fixed inset-0 bg-on-surface/60 backdrop-blur-sm transition-opacity cursor-default w-full h-full border-none p-0"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-surface rounded-2xl max-w-md w-full p-6 shadow-2xl z-10 border border-error/30 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between pb-3 border-b border-surface-container-high">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px] animate-pulse">
                emergency
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-error">
                24/7 SLA Hotline
              </span>
              <h3 className="text-lg font-extrabold text-on-surface">
                Emergency Response
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="py-4 space-y-3">
          <p className="text-xs text-secondary leading-relaxed">
            For critical server room outages, fiber cuts, or ADMCC surveillance failures under active SLA:
          </p>

          <a
            href="tel:+971544443635"
            className="p-3.5 rounded-xl bg-error text-white font-bold text-sm flex items-center justify-between shadow-md hover:bg-error/90 active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
              <div className="text-left">
                <span className="text-[10px] uppercase opacity-90 block">Priority Field Tech Hotline</span>
                <span className="text-base tracking-wide">+971 54 4443635</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>

          <a
            href="tel:+97126212354"
            className="p-3.5 rounded-xl bg-surface-container-low text-on-surface font-semibold text-sm flex items-center justify-between border border-surface-container-high hover:bg-surface-container transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[22px]">headset_mic</span>
              <div className="text-left">
                <span className="text-[10px] text-secondary uppercase block">Abu Dhabi Command Central</span>
                <span className="text-sm font-bold">+971 2 6212354</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary text-[20px]">call</span>
          </a>

          <a
            href="tel:999"
            className="p-3 rounded-xl bg-surface-container-lowest text-secondary text-xs flex items-center justify-between border border-surface-container-high hover:text-error transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">local_police</span>
              <span>UAE National Emergency Services (Police / Civil Defense)</span>
            </div>
            <span className="font-bold">999</span>
          </a>

          <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-[11px] text-secondary flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] flex-shrink-0 mt-0.5">
              info
            </span>
            <span>
              Contracted clients receive guaranteed 15-minute remote triage and 2-hour on-site dispatch across Abu Dhabi and Dubai.
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          type="button"
          className="w-full h-10 rounded-xl bg-surface-container text-on-surface font-semibold text-xs hover:bg-surface-container-high transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
