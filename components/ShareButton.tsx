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
      try { await navigator.share({ title, url }); } catch { /* cancelled */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* unavailable */ }
  };

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:text-slate-600 active:text-slate-700"
      >
        {copied ? <Check size={13} /> : <Share2 size={13} />}
        {copied ? "Link copied" : "Share this guide"}
      </button>
    </div>
  );
}
