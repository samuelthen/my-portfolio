import Image from 'next/image'

type Project = {
  title: string
  subtitle: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: "Extending n8n Automation Platform",
    subtitle: "Open-Source Project (May 2025 - Jun 2025)",
    description: "Published a custom n8n community node allowing in-memory Excel operations, e.g. writing JSON, text, and images. Created a custom n8n node for the CrewAI multi-agentic framework, allowing autonomous AI agents to directly use n8n tools and workflows for multi-step task automation.",
    image: "/images/n8n.png"
  },
  {
    title: "Strategic Steel Demand Forecasting Platform",
    subtitle: "Hackathon Project (Apr 2025 - May 2025)",
    description: "Won 3rd Place at AI Singapore National AI Student Challenge 2025. Built a steel demand forecasting model, reducing error by 38.6% over baseline; engineered macro-financial indicators (lagged demand, momentum signals, PCA). Deployed a LLM-powered analytics assistant and an interactive dashboard using React.js.",
    image: "/images/aisingapore.png"
  },
  {
    title: "Sarcasm Detection via Contrastive Learning with BERT",
    subtitle: "School AI Project CS4248 (Feb 2025 - Apr 2025)",
    description: "Won 2nd place at 26th NUS SoC Term Project Showcase (STePS). Optimized sarcasm classification by fine-tuning BERT with contrastive learning, achieving a 17.7% F1 score improvement over baseline (F1: 0.938).",
    image: "/images/sarcasmproject.png"
  },
  {
    title: "Financial Credit Scoring Model via RL & RAG",
    subtitle: "School AI Project CS3263 (Feb 2025 - Apr 2025)",
    description: "Achieved Grade A+ in CS3263 - Foundations of Artificial Intelligence. Designed a financial credit scoring model using Reinforcement Learning (RL) and Retrieval-Augmented Generation (RAG); improved fairness (−57% FPR gap), enhanced LLM reliability for explanations, and increased performance robustness across diverse economic conditions.",
    image: "/images/paproject.png"
  },
  {
    title: "Fact Checking Model with Feature-Rich NLP Pipeline",
    subtitle: "School AI Project CS4248 (Feb 2025 - Mar 2025)",
    description: "Won 1st Place in cohort Kaggle leaderboard with highest F1 score (0.90081). Designed feature-rich NLP model to automate fact verification tasks; employed hyperparameter-tuning skills.",
    image: "/images/sarcasmproject.png"
  },
  {
    title: "NER Labelling Platform",
    subtitle: "Personal Project (Jan 2025 - Mar 2025)",
    description: "Developed a collaborative web platform for Named Entity Recognition (NER) labelling using Next.js (frontend) and Supabase (PostgreSQL) for backend services, real-time data syncing, and user session management; implemented role-based access control and relational schema design for efficient data labelling workflows. Integrated native language support for Sarawak dialects, contributing to under-represented language resources in NLP.",
    image: "/images/nerproject.png"
  },
  {
    title: "Java-based CRM Application",
    subtitle: "School SWE Project CS2103 (Sep 2024 - Nov 2024)",
    description: "Achieved Grade A in CS2103T - Software Engineering. Developed a Java-based standalone Customer Relationship Management (CRM) application, applying object-oriented programming (OOP), Model-View-Controller (MVC) architecture, and SOLID design principles. Implemented unit testing with JUnit, integrated exception handling.",
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