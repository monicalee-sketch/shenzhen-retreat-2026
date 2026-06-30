import Image from "next/image";
import { Camera } from "lucide-react";

interface SectionImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function SectionImage({ src, alt, className = "" }: SectionImageProps) {
  if (!src) {
    return (
      <div
        className={`flex h-40 w-full items-center justify-center rounded-2xl bg-slate-50 ${className}`}
        aria-hidden="true"
      >
        <Camera size={28} className="text-slate-300" />
      </div>
    );
  }

  return (
    <div className={`relative h-40 w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        decoding="async"
        quality={80}
        sizes="(max-width: 430px) 100vw, 430px"
        className="object-cover"
      />
    </div>
  );
}
