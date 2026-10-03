import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

/**
 * En qué estamos trabajando.
 *
 * ⚠️ Solo proyectos reales con su estado real. Sin métricas, testimonios ni
 * resultados: todavía no existen y presentarlos sería inventar.
 */
export default function Projects() {
  return (
    <Section id="nosotros" labelledBy="proyectos-title">
      <SectionHeading
        id="proyectos-title"
        eyebrow="Nosotros"
        title="Proyectos en marcha."
        description="Estamos empezando, así que preferimos enseñar lo que estamos construyendo antes que hablar de logros que todavía no tenemos."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
