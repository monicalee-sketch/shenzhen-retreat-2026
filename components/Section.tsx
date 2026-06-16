import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-4 px-4 pt-8 pb-2">
      <div className="mx-auto max-w-xl">
        {title && (
          <h2 className="text-lg font-bold tracking-tight text-slate-900">{title}</h2>
        )}
        {description && (
          <p className="mt-0.5 text-sm text-slate-400">{description}</p>
        )}
        <div className="mt-3 flex flex-col gap-3">{children}</div>
      </div>
    </section>
  );
}
