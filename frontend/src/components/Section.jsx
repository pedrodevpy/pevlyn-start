import Container from './Container.jsx'

const tones = {
  default: 'bg-background',
  surface: 'bg-surface',
  dark: 'bg-ink',
}

/**
 * Envoltorio de sección: ritmo vertical, fondo y ancla de navegación.
 *
 * En tono oscuro añade una rejilla muy tenue y un halo de marca. Es lo que
 * da profundidad a las secciones oscuras sin recurrir a glassmorphism ni a
 * gradientes por todas partes.
 */
export default function Section({
  id,
  tone = 'default',
  glow = false,
  topLine = false,
  size = 'md',
  className = '',
  containerClassName = '',
  labelledBy,
  children,
}) {
  const dark = tone === 'dark'
  const padding = size === 'lg' ? 'py-24 sm:py-28 lg:py-36' : 'py-20 sm:py-24 lg:py-28'

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate overflow-hidden ${padding} ${tones[tone] ?? tones.default} ${className}`}
    >
      {dark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
          {glow && (
            <div className="absolute left-1/2 top-0 h-[28rem] w-[46rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/18 blur-3xl" />
          )}
        </div>
      )}

      {topLine && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px edge-glow-line opacity-50"
        />
      )}

      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
