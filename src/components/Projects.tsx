import Image from 'next/image'

type Project = {
  title: string
  subtitle: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: "Sarcasm Detection with Contrastive Learning",
    subtitle: "School AI Project (CS4248)",
    description: "Designed and implemented a sarcasm classification model by fine-tuning BERT with contrastive learning. Used Distance Weighted Sampling and linguistic features to improve classification accuracy, achieving a Macro F1 score of 0.938 on a Kaggle dataset.",
    image: "/images/sarcasmproject.png"
  },  
  {
    title: "NER Labeling Platform",
    subtitle: "Personal Project",
    description: "Built a cloud-based platform for NLP dataset annotation using Supabase, FastAPI & Next.js",
    image: "/images/nerproject.png"
  },
  {
    title: "Generative AI-Powered Digital Personal Assistant",
    subtitle: "Hackathon Project",
    description: "Built full-stack application using Firebase & Next.js, integrating LLM-based email summarization and task automation",
    image: "/images/paproject.png"
  },
  {
    title: "Bakery Business Management System",
    subtitle: "School SWE Project (CS2103T)",
    description: "Developed a Java standalone application, applying OOP MVC design patterns, SOLID principles & JUnit testing",
    image: "/images/bakeryproject.png"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {project.subtitle}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
