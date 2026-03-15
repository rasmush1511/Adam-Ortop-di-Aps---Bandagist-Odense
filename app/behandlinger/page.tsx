import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Behandlinger',
  description:
    'Oversigt over vores fagområder – ortoser, proteser, fodindlæg, specialsko, børneortopædi og kompressionsløsninger hos Adam Ortopædi i Odense.',
  alternates: {
    canonical: 'https://adamortopaedi.dk/behandlinger',
  },
}

const treatments = [
  {
    id: 'ortoser',
    headline: 'Ortoser – støtte og stabilitet',
    text: 'En ortose er et medicinsk hjælpemiddel, der støtter, aflaster eller korrigerer en ledfunktion. Vi tilbyder individuelle ortoser til ankler, knæ, ryg og øvrige led – tilpasset din anatomi og hverdag. Vores ortoser fremstilles eller tilpasses efter grundig vurdering og opmåling og er beregnet til at øge din mobilitet og livskvalitet.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    imageAlt: 'Ortose tilpasset til patient hos Adam Ortopædi Odense',
    imageRight: false,
  },
  {
    id: 'proteser',
    headline: 'Proteser – bevægelsesfrihed og selvstændighed',
    text: 'Vi rådgiver og hjælper med tilpasning af proteseløsninger, der er designet til at give dig størst mulig bevægelsesfrihed i hverdagen. Vi arbejder tæt sammen med dig og eventuelle behandlere for at sikre, at løsningen passer til dine individuelle behov og mål.',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    imageAlt: 'Proteseløsning og rådgivning hos Adam Ortopædi Odense',
    imageRight: true,
  },
  {
    id: 'fodindlaeg',
    headline: 'Fodindlæg – lindring og forebyggelse',
    text: 'Individuelle fodindlæg kan afhjælpe en lang række problemer – fra hælsmerter og plantar fasciitis til overbelastning og forkert fodfunktion. Vi vurderer din fodstilling og dit gangmønster og fremstiller indlæg, der passer præcist til din fod og dit fodtøj.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    imageAlt: 'Individuelle fodindlæg fremstillet hos Adam Ortopædi Odense',
    imageRight: false,
  },
  {
    id: 'specialsko',
    headline: 'Specialsko – komfort og funktion',
    text: 'Nogle fødder kræver mere end standardfodtøj. Vores specialsko er designet til at imødekomme særlige behov – enten som færdigt ortopædisk fodtøj eller som tilpasset løsning baseret på eksisterende sko. Vi hjælper dig med at finde det rigtige valg.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    imageAlt: 'Ortopædisk specialsko tilpasset hos Adam Ortopædi Odense',
    imageRight: true,
  },
  {
    id: 'boerneortopaedi',
    headline: 'Børneortopædi – tryg vækst og bevægelse',
    text: 'Børns fødder og bevægeapparat er under konstant udvikling. Tidlig og korrekt indsats kan forebygge fremtidige problemer. Vi tilbyder skånsom og grundig vurdering af børns fodstilling, gangmønster og evt. afvigelser, og rådgiver forældre om de bedste løsninger – altid med barnets trivsel i centrum.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    imageAlt: 'Børneortopædi og fodundersøgelse hos Adam Ortopædi Odense',
    imageRight: false,
  },
  {
    id: 'kompression',
    headline: 'Kompression – lette ben og bedre cirkulation',
    text: 'Kompressionsstrømper og -løsninger anbefales ved bl.a. åreknuder, ødemer, lymfødem og langvarig stående eller siddende arbejde. Vi tilpasser og vejleder i korrekt valg af kompressionsklasse og størrelser, så du opnår den bedst mulige effekt og komfort.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    imageAlt: 'Kompressionsstrømper og vejledning hos Adam Ortopædi Odense',
    imageRight: true,
  },
  {
    id: 'raadgivning',
    headline: 'Rådgivning – din situation, din løsning',
    text: 'Hos Adam Ortopædi er rådgivning ikke blot et supplement – det er udgangspunktet for alt, hvad vi gør. Vi lytter, vurderer og tilpasser. Uanset om du kommer med en specifik diagnose, en udfordring fra hverdagen eller blot ønsker vejledning, tager vi os tid til at finde den løsning, der passer bedst til dig.',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
    imageAlt: 'Individuel rådgivning og ortopædisk vejledning hos Adam Ortopædi Odense',
    imageRight: false,
  },
]

export default function BehandlingerPage() {
  return (
    <>
      <PageHero
        title="Vores løsninger"
        subtitle="Vi tilbyder et bredt spektrum af ortopædiske løsninger – alle individuelt tilpasset din situation og dine behov. Udforsk vores fagområder herunder."
        breadcrumb={[{ label: 'Forside', href: '/' }, { label: 'Løsninger' }]}
      />

      <div className="bg-ivory">
        {treatments.map((treatment, index) => (
          <section
            key={treatment.id}
            id={treatment.id}
            className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-ivory' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image — on mobile always first; on desktop swap via order if imageRight */}
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-lg h-72 md:h-[420px] ${
                    treatment.imageRight ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal/25 to-transparent" />
                </div>

                {/* Text */}
                <div className={treatment.imageRight ? 'lg:order-1' : ''}>
                  <span className="inline-block text-teal font-semibold text-xs uppercase tracking-widest mb-4">
                    {String(index + 1).padStart(2, '0')} / {String(treatments.length).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-5 leading-tight">
                    {treatment.headline}
                  </h2>
                  <p className="text-base md:text-lg text-charcoal/75 leading-relaxed mb-8">
                    {treatment.text}
                  </p>
                  <a
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal-dark transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Book en konsultation
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        title="Har du spørgsmål til vores løsninger?"
        subtitle="Vi tager os altid tid til at svare dine spørgsmål og finde den løsning, der passer til dig. Ring eller skriv – vi er klar til at hjælpe."
        primaryBtn={{ label: 'Ring nu', href: 'tel:+4521356312' }}
        secondaryBtn={{ label: 'Kontakt os', href: '/kontakt' }}
      />
    </>
  )
}
