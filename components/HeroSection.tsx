"use client";

import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import Button from "@/components/ui/Button";
import Vial from "@/components/Vial";

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

export default function HeroSection() {
  return (
    <section className="grid min-h-[calc(100vh-4rem)] grid-cols-1 md:grid-cols-2">
      {/* left — white */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
        className="flex flex-col justify-center bg-white px-6 py-16 md:px-16 md:py-20"
      >
        <p className="eyebrow mb-5">Precision Research Peptides, Certified</p>
        <h1 className="font-display text-[3.25rem] font-extrabold leading-[1.05] tracking-tight text-black sm:text-6xl">
          Research Peptides
          <br />
          You Can Trust
        </h1>
        <p className="mt-6 max-w-[360px] text-base leading-[1.7] text-gray-600">
          Research-grade peptides with Certificate of Analysis on every batch.
          99%+ identity purity, third-party tested.
        </p>
        <div className="mt-9">
          <Button href="/store" size="hero">
            Browse Catalog
            <span aria-hidden>→</span>
          </Button>
        </div>
      </motion.div>

      {/* right — lavender with floating vials */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInRight}
        className="relative flex items-center justify-center overflow-hidden bg-card-lavender px-6 py-20"
      >
        <motion.div animate={floatAnimation} className="relative">
          {/* large center vial */}
          <Vial abbr="BPC" tone="#2f8f6f" className="h-72 w-auto drop-shadow-xl md:h-96" />
          {/* small left */}
          <div className="absolute -left-20 bottom-6 hidden sm:block">
            <Vial abbr="IPA" tone="#6a5acd" className="h-40 w-auto drop-shadow-lg md:h-52" />
          </div>
          {/* small right */}
          <div className="absolute -right-16 top-2 hidden sm:block">
            <Vial abbr="TB" tone="#3b6fb0" className="h-32 w-auto drop-shadow-lg md:h-44" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
