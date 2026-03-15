export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
            Find vej
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Find os i Odense
          </h2>
          <p className="text-base md:text-lg text-charcoal/70 max-w-xl mx-auto">
            Vi ligger centralt i Odense S og er nemme at nå med offentlig
            transport og privatbil.
          </p>
        </div>

        {/* Map container */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-sand">
          <iframe
            title="Adam Ortopædi ApS placering på kort"
            src="https://maps.google.com/maps?q=Højbyvej+4%2C+5260+Odense+S%2C+Danmark&output=embed&hl=da"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Maps kort der viser Adam Ortopædi ApS på Højbyvej 4, 5260 Odense S"
          />
        </div>

        {/* Address below map */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-charcoal/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-charcoal">
              Højbyvej 4, 5260 Odense S
            </span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-sand" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <a
              href="tel:+4521356312"
              className="text-sm font-medium text-charcoal hover:text-teal transition-colors duration-200"
            >
              21 35 63 12
            </a>
          </div>
          <div className="hidden sm:block w-px h-5 bg-sand" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-charcoal">
              Man–fre: 8:00–16:00
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
