import Vial from "./Vial";

const ROW = [
  { abbr: "BPC", tone: "#1f6f5c" },
  { abbr: "TB", tone: "#2f6f86" },
  { abbr: "NAD", tone: "#c98a2b" },
  { abbr: "IPA", tone: "#6a5acd" },
  { abbr: "DSIP", tone: "#3b6fb0" },
  { abbr: "GHK", tone: "#2aa39a" },
  { abbr: "H2O", tone: "#9aa6b2" },
];

export default function VialMarquee() {
  const items = [...ROW, ...ROW];
  return (
    <div className="relative overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="marquee-track gap-6 py-2">
        {items.map((v, i) => (
          <div
            key={i}
            className="grid h-40 w-28 shrink-0 place-items-center rounded-xl border bg-surface"
          >
            <Vial abbr={v.abbr} tone={v.tone} className="h-32 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
