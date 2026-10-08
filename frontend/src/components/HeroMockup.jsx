import { useState } from 'react'
import agendaDiaImg from '../assets/capturas/agenda-dia.jpg'
import resumenDiaImg from '../assets/capturas/resumen-dia.jpg'
import clienteReservaImg from '../assets/capturas/cliente-reserva.jpg'

/**
 * Mockup auténtico de PEVLYN Agenda en el Hero de Inicio.
 *
 * Muestra la interfaz real del producto (Barbería Nórdica)
 * con alternancia entre la vista de Agenda diaria y el Resumen del día,
 * además de la miniatura del flujo de reserva móvil para clientes.
 */
export default function HeroMockup() {
  const [tab, setTab] = useState('agenda') // 'agenda' | 'resumen'

  return (
    <figure className="relative m-0 w-full">
      {/* Halo de profundidad detrás de la tarjeta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-primary/20 blur-3xl"
      />

      <div className="overflow-hidden rounded-[26px] bg-ink-raised shadow-glow ring-1 ring-white/10 sm:rounded-[30px]">
        {/* Barra superior estilo ventana de aplicación */}
        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[0.65rem] text-white/45 sm:text-xs">
              app.pevlyn.com · Barbería Nórdica
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setTab('agenda')}
              className={`rounded-lg px-2.5 py-1 text-[0.68rem] font-semibold transition ${
                tab === 'agenda'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Agenda
            </button>
            <button
              type="button"
              onClick={() => setTab('resumen')}
              className={`rounded-lg px-2.5 py-1 text-[0.68rem] font-semibold transition ${
                tab === 'resumen'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Resumen
            </button>
          </div>
        </div>

        {/* Captura real del producto */}
        <div className="relative bg-[#f5f3f2] p-2 sm:p-3">
          <img
            src={tab === 'agenda' ? agendaDiaImg : resumenDiaImg}
            alt={
              tab === 'agenda'
                ? 'Interfaz real de PEVLYN Agenda — Calendario diario con citas simultáneas'
                : 'Interfaz real de PEVLYN Agenda — Resumen del día y métricas'
            }
            width="800"
            height="500"
            className="w-full rounded-xl object-cover shadow-sm ring-1 ring-black/5 sm:rounded-2xl"
            loading="eager"
          />

          {/* Miniatura móvil flotante */}
          <div className="absolute -bottom-3 -right-2 hidden w-28 overflow-hidden rounded-2xl bg-white p-1 shadow-2xl ring-2 ring-primary/40 transition-transform duration-300 hover:scale-105 sm:block sm:w-36">
            <img
              src={clienteReservaImg}
              alt="Reserva móvil para clientes"
              width="400"
              height="800"
              className="w-full rounded-xl object-cover"
            />
            <span className="mt-1 block text-center text-[0.58rem] font-bold text-ink">
              📱 Reserva cliente
            </span>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-xs text-fog">
        Interfaz real de PEVLYN Agenda — Barbería Nórdica en funcionamiento.
      </figcaption>
    </figure>
  )
}
