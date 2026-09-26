// Dos decisiones deliberadas:
// 1. Sin `whitespace-nowrap`: un botón a ancho completo en móvil debe poder
//    envolver su texto. Con nowrap, su min-content empuja el layout y provoca
//    scroll horizontal en pantallas de 320px.
// 2. La transición lista explícitamente sus propiedades: `transition-all` (e
//    incluso `transition`) animaría `outline-width`/`outline-color`, con lo que
//    el anillo de foco aparecería de forma gradual en vez de inmediata.
const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold ' +
  'text-center leading-snug duration-200 ease-out ' +
  'transition-[background-color,color,box-shadow,transform] ' +
  'disabled:cursor-not-allowed disabled:opacity-60 motion-safe:active:scale-[0.98]'

const variants = {
  primary:
    'bg-primary text-white shadow-primary hover:bg-primary-dark hover:shadow-lift',
  secondary:
    'bg-white text-ink ring-1 ring-border-strong hover:ring-primary hover:text-primary',
  ghost: 'text-ink hover:bg-surface-strong',
  light:
    'bg-white text-ink hover:bg-primary-soft hover:text-primary-dark shadow-lift',
  outlineLight:
    'text-white ring-1 ring-white/30 hover:bg-white/10 hover:ring-white/60',
}

const sizes = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-12 px-6 py-2.5 text-[0.95rem]',
  lg: 'min-h-14 px-7 py-3 text-base',
}

/**
 * Botón único de la landing.
 * Renderiza <a> cuando recibe `href` y <button> en caso contrario, para no
 * romper la semántica (LANDING_DEVELOPMENT.md §31).
 */
export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const Tag = as ?? (href ? 'a' : 'button')
  const classes = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`

  if (Tag === 'button' && rest.type === undefined) rest.type = 'button'

  return (
    <Tag className={classes} {...(href ? { href } : {})} {...rest}>
      {children}
    </Tag>
  )
}
