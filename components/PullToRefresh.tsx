"use client";

import { useRef, useState, type ReactNode, type TouchEvent } from "react";
import { RefreshCw } from "lucide-react";

const PULL_THRESHOLD = 70;
const MAX_PULL = 110;

interface PullToRefreshProps {
  children: ReactNode;
}

export default function PullToRefresh({ children }: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startY = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    if (window.scrollY === 0 && !refreshing) {
      startY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (startY.current === null || refreshing) return;
    const delta = e.touches[0].clientY - startY.current;
    if (delta > 0 && window.scrollY === 0) {
      setDragging(true);
      setPullDistance(Math.min(delta, MAX_PULL));
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    if (pullDistance >= PULL_THRESHOLD) {
      setRefreshing(true);
      setPullDistance(PULL_THRESHOLD);
      window.location.reload();
    } else {
      setPullDistance(0);
    }
    startY.current = null;
  };

  const progress = Math.min(pullDistance / PULL_THRESHOLD, 1);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-50 flex justify-center"
        style={{ height: pullDistance, opacity: progress }}
        aria-hidden="true"
      >
        <span className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
          <RefreshCw
            size={16}
            className={`text-brand-gold-dark ${refreshing ? "animate-spin" : ""}`}
            style={{ transform: refreshing ? undefined : `rotate(${progress * 360}deg)` }}
          />
        </span>
      </div>
      <div
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: dragging ? undefined : "transform 200ms ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}