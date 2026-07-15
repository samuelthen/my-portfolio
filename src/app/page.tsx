import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Now from '@/components/Now'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Awards from '@/components/Awards'
import HighSchool from '@/components/HighSchool'
import Leadership from '@/components/Leadership'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samuel-then-portfolio.netlify.app'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Samuel Then',
            url: siteUrl,
            image: `${siteUrl}/images/profile.jpeg`,
            jobTitle: 'Software Engineer',
            description:
              'NUS Computer Science student building reliable software systems and intelligent tools.',
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'National University of Singapore',
            },
            sameAs: [
              'https://github.com/samuelthen',
              'https://www.linkedin.com/in/samuel-shi-jie-then-7a18a1214',
            ],
          }),
        }}
      />

      <div>
        <Hero />
        <About />
        <Education />
        <Now />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Awards />
        <HighSchool />
      </div>
    </>
  )
}
