"use client";

import { motion, type Variants } from "framer-motion";

export type Tier = {
  name: string;
  price: string;
  period?: string;
  note?: string;
  badge?: string;
  features: { label: string; enabled: boolean }[];
  cta: string;
  ctaDisabled?: boolean;
  highlighted?: boolean;
  dark?: boolean;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Dot({ enabled, dark }: { enabled: boolean; dark?: boolean }) {
  if (!enabled) {
    return (
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gray-200 text-gray-400">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
        dark ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function PricingCard({ tier }: { tier: Tier }) {
  const { dark, highlighted } = tier;

  return (
    <motion.div
      variants={fadeUp}
      className={`relative flex flex-col rounded-[20px] p-8 md:p-10 ${
        dark
          ? "bg-black text-white"
          : highlighted
            ? "border-2 border-black bg-white"
            : "border border-gray-200 bg-white"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          Most Popular
        </span>
      )}

      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
        {tier.badge && (
          <span className="rounded-full bg-card-mint px-2.5 py-1 text-[12px] font-semibold text-[#1f6f4f]">
            {tier.badge}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-[2rem] font-bold leading-none tracking-tight md:text-4xl">
          {tier.price}
        </span>
        {tier.period && (
          <span className={`text-sm ${dark ? "text-white/60" : "text-gray-600"}`}>
            {tier.period}
          </span>
        )}
      </div>
      {tier.note && (
        <p className={`mt-2 text-xs ${dark ? "text-white/50" : "text-gray-400"}`}>
          {tier.note}
        </p>
      )}

      <ul className="mt-7 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f.label} className="flex items-center gap-3">
            <Dot enabled={f.enabled} dark={dark} />
            <span
              className={`text-sm ${
                f.enabled
                  ? dark
                    ? "text-white"
                    : "text-black"
                  : "text-gray-400 line-through"
              }`}
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>

      <button
        disabled={tier.ctaDisabled}
        className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${
          tier.ctaDisabled
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : dark
              ? "border-[1.5px] border-white text-white hover:bg-white hover:text-black"
              : "bg-black text-white hover:opacity-85"
        }`}
      >
        {tier.cta}
      </button>
    </motion.div>
  );
}
