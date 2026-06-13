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
      className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white px-3 py-4 text-center shadow-sm ring-1 ring-slate-100 transition-transform active:scale-[0.97]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
        <Icon size={20} />
      </span>
      <span className="text-xs font-semibold leading-tight text-slate-700">{link.label}</span>
    </a>
  );
}