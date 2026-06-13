"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled — no action needed.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-100 active:bg-slate-50"
    >
      {copied ? <Check size={18} /> : <Share2 size={18} />}
      {copied ? "Link copied" : "Share this guide"}
    </button>
  );
}