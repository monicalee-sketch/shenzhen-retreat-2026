import type { AppItem } from "@/types/retreat";

interface AppCardProps {
  app: AppItem;
}

const BADGE_STYLE: Record<string, string> = {
  Essential:    "bg-brand-gold-100 text-brand-gold-dark",
  "Good to have": "bg-slate-100 text-slate-500",
};

export default function AppCard({ app }: AppCardProps) {
  return (
    <div className="print-avoid-break flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">
            {app.name}
            {app.nameZh && (
              <span className="ml-1.5 font-normal text-slate-400">{app.nameZh}</span>
            )}
          </p>
          <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{app.description}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            BADGE_STYLE[app.badge] ?? "bg-slate-100 text-slate-500"
          }`}
        >
          {app.badge}
        </span>
      </div>

      <p className="rounded-xl bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-500">
        {app.whyNeeded}
      </p>

      {(app.iosUrl || app.androidUrl) && (
        <div className="no-print flex gap-2">
          {app.iosUrl && (
            <a
              href={app.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-white active:opacity-80"
            >
              App Store
            </a>
          )}
          {app.androidUrl && (
            <a
              href={app.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-green-700 px-3 py-2 text-center text-xs font-semibold text-white active:opacity-80"
            >
              Google Play
            </a>
          )}
        </div>
      )}
    </div>
  );
}