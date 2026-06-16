import Image from "next/image";

interface RetreatImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
}

// Wrapper around next/image with mobile-optimised defaults.
// - WebP/AVIF served automatically by Next.js
// - Lazy-loaded unless priority={true} (use priority only for above-the-fold images)
// - Blur placeholder shown while loading if blurDataURL is supplied
// - Always include a descriptive alt text
export default function RetreatImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  blurDataURL,
}: RetreatImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      quality={80}
      sizes="(max-width: 430px) 100vw, 430px"
      className={className}
    />
  );
}