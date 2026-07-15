import type { Skill } from '@/types'

const skills: Skill[] = [
  {
    category: "AI",
    items: ["PyTorch", "Diffusion Models", "LLMs", "Computer Vision", "Natural Language Processing"]
  },
  {
    category: "Engineering",
    items: ["Python", "TypeScript", "Java", "C", "Node.js", "PostgreSQL", "Redis", "Terraform", "Docker", "CI/CD"]
  },
  {
    category: "Languages",
    items: ["English (Native)", "Chinese (Native)"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="border-y border-slate-200 bg-white py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Technical foundation</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950">Methods and systems.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">Tools are listed where they support the work. My primary strengths are experimental ML, evaluation infrastructure, and production-oriented software engineering.</p>
        </div>
        <div className="mt-10 border-y border-slate-200">
          {skills.map((skill) => (
            <div key={skill.category} className="grid gap-4 border-b border-slate-200 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr]">
              <h3 className="text-sm font-semibold text-slate-950">{skill.category}</h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="font-mono text-xs text-slate-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
