import React from "react";

type ServiceIconType = "web" | "ai" | "mobile" | "seo" | "marketing" | "it";

function WebIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
      <rect x="6" y="8" width="36" height="24" rx="3" fill="white" fillOpacity="0.95" />
      <rect x="6" y="8" width="36" height="7" rx="3" fill="white" fillOpacity="0.25" />
      <circle cx="10.5" cy="11.5" r="1.2" fill="#31b574" />
      <circle cx="14.5" cy="11.5" r="1.2" fill="#7dd3a8" />
      <circle cx="18.5" cy="11.5" r="1.2" fill="#7dd3a8" />
      <path
        d="M14 22l4 4 8-8"
        stroke="#31b574"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 28h16" stroke="#a8e6c8" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 40h12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 32v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
      <path
        d="M24 6c-1 6-6 9-6 15a6 6 0 1012 0c0-6-5-9-6-15z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M24 14v10M20 18h8"
        stroke="#31b574"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3" fill="#31b574" />
      <path
        d="M12 30l4-2M36 30l-4-2M15 38l3-3M33 38l-3-3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="14" r="2" fill="#7dd3a8" />
      <circle cx="36" cy="14" r="2" fill="#7dd3a8" />
      <circle cx="24" cy="8" r="1.5" fill="#7dd3a8" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
      <rect x="14" y="4" width="20" height="40" rx="4" fill="white" fillOpacity="0.95" />
      <rect x="19" y="7" width="10" height="3" rx="1.5" fill="#d4f5e4" />
      <rect x="17" y="14" width="14" height="10" rx="2" fill="#e8faf1" />
      <rect x="17" y="27" width="6" height="6" rx="1.5" fill="#31b574" fillOpacity="0.85" />
      <rect x="25" y="27" width="6" height="6" rx="1.5" fill="#7dd3a8" />
      <rect x="17" y="35" width="6" height="6" rx="1.5" fill="#7dd3a8" />
      <rect x="25" y="35" width="6" height="6" rx="1.5" fill="#31b574" fillOpacity="0.65" />
      <circle cx="24" cy="39.5" r="1.5" fill="#31b574" />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
      <circle
        cx="21"
        cy="21"
        r="11"
        stroke="white"
        strokeWidth="3"
        fill="white"
        fillOpacity="0.2"
      />
      <path d="M28 28l9 9" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M14 26l4-6 4 3 6-8"
        stroke="#31b574"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="16" r="2" fill="#7dd3a8" />
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
      <path
        d="M14 16h20l-2 22H16L14 16z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M18 16c0-4 3-6 6-6s6 2 6 6"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 24h8M20 29h6"
        stroke="#31b574"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="34" cy="14" r="4" fill="#7dd3a8" />
      <path
        d="M34 11v6M31 14h6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 28l3-2 3 1 4-3"
        stroke="#d4f5e4"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ItIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden>
      <path
        d="M24 5L8 12v10c0 9.5 6.2 18.4 16 21 9.8-2.6 16-11.5 16-21V12L24 5z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M18 24l4 4 8-9"
        stroke="#31b574"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="14" r="5" fill="#7dd3a8" />
      <path
        d="M36 12v4M34 14h4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICON_MAP: Record<ServiceIconType, React.FC> = {
  web: WebIcon,
  ai: AiIcon,
  mobile: MobileIcon,
  seo: SeoIcon,
  marketing: MarketingIcon,
  it: ItIcon,
};

export default function ServicePremiumIcon({ type }: { type: string }) {
  const Icon = ICON_MAP[type as ServiceIconType] ?? WebIcon;

  return (
    <div className="relative h-[4.25rem] w-[4.25rem] shrink-0">
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3dd68c] via-brand to-[#1a7a4a] shadow-[0_10px_24px_-8px_rgba(49,181,116,0.65)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_14px_28px_-6px_rgba(49,181,116,0.75)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-black/10"
        aria-hidden
      />
      <div
        className="absolute inset-[1px] rounded-[15px] border border-white/25"
        aria-hidden
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Icon />
      </div>
    </div>
  );
}
