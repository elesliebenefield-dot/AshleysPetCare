import { footer, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <p className="font-heading text-lg font-semibold text-white tracking-tight">
              Ashley&apos;s Pet Care
            </p>
            <p className="font-body text-brand-sage text-xs tracking-[0.2em] uppercase mt-1">
              {footer.tagline}
            </p>
            <p className="font-body text-white/40 text-sm mt-4 max-w-xs leading-relaxed">
              {footer.serviceArea}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Bottom row */}
        <div className="pt-6">
          <p className="font-body text-white/25 text-xs text-center">
            {footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
