const trustPillars = [
  {
    title: 'Individuel tilpasning',
    description:
      'Ingen to mennesker er ens. Vi vurderer, måler og tilpasser alle hjælpemidler efter din specifikke anatomi, dit gangmønster og dine daglige behov. Det er individuelle løsninger, ikke standardprodukter, der gør den reelle forskel.',
    icon: (
      <svg
        className="w-8 h-8 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Erfaren rådgivning',
    description:
      'Med solid erfaring inden for bandagistfaget og ortopædi holder vi os opdaterede på de nyeste hjælpemidler og tilpasningsmetoder – og vi samarbejder tæt med læger, hospitaler og kommuner.',
    icon: (
      <svg
        className="w-8 h-8 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: 'Lokalt forankret i Odense',
    description:
      'Vi er stolte af at være en del af lokalsamfundet i Odense. Som lokal klinik kender vi borgernes behov og samarbejder med kommunen og de lokale sundhedstilbud for at sikre den bedst mulige hjælp og vejledning.',
    icon: (
      <svg
        className="w-8 h-8 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
            Hvorfor vælge os
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Det vi tror på
          </h2>
          <p className="mt-4 text-base md:text-lg text-charcoal/70 max-w-2xl mx-auto">
            Vores arbejde er funderet i tre grundlæggende værdier, der guider
            os i alt, hvad vi gør.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-sand/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sand flex items-center justify-center mb-5 flex-shrink-0">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-charcoal/65 leading-relaxed flex-1">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
