const hours = [
  { day: 'Mandag', time: '08:00 – 16:00', open: true },
  { day: 'Tirsdag', time: '08:00 – 16:00', open: true },
  { day: 'Onsdag', time: '08:00 – 16:00', open: true },
  { day: 'Torsdag', time: '08:00 – 16:00', open: true },
  { day: 'Fredag', time: '08:00 – 16:00', open: true },
  { day: 'Lørdag', time: 'Lukket', open: false },
  { day: 'Søndag', time: 'Lukket', open: false },
]

function isCurrentlyOpen(): boolean {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const timeInMinutes = hour * 60 + minute
  const openTime = 8 * 60
  const closeTime = 16 * 60
  // Monday = 1, Friday = 5
  return day >= 1 && day <= 5 && timeInMinutes >= openTime && timeInMinutes < closeTime
}

export default function OpeningHours() {
  const open = isCurrentlyOpen()

  return (
    <div className="bg-white rounded-2xl border border-sand shadow-sm p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
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
          </div>
          <h3 className="text-xl font-bold text-charcoal">Åbningstider</h3>
        </div>
        {/* Open/closed badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            open
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-600'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${open ? 'bg-green-500' : 'bg-red-500'}`}
            aria-hidden="true"
          />
          {open ? 'Åben nu' : 'Lukket nu'}
        </span>
      </div>

      {/* Hours table */}
      <div className="space-y-2">
        {hours.map(({ day, time, open: dayOpen }) => (
          <div
            key={day}
            className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${
              dayOpen ? 'hover:bg-ivory transition-colors duration-150' : 'opacity-50'
            }`}
          >
            <span className={`text-sm font-medium ${dayOpen ? 'text-charcoal' : 'text-charcoal/60'}`}>
              {day}
            </span>
            <span
              className={`text-sm font-semibold ${
                dayOpen ? 'text-teal' : 'text-charcoal/40'
              }`}
            >
              {time}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-sand" aria-hidden="true" />

      {/* Notes */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <svg
            className="w-4 h-4 text-teal mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <p className="text-xs text-charcoal/60 leading-relaxed">
            Ring for aftale uden for åbningstider – vi gør vores bedste for at
            imødekomme din situation.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <svg
            className="w-4 h-4 text-teal mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <p className="text-xs text-charcoal/60 leading-relaxed">
            Åbningstider kan variere – kontakt os for aktuelle tider.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <a
          href="tel:+4521356312"
          className="flex items-center justify-center gap-2 w-full bg-teal text-white py-3 px-6 rounded-xl font-semibold text-sm hover:bg-teal-dark transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          Ring: 21 35 63 12
        </a>
      </div>
    </div>
  )
}
