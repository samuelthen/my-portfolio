import type { Skill } from '@/types'

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript (Expert)", "C (Proficient)"]
  },
  {
    category: "AI & ML",
    items: ["PyTorch", "TensorFlow", "OpenAI GPT", "Claude", "YOLO", "OpenCV", "SpaCy", "MLOps"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Terraform", "CI/CD pipelines"]
  },
  {
    category: "Web & Backend",
    items: ["Node.js", "FastAPI", "React.js", "Next.js", "PostgreSQL", "Redis"]
  },
  {
    category: "Languages",
    items: ["English, Chinese (Native)", "Malay, Indonesian (Conversational)"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Certifications
          </h2>
        </div>
        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Technical Skills
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                  >
                    <dt className="text-sm font-medium text-gray-500">{skill.category}</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {skill.items.join(', ')}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
