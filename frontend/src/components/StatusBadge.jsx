/** Etiqueta de estado: "Próximamente", "En desarrollo", "Disponible". */
const tones = {
  soon: 'bg-accent/12 text-accent-on-dark ring-accent/25',
  building: 'bg-primary-soft text-primary-dark ring-primary/15',
  live: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  neutral: 'bg-white/8 text-white/55 ring-white/12',
}

export default function StatusBadge({ tone = 'neutral', children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.12em] ring-1 ${tones[tone] ?? tones.neutral} ${className}`}
    >
      {children}
    </span>
  )
}
