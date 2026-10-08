import { useState } from 'react'
import {
  CalendarDays,
  Plus,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  Scissors,
} from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'

/**
 * Mockup de PEVLYN Agenda maquetado en HTML/CSS nativo.
 * 
 * 100% nítido en pantallas Retina y 4K (sin compresión ni borrosidad de JPG).
 * Representa con total fidelidad la interfaz real de Barbería Nórdica.
 */
export default function HeroMockup() {
  const [activeTab, setActiveTab] = useState('agenda') // 'agenda' | 'resumen'
  const [viewMode, setViewMode] = useState('dia')

  return (
    <figure className="relative m-0 w-full select-none text-left">
      {/* Halo de profundidad */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-primary/15 blur-3xl"
      />

      <div className="overflow-hidden rounded-[24px] border border-warm-linen bg-white shadow-xl ring-1 ring-black/[0.04] sm:rounded-[30px]">
        {/* Cabecera superior de la aplicación */}
        <div className="flex flex-wrap items-center justify-between border-b border-warm-linen bg-white px-4 py-3 sm:px-6">
          <div className="flex items-center gap-5">
            {/* Logo y título */}
            <div className="flex items-center gap-2">
              <img src={isotipo} alt="PEVLYN" className="h-5 w-auto" />
              <span className="font-heading text-sm font-bold tracking-tight text-ink">
                PEVLYN
              </span>
            </div>

            {/* Pestañas de navegación de la app */}
            <div className="hidden items-center gap-1 sm:flex">
              <button
                type="button"
                onClick={() => setActiveTab('resumen')}
                className={`rounded-lg px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider transition ${
                  activeTab === 'resumen'
                    ? 'bg-lavender-mist/40 text-periwinkle'
                    : 'text-fog hover:text-ink'
                }`}
              >
                RESUMEN
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('agenda')}
                className={`rounded-lg px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider transition ${
                  activeTab === 'agenda'
                    ? 'bg-lavender-mist/40 text-periwinkle'
                    : 'text-fog hover:text-ink'
                }`}
              >
                AGENDA
              </button>
              <span className="px-2 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-fog/60">
                CLIENTES
              </span>
              <span className="px-2 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-fog/60">
                SERVICIOS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Barbería Nórdica
            </span>
            <span className="hidden text-fog sm:inline">demo@pevlyn.test</span>
          </div>
        </div>

        {/* Contenido según la pestaña */}
        {activeTab === 'agenda' ? (
          <div className="p-4 sm:p-6">
            {/* Barra de control de la agenda */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-warm-linen pb-4">
              <div>
                <span className="font-sans text-[0.65rem] font-bold uppercase tracking-open text-fog">
                  TU CALENDARIO
                </span>
                <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">Agenda</h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Selector DÍA / SEMANA */}
                <div className="flex items-center rounded-xl bg-warm-linen/80 p-0.5 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setViewMode('dia')}
                    className={`rounded-lg px-2.5 py-1 text-xs transition ${
                      viewMode === 'dia'
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-fog hover:text-ink'
                    }`}
                  >
                    DÍA
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('semana')}
                    className={`rounded-lg px-2.5 py-1 text-xs transition ${
                      viewMode === 'semana'
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-fog hover:text-ink'
                    }`}
                  >
                    SEMANA
                  </button>
                </div>

                {/* Fecha */}
                <div className="flex items-center gap-1.5 rounded-xl border border-warm-linen bg-white px-2.5 py-1 text-xs font-medium text-ink shadow-sm">
                  <ChevronLeft size={14} className="text-fog" />
                  <span>07/10/2026</span>
                  <CalendarDays size={14} className="text-fog" />
                  <ChevronRight size={14} className="text-fog" />
                </div>

                {/* Botón Nueva Cita */}
                <span className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                  <Plus size={14} />
                  NUEVA CITA
                </span>
              </div>
            </div>

            {/* Subcabecera del día con leyendas de barberos */}
            <div className="mt-3.5 flex items-center justify-between text-xs">
              <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wider text-fog">
                MIÉRCOLES, 7 DE OCTUBRE
              </span>
              <div className="flex items-center gap-3 text-[0.7rem] text-ink/80">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  Camilo
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  Andrés
                </span>
              </div>
            </div>

            {/* Cuadrícula horaria maquetada con citas */}
            <div className="mt-3 flex flex-col divide-y divide-warm-linen/60 text-xs">
              {/* 08:00 */}
              <div className="grid grid-cols-[48px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[60px_minmax(0,1fr)]">
                <span className="font-sans text-xs font-semibold tabular-nums text-fog">08:00</span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-3 py-1.5">
                    <span className="font-semibold text-ink">08:30 Mariana Ospina</span>
                    <span className="text-[0.7rem] text-fog">Arreglo de barba · Camilo</span>
                  </div>
                </div>
              </div>

              {/* 09:00 */}
              <div className="grid grid-cols-[48px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[60px_minmax(0,1fr)]">
                <span className="font-sans text-xs font-semibold tabular-nums text-fog">09:00</span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-3 py-1.5">
                    <span className="font-semibold text-ink">09:30 Valentina Cárdenas</span>
                    <span className="text-[0.7rem] text-fog">Corte y barba · Camilo</span>
                  </div>
                </div>
              </div>

              {/* 10:00 — Citas simultáneas lado a lado */}
              <div className="grid grid-cols-[48px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[60px_minmax(0,1fr)]">
                <span className="font-sans text-xs font-semibold tabular-nums text-fog">10:00</span>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-3 py-1.5">
                    <span className="font-semibold text-ink">10:00 Julián Betancur</span>
                    <span className="text-[0.7rem] text-fog">Corte · Camilo</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-amber-500 bg-amber-500/10 px-3 py-1.5">
                    <span className="font-semibold text-ink">10:00 Santiago Mejía</span>
                    <span className="text-[0.7rem] text-amber-800">Barba · Andrés</span>
                  </div>
                </div>
              </div>

              {/* 11:00 */}
              <div className="grid grid-cols-[48px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[60px_minmax(0,1fr)]">
                <span className="font-sans text-xs font-semibold tabular-nums text-fog">11:00</span>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-3 py-1.5">
                    <span className="font-semibold text-ink">11:00 Laura Quintero</span>
                    <span className="text-[0.7rem] text-fog">Corte clásico · Camilo</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-amber-500 bg-amber-500/10 px-3 py-1.5">
                    <span className="font-semibold text-ink">11:30 Esteban Villa</span>
                    <span className="text-[0.7rem] text-amber-800">Corte y barba · Andrés</span>
                  </div>
                </div>
              </div>

              {/* 14:00 */}
              <div className="grid grid-cols-[48px_minmax(0,1fr)] items-center py-2 sm:grid-cols-[60px_minmax(0,1fr)]">
                <span className="font-sans text-xs font-semibold tabular-nums text-fog">14:00</span>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-primary bg-lavender-mist/25 px-3 py-1.5">
                    <span className="font-semibold text-ink">14:00 Catalina Arango</span>
                    <span className="text-[0.7rem] text-fog">Corte y barba · Camilo</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border-l-4 border-amber-500 bg-amber-500/10 px-3 py-1.5">
                    <span className="font-semibold text-ink">14:30 Nicolás Peña</span>
                    <span className="text-[0.7rem] text-amber-800">Corte · Andrés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* PESTAÑA RESUMEN */
          <div className="p-4 sm:p-6">
            <div className="mb-4">
              <span className="font-sans text-[0.65rem] font-bold uppercase tracking-open text-fog">
                HOLA, CAMILO
              </span>
              <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">
                Tu <span className="inline-block rounded-lg bg-lavender-mist px-2 py-0.5 text-ink">día</span>
              </h3>
            </div>

            <div className="rounded-2xl border border-warm-linen bg-white p-5 shadow-sm">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-fog">
                HOY
              </span>
              <div className="mt-3 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">11</p>
                  <p className="mt-1 text-xs text-fog">citas hoy</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-ink sm:text-4xl">30</p>
                  <p className="mt-1 text-xs text-fog">próximos 7 días</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-ink sm:text-4xl">1</p>
                  <p className="mt-1 text-xs text-fog">Confirmada</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-warm-linen bg-white p-4">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-fog">
                  TU CUENTA
                </span>
                <div className="mt-2 text-xs">
                  <p className="font-semibold text-ink">Camilo Restrepo</p>
                  <p className="text-fog">demo@pevlyn.test · <span className="text-primary font-bold">OWNER</span></p>
                </div>
              </div>
              <div className="rounded-2xl border border-warm-linen bg-white p-4">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-fog">
                  NEGOCIO ACTIVO
                </span>
                <div className="mt-2 text-xs">
                  <p className="font-semibold text-ink">Barbería Nórdica</p>
                  <p className="text-periwinkle">pevlyn.com/barberia-nordica</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Barra inferior descriptiva */}
        <div className="border-t border-warm-linen bg-warm-linen/30 px-5 py-2.5 text-center text-xs text-fog sm:flex sm:items-center sm:justify-between">
          <span className="flex items-center justify-center gap-1.5 sm:justify-start">
            <Sparkles size={13} className="text-periwinkle" />
            Dos citas a la misma hora se organizan lado a lado sin colisionar
          </span>
          <span className="hidden font-mono text-[0.65rem] text-fog sm:inline">
            America/Bogota
          </span>
        </div>
      </div>

      <figcaption className="mt-3.5 text-center text-xs text-fog">
        Interfaz auténtica de PEVLYN Agenda — Diseño nítido en tiempo real.
      </figcaption>
    </figure>
  )
}
