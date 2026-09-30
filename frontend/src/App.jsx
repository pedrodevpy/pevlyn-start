import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Problem from './sections/Problem.jsx'
import Answer from './sections/Answer.jsx'
import Solutions from './sections/Solutions.jsx'
import TryPevlyn from './sections/TryPevlyn.jsx'
import Growth from './sections/Growth.jsx'
import Agenda from './sections/Agenda.jsx'
import UseCases from './sections/UseCases.jsx'
import Process from './sections/Process.jsx'
import WhyPevlyn from './sections/WhyPevlyn.jsx'
import Projects from './sections/Projects.jsx'
import Pricing from './sections/Pricing.jsx'
import FAQ from './sections/FAQ.jsx'
import FinalCTA from './sections/FinalCTA.jsx'
import Footer from './sections/Footer.jsx'

/**
 * La landing cuenta una historia, y el orden es el argumento:
 *
 *   problema → respuesta → soluciones → PROBARLO → producto → crecimiento
 *   → para quién → proceso → por qué → proyectos → precio → dudas → acción
 *
 * La V3 añade "Prueba PEVLYN" justo después de Soluciones: una vez que el
 * visitante entiende qué hacemos, lo siguiente es dejarle probarlo, no
 * seguir explicándoselo.
 *
 * El tono de fondo alterna a propósito (oscuro / claro / superficie) para dar
 * ritmo: las secciones oscuras marcan los momentos protagonistas —hero, la
 * idea central de crecimiento, por qué PEVLYN y el cierre—.
 */
export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <Problem />
        <Answer />
        <Solutions />
        <TryPevlyn />
        <Agenda />
        <Growth />
        <UseCases />
        <Process />
        <WhyPevlyn />
        <Projects />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
