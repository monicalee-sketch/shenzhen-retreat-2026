import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-6 px-4 pt-10 pb-4">
      <div className="mx-auto max-w-xl">
        {title && <h2 className="text-xl font-bold tracking-tight text-slate-900">{title}</h2>}
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
        <div className="mt-4 flex flex-col gap-3">{children}</div>
      </div>
    </section>
  );
}
