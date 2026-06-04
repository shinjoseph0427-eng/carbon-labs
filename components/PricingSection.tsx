"use client";

import { motion, type Variants } from "framer-motion";
import PricingCard, { type Tier } from "./PricingCard";

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "Free",
    features: [
      { label: "2× points per $1", enabled: true },
      { label: "Free standard shipping", enabled: false },
      { label: "Early access + drops", enabled: false },
      { label: "Priority fulfillment", enabled: false },
    ],
    cta: "Current Plan",
    ctaDisabled: true,
  },
  {
    name: "Research",
    price: "$12.99",
    period: "/mo",
    note: "Billed annually — 2 months free",
    badge: "2 Months Free",
    features: [
      { label: "3× points per $1", enabled: true },
      { label: "Free standard shipping", enabled: true },
      { label: "Free 2-day shipping", enabled: false },
      { label: "Early access + drops", enabled: false },
    ],
    cta: "Choose Research",
  },
  {
    name: "Pro",
    price: "$24.99",
    period: "/mo",
    note: "Billed annually — 2 months free",
    badge: "2 Months Free",
    highlighted: true,
    features: [
      { label: "5× points per $1", enabled: true },
      { label: "Free 2-day shipping", enabled: true },
      { label: "Early access + drops", enabled: true },
      { label: "Priority fulfillment", enabled: false },
    ],
    cta: "Choose Pro",
  },
  {
    name: "Platinum",
    price: "$89.99",
    period: "/mo",
    note: "Billed annually — 2 months free",
    dark: true,
    features: [
      { label: "10× points per $1", enabled: true },
      { label: "Free 2-day shipping", enabled: true },
      { label: "Early access + drops", enabled: true },
      { label: "Priority fulfillment", enabled: true },
      { label: "+1,000 bonus pts / mo", enabled: true },
    ],
    cta: "Choose Platinum",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function PricingSection() {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">Membership</p>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-[40px]">
          Research more, earn more
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Points on every order, faster shipping, and early access to new
          research compounds.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {tiers.map((t) => (
          <PricingCard key={t.name} tier={t} />
        ))}
      </motion.div>
    </section>
  );
}
