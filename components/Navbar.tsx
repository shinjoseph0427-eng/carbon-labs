"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/store", label: "Products" },
  { href: "/faq", label: "Research" },
  { href: "/shipping", label: "Partner" },
  { href: "/disclaimer", label: "Contact" },
];

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 3h2l2.2 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21 7H6" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-white/95 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        {/* logo */}
        <Link href="/" className="flex items-center" aria-label="Carbon Labs home">
          <Image
            src="/logo.png"
            alt="Carbon Labs"
            width={569}
            height={186}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* center links */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-black/70 transition hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* right icons */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Account"
            className="grid h-9 w-9 place-items-center rounded-full text-black/80 transition hover:bg-gray-100"
          >
            <UserIcon />
          </button>
          <button
            aria-label="Cart"
            className="relative grid h-9 w-9 place-items-center rounded-full text-black/80 transition hover:bg-gray-100"
          >
            <CartIcon />
            <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-black text-[0.6rem] font-bold text-white">
              0
            </span>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="ml-1 grid h-9 w-9 place-items-center rounded-full md:hidden"
          >
            <span className="space-y-1">
              <span className="block h-0.5 w-4 bg-black" />
              <span className="block h-0.5 w-4 bg-black" />
              <span className="block h-0.5 w-4 bg-black" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-black/70"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
