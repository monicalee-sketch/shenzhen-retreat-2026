"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyFieldProps {
  label: string;
  value: string;
  /** Optional override for what gets copied (defaults to `value`). */
  copyValue?: string;
}

export default function CopyField({ label, value, copyValue }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-colors active:bg-slate-100"
    >
      <span className="min-w-0">
        <span className="block text-xs font-medium text-slate-500">{label}</span>
        <span className="block truncate text-sm font-medium text-slate-800">{value}</span>
      </span>
      <span
        className={`flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
          copied ? "bg-emerald-100 text-emerald-700" : "bg-white text-brand-gold-dark shadow-sm"
        }`}
      >
        {copied ? (
          <>
            <Check size={14} /> Copied
          </>
        ) : (
          <>
            <Copy size={14} /> Copy
          </>
        )}
      </span>
    </button>
  );
}