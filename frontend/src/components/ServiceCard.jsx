import Card from './Card.jsx'
import IconBadge from './IconBadge.jsx'

/** Tarjeta de servicio / solución. */
export default function ServiceCard({ icon, title, description, items }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <IconBadge icon={icon} />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-text-muted">{description}</p>
      </div>
      {items && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-text-muted ring-1 ring-border"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
