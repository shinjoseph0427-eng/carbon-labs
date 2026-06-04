"use client";

import { useEffect, useState } from "react";
import Vial from "./Vial";

const KEY = "carbonlab.verified";
const TONES = ["#1f6f5c", "#2f6f86", "#6a5acd", "#c98a2b", "#3b6fb0", "#2aa39a"];

export default function VerificationGate() {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(false);
  const [researcher, setResearcher] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const verified = window.localStorage.getItem(KEY);
    if (!verified) setOpen(true);
  }, []);

  // lock scroll while gate is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const enter = () => {
    if (!(age && researcher)) return;
    window.localStorage.setItem(KEY, new Date().toISOString());
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/55 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border bg-surface shadow-2xl">
        {/* vial strip */}
        <div className="flex items-end justify-center gap-2 overflow-hidden border-b bg-accent-soft/50 px-6 pt-6">
          {TONES.map((t, i) => (
            <Vial key={i} abbr={["BPC", "TB", "IPA", "NAD", "DSIP", "GHK"][i]} tone={t} className="h-20 w-8" />
          ))}
        </div>

        <div className="px-7 py-7">
          <p className="eyebrow">Carbon Lab</p>
          <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight">
            Researcher verification
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Carbon Lab supplies research peptides exclusively to qualified
            researchers and laboratories for in&nbsp;vitro and laboratory use.
            Please confirm before continuing.
          </p>

          <div className="mt-5 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-lg border bg-bg/60 p-3 text-sm transition hover:border-accent">
              <input
                type="checkbox"
                checked={age}
                onChange={(e) => setAge(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-accent"
              />
              <span>I am at least 21 years of age.</span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-lg border bg-bg/60 p-3 text-sm transition hover:border-accent">
              <input
                type="checkbox"
                checked={researcher}
                onChange={(e) => setResearcher(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-accent"
              />
              <span>
                I confirm I am a qualified researcher purchasing for in&nbsp;vitro /
                laboratory research only — not for human or veterinary use.
              </span>
            </label>
          </div>

          <button
            onClick={enter}
            disabled={!(age && researcher)}
            className="mt-6 w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white transition enabled:hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            Enter Carbon Lab
          </button>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            By proceeding you affirm the statements above are true. Products are
            not for human or veterinary use, not for use in diagnostic
            procedures, and have not been evaluated by the U.S. Food and Drug
            Administration.{" "}
            <a href="/disclaimer" className="text-accent underline underline-offset-2">
              Full disclaimer
            </a>
            .
          </p>
          <p className="mt-3 text-xs text-muted">
            Not a researcher?{" "}
            <a href="https://www.google.com" className="underline underline-offset-2">
              Exit
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
