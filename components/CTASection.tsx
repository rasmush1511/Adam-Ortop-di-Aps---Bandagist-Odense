import Link from 'next/link'

interface CTAButton {
  label: string
  href: string
}

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryBtn: CTAButton
  secondaryBtn?: CTAButton
}

export default function CTASection({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
}: CTASectionProps) {
  const isPrimaryExternal =
    primaryBtn.href.startsWith('tel:') ||
    primaryBtn.href.startsWith('mailto:') ||
    primaryBtn.href.startsWith('http')
  const isSecondaryExternal =
    secondaryBtn?.href.startsWith('tel:') ||
    secondaryBtn?.href.startsWith('mailto:') ||
    secondaryBtn?.href.startsWith('http')

  return (
    <section className="relative py-16 md:py-24 bg-teal overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/5 -translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-sage/10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-8 bg-sage/60" aria-hidden="true" />
          <span className="text-sage text-sm font-semibold uppercase tracking-widest">
            Tag det første skridt
          </span>
          <span className="h-px w-8 bg-sage/60" aria-hidden="true" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {isPrimaryExternal ? (
            <a
              href={primaryBtn.href}
              className="inline-flex items-center gap-2 bg-white text-teal px-8 py-4 rounded-full font-bold text-base hover:bg-ivory transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {primaryBtn.label}
            </a>
          ) : (
            <Link
              href={primaryBtn.href}
              className="inline-flex items-center gap-2 bg-white text-teal px-8 py-4 rounded-full font-bold text-base hover:bg-ivory transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {primaryBtn.label}
            </Link>
          )}
          {secondaryBtn && (
            isSecondaryExternal ? (
              <a
                href={secondaryBtn.href}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-teal transition-all duration-200"
              >
                {secondaryBtn.label}
              </a>
            ) : (
              <Link
                href={secondaryBtn.href}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-teal transition-all duration-200"
              >
                {secondaryBtn.label}
              </Link>
            )
          )}
        </div>

        {/* Trust note */}
        <p className="mt-8 text-white/50 text-sm">
          Mandag–fredag 8:00–16:00 &nbsp;·&nbsp; Højbyvej 4, 5260 Odense S
        </p>
      </div>
    </section>
  )
}
