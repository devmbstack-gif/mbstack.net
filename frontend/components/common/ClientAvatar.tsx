"use client";

import Image from "next/image";

type ClientAvatarProps = {
  src?: string;
  name: string;
  size?: number;
  /** Use "logo" for company marks; "photo" for headshots or project thumbnails. */
  variant?: "logo" | "photo";
  className?: string;
};

function getInitials(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z\s]/g, " ").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] ?? "") + (parts[1][0] ?? "");
  }
  return (cleaned.slice(0, 2) || name.slice(0, 2)).toUpperCase();
}

export default function ClientAvatar({
  src,
  name,
  size = 56,
  variant = "photo",
  className = "",
}: ClientAvatarProps) {
  const initials = getInitials(name);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-stone-100 border-2 border-[#31B574]/20 flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center bg-[#31B574] text-white font-semibold"
        style={{ fontSize: Math.max(12, size * 0.32) }}
        aria-hidden
      >
        {initials}
      </span>
      {src ? (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className={`relative z-10 h-full w-full ${
            variant === "logo"
              ? "object-contain bg-white p-1.5"
              : "object-cover"
          }`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}
    </div>
  );
}
