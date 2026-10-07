import { useState } from 'react'
import {
  Smartphone,
  Laptop,
  CalendarDays,
  Clock,
  User,
  Scissors,
  Check,
  CheckCircle2,
  X,
  ChevronRight,
  Plus,
  ArrowRight,
  Search,
  Building2,
  Sparkles,
  MapPin,
  Phone,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'
import DemoAppointment from './DemoAppointment.jsx'
import DemoClient from './DemoClient.jsx'
import {
  businessInfo,
  demoServices,
  demoProfessionals,
  demoTimeSlots,
  initialAppointments,
  demoClients,
} from '../data/agendaDemo.js'

export default function AgendaDashboard() {
  // Perspectiva: 'cliente' (Reserva móvil) o 'negocio' (Panel administrativo)
  const [perspective, setPerspective] = useState('cliente')

  // Estado compartido de citas: la reserva del cliente entra a la agenda del negocio
  const [appointments, setAppointments] = useState(initialAppointments)
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [selectedClient, setSelectedClient] = useState(null)

  // Estado del flujo de reserva del cliente
  const [clientStep, setClientStep] = useState('form') // 'form' | 'confirmed' | 'manage'
  const [selectedService, setSelectedService] = useState(demoServices[0])
  const [selectedProfessional, setSelectedProfessional] = useState(demoProfessionals[0])
  const [selectedTime, setSelectedTime] = useState('15:00')
  const [selectedDate] = useState('07/10/2026')
  const [clientName, setClientName] = useState('Mariana Ospina')
  const [clientPhone, setClientPhone] = useState('301 234 5678')
  const [clientEmail, setClientEmail] = useState('mariana.ospina@ejemplo.com')
  const [habeasDataAccepted, setHabeasDataAccepted] = useState(true)
  const [lastBooking, setLastBooking] = useState(null)

  // Estado de navegación del panel de negocio
  const [businessTab, setBusinessTab] = useState('agenda') // 'resumen' | 'agenda' | 'clientes' | 'servicios'
  const [agendaMode, setAgendaMode] = useState('dia') // 'dia' | 'semana'
  const [clientSearch, setClientSearch] = useState('')

  // Manejar reserva desde el cliente
  function handleBookAppointment(e) {
    e.preventDefault()
    if (!habeasDataAccepted) return

    const proName =
      selectedProfessional.id === 'cualquiera' ? 'Camilo Restrepo' : selectedProfessional.name
    const proColor = selectedProfessional.id === 'andres' ? '#eab308' : '#7366fe'

    const newApt = {
      id: `booking-${Date.now()}`,
      time: selectedTime,
      hour: parseFloat(selectedTime.split(':')[0]) + (selectedTime.split(':')[1] === '30' ? 0.5 : 0),
      durationMinutes: selectedService.durationMinutes,
      clientName: clientName.trim() || 'Cliente Demostración',
      serviceName: selectedService.name,
      professionalName: proName,
      proColor: proColor,
      price: selectedService.price,
      status: 'Confirmada',
      isUserCreated: true,
    }

    setAppointments((prev) => [newApt, ...prev])
    setLastBooking(newApt)
    setClientStep('confirmed')
  }

  // Cancelar la cita reservada
  function handleCancelBooking() {
    if (lastBooking) {
      setAppointments((prev) => prev.filter((a) => a.id !== lastBooking.id))
      setLastBooking(null)
    }
    setClientStep('form')
  }

  // Cambiar a la vista del negocio y enfocar la agenda
  function handleGoToBusinessAgenda() {
    setPerspective('negocio')
    setBusinessTab('agenda')
  }

  return (
    <div className="w-full">
      {/* Barra de control de perspectiva */}
      <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-3 shadow-card ring-1 ring-black/[0.04] sm:flex-row sm:p-4">
        <div className="flex w-full items-center justify-center gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => setPerspective('cliente')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition sm:flex-initial sm:text-sm ${
              perspective === 'cliente'
                ? 'bg-primary text-white shadow-lift'
                : 'bg-warm-linen text-ink/75 hover:bg-lavender-mist/30 hover:text-ink'
            }`}
          >
            <Smartphone size={17} />
            Vista Cliente
            <span className="hidden rounded-full bg-white/20 px-2 py-0.5 text-[0.65rem] font-medium sm:inline">
              Reserva en móvil
            </span>
          </button>

          <button
            type="button"
            onClick={() => setPerspective('negocio')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition sm:flex-initial sm:text-sm ${
              perspective === 'negocio'
                ? 'bg-primary text-white shadow-lift'
                : 'bg-warm-linen text-ink/75 hover:bg-lavender-mist/30 hover:text-ink'
            }`}
          >
            <Laptop size={17} />
            Vista Negocio
            <span className="hidden rounded-full bg-white/20 px-2 py-0.5 text-[0.65rem] font-medium sm:inline">
              Panel Barbería
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-center text-xs text-fog sm:text-right">
          <Sparkles size={14} className="shrink-0 text-periwinkle" />
          <span>
            {perspective === 'cliente'
              ? 'Prueba reservar una cita y verás cómo entra al instante al panel del negocio.'
              : 'Las citas reservadas por los clientes entran aquí automáticamente en tiempo real.'}
          </span>
        </div>
      </div>

      {/* Contenedor principal de la experiencia */}
      {perspective === 'cliente' ? (
        /* =========================================================================
           VISTA CLIENTE (Reserva Móvil en 4 Pasos)
           ========================================================================= */
        <div className="mx-auto max-w-md">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-xl ring-1 ring-black/[0.05]">
            {/* Encabezado del negocio */}
            <div className="border-b border-warm-linen bg-gradient-to-b from-white to-warm-linen/25 px-6 pt-7 pb-5">
              <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-open text-periwinkle">
                RESERVA TU CITA
              </span>
              <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {businessInfo.name}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-ink/70">
                {businessInfo.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.7rem] text-fog">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-periwinkle" />
                  {businessInfo.address}
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={12} className="text-periwinkle" />
                  {businessInfo.phone}
                </span>
              </div>
            </div>

            {/* Contenido según el paso */}
            {clientStep === 'form' && (
              <form onSubmit={handleBookAppointment} className="p-6">
                {/* Paso 1: Elige el servicio */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm font-bold text-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lavender-mist text-xs text-primary font-bold">
                      1
                    </span>
                    Elige el servicio
                  </label>

                  <div className="mt-3 flex flex-col gap-2.5">
                    {demoServices.map((srv) => {
                      const isSelected = selectedService.id === srv.id
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          className={`flex items-center justify-between rounded-2xl p-3.5 text-left transition-all ring-1 ${
                            isSelected
                              ? 'bg-lavender-mist/30 ring-periwinkle shadow-sm'
                              : 'bg-white ring-warm-linen hover:bg-warm-linen/40'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded-full border transition ${
                                isSelected ? 'border-primary bg-primary' : 'border-linen-stone bg-white'
                              }`}
                            >
                              {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-ink">{srv.name}</p>
                              <p className="text-xs text-fog">
                                {srv.duration} · {srv.price}
                              </p>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Paso 2: ¿Con quién? */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm font-bold text-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lavender-mist text-xs text-primary font-bold">
                      2
                    </span>
                    ¿Con quién?
                  </label>

                  <div className="mt-3">
                    <select
                      value={selectedProfessional.id}
                      onChange={(e) => {
                        const pro = demoProfessionals.find((p) => p.id === e.target.value)
                        if (pro) setSelectedProfessional(pro)
                      }}
                      className="w-full rounded-xl border border-warm-linen bg-white px-3.5 py-3 text-sm font-medium text-ink shadow-sm outline-none transition focus:border-periwinkle focus:ring-1 focus:ring-periwinkle"
                    >
                      {demoProfessionals.map((pro) => (
                        <option key={pro.id} value={pro.id}>
                          {pro.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Paso 3: ¿Cuándo? */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm font-bold text-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lavender-mist text-xs text-primary font-bold">
                      3
                    </span>
                    ¿Cuándo?
                  </label>

                  <div className="mt-3">
                    <div className="mb-3 flex items-center justify-between rounded-xl border border-warm-linen bg-white px-3.5 py-2.5 text-sm font-medium text-ink shadow-sm">
                      <span>{selectedDate}</span>
                      <CalendarDays size={16} className="text-fog" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {demoTimeSlots.map((time) => {
                        const isSelected = selectedTime === time
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-xl py-2 text-center text-xs font-semibold transition ${
                              isSelected
                                ? 'bg-primary text-white shadow-lift'
                                : 'bg-warm-linen/60 text-ink/80 hover:bg-warm-linen hover:text-ink'
                            }`}
                          >
                            {time}
                          </button>
                        )
                      })}
                    </div>
                    <p className="mt-2 text-[0.68rem] text-fog">Horas de America/Bogota.</p>
                  </div>
                </div>

                {/* Paso 4: Tus datos */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm font-bold text-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lavender-mist text-xs text-primary font-bold">
                      4
                    </span>
                    Tus datos
                  </label>

                  <div className="mt-3 flex flex-col gap-3">
                    <div>
                      <span className="text-xs font-medium text-ink/80">Nombre</span>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Tu nombre completo"
                        className="mt-1 w-full rounded-xl border border-warm-linen bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-periwinkle focus:ring-1 focus:ring-periwinkle"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-medium text-ink/80">Teléfono</span>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="Ej. 300 123 4567"
                        className="mt-1 w-full rounded-xl border border-warm-linen bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-periwinkle focus:ring-1 focus:ring-periwinkle"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-medium text-ink/80">Correo (opcional)</span>
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="tucorreo@ejemplo.com"
                        className="mt-1 w-full rounded-xl border border-warm-linen bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-periwinkle focus:ring-1 focus:ring-periwinkle"
                      />
                      <p className="mt-1 text-[0.65rem] text-fog">
                        Si lo dejas, te enviamos la confirmación y el enlace para cancelar.
                      </p>
                    </div>

                    <label className="mt-2 flex items-start gap-2.5 text-xs text-ink/80">
                      <input
                        type="checkbox"
                        checked={habeasDataAccepted}
                        onChange={(e) => setHabeasDataAccepted(e.target.checked)}
                        className="mt-0.5 rounded text-primary focus:ring-periwinkle"
                      />
                      <span>
                        Autorizo a {businessInfo.name} a tratar mis datos personales para gestionar
                        esta cita.{' '}
                        <span className="text-periwinkle underline">Ver política de privacidad</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={!habeasDataAccepted}
                  className="w-full rounded-xl bg-primary py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lift transition hover:bg-primary-dark disabled:opacity-50"
                >
                  RESERVAR MIÉRCOLES, 7 DE OCTUBRE A LAS {selectedTime}
                </button>

                <p className="mt-4 text-center text-[0.65rem] text-fog">
                  Reservas gestionadas con PEVLYN Agenda. Las horas se muestran en la zona horaria del
                  negocio (America/Bogota).
                </p>
              </form>
            )}

            {/* Confirmación de la cita (Mockup 04) */}
            {clientStep === 'confirmed' && (
              <div className="p-7 text-center motion-safe:animate-reveal">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-4 ring-emerald-500/10">
                  <Check size={26} strokeWidth={2.5} />
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                  Tu cita quedó reservada
                </h3>
                <p className="mt-1 text-xs text-ink/75">
                  {clientName}, te esperamos en {businessInfo.name}.
                </p>

                <div className="mt-6 rounded-2xl border border-warm-linen bg-warm-linen/30 p-4 text-left text-xs">
                  <dl className="flex flex-col divide-y divide-warm-linen/80">
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Servicio</dt>
                      <dd className="font-semibold text-ink">{selectedService.name}</dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Cuándo</dt>
                      <dd className="font-semibold text-ink">
                        miércoles, 7 de octubre · {selectedTime}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Profesional</dt>
                      <dd className="font-semibold text-ink">
                        {selectedProfessional.id === 'cualquiera'
                          ? 'Camilo Restrepo'
                          : selectedProfessional.name}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Precio</dt>
                      <dd className="font-bold text-primary">{selectedService.price}</dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Dónde</dt>
                      <dd className="font-semibold text-ink">{businessInfo.address}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={handleGoToBusinessAgenda}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-bold text-white shadow-lift transition hover:bg-primary-dark"
                  >
                    Ver mi cita en la Agenda del Negocio
                    <ArrowRight size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setClientStep('manage')}
                    className="w-full rounded-xl border border-linen-stone/60 bg-white py-2.5 text-xs font-semibold text-ink transition hover:border-periwinkle hover:text-periwinkle"
                  >
                    Gestionar o cancelar cita
                  </button>

                  <button
                    type="button"
                    onClick={() => setClientStep('form')}
                    className="mt-1 text-xs text-fog underline hover:text-ink"
                  >
                    Hacer otra reserva
                  </button>
                </div>
              </div>
            )}

            {/* Gestionar / Cancelar (Mockup 05) */}
            {clientStep === 'manage' && (
              <div className="p-7 text-center motion-safe:animate-reveal">
                <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-fog">
                  {businessInfo.name}
                </span>
                <h3 className="mt-1 font-heading text-2xl font-bold text-ink">Tu cita</h3>

                <div className="mt-6 rounded-2xl border border-warm-linen bg-white p-4 text-left text-xs shadow-sm">
                  <dl className="flex flex-col divide-y divide-warm-linen/80">
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Servicio</dt>
                      <dd className="font-semibold text-ink">{selectedService.name}</dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Cuándo</dt>
                      <dd className="font-semibold text-ink">
                        miércoles, 7 de octubre · {selectedTime}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Profesional</dt>
                      <dd className="font-semibold text-ink">
                        {selectedProfessional.id === 'cualquiera'
                          ? 'Camilo Restrepo'
                          : selectedProfessional.name}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Precio</dt>
                      <dd className="font-bold text-ink">{selectedService.price}</dd>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <dt className="text-fog">Estado</dt>
                      <dd>
                        <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-700 ring-1 ring-emerald-600/20">
                          Confirmada
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={handleCancelBooking}
                    className="w-full rounded-xl border border-rose-200 bg-white py-3 text-xs font-bold uppercase tracking-wider text-rose-600 transition hover:bg-rose-50"
                  >
                    CANCELAR MI CITA
                  </button>

                  <button
                    type="button"
                    onClick={() => setClientStep('confirmed')}
                    className="w-full rounded-xl bg-warm-linen py-2.5 text-xs font-semibold text-ink hover:bg-warm-linen/80"
                  >
                    Volver
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* =========================================================================
           VISTA NEGOCIO (Panel Barbería Nórdica)
           ========================================================================= */
        <div className="overflow-hidden rounded-[32px] bg-white shadow-xl ring-1 ring-black/[0.05]">
          {/* Barra superior de la plataforma */}
          <div className="flex flex-wrap items-center justify-between border-b border-warm-linen px-5 py-3.5 sm:px-7">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src={isotipo} alt="PEVLYN" className="h-5 w-auto" />
                <span className="font-heading text-sm font-bold tracking-tight text-ink">
                  PEVLYN
                </span>
              </div>

              <nav className="flex items-center gap-1">
                {[
                  { id: 'resumen', label: 'RESUMEN' },
                  { id: 'agenda', label: 'AGENDA' },
                  { id: 'clientes', label: 'CLIENTES' },
                  { id: 'servicios', label: 'SERVICIOS' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setBusinessTab(t.id)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                      businessTab === t.id
                        ? 'bg-lavender-mist/40 text-periwinkle'
                        : 'text-fog hover:text-ink'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <span className="flex items-center gap-1.5 text-xs font-medium text-ink/80">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {businessInfo.name}
              </span>
              <span className="text-xs text-fog">{businessInfo.ownerEmail}</span>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            {/* SUBPESTAÑA 1: RESUMEN (Mockup 01) */}
            {businessTab === 'resumen' && (
              <div className="motion-safe:animate-reveal">
                <div className="mb-6">
                  <span className="font-sans text-xs font-semibold uppercase tracking-open text-fog">
                    HOLA, CAMILO
                  </span>
                  <h3 className="mt-1 font-heading text-3xl font-bold text-ink">
                    Tu <span className="inline-block rounded-lg bg-lavender-mist px-2.5 py-0.5 text-ink">día</span>
                  </h3>
                </div>

                {/* Tarjeta de métricas hoy */}
                <div className="rounded-[28px] border border-warm-linen bg-white p-6 shadow-card sm:p-8">
                  <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wider text-fog">
                    HOY
                  </span>
                  <div className="mt-4 grid grid-cols-3 gap-6 sm:max-w-xl">
                    <div>
                      <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                        {appointments.length}
                      </p>
                      <p className="mt-1 text-xs text-fog">citas hoy</p>
                    </div>
                    <div>
                      <p className="font-heading text-4xl font-bold text-ink sm:text-5xl">30</p>
                      <p className="mt-1 text-xs text-fog">próximos 7 días</p>
                    </div>
                    <div>
                      <p className="font-heading text-4xl font-bold text-ink sm:text-5xl">
                        {appointments.filter((a) => a.status === 'Confirmada').length}
                      </p>
                      <p className="mt-1 text-xs text-fog">Confirmada</p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-warm-linen/80 pt-4">
                    <button
                      type="button"
                      onClick={() => setBusinessTab('agenda')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-periwinkle hover:underline"
                    >
                      VER LA AGENDA →
                    </button>
                  </div>
                </div>

                {/* Tarjetas inferiores */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-warm-linen bg-white p-6 shadow-card">
                    <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wider text-fog">
                      TU CUENTA
                    </span>
                    <dl className="mt-4 flex flex-col gap-3 text-xs">
                      <div className="flex justify-between">
                        <dt className="text-fog">Nombre</dt>
                        <dd className="font-semibold text-ink">{businessInfo.owner}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-fog">Correo</dt>
                        <dd className="font-semibold text-ink">{businessInfo.ownerEmail}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-fog">Tu rol aquí</dt>
                        <dd className="font-bold uppercase text-primary">{businessInfo.role}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="rounded-[28px] border border-warm-linen bg-white p-6 shadow-card">
                    <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wider text-fog">
                      NEGOCIO ACTIVO
                    </span>
                    <dl className="mt-4 flex flex-col gap-3 text-xs">
                      <div className="flex justify-between">
                        <dt className="text-fog">Nombre</dt>
                        <dd className="font-semibold text-ink">{businessInfo.name}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-fog">Dirección pública</dt>
                        <dd className="font-semibold text-periwinkle underline">
                          {businessInfo.url}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-fog">Zona horaria</dt>
                        <dd className="font-semibold text-ink">{businessInfo.timezone}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            )}

            {/* SUBPESTAÑA 2: AGENDA (Mockup 02 & 03) */}
            {businessTab === 'agenda' && (
              <div className="motion-safe:animate-reveal">
                {/* Controles de cabecera */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-open text-fog">
                      TU CALENDARIO
                    </span>
                    <h3 className="mt-0.5 font-heading text-2xl font-bold text-ink sm:text-3xl">
                      Agenda
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center rounded-xl bg-warm-linen/80 p-1 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setAgendaMode('dia')}
                        className={`rounded-lg px-3 py-1.5 transition ${
                          agendaMode === 'dia' ? 'bg-primary text-white shadow-sm' : 'text-fog'
                        }`}
                      >
                        DÍA
                      </button>
                      <button
                        type="button"
                        onClick={() => setAgendaMode('semana')}
                        className={`rounded-lg px-3 py-1.5 transition ${
                          agendaMode === 'semana' ? 'bg-primary text-white shadow-sm' : 'text-fog'
                        }`}
                      >
                        SEMANA
                      </button>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-warm-linen bg-white px-3 py-1.5 text-xs font-medium text-ink">
                      <span>{businessInfo.dateFormatted}</span>
                      <CalendarDays size={14} className="text-fog" />
                    </div>

                    <button
                      type="button"
                      onClick={() => setPerspective('cliente')}
                      className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lift transition hover:bg-primary-dark"
                    >
                      <Plus size={14} />
                      NUEVA CITA
                    </button>
                  </div>
                </div>

                {/* Calendario del día */}
                <div className="mt-8 rounded-[28px] border border-warm-linen bg-white p-4 shadow-card sm:p-6">
                  <div className="mb-4 flex items-center justify-between border-b border-warm-linen pb-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-fog">
                      MIÉRCOLES, 7 DE OCTUBRE
                    </span>
                    <div className="flex items-center gap-3 text-xs">
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

                  {/* Horario y citas */}
                  <div className="relative flex flex-col divide-y divide-warm-linen/60">
                    {[
                      { label: '08:00', hour: 8 },
                      { label: '09:00', hour: 9 },
                      { label: '10:00', hour: 10 },
                      { label: '11:00', hour: 11 },
                      { label: '12:00', hour: 12 },
                      { label: '13:00', hour: 13 },
                      { label: '14:00', hour: 14 },
                      { label: '15:00', hour: 15 },
                      { label: '16:00', hour: 16 },
                      { label: '17:00', hour: 17 },
                    ].map((slot) => {
                      // Filtrar citas que caen en esta hora
                      const slotApts = appointments.filter(
                        (a) => Math.floor(a.hour) === slot.hour
                      )

                      return (
                        <div key={slot.label} className="grid grid-cols-[56px_minmax(0,1fr)] py-3 sm:grid-cols-[72px_minmax(0,1fr)]">
                          <span className="font-sans text-xs font-semibold tabular-nums text-fog">
                            {slot.label}
                          </span>

                          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                            {slotApts.length === 0 ? (
                              <div className="h-7 w-full rounded-lg border border-dashed border-warm-linen/80" />
                            ) : (
                              slotApts.map((apt) => (
                                <button
                                  key={apt.id}
                                  type="button"
                                  onClick={() => setSelectedAppointment(apt)}
                                  className={`group flex flex-1 items-center justify-between rounded-xl p-2.5 text-left transition hover:scale-[1.01] hover:shadow-sm ${
                                    apt.isUserCreated
                                      ? 'bg-lavender-mist/40 ring-2 ring-periwinkle'
                                      : 'bg-warm-linen/40 ring-1 ring-warm-linen'
                                  }`}
                                  style={{ borderLeft: `4px solid ${apt.proColor || '#7366fe'}` }}
                                >
                                  <div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-xs font-bold text-ink">
                                        {apt.time} {apt.clientName}
                                      </span>
                                      {apt.isUserCreated && (
                                        <span className="rounded-full bg-primary px-1.5 py-0.2 text-[0.6rem] font-bold text-white">
                                          Tu reserva
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[0.68rem] text-fog">
                                      {apt.serviceName} · {apt.professionalName}
                                    </p>
                                  </div>
                                  <span className="text-xs font-semibold tabular-nums text-ink/75">
                                    {apt.price}
                                  </span>
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* SUBPESTAÑA 3: CLIENTES (Mockup 05) */}
            {businessTab === 'clientes' && (
              <div className="motion-safe:animate-reveal">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                      Clientes
                    </h3>
                    <p className="mt-1 text-xs text-fog">
                      Directorio de clientes de Barbería Nórdica
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
                      <input
                        type="text"
                        value={clientSearch}
                        onChange={(e) => setClientSearch(e.target.value)}
                        placeholder="Buscar cliente…"
                        className="rounded-xl border border-warm-linen bg-white pl-9 pr-3.5 py-2 text-xs text-ink outline-none transition focus:border-periwinkle"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[24px] border border-warm-linen bg-white shadow-card">
                  <div className="divide-y divide-warm-linen/80">
                    {demoClients
                      .filter((c) => c.name.toLowerCase().includes(clientSearch.toLowerCase()))
                      .map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedClient(c)}
                          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-warm-linen/30"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lavender-mist/40 text-xs font-bold text-primary">
                              {c.name.slice(0, 2).toUpperCase()}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-ink">{c.name}</p>
                              <p className="text-xs text-fog">
                                {c.phone} · {c.email}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-medium text-ink">{c.lastService}</p>
                            <p className="text-[0.68rem] text-fog">{c.visits} visitas</p>
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUBPESTAÑA 4: SERVICIOS (Mockup 07) */}
            {businessTab === 'servicios' && (
              <div className="motion-safe:animate-reveal">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                    Catálogo de Servicios
                  </h3>
                  <p className="mt-1 text-xs text-fog">
                    Precios y tiempos configurados para Barbería Nórdica
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {demoServices.map((srv) => (
                    <div
                      key={srv.id}
                      className="rounded-[24px] border border-warm-linen bg-white p-5 shadow-card"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-mist/40 text-primary">
                        <Scissors size={18} />
                      </span>
                      <h4 className="mt-4 font-heading text-base font-bold text-ink">{srv.name}</h4>
                      <p className="mt-1 text-xs text-fog">{srv.duration}</p>
                      <p className="mt-4 font-heading text-xl font-bold text-primary">{srv.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modales */}
      <DemoAppointment
        appointment={selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
      />
      <DemoClient client={selectedClient} onClose={() => setSelectedClient(null)} />
    </div>
  )
}
