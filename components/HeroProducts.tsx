"use client";

import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import Link from "next/link";

const VIALS = [
  {
    src: "/products/glutathione.png",
    alt: "Carbon Labs Glutathione 1500mg vial",
    cls: "absolute bottom-0 left-1/2 z-20 h-[230px] -translate-x-[112%] rotate-[-13deg] translate-y-4 md:h-[420px]",
    floatDelay: 0,
  },
  {
    src: "/products/igf-1-lr3.png",
    alt: "Carbon Labs IGF-1 LR3 1mg vial",
    cls: "relative z-30 h-[300px] md:h-[520px]",
    floatDelay: 0.6,
  },
  {
    src: "/products/glp-3rt.png",
    alt: "Carbon Labs GLP-3RT 10mg vial",
    cls: "absolute bottom-0 left-1/2 z-20 h-[230px] translate-x-[12%] rotate-[13deg] translate-y-4 md:h-[420px]",
    floatDelay: 1.2,
  },
];

const stage: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.28, delayChildren: 0.15 } },
};

const vialReveal: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const float = (delay: number): TargetAndTransition => ({
  y: [0, -10, 0],
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
});

const textUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: d },
  }),
};

export default function HeroProducts() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-16">
      {/* studio spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 38%, #f4f4f5 0%, #ffffff 70%)",
        }}
      />

      <p className="eyebrow absolute left-6 top-6 md:left-12">
        Research use only · 99% identity purity
      </p>

      {/* product stage */}
      <motion.div
        variants={stage}
        initial="hidden"
        animate="visible"
        className="relative flex h-[330px] w-full max-w-3xl items-end justify-center md:h-[560px]"
      >
        {/* ground shadow */}
        <div className="absolute bottom-6 left-1/2 h-8 w-[60%] -translate-x-1/2 rounded-[50%] bg-black/10 blur-2xl" />

        {VIALS.map((v) => (
          <motion.div key={v.src} variants={vialReveal} className={v.cls}>
            <motion.img
              src={v.src}
              alt={v.alt}
              animate={float(v.floatDelay)}
              className="h-full w-auto object-contain drop-shadow-2xl"
              draggable={false}
              onError={(e) => {
                const t = e.currentTarget;
                t.onerror = null;
                t.src =
                  "https://placehold.co/480x720/0a0a0a/ffffff?text=Carbon+Labs";
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* copy */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-8 text-center"
      >
        <motion.h1
          variants={textUp}
          custom={1.0}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-black md:text-7xl"
        >
          Precision peptides,
          <br />
          proven pure.
        </motion.h1>
        <motion.p
          variants={textUp}
          custom={1.15}
          className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-600"
        >
          Research-grade peptides with a Certificate of Analysis on every batch.
          Third-party identity tested, USA sourced.
        </motion.p>
        <motion.div variants={textUp} custom={1.3} className="mt-7">
          <Link
            href="/store"
            className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:opacity-85"
          >
            Browse Catalog <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* footer meta */}
      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs font-medium text-gray-600 md:left-12 md:right-12">
        <span className="font-display font-bold">
          carbon<span className="opacity-40">labs</span>
        </span>
        <span>USA · Lab-tested · COA included</span>
      </div>
    </section>
  );
}
