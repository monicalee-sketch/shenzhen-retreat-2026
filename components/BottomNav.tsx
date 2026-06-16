"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Luggage,
  Building2,
  CalendarDays,
  MapPinned,
  Info,
  Users,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home",           label: "Home",     icon: Home },
  { id: "before-you-go", label: "Prep",      icon: Luggage },
  { id: "hotel",         label: "Hotel",     icon: Building2 },
  { id: "itinerary",     label: "Plan",      icon: CalendarDays },
  { id: "around-hotel",  label: "Nearby",    icon: MapPinned },
  { id: "shenzhen-info", label: "Info",      icon: Info },
  { id: "contacts",      label: "Contacts",  icon: Users },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-100 bg-white/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-xl items-stretch justify-between px-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex flex-1 flex-col items-center justify-center py-2"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  isActive ? "bg-teal-50 text-teal-600" : "text-slate-400"
                }`}
              >
                <Icon size={18} />
              </span>
              {/* Keep height consistent: invisible when not active */}
              <span
                className={`mt-0.5 text-[10px] font-semibold transition-colors ${
                  isActive ? "text-teal-600" : "invisible"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
