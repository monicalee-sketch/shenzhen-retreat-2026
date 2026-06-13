import { MapPin } from "lucide-react";
import type { Place } from "@/types/retreat";

interface PlaceItemProps {
  place: Place;
}

export default function PlaceItem({ place }: PlaceItemProps) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-slate-100 py-3 last:border-0 last:pb-0">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">
          {place.name}
          {place.nameZh && <span className="ml-1.5 font-normal text-slate-400">{place.nameZh}</span>}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{place.description}</p>
        {place.distance && <p className="mt-1 text-xs font-medium text-teal-600">{place.distance}</p>}
      </div>
      {place.mapUrl && (
        <a
          href={place.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700"
        >
          <MapPin size={12} /> Map
        </a>
      )}
    </div>
  );
}
