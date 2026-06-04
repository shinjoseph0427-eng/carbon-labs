import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important information about Carbon Lab research peptides — research use only, no medical advice, buyer responsibility, and limitation of liability.",
};

type Section = { h: string; p?: string; intro?: string; list?: string[] };

const sections: Section[] = [
  {
    h: "Research use only",
    p: "All products sold by Carbon Lab are intended for research and laboratory use only. They are not intended for human or veterinary use, and are not to be used as food additives, drugs, cosmetics, or household chemicals.",
  },
  {
    h: "General disclaimer",
    p: "The information on this website is for general informational purposes only. While we strive for accuracy, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information or products contained on this website.",
  },
  {
    h: "Product use disclaimer",
    intro: "All products sold by Carbon Lab:",
    list: [
      "Are sold strictly for in-vitro research and laboratory use only",
      "Are not intended for human or veterinary use",
      "Are not intended for use as food additives, drugs, cosmetics, or household chemicals",
      "Are not intended to diagnose, treat, cure, or prevent any disease",
      "Should only be handled by qualified and licensed professionals",
    ],
  },
  {
    h: "No medical advice",
    p: "Nothing on this website should be construed as providing medical advice. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.",
  },
  {
    h: "Research information",
    p: "Any research information, scientific data, or study references provided on this website are for educational and informational purposes only. Such information does not constitute endorsement of any particular use of our products. Researchers are responsible for verifying all information and conducting their own due diligence before using any products.",
  },
  {
    h: "Buyer responsibility",
    intro: "By purchasing products from Carbon Lab, you represent and warrant that:",
    list: [
      "You are at least 21 years of age",
      "You are purchasing products for legitimate research purposes only",
      "You will comply with all applicable laws and regulations regarding the purchase, possession, and use of our products",
      "You will not use products in any manner inconsistent with their intended research use",
      "You accept full responsibility for the proper handling, storage, and use of products",
    ],
  },
  {
    h: "Product quality disclaimer",
    p: "While we strive to provide the highest quality research-grade peptides with 99%+ purity as verified by third-party testing, results may vary based on research conditions, storage, handling, and other factors beyond our control. Certificate of Analysis (CoA) documents reflect the quality at the time of testing and do not guarantee outcomes in specific research applications.",
  },
  {
    h: "Limitation of liability",
    p: "In no event shall Carbon Lab, its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our products or the information provided on this website. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.",
  },
  {
    h: "Indemnification",
    p: "You agree to indemnify, defend, and hold harmless Carbon Lab, its owners, officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from: (a) your use, misuse, or handling of our products, including any injury, illness, or damage resulting from administration to any human or animal; (b) any statements, health claims, dosing recommendations, or representations you make to third parties regarding our products; (c) any advertising, marketing, or promotional content you create referencing our products; (d) any violation of this disclaimer or our Terms of Service; or (e) any regulatory action brought against Carbon Lab as a result of your actions or statements. This indemnification survives the termination of your account.",
  },
  {
    h: "External links",
    p: "This website may contain links to external websites. We have no control over the content and nature of these sites and are not responsible for their content or privacy practices. The inclusion of any links does not imply endorsement or recommendation.",
  },
  {
    h: "Changes to this disclaimer",
    p: "We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to this page. Your continued use of our website and products after any changes constitutes acceptance of the modified disclaimer.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="container-x max-w-3xl py-14">
      <p className="eyebrow">Important notice</p>
      <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight">
        Disclaimer
      </h1>
      <p className="mt-3 text-ink-soft">
        Please read this important information before purchasing from Carbon Lab.
      </p>
      <p className="mt-1 text-sm text-muted">Last updated: January 1, 2026</p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-xl font-semibold">{s.h}</h2>
            {s.p && (
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.p}</p>
            )}
            {s.intro && (
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.intro}</p>
            )}
            {s.list && (
              <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                {s.list.map((li) => (
                  <li key={li} className="flex gap-2">
                    <span className="text-accent">•</span> {li}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border bg-surface p-6 text-sm text-ink-soft">
        <p className="font-medium text-ink">Contact</p>
        <p className="mt-2">
          Questions about this disclaimer? Email{" "}
          <a href="mailto:legal@carbonlab.example" className="text-accent underline underline-offset-2">
            legal@carbonlab.example
          </a>{" "}
          or{" "}
          <a href="mailto:support@carbonlab.example" className="text-accent underline underline-offset-2">
            support@carbonlab.example
          </a>
          .
        </p>
      </div>
    </div>
  );
}
