import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: BreadcrumbItem[]
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal-light pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-sage/5 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Brødkrumme"
            className="flex items-center gap-2 text-white/60 text-sm mb-6"
          >
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    className="w-3 h-3 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/90 font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow line */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-sage" aria-hidden="true" />
          <span className="text-sage text-sm font-semibold uppercase tracking-widest">
            Adam Ortopædi
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}

        {/* Decorative bottom line */}
        <div className="flex items-center gap-3 mt-8">
          <span className="h-1 w-16 bg-sage rounded-full" aria-hidden="true" />
          <span className="h-1 w-8 bg-sage/40 rounded-full" aria-hidden="true" />
          <span className="h-1 w-4 bg-sage/20 rounded-full" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
