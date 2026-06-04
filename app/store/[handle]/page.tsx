import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Vial from "@/components/Vial";
import BuyBox from "@/components/BuyBox";
import ProductCard from "@/components/ProductCard";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Not found" };
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const specs: [string, string | undefined][] = [
    ["Identity purity", product.purity],
    ["Molecular formula", product.formula],
    ["Molecular weight", product.molWeight],
    ["CAS number", product.cas],
    ["Sequence", product.sequence],
  ];

  const related = products
    .filter((p) => p.handle !== product.handle && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="container-x py-10">
      {/* breadcrumb */}
      <nav className="text-sm text-muted">
        <Link href="/store" className="hover:text-ink">
          Store
        </Link>{" "}
        / <span className="text-ink-soft">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* visual */}
        <div className="grid place-items-center rounded-2xl border bg-gradient-to-b from-accent-soft/40 to-surface py-12">
          <Vial abbr={product.abbr} tone={product.tone} className="h-80 w-auto" />
        </div>

        {/* info */}
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-1 text-ink-soft">{product.tagline}</p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            {product.description}
          </p>

          <div className="mt-7">
            <BuyBox product={product} />
          </div>
        </div>
      </div>

      {/* specs */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Specifications
        </h2>
        <dl className="mt-5 grid gap-px overflow-hidden rounded-xl border bg-line sm:grid-cols-2">
          {specs
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k} className="bg-surface px-5 py-4">
                <dt className="text-xs uppercase tracking-wide text-muted">{k}</dt>
                <dd className="font-mono mt-1 text-sm break-words text-ink">{v}</dd>
              </div>
            ))}
        </dl>
      </section>

      {/* related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Related compounds
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
