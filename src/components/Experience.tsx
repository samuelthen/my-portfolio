// src/components/Experience.tsx
import type { Experience as ExperienceType } from '@/types'
import Image from 'next/image'

const experiences: ExperienceType[] = [
  {
    title: "Software Engineer Intern",
    company: "Central Provident Fund Board (CPFB)",
    location: "Singapore",
    duration: "May 2025 - Aug 2025",
    description: [
      "Ongoing"
    ],
    image: "/images/cpf.png"
  },
  {
    title: "Cybersecurity Engineer Intern",
    company: "Cyber Army Indonesia",
    location: "Bandung, Indonesia",
    duration: "May 2024 - Aug 2024",
    description: [
      "Developed custom web vulnerability scanning tools and implemented 50 scan rules; improved penetration testing tool development efficiency by 150%",
      "Collaborated with Indonesian interns, researching and architecting in-house Cyber Threat Intelligence tools; accelerated launch timeline by 3 months"
    ],
    image: "/images/cyberarmy.jpeg"
  },
  {
    title: "Software Engineer Intern",
    company: "NUS Smart Systems Institute",
    location: "Singapore",
    duration: "Jan 2024 - Apr 2024",
    description: [
      "Collaborated with NUS student interns, integrating computer vision and large language models (LLM) into smart glasses systems; improved user feedback rating by 30%"
    ],
    image: "/images/ssi.jpeg"
  },
  {
    title: "Software Engineer Intern",
    company: "Rajang Digital Solutions",
    location: "Kuching, Malaysia",
    duration: "Apr 2023 - Jul 2023",
    description: [
      "Deployed named entity recognition in information extraction workflow; enhanced system accuracy by 30%",
      "Engineered an automation pipeline for document processing and translation for financial documents; enhanced client's satisfaction by 50%"
    ],
    image: "/images/rajang.jpeg"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Experience
          </h2>
        </div>
        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover rounded-t md:rounded-l md:rounded-t-none"
                  />
                </div>
                <div className="flex-1">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {exp.company} ({exp.location})
                    </p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {exp.duration}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
