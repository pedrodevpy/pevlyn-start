/** Etiqueta pequeña sobre los títulos de sección (DESIGN.md). */
export default function Eyebrow({ tone = 'dark', className = '', children }) {
  const color = tone === 'light' ? 'text-accent-on-dark' : 'text-periwinkle'

  return (
    <span
      className={`inline-flex items-center font-sans text-xs font-semibold uppercase tracking-open ${color} ${className}`}
    >
      {children}
    </span>
  )
}
