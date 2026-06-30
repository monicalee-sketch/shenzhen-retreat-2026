import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Staff Retreat 2026 — Shenzhen Guide",
    short_name: "SZ Retreat",
    description: "Pocket guide for the Shenzhen Staff Retreat 2026.",
    start_url: "/",
    display: "standalone",
    background_color: "#191919",
    theme_color: "#191919",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}