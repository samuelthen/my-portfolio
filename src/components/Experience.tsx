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
      "Architected enterprise document migration pipeline processing 75,000+ legacy files with 98% performance improvement (30 min → 30 sec per file) through Microsoft XML reverse-engineering and Bash scripting",
      "Built cloud-native microservices infrastructure on AWS using Terraform IaC, ECS containerization, VPC networking, and zero-trust security architecture for production-grade scalability",
      "Engineered cross-platform data intelligence system with automated pipelines implementing authentication handling, anti-scraping countermeasures, and LLM-powered sentiment analysis via Model Context Protocol for executive strategic insights"
    ],
    image: "/images/cpf.png"
  },
  {
    title: "Cybersecurity Engineer Intern",
    company: "Cyber Army Indonesia",
    location: "Bandung, Indonesia",
    duration: "May 2024 - Aug 2024",
    description: [
      "Engineered a Python-based web vulnerability scanner with 50+ custom detection rules (e.g., SQL Injection, XSS, CSRF), enhanced penetration testing throughput by 50% and enabling faster triage of web application flaws",
      "Spearheaded development of internal Cyber Threat Intelligence (CTI) tooling, accelerating launch by 3 months"
    ],
    image: "/images/cyberarmy.jpeg"
  },
  {
    title: "Software Engineer Intern (AI)",
    company: "NUS Smart Systems Institute",
    location: "Singapore",
    duration: "Jan 2024 - Apr 2024",
    description: [
      "Integrated YOLOv8 computer vision model into smart glasses for real-time detection, augmenting contextual awareness",
      "Incorporated OpenAI's large language models (LLMs) to deliver contextual assistance; improved decision support UX by 30%"
    ],
    image: "/images/ssi.jpeg"
  },
  {
    title: "Software Engineer Intern",
    company: "Rajang Digital Solutions",
    location: "Kuching, Sarawak",
    duration: "Apr 2023 - Jul 2023",
    description: [
      "Fine-tuned SpaCy named entity recognition (NER) model for automated financial data extraction; boosted precision by 30%",
      "Developed full-stack pipelines for financial document parsing and bilingual translation, cutting manual processing time by 50%"
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
