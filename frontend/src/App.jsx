import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import SocialProof from './sections/SocialProof.jsx'
import Problem from './sections/Problem.jsx'
import Solution from './sections/Solution.jsx'
import Services from './sections/Services.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Benefits from './sections/Benefits.jsx'
import PevlynWeb from './sections/PevlynWeb.jsx'
import Pricing from './sections/Pricing.jsx'
import FAQ from './sections/FAQ.jsx'
import FinalCTA from './sections/FinalCTA.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      {/* Salto directo al contenido para usuarios de teclado y lectores de pantalla */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Services />
        <HowItWorks />
        <Benefits />
        <PevlynWeb />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
