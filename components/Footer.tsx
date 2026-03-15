import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Forside' },
  { href: '/behandlinger', label: 'Behandlinger' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold text-white block">
                Adam Ortopædi
              </span>
              <span className="text-sm text-white/70">Bandagist Odense</span>
            </div>
            <p className="text-sm text-white/80 italic font-medium mb-4">
              Kvalitet – Omsorg – Tryghed
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Adam Ortopædi ApS er din lokale bandagist i Odense. Vi tilbyder
              individuelle ortopædiske løsninger med fokus på din personlige
              situation og livskvalitet.
            </p>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Vi samarbejder med læger, hospitaler og kommuner for at sikre de
              bedst mulige resultater for vores patienter.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5">
              Hurtige links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:+4521356312"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-3 h-3 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  Ring nu
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-sage mt-0.5 flex-shrink-0"
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
                <span className="text-sm text-white/70 leading-relaxed">
                  Højbyvej 4<br />
                  5260 Odense S
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-sage flex-shrink-0"
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
                <a
                  href="tel:+4521356312"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  21 35 63 12
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-sage flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:info@adamortopaedi.dk"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  info@adamortopaedi.dk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening hours */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5">
              Åbningstider
            </h3>
            <div className="flex flex-col gap-1.5">
              {[
                { day: 'Mandag', hours: '08:00 – 16:00' },
                { day: 'Tirsdag', hours: '08:00 – 16:00' },
                { day: 'Onsdag', hours: '08:00 – 16:00' },
                { day: 'Torsdag', hours: '08:00 – 16:00' },
                { day: 'Fredag', hours: '08:00 – 16:00' },
                { day: 'Lørdag', hours: 'Lukket' },
                { day: 'Søndag', hours: 'Lukket' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-center gap-0">
                  <span className="text-sm text-white/70 w-20 flex-shrink-0">{day}</span>
                  <span className="text-sm text-white/30 flex-shrink-0 mr-2">–</span>
                  <span
                    className={`text-sm font-medium ${
                      hours === 'Lukket' ? 'text-white/35' : 'text-white/90'
                    }`}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/50 italic">
              Åbningstider kan variere – kontakt os for aktuelle tider.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            &copy; {currentYear} Adam Ortopædi ApS. Alle rettigheder forbeholdes.
          </p>
          <p className="text-xs text-white/50">
            CVR: 44 44 44 44 &nbsp;|&nbsp; Højbyvej 4, 5260 Odense S
          </p>
        </div>
      </div>
    </footer>
  )
}
