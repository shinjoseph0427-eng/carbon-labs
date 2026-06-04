"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/store", label: "Store" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping", label: "Shipping" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-bg/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-display text-sm font-bold text-white">
            C
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Carbon<span className="text-accent"> Lab</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/store"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-accent"
          >
            Shop peptides
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md border md:hidden"
          aria-label="Menu"
        >
          <span className="space-y-1">
            <span className="block h-0.5 w-4 bg-ink" />
            <span className="block h-0.5 w-4 bg-ink" />
            <span className="block h-0.5 w-4 bg-ink" />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t bg-surface px-6 py-4 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-ink-soft"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/store"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-ink px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            Shop peptides
          </Link>
        </nav>
      )}
    </header>
  );
}
