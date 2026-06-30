import Link from "next/link";
import { ArrowLeft, MapPin, Sparkles } from "lucide-react";
import { halalGuideData } from "@/data/halal";
import SectionCard from "@/components/SectionCard";
import PlaceItem from "@/components/PlaceItem";
import InfoAccordion from "@/components/InfoAccordion";

export const metadata = {
  title: "Muslim-Friendly Guide — Shenzhen Staff Retreat 2026",
};

export default function HalalGuidePage() {
  const { overview, mosque, restaurants, attractions, wellness, practicalTips, guangzhouTrip } = halalGuideData;

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-3 px-4 pb-16 pt-6">
      <Link href="/" className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
        <ArrowLeft size={15} /> Back to retreat guide
      </Link>

      <div className="rounded-3xl bg-gradient-to-br from-brand-charcoal to-brand-charcoal-soft p-6 text-white shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-light">Shenzhen Staff Retreat · 15–18 July 2026</p>
        <h1 className="mt-1 text-2xl font-bold leading-tight">Muslim-Friendly Travel Guide</h1>
        <p className="mt-4 text-sm leading-relaxed text-white/85">{overview}</p>
      </div>

      <SectionCard title="Prayer facilities">
        <PlaceItem place={mosque} />
        <ul className="mt-3 flex flex-col gap-2">
          {mosque.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <Sparkles size={14} className="mt-0.5 shrink-0 text-brand-gold-dark" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Halal restaurants near Futian">
        <div className="flex flex-col">
          {restaurants.map((place) => (
            <PlaceItem key={place.name} place={place} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Must-visit attractions">
        <div className="flex flex-col">
          {attractions.map((place) => (
            <PlaceItem key={place.name} place={place} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Wellness & spa">
        <div className="flex flex-col gap-3">
          {wellness.map((w) => (
            <div key={w.name} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
              <p className="text-sm font-semibold text-slate-900">{w.name}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{w.description}</p>
              {w.notes && <p className="mt-1 text-xs text-slate-400">{w.notes}</p>}
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="flex flex-col gap-2">
        {practicalTips.map((tip) => (
          <InfoAccordion key={tip.title} title={tip.title} content={tip.content} />
        ))}
      </div>

      <SectionCard title="Optional side trip: Guangzhou">
        <p className="text-sm leading-relaxed text-slate-600">{guangzhouTrip.overview}</p>

        <dl className="mt-3 grid grid-cols-2 gap-y-3 text-sm">
          {guangzhouTrip.quickFacts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs text-slate-400">{f.label}</dt>
              <dd className="font-medium text-slate-700">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex flex-col">
          <PlaceItem place={guangzhouTrip.mosque} />
          <PlaceItem place={guangzhouTrip.foodArea} />
        </div>

        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Suggested itinerary</p>
        <ol className="mt-2 flex flex-col gap-2 border-l-2 border-slate-100 pl-4">
          {guangzhouTrip.itinerary.map((step, i) => (
            <li key={i} className="relative text-sm leading-relaxed text-slate-600">
              <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-brand-gold" />
              {step}
            </li>
          ))}
        </ol>

        <p className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs leading-relaxed text-slate-500">
          <MapPin size={14} className="mt-0.5 shrink-0" />
          {guangzhouTrip.verdict}
        </p>
      </SectionCard>
    </main>
  );
}