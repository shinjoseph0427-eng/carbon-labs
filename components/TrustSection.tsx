"use client";

import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import Image from "next/image";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const floatAnimation: TargetAndTransition = {
  y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

const badges = [
  { title: "99% Purity Guaranteed", sub: "HPLC + mass-spec verified on every batch" },
  { title: "COA Every Batch", sub: "Certificate of Analysis ships with every order" },
  { title: "USA Sourced", sub: "Synthesized and identity-tested in the USA" },
];

function Check() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-card-mint">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f6f4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function TrustSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2"
    >
      {/* left — full-bleed lab photo */}
      <motion.div
        variants={fadeInLeft}
        className="relative order-2 min-h-[340px] overflow-hidden bg-card-mint md:order-1 md:min-h-[560px]"
      >
        <Image
          src="/products/lab-bench.png"
          alt="Carbon Labs research vials — GLP-3RT, IGF-1 LR3, GHK-Cu"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* right — white with copy + badges */}
      <motion.div
        variants={fadeInRight}
        className="order-1 flex flex-col justify-center bg-white px-6 py-16 md:order-2 md:px-16 md:py-20"
      >
        <p className="eyebrow mb-4">Why Carbon Labs</p>
        <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-black md:text-5xl">
          The Carbon Labs
          <br />
          Standard
        </h2>
        <p className="mt-5 max-w-md text-base leading-[1.7] text-gray-600">
          Every compound is held to a single bar: documented purity you can
          verify, on every batch we ship. No exceptions.
        </p>

        <div className="mt-8 space-y-5">
          {badges.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <Check />
              <div>
                <p className="text-sm font-bold text-black">{b.title}</p>
                <p className="text-[13px] text-gray-600">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
