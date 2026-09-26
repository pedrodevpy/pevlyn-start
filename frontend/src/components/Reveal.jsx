import { useReveal } from '../lib/useReveal.js'

/**
 * Aparición progresiva al hacer scroll.
 * Respeta `prefers-reduced-motion` (LANDING_DEVELOPMENT.md §29).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={`${visible ? 'animate-reveal' : 'opacity-0'} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
