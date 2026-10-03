import Hero from '../sections/Hero.jsx'
import Problem from '../sections/Problem.jsx'
import Solutions from '../sections/Solutions.jsx'
import DemoPreview from '../sections/DemoPreview.jsx'
import Growth from '../sections/Growth.jsx'
import AgendaIntro from '../sections/AgendaIntro.jsx'
import Process from '../sections/Process.jsx'
import WhyPevlyn from '../sections/WhyPevlyn.jsx'
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
 *   problema → soluciones → pruébalo → cómo creces → el producto
 *   → cómo trabajamos → quiénes somos → precio → dudas → acción
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solutions />
      <DemoPreview />
      <Growth />
      <AgendaIntro />
      <Process />
      <WhyPevlyn />
      <Projects />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
