const tones = {
  default: 'bg-white ring-1 ring-border',
  surface: 'bg-surface ring-1 ring-border',
  dark: 'bg-white/5 ring-1 ring-white/10',
}

/** Superficie base de todas las tarjetas. */
export default function Card({
  as: Tag = 'div',
  tone = 'default',
  hover = true,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`rounded-card p-6 transition duration-300 ease-out sm:p-7 ${tones[tone] ?? tones.default} ${
        hover ? 'motion-safe:hover:-translate-y-1 hover:shadow-lift' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
