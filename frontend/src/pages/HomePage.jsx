import Hero from '../sections/Hero.jsx'
import Problem from '../sections/Problem.jsx'
import Solutions from '../sections/Solutions.jsx'
import DemoPreview from '../sections/DemoPreview.jsx'
import AgendaIntro from '../sections/AgendaIntro.jsx'
import Process from '../sections/Process.jsx'
import Projects from '../sections/Projects.jsx'
import Pricing from '../sections/Pricing.jsx'
import FAQ from '../sections/FAQ.jsx'
import FinalCTA from '../sections/FinalCTA.jsx'

/**
 * / — la portada comercial.
 *
 * Su trabajo es vender la propuesta de PEVLYN y mandar a probarla. Por eso
 * NO monta aquí ninguna herramienta interactiva: el diagnóstico, la demo de
 * Agenda y el constructor viven en /demo, y el desarrollo del producto en
 * /agenda. Lo que queda aquí es el argumento, no la experiencia.
 *
 *   problema → soluciones → pruébalo → el producto → cómo trabajamos
 *   → qué construimos → precio → dudas → acción
 *
 * Cada idea aparece UNA vez. Las capas de PEVLYN y su progresión se cuentan
 * juntas en Soluciones, no en dos secciones que repetían las mismas cuatro
 * palabras.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solutions />
      <DemoPreview />
      <AgendaIntro />
      <Process />
      <Projects />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
