import React from "react";

type Tone = "mint" | "black" | "outline";

const tones: Record<Tone, string> = {
  mint: "bg-card-mint text-[#1f6f4f]",
  black: "bg-black text-white",
  outline: "border border-line text-ink-soft",
};

export default function Badge({
  children,
  tone = "mint",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
