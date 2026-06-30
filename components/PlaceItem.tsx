import { MapPin, AlertTriangle } from "lucide-react";
import type { Place } from "@/types/retreat";

interface PlaceItemProps {
  place: Place;
}

export default function PlaceItem({ place }: PlaceItemProps) {
  const mapUrl = place.amapUrl ?? place.fallbackUrl;
  const mapLabel = place.amapUrl ? "Amap" : "Maps";

  return (
    <div className="border-b border-slate-100 py-3 last:border-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">
            {place.name}
            {place.nameZh && (
              <span className="ml-1.5 font-normal text-slate-400">{place.nameZh}</span>
            )}
          </p>
          <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{place.description}</p>
          {place.distance && (
            <p className="mt-1 text-xs font-medium text-brand-gold-dark">{place.distance}</p>
          )}
        </div>
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="no-print flex shrink-0 items-center gap-1 rounded-full bg-brand-gold-100 px-2.5 py-1.5 text-xs font-semibold text-brand-gold-dark"
          >
            <MapPin size={11} /> {mapLabel}
          </a>
        )}
      </div>
      {place.note && (
        <p className="mt-2 flex items-start gap-1.5 rounded-xl bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-700">
          <AlertTriangle size={13} className="mt-0.5 shrink-0" />
          {place.note}
        </p>
      )}
    </div>
  );
}