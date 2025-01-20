import { Skill } from '@/types'

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C"]
  },
  {
    category: "AI & ML",
    items: ["LLM (OpenAI & Claude)", "TensorFlow", "PyTorch", "OpenCV", "SpaCy"]
  },
  {
    category: "Web Frameworks",
    items: ["Node.js", "React.js", "Next.js", "FastAPI"]
  },
  {
    category: "Cloud & Automation",
    items: ["AWS Cloud Foundations", "Workato Automation Pro"]
  }
]

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}