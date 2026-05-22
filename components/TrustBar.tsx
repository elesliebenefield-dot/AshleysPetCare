import Image from "next/image";
import { trust } from "@/lib/content";

export default function TrustBar() {
  return (
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Quote + Rover signal */}
          <div className="order-2 md:order-1">
            <div className="w-8 h-0.5 bg-brand-rose mb-8" />
            <blockquote className="font-heading text-2xl md:text-3xl text-white leading-snug mb-8">
              &ldquo;{trust.statement}&rdquo;
            </blockquote>
            <div className="pt-6 border-t border-white/10">
              <p className="font-body text-white/45 text-sm leading-relaxed">
                {trust.rover}
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative aspect-square rounded-2xl overflow-hidden order-1 md:order-2">
            <Image
              src={trust.image.src}
              alt={trust.image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
