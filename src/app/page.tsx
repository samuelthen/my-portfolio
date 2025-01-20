import Hero from '@/components/Hero'
import About from '@/components/About'
import { ExperienceComponent as Experience } from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
    </div>
  )
}