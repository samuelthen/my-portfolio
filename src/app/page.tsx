import OnlineCV from '@/components/OnlineCV'

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
            jobTitle: 'AI Researcher and Software Engineer',
            description:
              'NUS Computer Science student working on multimodal learning, computational imaging, foundation models, and software systems.',
            affiliation: {
              '@type': 'CollegeOrUniversity',
              name: 'National University of Singapore',
            },
            knowsAbout: [
              'Artificial Intelligence',
              'Machine Learning',
              'Computer Vision',
              'Natural Language Processing',
              'Multimodal Learning',
              'Computational Imaging',
              'Software Engineering',
            ],
            sameAs: [
              'https://github.com/samuelthen',
              'https://www.linkedin.com/in/samuelthen/',
            ],
          }),
        }}
      />

      <OnlineCV />
    </>
  )
}
