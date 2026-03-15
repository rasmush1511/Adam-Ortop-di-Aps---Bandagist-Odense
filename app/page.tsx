import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import SectionIntro from '@/components/SectionIntro'
import ServiceCard from '@/components/ServiceCard'
import TrustSection from '@/components/TrustSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Forside',
  description:
    'Adam Ortopædi ApS er din lokale bandagist i Odense. Vi tilbyder individuelle ortopædiske løsninger – ortoser, proteser, fodindlæg, specialsko og børneortopædi. Ring 21 35 63 12.',
  alternates: {
    canonical: 'https://adamortopaedi.dk',
  },
}

const services = [
  {
    icon: 'ortose',
    title: 'Ortoser',
    description:
      'Individuelle ortoser til ankler, knæ, ryg og øvrige led – tilpasset din anatomi og hverdag for øget mobilitet.',
    href: '/behandlinger',
  },
  {
    icon: 'protese',
    title: 'Proteser',
    description:
      'Professionel rådgivning og tilpasning af proteseløsninger, der giver dig størst mulig bevægelsesfrihed.',
    href: '/behandlinger',
  },
  {
    icon: 'fodindlaeg',
    title: 'Fodindlæg',
    description:
      'Individuelle fodindlæg mod hælsmerter, plantar fasciitis og forkert fodfunktion – præcist tilpasset din fod.',
    href: '/behandlinger',
  },
  {
    icon: 'specialsko',
    title: 'Specialsko',
    description:
      'Ortopædisk fodtøj og tilpassede løsninger til fødder med særlige behov. Komfort og funktion i fokus.',
    href: '/behandlinger',
  },
  {
    icon: 'boern',
    title: 'Børneortopædi',
    description:
      'Skånsom undersøgelse og rådgivning om børns fodstilling og gangmønster – altid med barnets trivsel i centrum.',
    href: '/behandlinger',
  },
  {
    icon: 'kompression',
    title: 'Kompressionsløsninger',
    description:
      'Kompressionsstrømper og -løsninger ved åreknuder, ødemer og lymfødem. Individuelt tilpasset og vejledt.',
    href: '/behandlinger',
  },
]

function TrustBadges() {
  return (
    <section className="bg-white py-10 border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-sand/60">
          <div className="flex items-center gap-4 py-3 sm:py-0 sm:px-4 first:sm:pl-0 last:sm:pr-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-charcoal leading-tight">Kvalitet</h3>
              <p className="text-sm text-charcoal/60 mt-0.5">Dokumenterede løsninger og certificerede produkter</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-3 sm:py-0 sm:px-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-charcoal leading-tight">Omsorg</h3>
              <p className="text-sm text-charcoal/60 mt-0.5">Personlig og empatisk behandling af hver patient</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-3 sm:py-0 sm:px-4 last:sm:pr-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-charcoal leading-tight">Tryghed</h3>
              <p className="text-sm text-charcoal/60 mt-0.5">Professionel vejledning og opfølgning hele vejen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceOverview() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Vores specialer"
          title="Hvad kan vi hjælpe dig med?"
          description="Vi tilbyder et bredt udvalg af ortopædiske løsninger, alle individuelt tilpasset dine behov. Fra enkle fodindlæg til komplekse protese- og ortoseløsninger – vi er her for dig."
          centered
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
              Vores tilgang
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Mennesket i centrum – altid
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-6">
              Hos Adam Ortopædi tror vi på, at de bedste løsninger opstår, når
              vi lytter grundigt og forstår den enkelte patients situation.
              Ingen to mennesker er ens – og det afspejler sig i den måde, vi
              arbejder på.
            </p>
            <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-6">
              Vores tilgang er baseret på åben dialog, grundige undersøgelser og
              tæt samarbejde med dig som patient. Vi tager os den tid, der er
              nødvendig for at finde den rigtige løsning – og vi følger dig
              gennem hele forløbet.
            </p>
            <ul className="space-y-3">
              {[
                'Grundig individuel konsultation',
                'Tæt dialog og opfølgning',
                'Samarbejde med læger og specialister',
                'Fokus på din livskvalitet og hverdag',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 lg:h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80"
              alt="Ortopædisk konsultation hos Adam Ortopædi i Odense"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionIntro
                eyebrow="Om klinikken"
                title="Din lokale bandagist i Odense"
                description="Adam Ortopædi ApS er en specialiseret ortopædisk klinik beliggende i hjertet af Odense S. Vi hjælper borgere i hele Odense og omegn med individuelle ortopædiske løsninger – altid med fokus på din personlige situation og behov."
              />
              <p className="mt-6 text-base md:text-lg text-charcoal/80 leading-relaxed">
                Med dyb faglig viden og mange års erfaring inden for ortopædi og
                bandagistfaget er vi klar til at hjælpe dig – uanset om du
                søger hjælp til en akut udfordring eller ønsker forebyggende
                rådgivning.
              </p>
              <p className="mt-4 text-base md:text-lg text-charcoal/80 leading-relaxed">
                Vi samarbejder tæt med læger, hospitaler og kommuner for at
                sikre, at du får den bedst mulige hjælp – og at dine løsninger
                passer ind i dit samlede behandlingsforløb.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                alt="Adam Ortopædi klinik i Odense – professionel ortopædisk behandling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <ServiceOverview />
      <ApproachSection />
      <TrustSection />
      <FAQSection />
      <CTASection
        title="Klar til at tage det første skridt?"
        subtitle="Ring til os i dag, og lad os finde den løsning, der passer til dig. Vi sidder klar mandag–fredag 8–16."
        primaryBtn={{ label: 'Ring nu', href: 'tel:+4521356312' }}
        secondaryBtn={{ label: 'Se vores behandlinger', href: '/behandlinger' }}
      />
      <MapSection />
    </>
  )
}
