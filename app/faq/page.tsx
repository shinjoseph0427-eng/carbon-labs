import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Carbon Lab research peptides — purity, testing, storage, shipping, and research use.",
};

const faqs = [
  {
    q: "What does “research use only” mean?",
    a: "All Carbon Lab products are sold strictly for in-vitro and laboratory research. They are not intended for human or veterinary use, not for diagnostic procedures, and have not been evaluated by the U.S. FDA. Products should only be handled by qualified professionals.",
  },
  {
    q: "How is purity verified?",
    a: "Every compound is third-party identity tested by HPLC and mass spectrometry. We target 99%+ identity purity, and a Certificate of Analysis (COA) reflecting test results at time of analysis is included with each order.",
  },
  {
    q: "How should peptides be stored?",
    a: "Lyophilized (freeze-dried) peptides are shelf-stable and best kept cool and dry, away from light. Once reconstituted, store refrigerated and use within the timeframe appropriate to the compound and your research protocol.",
  },
  {
    q: "What is bacteriostatic water for?",
    a: "Bacteriostatic water (0.9% benzyl alcohol) is used to reconstitute lyophilized compounds for laboratory handling. It is listed under Accessories in the store.",
  },
  {
    q: "Do you provide a Certificate of Analysis?",
    a: "Yes. A COA is included with every order and documents identity and purity at the time of testing. It does not guarantee outcomes in specific research applications.",
  },
  {
    q: "Where do you ship?",
    a: "We currently ship to all 50 US states, including Alaska and Hawaii, plus PO Boxes and APO/FPO addresses on standard shipping. International shipping is coming soon.",
  },
  {
    q: "Who can purchase?",
    a: "Purchasers must be at least 21 years of age and qualified researchers buying for legitimate in-vitro / laboratory research only. See the full disclaimer for details.",
  },
];

export default function FAQPage() {
  return (
    <div className="container-x max-w-3xl py-14">
      <p className="eyebrow">Support</p>
      <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight">
        Frequently asked questions
      </h1>
      <p className="mt-3 text-ink-soft">
        Quality, testing, storage, and shipping — answered. Still have a
        question?{" "}
        <a href="mailto:support@carbonlab.example" className="text-accent underline underline-offset-2">
          Contact support
        </a>
        .
      </p>

      <div className="mt-10 divide-y rounded-xl border bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6 py-5 [&_summary]:cursor-pointer">
            <summary className="flex list-none items-center justify-between gap-4 font-medium">
              {f.q}
              <span className="text-accent transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
