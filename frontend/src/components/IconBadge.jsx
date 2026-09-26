const tones = {
  soft: 'bg-primary-soft text-primary-dark',
  solid: 'bg-gradient-brand text-white',
  light: 'bg-white/10 text-primary-soft ring-1 ring-white/15',
  outline: 'bg-white text-primary ring-1 ring-border',
}

const sizes = {
  sm: 'h-9 w-9 rounded-xl',
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-14 w-14 rounded-2xl',
}

/** Contenedor de icono consistente para cards y listas. */
export default function IconBadge({ icon: Icon, tone = 'soft', size = 'md', className = '' }) {
  const iconSize = size === 'lg' ? 26 : size === 'sm' ? 18 : 21

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center ${sizes[size] ?? sizes.md} ${tones[tone] ?? tones.soft} ${className}`}
    >
      <Icon size={iconSize} strokeWidth={1.9} />
    </span>
  )
}
