'use client'

import { useState } from 'react'

interface FormData {
  navn: string
  telefon: string
  email: string
  besked: string
}

interface FormErrors {
  navn?: string
  telefon?: string
  email?: string
  besked?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    navn: '',
    telefon: '',
    email: '',
    besked: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.navn.trim()) {
      newErrors.navn = 'Navn er påkrævet.'
    } else if (formData.navn.trim().length < 2) {
      newErrors.navn = 'Navn skal have mindst 2 tegn.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail er påkrævet.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Indtast en gyldig e-mailadresse.'
    }

    if (formData.telefon.trim() && !/^[\d\s+\-()]{8,}$/.test(formData.telefon)) {
      newErrors.telefon = 'Indtast et gyldigt telefonnummer.'
    }

    if (!formData.besked.trim()) {
      newErrors.besked = 'Besked er påkrævet.'
    } else if (formData.besked.trim().length < 10) {
      newErrors.besked = 'Besked skal have mindst 10 tegn.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-sand shadow-sm p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-8 h-8 text-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-3">
          Tak for din besked!
        </h3>
        <p className="text-charcoal/70 leading-relaxed mb-2">
          Vi har modtaget din henvendelse og vender tilbage til dig hurtigst
          muligt – typisk inden for 1–2 hverdage.
        </p>
        <p className="text-charcoal/70 leading-relaxed mb-6">
          Hvis du har en hastende sag, er du altid velkommen til at ringe
          direkte til os på{' '}
          <a
            href="tel:+4521356312"
            className="text-teal font-semibold hover:underline"
          >
            21 35 63 12
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFormData({ navn: '', telefon: '', email: '', besked: '' })
          }}
          className="text-sm text-teal font-semibold hover:underline underline-offset-4 transition-colors duration-200"
        >
          Send en ny besked
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-sand shadow-sm p-8 md:p-10 space-y-6"
      aria-label="Kontaktformular"
    >
      {/* Navn */}
      <div>
        <label
          htmlFor="navn"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Navn <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          value={formData.navn}
          onChange={handleChange}
          autoComplete="name"
          placeholder="Dit fulde navn"
          required
          aria-required="true"
          aria-describedby={errors.navn ? 'navn-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-charcoal placeholder-charcoal/40 bg-ivory focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200 text-base ${
            errors.navn
              ? 'border-red-400 bg-red-50/50'
              : 'border-sand hover:border-teal/40'
          }`}
        />
        {errors.navn && (
          <p id="navn-error" role="alert" className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            {errors.navn}
          </p>
        )}
      </div>

      {/* Telefon + Email grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Telefon */}
        <div>
          <label
            htmlFor="telefon"
            className="block text-sm font-semibold text-charcoal mb-2"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="20 30 40 50"
            aria-describedby={errors.telefon ? 'telefon-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-charcoal placeholder-charcoal/40 bg-ivory focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200 text-base ${
              errors.telefon
                ? 'border-red-400 bg-red-50/50'
                : 'border-sand hover:border-teal/40'
            }`}
          />
          {errors.telefon && (
            <p id="telefon-error" role="alert" className="mt-2 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.telefon}
            </p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-charcoal mb-2"
          >
            E-mail <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="din@email.dk"
            required
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-charcoal placeholder-charcoal/40 bg-ivory focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200 text-base ${
              errors.email
                ? 'border-red-400 bg-red-50/50'
                : 'border-sand hover:border-teal/40'
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-2 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Besked */}
      <div>
        <label
          htmlFor="besked"
          className="block text-sm font-semibold text-charcoal mb-2"
        >
          Besked <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="besked"
          name="besked"
          value={formData.besked}
          onChange={handleChange}
          rows={5}
          placeholder="Fortæl os kort om din situation eller dit spørgsmål, så vi er bedre forberedt til at hjælpe dig..."
          required
          aria-required="true"
          aria-describedby={errors.besked ? 'besked-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-charcoal placeholder-charcoal/40 bg-ivory focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200 text-base resize-none ${
            errors.besked
              ? 'border-red-400 bg-red-50/50'
              : 'border-sand hover:border-teal/40'
          }`}
        />
        {errors.besked && (
          <p id="besked-error" role="alert" className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            {errors.besked}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-teal text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        aria-label={loading ? 'Sender besked...' : 'Send besked'}
      >
        {loading ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sender...
          </>
        ) : (
          <>
            Send besked
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-charcoal/50">
        Felter markeret med <span className="text-red-500">*</span> er
        påkrævede. Vi behandler dine oplysninger fortroligt og videregiver dem
        ikke til tredjepart.
      </p>
    </form>
  )
}
