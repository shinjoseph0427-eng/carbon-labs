"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setDone(true);
      }}
      className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
    >
      {done ? (
        <p className="text-sm text-accent">
          ✓ Subscribed — watch your inbox for catalog updates.
        </p>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@lab.org"
            className="flex-1 rounded-lg border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent"
          >
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}
