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
      <div className="flex flex-1 flex-col overflow-hidden p-3 md:p-6">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="eyebrow">Catalog</p>
            <p className="font-display text-base font-semibold tracking-tight md:text-lg">
              Research peptide store
            </p>
          </div>
          <span className="hidden rounded-full border bg-surface px-3 py-1 font-mono text-[0.65rem] text-accent sm:inline">
            99%+ identity purity
          </span>
        </div>

        <div className="mt-3 grid flex-1 grid-cols-3 gap-2 md:mt-4 md:gap-3">
          {tiles.map((p) => (
            <div
              key={p.handle}
              className="flex flex-col overflow-hidden rounded-lg border bg-surface"
            >
              <div className={`grid flex-1 place-items-center ${p.card} p-1`}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-12 w-auto object-contain md:h-24"
                  />
                ) : (
                  <Vial abbr={p.abbr} tone={p.tone} className="h-12 w-auto md:h-24" />
                )}
              </div>
              <div className="px-2 py-1.5 md:px-3 md:py-2">
                <p className="truncate text-[0.7rem] font-semibold md:text-xs">
                  {p.name}
                </p>
                <p className="text-[0.65rem] text-muted md:text-[0.7rem]">
                  ${fromPrice(p)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
