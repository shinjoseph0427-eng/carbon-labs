import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-display text-sm font-bold text-white">
              C
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Carbon Lab
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Research-grade peptides with 99%+ identity purity. Third-party
            identity tested, Certificate of Analysis included with every order.
            For laboratory and in-vitro research use only.
          </p>
          <p className="eyebrow mt-6">Research updates</p>
          <p className="mb-3 mt-1 text-sm text-ink-soft">
            Catalog updates &amp; new research compounds. No spam.
          </p>
          <Newsletter />
        </div>

        <div>
          <p className="eyebrow">Catalog</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li><Link href="/store" className="hover:text-ink">All peptides</Link></li>
            <li><Link href="/store?cat=Single+Peptides" className="hover:text-ink">Single peptides</Link></li>
            <li><Link href="/store?cat=Blends" className="hover:text-ink">Blends</Link></li>
            <li><Link href="/store?cat=Accessories" className="hover:text-ink">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Information</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li><Link href="/faq" className="hover:text-ink">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-ink">Shipping</Link></li>
            <li><Link href="/disclaimer" className="hover:text-ink">Disclaimer</Link></li>
            <li><a href="mailto:support@carbonlab.example" className="hover:text-ink">support@carbonlab</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Carbon Lab. Research use only.</p>
          <p>
            Not for human or veterinary use · Not evaluated by the U.S. FDA ·
            Handle by qualified professionals only.
          </p>
        </div>
      </div>
    </footer>
  );
}
