import type { ItineraryDay, ItineraryTag } from "@/types/retreat";
import { Shirt } from "lucide-react";

interface ItineraryCardProps {
  day: ItineraryDay;
}

const tagStyles: Record<ItineraryTag, string> = {
  highlight: "bg-brand-gold-100 text-brand-gold-dark",
  meal: "bg-amber-100 text-amber-700",
  free: "bg-slate-100 text-slate-600",
  travel: "bg-sky-100 text-sky-700",
  group: "bg-violet-100 text-violet-700",
};

const tagLabels: Record<ItineraryTag, string> = {
  highlight: "Highlight",
  meal: "Meal",
  free: "Free time",
  travel: "Travel",
  group: "Group activity",
};

export default function ItineraryCard({ day }: ItineraryCardProps) {
  return (
    <div className="print-avoid-break rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">Day {day.day} · {day.date}</p>
          <h3 className="mt-0.5 text-lg font-bold text-slate-900">{day.label}</h3>
        </div>
      </div>
      <p className="mt-1 text-sm text-slate-500">{day.summary}</p>

      <ol className="mt-4 flex flex-col gap-4 border-l-2 border-slate-100 pl-4">
        {day.events.map((event, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-brand-gold ring-4 ring-white" />
            <p className="text-xs font-semibold text-slate-400">{event.time}</p>
            <div className="mt-0.5 flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-slate-900">{event.title}</p>
              {event.tag && (
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${tagStyles[event.tag]}`}>
                  {tagLabels[event.tag]}
                </span>
              )}
            </div>
            {event.description && <p className="mt-1 text-sm leading-relaxed text-slate-600">{event.description}</p>}
            {event.dressCode && (
              <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Shirt size={13} /> Dress code: {event.dressCode}
              </p>
            )}
          </li>
        ))}
      </ol>

      {day.notes && (
        <p className="mt-4 rounded-2xl bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-500">{day.notes}</p>
      )}
    </div>
  );
}