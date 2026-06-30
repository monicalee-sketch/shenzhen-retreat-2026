"use client";

import { useState } from "react";
import { ExternalLink, Copy, Check } from "lucide-react";
import type { QRItem } from "@/types/retreat";

interface QRBlockProps {
  item: QRItem;
}

const QR_API = "https://api.qrserver.com/v1/create-qr-code";

function isPlaceholder(url: string) {
  return url.includes("example.com") || url.startsWith("[");
}

export default function QRBlock({ item }: QRBlockProps) {
  const [copied, setCopied] = useState(false);

  const linkUrl = item.linkUrl ?? item.data;
  const pending = isPlaceholder(item.data);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* unavailable */ }
  };

  return (
    <div className="print-avoid-break flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div>
        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
        {item.description && (
          <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{item.description}</p>
        )}
      </div>

      {pending ? (
        <div className="flex h-32 items-center justify-center rounded-xl bg-amber-50">
          <div className="text-center">
            <span className="block text-xs font-semibold text-amber-600">Pending</span>
            <span className="mt-0.5 block text-xs text-amber-500">Link not yet configured</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${QR_API}/?data=${encodeURIComponent(item.data)}&size=120x120&margin=1`}
            alt={`QR code for ${item.label}`}
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="shrink-0 rounded-xl ring-1 ring-slate-100"
          />
          <div className="no-print flex min-w-0 flex-1 flex-col gap-2">
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-3 py-2.5 text-sm font-semibold text-brand-charcoal shadow-sm active:bg-brand-gold-dark"
            >
              <ExternalLink size={15} /> Open link
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-700 active:bg-slate-200"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}