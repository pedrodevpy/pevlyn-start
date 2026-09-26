import isotipo from '../assets/pevlyn-isotipo.webp'
import { BRAND } from '../config/site.js'

const sizes = {
  sm: { mark: 'h-7 w-7', word: 'text-lg', tag: 'text-[0.5rem]' },
  md: { mark: 'h-9 w-9', word: 'text-xl', tag: 'text-[0.55rem]' },
  lg: { mark: 'h-12 w-12', word: 'text-3xl', tag: 'text-[0.65rem]' },
}

/**
 * Lockup de marca: [ISOTIPO] PEVLYN (LANDING_DEVELOPMENT.md §8).
 *
 * El isotipo se deriva del logo oficial (logo/Pevlynlogos.png). Para
 * reemplazarlo basta con sustituir `src/assets/pevlyn-isotipo.webp`.
 */
export default function Logo({ size = 'md', withTagline = false, tone = 'dark', className = '' }) {
  const s = sizes[size] ?? sizes.md
  const wordColor = tone === 'light' ? 'text-white' : 'text-ink'
  const tagColor = tone === 'light' ? 'text-white/60' : 'text-text-subtle'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={isotipo}
        alt=""
        aria-hidden="true"
        width="270"
        height="256"
        className={`${s.mark} w-auto shrink-0 object-contain`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold tracking-tight ${s.word} ${wordColor}`}
        >
          {BRAND.name}
        </span>
        {withTagline && (
          <span className={`mt-1 font-sans font-medium uppercase tracking-[0.18em] ${s.tag} ${tagColor}`}>
            {BRAND.category}
          </span>
        )}
      </span>
    </span>
  )
}
