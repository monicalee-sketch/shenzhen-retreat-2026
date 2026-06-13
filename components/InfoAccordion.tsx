"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface InfoAccordionProps {
  title: string;
  content: string[];
  defaultOpen?: boolean;
}

export default function InfoAccordion({ title, content, defaultOpen = false }: InfoAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-900">{title}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="flex flex-col gap-2 px-5 pb-4 text-sm leading-relaxed text-slate-600">
          {content.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}
