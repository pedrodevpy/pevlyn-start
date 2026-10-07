import Eyebrow from './Eyebrow.jsx'

/**
 * Cabecera de sección reutilizable: eyebrow + título + descripción.
 * `as` permite mantener la jerarquía semántica correcta (h2/h3).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = 'h2',
  align = 'center',
  tone = 'dark',
  className = '',
  id,
}) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto'
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink'
  const descColor = tone === 'light' ? 'text-white/70' : 'text-text-muted'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={align === 'left' ? 'self-start' : 'self-center'}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </span>
      )}
      <Tag id={id} className={`font-heading text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.25rem] ${titleColor}`}>
        {title}
      </Tag>
      {description && (
        <p className={`font-sans text-base font-light leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  )
}
