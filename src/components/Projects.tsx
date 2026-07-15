import Image from 'next/image'

type Project = {
  title: string
  context: string
  description: string
  result: string
  image: string
}

const projects: Project[] = [
  {
    title: "Giving agents hands, not just opinions",
    context: "Open source · automation",
    description: "I extended n8n so autonomous agents could use real workflows—and made Excel operations work entirely in memory along the way.",
    result: "Two community nodes",
    image: "/images/n8n.png"
  },
  {
    title: "Forecasting a market made of steel",
    context: "Forecasting · product",
    description: "A demand model became a full decision tool: forecasts, an analytics assistant, and a dashboard designed for questions rather than charts.",
    result: "38.6% less error",
    image: "/images/aisingapore.png"
  },
  {
    title: "Teaching a model not to take headlines literally",
    context: "Language · contrastive learning",
    description: "Sarcasm and factuality look deceptively similar from a distance. I explored the representations that make them separate cleanly.",
    result: "0.938 F1",
    image: "/images/sarcasmproject.png"
  },
  {
    title: "Building language tools closer to home",
    context: "Sarawak dialects · data tooling",
    description: "A collaborative annotation platform for language resources that rarely get polished tooling, with live sync and roles built in.",
    result: "Built for real annotators",
    image: "/images/nerproject.png"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Side routes</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Things curiosity turned into software.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">Not a complete archive. Just four detours worth keeping.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className={`group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:border-slate-950 ${index % 2 === 1 ? 'md:translate-y-16' : ''}`}>
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.14em]">
                  <p className="text-indigo-700">{project.context}</p>
                  <p className="font-mono text-slate-400">0{index + 1}</p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-7 tracking-[-0.025em] text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
                <p className="mt-6 border-t border-slate-200 pt-4 text-sm font-medium text-slate-950">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
