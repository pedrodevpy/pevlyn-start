import agendaDiaImg from '../assets/capturas/agenda-dia.jpg'
import clienteReservaImg from '../assets/capturas/cliente-reserva.jpg'

/**
 * Vista previa con la interfaz real de PEVLYN Agenda.
 *
 * Muestra la captura auténtica de la plataforma en funcionamiento
 * (Barbería Nórdica) con su cuadrícula de citas simultáneas y
 * el flujo móvil del cliente.
 */
export default function AgendaPreview() {
  return (
    <figure className="relative m-0 w-full">
      {/* Halo de profundidad detrás del mockup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-primary/20 blur-3xl"
      />

      <div className="overflow-hidden rounded-[26px] bg-ink-raised shadow-glow ring-1 ring-white/10 sm:rounded-[32px]">
        {/* Barra superior estilo aplicación */}
        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-500/80 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-amber-500/80 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80 sm:h-2.5 sm:w-2.5" />
            <span className="ml-2 font-mono text-[0.65rem] text-white/45 sm:text-xs">
              pevlyn.com/app/agenda
            </span>
          </div>
          <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[0.62rem] font-semibold text-primary-soft">
            En vivo
          </span>
        </div>

        {/* Captura auténtica de PEVLYN Agenda */}
        <div className="relative bg-[#f5f3f2] p-2 sm:p-3">
          <img
            src={agendaDiaImg}
            alt="Interfaz real de PEVLYN Agenda — Calendario diario con citas simultáneas"
            width="800"
            height="500"
            className="w-full rounded-xl object-cover shadow-sm ring-1 ring-black/5 sm:rounded-2xl"
            loading="eager"
          />

          {/* Miniatura flotante del flujo de reserva móvil */}
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
        Interfaz real de PEVLYN Agenda — Calendario diario para negocios con citas en tiempo real.
      </figcaption>
    </figure>
  )
}
