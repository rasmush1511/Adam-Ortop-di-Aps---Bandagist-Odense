const contactItems = [
  {
    label: 'Telefon',
    value: '21 35 63 12',
    href: 'tel:+4521356312',
    description: 'Ring til os mandag–fredag 8–16',
    icon: (
      <svg
        className="w-5 h-5 text-teal"
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
    ),
  },
  {
    label: 'E-mail',
    value: 'info@adamortopaedi.dk',
    href: 'mailto:info@adamortopaedi.dk',
    description: 'Vi svarer inden for 1–2 hverdage',
    icon: (
      <svg
        className="w-5 h-5 text-teal"
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
    ),
  },
  {
    label: 'Adresse',
    value: 'Højbyvej 4, 5260 Odense S',
    href: 'https://maps.google.com/?q=Højbyvej+4,+5260+Odense+S',
    description: 'Find os på Google Maps',
    icon: (
      <svg
        className="w-5 h-5 text-teal"
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
    ),
  },
  {
    label: 'Åbningstider',
    value: 'Mandag–Fredag: 8:00–16:00',
    href: null,
    description: 'Lørdag og søndag: Lukket',
    icon: (
      <svg
        className="w-5 h-5 text-teal"
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
    ),
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactItems.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-4 p-5 bg-white rounded-xl border border-sand shadow-sm hover:shadow-md hover:border-teal/20 transition-all duration-200"
        >
          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
            {item.icon}
          </div>
          {/* Content */}
          <div>
            <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-1">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-base font-semibold text-charcoal hover:text-teal transition-colors duration-200"
                {...(item.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.value}
              </a>
            ) : (
              <p className="text-base font-semibold text-charcoal">{item.value}</p>
            )}
            <p className="text-sm text-charcoal/60 mt-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
