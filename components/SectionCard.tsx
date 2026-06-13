import type { ReactNode } from "react";

interface SectionCardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({ title, subtitle, children, className = "" }: SectionCardProps) {
  return (
    <div className={`rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 ${className}`}>
      {title && <h3 className="text-base font-semibold text-slate-900">{title}</h3>}
      {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      <div className={title || subtitle ? "mt-3" : ""}>{children}</div>
    </div>
  );
}
