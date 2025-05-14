import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* NLP Labeling Platform */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder-project.jpg"
                alt="NLP Labeling Platform"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                NLP Labeling Platform
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal Project
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <p className="text-gray-600">
                Built a cloud-based platform for NLP dataset annotation using Supabase, FastAPI & Next.js
              </p>
            </div>
          </div>

          {/* Generative AI-Powered Digital Personal Assistant */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder-project.jpg"
                alt="Generative AI-Powered Digital Personal Assistant"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Generative AI-Powered Digital Personal Assistant
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Hackathon Project
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <p className="text-gray-600">
                Built full-stack application using Firebase & Next.js, integrating LLM-based email summarization and task automation
              </p>
            </div>
          </div>

          {/* Bakery Business Management System */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder-project.jpg"
                alt="Bakery Business Management System"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Bakery Business Management System
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                School Project
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <p className="text-gray-600">
                Developed a Java standalone application, applying OOP MVC design patterns, SOLID principles & JUnit testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 