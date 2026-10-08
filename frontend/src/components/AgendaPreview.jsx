import {
  CalendarDays,
  Plus,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'

/**
 * Vista previa de PEVLYN Agenda maquetada en HTML/CSS nativo.
 *
 * 100% nítida en pantallas Retina y dispositivos móviles (sin imágenes comprimidas).
 * Ilustra fielmente la cuadrícula de citas simultáneas de Barbería Nórdica.
 */
export default function AgendaPreview() {
  return (
    <figure className="relative m-0 w-full select-none text-left">
      {/* Halo de profundidad */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-primary/20 blur-3xl"
      />

      <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white shadow-2xl ring-1 ring-black/[0.06] sm:rounded-[32px]">
        {/* Cabecera estilo navegador / app */}
        <div className="flex items-center justify-between border-b border-warm-linen bg-white px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="ml-2 flex items-center gap-2">
              <img src={isotipo} alt="PEVLYN" className="h-4 w-auto" />
              <span className="font-heading text-xs font-bold tracking-tight text-ink sm:text-sm">
                PEVLYN Agenda
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[0.68rem] font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              En vivo
            </span>
          </div>
        </div>

        {/* Cuerpo del calendario del día */}
        <div className="bg-white p-4 sm:p-6">
          {/* Barra de control */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-warm-linen pb-3.5">
            <div>
              <span className="font-sans text-[0.62rem] font-bold uppercase tracking-open text-fog">
                CALENDARIO
              </span>
              <h3 className="font-heading text-lg font-bold text-ink sm:text-xl">
                Barbería Nórdica
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg border border-warm-linen bg-white px-2.5 py-1 text-xs font-medium text-ink shadow-sm">
                <CalendarDays size={13} className="text-fog" />
                <span>07/10/2026</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                <Plus size={13} />
                Cita
              </span>
            </div>
          </div>

          {/* Leyenda de barberos */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wider text-fog">
              MIÉRCOLES, 7 OCT
            </span>
            <div className="flex items-center gap-3 text-[0.68rem] text-ink/80">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Camilo
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Andrés
              </span>
            </div>
          </div>

          {/* Grilla de horas y citas vectoriales nítidas */}
          <div className="mt-2.5 flex flex-col divide-y divide-warm-linen/60 text-xs">
            {/* 08:30 */}
            <div className="grid grid-cols-[44px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[56px_minmax(0,1fr)]">
              <span className="font-sans text-xs font-semibold tabular-nums text-fog">08:00</span>
              <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-3 py-1.5">
                <span className="font-semibold text-ink">08:30 Mariana Ospina</span>
                <span className="text-[0.68rem] text-fog">Barba · Camilo</span>
              </div>
            </div>

            {/* 10:00 — Citas simultáneas lado a lado */}
            <div className="grid grid-cols-[44px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[56px_minmax(0,1fr)]">
              <span className="font-sans text-xs font-semibold tabular-nums text-fog">10:00</span>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-2.5 py-1.5">
                  <span className="font-semibold text-ink">10:00 Julián B.</span>
                  <span className="text-[0.68rem] text-fog">Corte · Camilo</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border-l-4 border-amber-500 bg-amber-500/10 px-2.5 py-1.5">
                  <span className="font-semibold text-ink">10:00 Santiago M.</span>
                  <span className="text-[0.68rem] text-amber-800">Barba · Andrés</span>
                </div>
              </div>
            </div>

            {/* 11:30 */}
            <div className="grid grid-cols-[44px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[56px_minmax(0,1fr)]">
              <span className="font-sans text-xs font-semibold tabular-nums text-fog">11:00</span>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-2.5 py-1.5">
                  <span className="font-semibold text-ink">11:00 Laura Q.</span>
                  <span className="text-[0.68rem] text-fog">Corte · Camilo</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border-l-4 border-amber-500 bg-amber-500/10 px-2.5 py-1.5">
                  <span className="font-semibold text-ink">11:30 Esteban V.</span>
                  <span className="text-[0.68rem] text-amber-800">Corte · Andrés</span>
                </div>
              </div>
            </div>

            {/* 14:00 */}
            <div className="grid grid-cols-[44px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[56px_minmax(0,1fr)]">
              <span className="font-sans text-xs font-semibold tabular-nums text-fog">14:00</span>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-2.5 py-1.5">
                  <span className="font-semibold text-ink">14:00 Catalina A.</span>
                  <span className="text-[0.68rem] text-fog">Barba · Camilo</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border-l-4 border-amber-500 bg-amber-500/10 px-2.5 py-1.5">
                  <span className="font-semibold text-ink">14:30 Nicolás P.</span>
                  <span className="text-[0.68rem] text-amber-800">Corte · Andrés</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pie informativo */}
        <div className="border-t border-warm-linen bg-warm-linen/40 px-4 py-2.5 text-center text-xs text-fog sm:flex sm:items-center sm:justify-between">
          <span className="flex items-center justify-center gap-1.5 sm:justify-start">
            <Sparkles size={13} className="text-periwinkle" />
            Citas simultáneas organizadas lado a lado
          </span>
          <span className="hidden font-mono text-[0.65rem] text-fog sm:inline">
            America/Bogota
          </span>
        </div>
      </div>

      <figcaption className="mt-3.5 text-center text-xs text-fog">
        Interfaz vectorial de PEVLYN Agenda — Nítida en cualquier pantalla.
      </figcaption>
    </figure>
  )
}
