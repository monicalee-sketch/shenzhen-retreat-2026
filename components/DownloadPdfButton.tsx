"use client";

import { Download } from "lucide-react";

export default function DownloadPdfButton() {
  const handlePrint = () => {
    document.body.classList.add("print-full");
    const cleanup = () => {
      document.body.classList.remove("print-full");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="no-print flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gold px-4 py-3 text-sm font-semibold text-brand-charcoal shadow-sm active:bg-brand-gold-dark"
    >
      <Download size={18} /> Save / Print Full Guide as PDF
    </button>
  );
}