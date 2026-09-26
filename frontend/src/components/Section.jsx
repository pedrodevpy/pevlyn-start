import Container from './Container.jsx'

const tones = {
  default: 'bg-background',
  surface: 'bg-surface',
  dark: 'bg-ink',
}

/** Envoltorio de sección: ritmo vertical, fondo y ancla de navegación. */
export default function Section({
  id,
  tone = 'default',
  className = '',
  containerClassName = '',
  labelledBy,
  children,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-20 sm:py-24 lg:py-28 ${tones[tone] ?? tones.default} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
