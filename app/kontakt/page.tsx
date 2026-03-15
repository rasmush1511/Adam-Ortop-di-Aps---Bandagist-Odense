import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactInfo from '@/components/ContactInfo'
import ContactForm from '@/components/ContactForm'
import OpeningHours from '@/components/OpeningHours'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt Adam Ortopædi i Odense – ring, send mail eller udfyld kontaktformularen. Find os på Højbyvej 4, 5260 Odense S.',
  alternates: {
    canonical: 'https://adamortopaedi.dk/kontakt',
  },
}

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt os"
        subtitle="Vi er klar til at hjælpe dig. Ring, send en mail eller udfyld formularen herunder – vi vender tilbage hurtigst muligt."
        breadcrumb={[{ label: 'Forside', href: '/' }, { label: 'Kontakt' }]}
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8">
                Kontaktinformation
              </h2>
              <ContactInfo />
              <div className="mt-10">
                <OpeningHours />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8">
                Send os en besked
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  )
}
