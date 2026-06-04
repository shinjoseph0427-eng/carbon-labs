import Link from "next/link";
import VialMarquee from "@/components/VialMarquee";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const trust = [
  { stat: "99%+", label: "Identity purity, third-party tested" },
  { stat: "0–2 days", label: "Processing before dispatch" },
  { stat: "Free", label: "Shipment protection on every order" },
  { stat: "COA", label: "Certificate of Analysis included" },
];

const steps = [
  {
    n: "01",
    title: "Synthesized & lyophilized",
    body: "Each compound is solid-phase synthesized and freeze-dried for shelf stability before it reaches the catalog.",
  },
  {
    n: "02",
    title: "Third-party identity tested",
    body: "Independent labs verify identity and purity by HPLC and mass spectrometry. The COA ships with the vial.",
  },
  {
    n: "03",
    title: "Protected to your bench",
    body: "Vials are cushioned in rigid packaging with full tracking and free shipment protection.",
  },
];

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="container-x pt-16 pb-10 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rise">
            <p className="eyebrow rise rise-1">Research use only · 99%+ identity purity</p>
            <h1 className="font-display rise rise-2 mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Research peptides,
              <br />
              <span className="text-accent">verified to the vial.</span>
            </h1>
            <p className="rise rise-3 mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Carbon Lab supplies qualified researchers with high-purity,
              identity-tested peptides. Certificate of Analysis with every order,
              free shipment protection, USA sourced.
            </p>
            <div className="rise rise-4 mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/store"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
              >
                Shop the catalog
              </Link>
              <Link
                href="/faq"
                className="rounded-lg border px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="rise rise-2">
            <VialMarquee />
          </div>
        </div>
      </section>

      {/* ===== Trust bar ===== */}
      <section className="border-y bg-surface">
        <div className="container-x grid grid-cols-2 gap-px md:grid-cols-4">
          {trust.map((t) => (
            <div key={t.label} className="px-2 py-7 text-center md:text-left">
              <p className="font-display text-2xl font-semibold text-accent">
                {t.stat}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Featured ===== */}
      <section className="container-x py-16 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Catalog</p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight">
              Featured research compounds
            </h2>
          </div>
          <Link
            href="/store"
            className="hidden shrink-0 text-sm font-medium text-accent hover:underline md:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="border-t bg-surface">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow">Quality pipeline</p>
          <h2 className="font-display mt-2 max-w-xl text-3xl font-semibold tracking-tight">
            From synthesis to your bench, documented at every step
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t-2 border-accent pt-5">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="font-display mt-2 text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container-x py-20">
        <div className="rounded-2xl border bg-gradient-to-br from-accent to-accent-deep px-8 py-14 text-center text-white">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            All the research peptides you need, with the peace of mind and
            research community at your fingertips.
          </h2>
          <Link
            href="/store"
            className="mt-7 inline-block rounded-lg bg-white px-7 py-3 text-sm font-semibold text-accent-deep transition hover:bg-accent-soft"
          >
            Shop now
          </Link>
        </div>
      </section>
    </>
  );
}
