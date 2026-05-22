import Image from "next/image";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-sage/8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-body text-brand-rose text-xs font-medium tracking-[0.2em] uppercase mb-4">
            What I Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-charcoal">
            Services
          </h2>
          <p className="font-body text-brand-charcoal/55 mt-4 max-w-xl mx-auto leading-relaxed">
            Every service is tailored to your pet&apos;s individual needs — their schedule, their comfort level, and their personality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-brand-cream border border-brand-sage/15 hover:border-brand-rose/25 hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="w-6 h-0.5 bg-brand-rose mb-4 group-hover:w-10 transition-all duration-300" />
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-brand-charcoal/60 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
