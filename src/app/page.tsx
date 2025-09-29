import Head from 'next/head'
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name | Software Engineer & AI Enthusiast</title>
        <meta name="description" content="Portfolio of Your Name — showcasing projects, experience, and achievements in software engineering, AI, and tech leadership." />
        
        {/* Open Graph for social media */}
        <meta property="og:title" content="Your Name | Software Engineer & AI Enthusiast" />
        <meta property="og:description" content="Explore my work and journey in software engineering and AI." />
        <meta property="og:image" content="/images/og-preview.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Name | Software Engineer & AI Enthusiast" />
        <meta name="twitter:description" content="Explore my work and journey in software engineering and AI." />
        <meta name="twitter:image" content="/images/og-preview.jpg" />
      </Head>

      <main>
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
      </main>
    </>
  )
}
