'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Hvordan foregår en konsultation hos Adam Ortopædi?',
    answer:
      'En konsultation starter med en grundig samtale om dine behov og udfordringer. Vi tager os tid til at lytte og foretager en individuel vurdering, inden vi anbefaler den mest hensigtsmæssige løsning.',
  },
  {
    question: 'Hvilke løsninger kan jeg få hjælp til?',
    answer:
      'Vi hjælper med ortoser, fodindlæg, specialsko, kompressionsstrømper, proteseløsninger og børneortopædi. Alle løsninger tilpasses din specifikke situation.',
  },
  {
    question: 'Tilpasser I løsninger individuelt?',
    answer:
      'Ja – individuel tilpasning er kernen i vores arbejde. Vi måler, vurderer og tilpasser alle hjælpemidler efter den enkelte patients anatomi og behov.',
  },
  {
    question: 'Har jeg brug for en henvisning?',
    answer:
      'Det afhænger af, hvordan du ønsker at finansiere din løsning. Du kan altid henvende dig direkte uden henvisning og betale selv (egenbetaling). Har du en lægehenvisning, kan du i mange tilfælde få dækket udgifterne helt eller delvist. Kommunale bevillinger er ligeledes en mulighed – vi hjælper dig med at afklare, hvad der gælder i din konkrete situation.',
  },
  {
    question: 'Hvor ligger klinikken, og hvornår er I åbne?',
    answer:
      'Vi holder til på Højbyvej 4, 5260 Odense S. Vores åbningstider er mandag–fredag 8–16. Du er altid velkommen til at ringe på 21 35 63 12.',
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div className="border border-sand rounded-xl overflow-hidden bg-white hover:border-teal/30 transition-colors duration-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-semibold text-charcoal text-base md:text-lg leading-snug pr-2">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-teal text-white rotate-45' : 'bg-sand text-teal'
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="h-px w-full bg-sand mb-4" aria-hidden="true" />
          <p className="text-charcoal/75 leading-relaxed text-base">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
              Spørgsmål og svar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Ofte stillede spørgsmål
            </h2>
            <p className="text-base md:text-lg text-charcoal/70">
              Har du spørgsmål, vi ikke har besvaret her? Ring til os på{' '}
              <a
                href="tel:+4521356312"
                className="text-teal font-semibold hover:underline"
              >
                21 35 63 12
              </a>{' '}
              – vi hjælper altid gerne.
            </p>
          </div>

          {/* FAQ items */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>

          {/* CTA below FAQ */}
          <div className="mt-10 text-center">
            <p className="text-charcoal/60 text-sm mb-4">
              Finder du ikke svar på dit spørgsmål?
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:underline underline-offset-4 transition-colors duration-200"
            >
              Kontakt os direkte
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
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
