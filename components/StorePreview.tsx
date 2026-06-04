import Vial from "./Vial";
import { fromPrice, products } from "@/lib/products";

/**
 * A light "app screenshot" of the storefront, designed to sit inside the
 * dark ContainerScroll card. Built from the in-app Vial SVGs so it never
 * depends on external image assets.
 */
export default function StorePreview() {
  const tiles = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-bg text-left">
      {/* faux browser chrome */}
      <div className="flex items-center gap-2 border-b bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 rounded-md bg-bg px-3 py-1 font-mono text-[0.7rem] text-muted">
          carbon-labs.workers.dev/store
        </div>
      </div>

      {/* store body */}
      <div className="flex-1 overflow-hidden p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Catalog</p>
            <p className="font-display text-lg font-semibold tracking-tight">
              Research peptide store
            </p>
          </div>
          <span className="rounded-full border bg-surface px-3 py-1 font-mono text-[0.65rem] text-accent">
            99%+ identity purity
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tiles.map((p) => (
            <div
              key={p.handle}
              className="flex flex-col overflow-hidden rounded-lg border bg-surface"
            >
              <div className={`grid h-20 place-items-center ${p.card} md:h-28`}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.name} className="h-[88%] w-auto object-contain" />
                ) : (
                  <Vial abbr={p.abbr} tone={p.tone} className="h-16 w-auto md:h-24" />
                )}
              </div>
              <div className="px-3 py-2">
                <p className="truncate text-xs font-semibold">{p.name}</p>
                <p className="text-[0.7rem] text-muted">from ${fromPrice(p)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
