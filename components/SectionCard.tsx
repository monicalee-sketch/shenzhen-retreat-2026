import type { ReactNode } from "react";

interface SectionCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({ title, subtitle, children, className = "" }: SectionCardProps) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 ${className}`}>
      {title && (
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      )}
      {subtitle && (
        <p className="mt-0.5 text-xs text-slate-400">{subtitle}</p>
      )}
      <div className={title || subtitle ? "mt-3" : ""}>{children}</div>
    </div>
  );
}
