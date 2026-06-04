import Link from "next/link";
import Vial from "./Vial";
import { fromPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/store/${product.handle}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-surface transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="relative grid h-56 place-items-center overflow-hidden bg-gradient-to-b from-accent-soft/40 to-surface">
        <span className="absolute left-3 top-3 rounded-full border bg-surface/80 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-accent">
          {product.purity} pure
        </span>
        <Vial
          abbr={product.abbr}
          tone={product.tone}
          className="h-44 w-auto transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{product.category}</p>
        <h3 className="font-display mt-1 text-lg font-semibold tracking-tight">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-soft">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <span className="text-sm text-muted">
            from{" "}
            <span className="font-semibold text-ink">${fromPrice(product)}</span>
          </span>
          <span className="text-sm font-medium text-accent transition group-hover:translate-x-0.5">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
