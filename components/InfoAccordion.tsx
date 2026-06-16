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
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2.5 border-t border-slate-100 px-4 py-3.5">
          {content.map((line, i) => (
            <p key={i} className="text-sm leading-relaxed text-slate-600">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
