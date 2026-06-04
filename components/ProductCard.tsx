"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Vial from "./Vial";
import { fromPrice, type Product } from "@/lib/products";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col">
      {/* image area */}
      <Link
        href={`/store/${product.handle}`}
        className={`relative grid aspect-[1/1.1] place-items-center overflow-hidden rounded-2xl ${product.card} transition group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={420}
            className="h-[78%] w-auto object-contain transition group-hover:scale-105"
          />
        ) : (
          <Vial
            abbr={product.abbr}
            tone={product.tone}
            className="h-44 w-auto transition group-hover:scale-105"
          />
        )}
      </Link>

      {/* meta */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight">
            {product.name}
          </h3>
          <p className="text-[13px] text-gray-600">{product.subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-[13px] text-gray-600">From</p>
          <p className="font-bold leading-none">${fromPrice(product).toFixed(2)}</p>
        </div>
      </div>

      {/* actions */}
      <div className="mt-3 flex gap-2">
        <Link
          href={`/store/${product.handle}`}
          className="flex-1 rounded-full border-[1.5px] border-black px-4 py-2 text-center text-[13px] font-semibold text-black transition hover:bg-black hover:text-white"
        >
          Details
        </Link>
        <Link
          href={`/store/${product.handle}`}
          className="flex-1 rounded-full bg-black px-4 py-2 text-center text-[13px] font-semibold text-white transition hover:opacity-85"
        >
          View
        </Link>
      </div>
    </motion.div>
  );
}
