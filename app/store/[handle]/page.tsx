import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Vial from "@/components/Vial";
import BuyBox from "@/components/BuyBox";
import ProductCard from "@/components/ProductCard";
import { products, getProduct, buildSpecs, POLICY } from "@/lib/products";

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
    title: `${product.name} — ${product.subtitle}`,
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

  const specs = buildSpecs(product.productType);
  const related = products
    .filter((p) => p.handle !== product.handle && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="container-x py-10">
      {/* breadcrumb */}
      <nav className="text-sm text-gray-600">
        <Link href="/store" className="hover:text-black">
          Store
        </Link>{" "}
        / <span className="text-black">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* visual */}
        <div
          className={`grid place-items-center rounded-2xl ${product.card} py-12`}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={620}
              priority
              className="h-[26rem] w-auto object-contain drop-shadow-xl"
            />
          ) : (
            <Vial abbr={product.abbr} tone={product.tone} className="h-80 w-auto" />
          )}
        </div>

        {/* info */}
        <div>
          <p className="eyebrow">{product.subtitle}</p>
          <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-5 leading-relaxed text-gray-600">
            {product.description}
          </p>

          <div className="mt-7">
            <BuyBox product={product} />
          </div>
        </div>
      </div>

      {/* lower content */}
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-12">
          {/* research applications */}
          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Research Applications
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {product.name} is commonly referenced in studies related to:
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  {a}
                </li>
              ))}
            </ul>
          </section>

          {/* blend composition */}
          {product.blend && (
            <section>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Blend Composition
              </h2>
              <dl className="mt-4 overflow-hidden rounded-xl border">
                {product.blend.items.map((it) => (
                  <div
                    key={it.name}
                    className="flex items-center justify-between border-b px-5 py-3 text-sm"
                  >
                    <dt className="font-medium">{it.name}</dt>
                    <dd className="font-mono text-gray-600">{it.amount}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between bg-gray-50 px-5 py-3 text-sm">
                  <dt className="font-bold">Total Blend</dt>
                  <dd className="font-mono font-bold">{product.blend.total}</dd>
                </div>
              </dl>
            </section>
          )}

          {/* specifications */}
          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Product Specifications
            </h2>
            <dl className="mt-4 grid gap-px overflow-hidden rounded-xl border bg-line sm:grid-cols-2">
              {specs.map((s) => (
                <div key={s.label} className="bg-white px-5 py-4">
                  <dt className="text-xs uppercase tracking-wide text-gray-400">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-black">{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {/* policy sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {[
            { h: "Testing & Documentation", b: POLICY.testing },
            { h: "Storage", b: POLICY.storage },
            { h: "Sales Policy", b: POLICY.sales },
            { h: "Disclaimer", b: POLICY.disclaimer },
          ].map((s) => (
            <div key={s.h} className="rounded-xl border bg-white p-5">
              <h3 className="font-display text-base font-bold">{s.h}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-gray-600">
                {s.b}
              </p>
            </div>
          ))}
        </aside>
      </div>

      {/* related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Related products
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
