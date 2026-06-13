import type { QRItem } from "@/types/retreat";

interface QRBlockProps {
  item: QRItem;
}

// Renders a QR code for `item.data` via a public QR image API.
// To use a custom-designed QR image instead, drop a file into `/public/qr/`
// and swap the `src` below for `/qr/your-file.png`.
export default function QRBlock({ item }: QRBlockProps) {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(item.data)}`;

  return (
    <div className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={qrSrc}
        alt={`QR code: ${item.label}`}
        width={88}
        height={88}
        className="h-22 w-22 shrink-0 rounded-xl ring-1 ring-slate-100"
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
        {item.description && <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.description}</p>}
      </div>
    </div>
  );
}