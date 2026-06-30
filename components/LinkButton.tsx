import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface LinkButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}

const variantStyles: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary: "bg-brand-gold text-brand-charcoal shadow-sm active:bg-brand-gold-dark",
  secondary: "bg-white text-slate-800 border border-slate-200 shadow-sm active:bg-slate-50",
  ghost: "bg-slate-50 text-slate-700 active:bg-slate-100",
};

export default function LinkButton({ href, label, icon: Icon, variant = "secondary", external = true }: LinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`no-print flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${variantStyles[variant]}`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
      {external && <ArrowUpRight size={15} className="opacity-60" />}
    </a>
  );
}