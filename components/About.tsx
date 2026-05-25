import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Photos — mobile: above text; desktop: right column */}
          <div className="relative order-1 md:order-2">
            {/* Primary photo */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={about.image.primary.src}
                alt={about.image.primary.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Accent photo — desktop only, small inset at bottom-left */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-[32%] aspect-square rounded-xl overflow-hidden border-4 border-brand-cream shadow-lg">
              <Image
                src={about.image.secondary.src}
                alt={about.image.secondary.alt}
                fill
                className="object-cover object-center"
                sizes="20vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-1 md:pr-8">
            <p className="font-body text-brand-rose text-xs font-medium tracking-[0.2em] uppercase mb-4">
              About Ashley
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-charcoal leading-tight mb-3">
              {about.heading}
            </h2>
            <p className="font-heading text-lg text-brand-charcoal/50 mb-8 leading-snug">
              {about.subheading}
            </p>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-brand-charcoal/70 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
