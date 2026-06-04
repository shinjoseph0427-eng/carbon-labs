"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

export default function BuyBox({ product }: { product: Product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="rounded-xl border bg-surface p-6">
      {/* variant */}
      <p className="eyebrow">Size</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {product.variants.map((v) => {
          const active = v.size === variant.size;
          return (
            <button
              key={v.size}
              onClick={() => {
                setVariant(v);
                setAdded(false);
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                active
                  ? "border-accent bg-accent-soft text-accent-deep"
                  : "hover:border-accent"
              }`}
            >
              {v.size}
            </button>
          );
        })}
      </div>

      {/* price */}
      <div className="mt-6 flex items-end justify-between">
        <span className="font-display text-3xl font-semibold">
          ${variant.price}
        </span>
        <div className="flex items-center rounded-lg border">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-ink-soft hover:text-ink"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-2 text-ink-soft hover:text-ink"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => setAdded(true)}
        className="mt-5 w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
      >
        {added ? `✓ Added ${qty} × ${variant.size} to cart` : "Add to cart"}
      </button>

      <ul className="mt-5 space-y-2 border-t pt-5 text-sm text-ink-soft">
        <li className="flex items-center gap-2">
          <span className="text-accent">✓</span> {product.purity} identity purity
        </li>
        <li className="flex items-center gap-2">
          <span className="text-accent">✓</span> Certificate of Analysis included
        </li>
        <li className="flex items-center gap-2">
          <span className="text-accent">✓</span> Free shipment protection over $150
        </li>
      </ul>

      <p className="mt-5 rounded-lg bg-bg p-3 text-xs leading-relaxed text-muted">
        For laboratory research use only. Not for human or veterinary use. Not
        evaluated by the U.S. FDA.
      </p>
    </div>
  );
}
