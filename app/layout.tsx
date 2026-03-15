import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})
// Note: Plus Jakarta Sans is loaded via globals.css Google Fonts import

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F4D4F',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://adamortopaedi.dk'),
  title: {
    template: 'Adam Ortopædi – Bandagist Odense | %s',
    default: 'Adam Ortopædi ApS – Bandagist Odense',
  },
  description:
    'Adam Ortopædi ApS er din lokale bandagist i Odense. Vi tilbyder individuelle ortopædiske løsninger – ortoser, proteser, fodindlæg, specialsko og børneortopædi. Ring 21 35 63 12.',
  keywords: [
    'bandagist Odense',
    'ortopædi Odense',
    'ortoser',
    'proteser',
    'fodindlæg',
    'specialsko',
    'børneortopædi',
    'kompressionsstrømper',
    'Adam Ortopædi',
  ],
  authors: [{ name: 'Adam Ortopædi ApS' }],
  creator: 'Adam Ortopædi ApS',
  publisher: 'Adam Ortopædi ApS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://adamortopaedi.dk',
    siteName: 'Adam Ortopædi ApS – Bandagist Odense',
    title: 'Adam Ortopædi ApS – Bandagist Odense',
    description:
      'Din lokale bandagist i Odense. Individuelle ortopædiske løsninger med fokus på kvalitet, omsorg og tryghed.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Adam Ortopædi ApS – Bandagist Odense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Ortopædi ApS – Bandagist Odense',
    description:
      'Din lokale bandagist i Odense. Individuelle ortopædiske løsninger med fokus på kvalitet, omsorg og tryghed.',
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Adam Ortopædi ApS – Bandagist Odense',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Højbyvej 4',
    addressLocality: 'Odense S',
    postalCode: '5260',
    addressCountry: 'DK',
  },
  telephone: '+4521356312',
  email: 'info@adamortopaedi.dk',
  url: 'https://adamortopaedi.dk',
  openingHours: ['Mo-Fr 08:00-16:00'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.3748,
    longitude: 10.4146,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ivory text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
