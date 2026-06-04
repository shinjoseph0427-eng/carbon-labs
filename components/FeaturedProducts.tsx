"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function FeaturedProducts() {
  const list = products.filter((p) => p.featured);

  return (
    <section className="container-x py-20 md:py-24">
      {/* header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-[32px]">
            Featured Products
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Research peptides, third-party identity tested
          </p>
        </div>
        <Link
          href="/store"
          className="hidden shrink-0 rounded-full border-[1.5px] border-black px-5 py-2 text-sm font-semibold transition hover:bg-black hover:text-white sm:inline-block"
        >
          View all →
        </Link>
      </div>

      {/* carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={cardContainer}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scroll-padding-left:1px]"
      >
        {list.map((p) => (
          <div
            key={p.handle}
            className="w-[260px] shrink-0 snap-start"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </motion.div>

      <Link
        href="/store"
        className="mt-6 inline-block rounded-full border-[1.5px] border-black px-5 py-2 text-sm font-semibold transition hover:bg-black hover:text-white sm:hidden"
      >
        View all →
      </Link>
    </section>
  );
}
