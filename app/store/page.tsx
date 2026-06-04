import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Store — Research Peptides",
  description:
    "Browse Carbon Lab's catalog of identity-tested research peptides, blends, and laboratory accessories. 99%+ purity, COA included.",
};

const categories = ["All", "Peptides", "Compounds", "Blends"] as const;

export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const active = cat && categories.includes(cat as (typeof categories)[number]) ? cat : "All";
  const list =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="container-x py-14">
      <header className="max-w-2xl">
        <p className="eyebrow">Catalog</p>
        <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight">
          Research peptide store
        </h1>
        <p className="mt-3 text-ink-soft">
          Every compound is third-party identity tested and ships with a
          Certificate of Analysis. For laboratory and in-vitro research use only.
        </p>
      </header>

      {/* Filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = c === active;
          const href = c === "All" ? "/store" : `/store?cat=${encodeURIComponent(c)}`;
          return (
            <Link
              key={c}
              href={href}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </Link>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </div>
    </div>
  );
}
