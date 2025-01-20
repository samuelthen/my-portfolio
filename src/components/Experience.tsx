// src/components/Experience.tsx
import type { Experience as ExperienceType } from '@/types'

const experiences: ExperienceType[] = [
  {
    title: "Cybersecurity Engineer Intern",
    company: "Cyber Army Indonesia",
    location: "Bandung, Indonesia",
    duration: "May 2024 - Aug 2024",
    description: [
      "Developed custom web vulnerability scanning tools and implemented 50 scan rules; improved penetration testing tool development efficiency by 150%",
      "Collaborated with Indonesian interns, researching and architecting in-house Cyber Threat Intelligence tools; accelerated launch timeline by 3 months"
    ]
  },
  {
    title: "AI Engineer Intern",
    company: "NUS Smart Systems Institute",
    location: "Singapore",
    duration: "Jan 2024 - Apr 2024",
    description: [
      "Collaborated with NUS student interns, integrating computer vision and large language models (LLM) into smart glasses systems; improved user feedback rating by 30%"
    ]
  },
  {
    title: "Backend Engineer Intern",
    company: "Rajang Digital Solutions",
    location: "Kuching, Malaysia",
    duration: "Apr 2023 - Jul 2023",
    description: [
      "Deployed named entity recognition in information extraction workflow; enhanced system accuracy by 30%",
      "Engineered an automation pipeline for document processing and translation for financial documents; enhanced client's satisfaction by 50%"
    ]
  }
]

export function ExperienceComponent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-indigo-600">{exp.company}</p>
              <p className="text-gray-500">{exp.location} | {exp.duration}</p>
              <ul className="mt-4 space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-600">• {desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceComponent;