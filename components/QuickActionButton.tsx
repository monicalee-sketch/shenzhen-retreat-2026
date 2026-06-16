import type { QuickLink } from "@/types/retreat";
import { iconMap } from "./icons";

interface QuickActionButtonProps {
  link: QuickLink;
}

export default function QuickActionButton({ link }: QuickActionButtonProps) {
  const Icon = iconMap[link.icon];

  return (
    <a
      href={link.href}
      className="flex flex-col items-center gap-2.5 rounded-2xl bg-white px-2 py-4 text-center shadow-sm ring-1 ring-slate-100 transition-all active:scale-[0.96] active:bg-slate-50"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className="text-[11px] font-semibold leading-tight text-slate-700">{link.label}</span>
    </a>
  );
}
