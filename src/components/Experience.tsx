// src/components/Experience.tsx
import type { Experience as ExperienceType } from '@/types'
import Image from 'next/image'

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Work Experience
          </h2>
        </div>
        <div className="mt-12 space-y-12">
          {/* Cyber Army Indonesia */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-1/3">
                <Image
                  src="/placeholder-experience.jpg"
                  alt="Cyber Army Indonesia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Cybersecurity Engineer Intern
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Cyber Army Indonesia (Bandung, Indonesia)
                  </p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    May 2024 - Aug 2024
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-600">
                      Developed in-house web vulnerability scanning tools and implemented 50 scan rules using Python; improved
                      penetration testing workflow efficiency by 50%
                    </li>
                    <li className="text-gray-600">
                      Collaborated with Indonesian interns, researching and architecting in-house Cyber Threat Intelligence tools;
                      accelerated launch timeline by 3 months
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* NUS Smart Systems Institute */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-1/3">
                <Image
                  src="/placeholder-experience.jpg"
                  alt="NUS Smart Systems Institute"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    AI Engineer Intern
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    NUS Smart Systems Institute (Singapore)
                  </p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Jan 2024 - Apr 2024
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-600">
                      Collaborated with NUS student interns, integrating computer vision, YOLO, and large language models (LLM),
                      OpenAI, into smart glasses systems; improved user feedback rating by 30%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Rajang Digital Solutions */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-1/3">
                <Image
                  src="/placeholder-experience.jpg"
                  alt="Rajang Digital Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Backend Engineer Intern
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Rajang Digital Solutions (Kuching, Malaysia)
                  </p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Apr 2023 - Jul 2023
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-600">
                      Deployed named entity recognition analysis (NER), spaCy, in information extraction workflow and applied transfer
                      learning and fine-tuning to NER model; enhanced system accuracy by 30% based on human evaluation
                    </li>
                    <li className="text-gray-600">
                      Engineered and implemented pipeline for automated document processing and translation for financial documents;
                      enhanced client's satisfaction by 50%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}