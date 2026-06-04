import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Information",
  description:
    "Fast, secure delivery with careful packaging. Free standard shipping on orders over $150, full tracking, and shipment protection on every order.",
};

const options = [
  {
    name: "Standard Shipping",
    eta: "5–7 Business Days",
    blurb: "Reliable ground delivery with full tracking.",
    points: ["FedEx or USPS Ground", "Full tracking included", "Insured package", "Free on orders over $150"],
    tag: "Most Popular",
  },
  {
    name: "2-Day Shipping",
    eta: "2 Business Days",
    blurb: "Fast delivery when you need it sooner.",
    points: ["Guaranteed 2-day delivery", "FedEx or USPS 2-Day", "Full tracking included", "Insured package"],
  },
  {
    name: "Overnight Shipping",
    eta: "Next Business Day",
    blurb: "Fastest delivery option available.",
    points: ["Next-day guarantee", "FedEx or USPS Overnight", "Full tracking included", "Insured package"],
  },
];

const details = [
  {
    title: "Processing time",
    body: "Orders are processed and shipped within 0–2 business days. Orders placed before 2pm EST on weekdays may ship the same day. Every order includes free shipment protection.",
    rows: [
      ["Cut-off time", "2:00 PM EST"],
      ["Business days", "Monday – Friday only"],
      [
        "Holidays",
        "Federal bank holidays observed (New Year's, MLK Day, Presidents' Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas)",
      ],
    ],
  },
  {
    title: "Secure packaging",
    body: "All lyophilized peptides are carefully packaged to ensure they arrive safely. Each vial is cushioned and protected for secure transit.",
    rows: [
      ["Protection", "Vials securely cushioned"],
      ["Packaging", "Sturdy shipping boxes"],
      ["Stability", "Lyophilized for shelf stability"],
    ],
  },
  {
    title: "Order tracking",
    body: "Every order includes full tracking. You'll receive tracking information via email as soon as your order ships. Track your package in real time through our carrier partners.",
    rows: [
      ["Email updates", "Shipped & delivered notifications"],
      ["Real-time tracking", "Via carrier website"],
      ["Support", "Contact us for any issues"],
    ],
  },
  {
    title: "Delivery areas",
    body: "We currently ship to all 50 US states, including Alaska and Hawaii. PO Boxes and APO/FPO addresses are also supported for standard shipping options.",
    rows: [
      ["Continental US", "Full service"],
      ["Alaska & Hawaii", "Extended transit times"],
      ["International", "Coming soon"],
    ],
  },
];

export default function ShippingPage() {
  return (
    <div className="container-x py-14">
      <p className="eyebrow">Shipment protection</p>
      <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight">
        Shipping information
      </h1>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Fast, secure delivery with careful packaging to protect your research
        peptides. Free standard shipping on orders over $150.
      </p>

      {/* options */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {options.map((o) => (
          <div key={o.name} className="relative flex flex-col rounded-xl border bg-surface p-6">
            {o.tag && (
              <span className="absolute right-4 top-4 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-deep">
                {o.tag}
              </span>
            )}
            <h2 className="font-display text-lg font-semibold">{o.name}</h2>
            <p className="mt-1 text-sm text-muted">Calculated at checkout</p>
            <p className="mt-3 font-medium text-accent">{o.eta}</p>
            <p className="mt-2 text-sm text-ink-soft">{o.blurb}</p>
            <ul className="mt-4 space-y-2 border-t pt-4 text-sm text-ink-soft">
              {o.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="text-accent">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-accent bg-accent-soft/50 px-6 py-5 text-sm font-medium text-accent-deep">
        Free standard shipping on orders over $150 — automatically applied at
        checkout.
      </div>

      {/* details */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {details.map((d) => (
          <div key={d.title} className="rounded-xl border bg-surface p-6">
            <h3 className="font-display text-lg font-semibold">{d.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.body}</p>
            <dl className="mt-4 space-y-2 border-t pt-4 text-sm">
              {d.rows.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                  <dt className="shrink-0 font-medium text-ink">{k}:</dt>
                  <dd className="text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* contact */}
      <section className="mt-12 rounded-2xl border bg-gradient-to-br from-accent-soft/60 to-surface px-8 py-10 text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Questions about shipping?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
          Our support team is happy to help with any shipping questions or
          concerns about your order.
        </p>
        <a
          href="mailto:support@carbonlab.example"
          className="mt-5 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
        >
          Contact Support
        </a>
      </section>
    </div>
  );
}
