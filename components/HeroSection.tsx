'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80"
          alt="Individuelle ortopædiske løsninger og personlig rådgivning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal/90 via-teal/75 to-teal/60" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Eyebrow */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
          <span className="h-px w-10 bg-sage" aria-hidden="true" />
          <span className="text-sage text-sm font-semibold uppercase tracking-widest">
            Bandagist Odense
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          Din ortopædiske{' '}
          <span className="text-sage">specialist</span>
          <br />i Odense
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-10">
          Hos Adam Ortopædi ApS møder du faglig ekspertise og ægte menneskelig
          omsorg. Vi tager os tid til at forstå din situation og finder den
          løsning, der passer præcist til dig – fra ortoser og fodindlæg til
          proteser og specialsko.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full sm:w-auto items-stretch sm:items-center">
          <a
            href="tel:+4521356312"
            className="inline-flex items-center justify-center gap-2 bg-white text-teal px-8 py-4 rounded-full font-semibold text-base hover:bg-ivory transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5"
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
            Ring nu
          </a>
          <a
            href="mailto:info@adamortopaedi.dk"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-teal transition-all duration-200 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Send en mail
          </a>
          <Link
            href="/behandlinger"
            className="inline-flex items-center justify-center gap-2 text-white underline underline-offset-4 px-8 py-4 font-semibold text-base hover:text-sage transition-colors duration-200 w-full sm:w-auto"
          >
            Se vores løsninger
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Trust line */}
        <div className="flex items-center justify-center md:justify-start gap-4">
          <span className="h-px w-8 bg-sage/60" aria-hidden="true" />
          <p className="text-white/70 text-sm font-medium tracking-wide">
            Kvalitet &nbsp;–&nbsp; Omsorg &nbsp;–&nbsp; Tryghed
          </p>
          <span className="h-px w-8 bg-sage/60" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          type="button"
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 group"
          aria-label="Scroll ned"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
