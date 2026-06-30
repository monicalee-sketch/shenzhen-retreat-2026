import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PullToRefresh from "@/components/PullToRefresh";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Staff Retreat 2026 — Shenzhen Guide",
  description: "Your pocket guide for the Shenzhen Staff Retreat 2026 — itinerary, hotel info, getting around, and key contacts.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SZ Retreat 2026",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#191919",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <PullToRefresh>{children}</PullToRefresh>
      </body>
    </html>
  );
}