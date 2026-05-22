import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-20">
      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 md:py-0 bg-brand-cream order-2 md:order-1">
        <div className="max-w-lg w-full">
          <p className="font-body text-brand-sage text-xs font-medium tracking-[0.2em] uppercase mb-5">
            {hero.tagline}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-charcoal leading-[1.1] tracking-tight mb-6">
            {hero.headline}
          </h1>
          <p className="font-body text-brand-charcoal/65 text-lg leading-relaxed mb-10 max-w-md">
            {hero.body}
          </p>
          <a
            href={hero.cta.href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-rose text-white font-body font-medium text-sm hover:bg-brand-rose/85 transition-colors duration-200"
          >
            {hero.cta.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="relative w-full md:w-[55%] h-72 sm:h-96 md:h-auto order-1 md:order-2">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        {/* Subtle warm overlay to blend with cream palette */}
        <div className="absolute inset-0 bg-brand-cream/5" />
      </div>
    </section>
  );
}
