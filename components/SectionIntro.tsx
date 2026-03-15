interface SectionIntroProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionIntroProps) {
  return (
    <div className={centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}>
      {eyebrow && (
        <span
          className={`inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold text-charcoal leading-tight ${
          centered ? 'text-center' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg text-charcoal/70 leading-relaxed ${
            centered ? 'text-center' : ''
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`flex items-center gap-2 mt-5 ${centered ? 'justify-center' : ''}`}
        aria-hidden="true"
      >
        <span className="h-1 w-10 bg-teal rounded-full" />
        <span className="h-1 w-5 bg-sage rounded-full" />
        <span className="h-1 w-2 bg-sage/50 rounded-full" />
      </div>
    </div>
  )
}
