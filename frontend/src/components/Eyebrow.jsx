/** Etiqueta pequeña sobre los títulos de sección. */
export default function Eyebrow({ tone = 'dark', className = '', children }) {
  const styles =
    tone === 'light'
      ? 'bg-white/10 text-primary-soft ring-white/15'
      : 'bg-primary-soft text-primary-dark ring-primary/10'

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ring-1 ${styles} ${className}`}
    >
      {children}
    </span>
  )
}
