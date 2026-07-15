// src/components/Experience.tsx
import type { Experience as ExperienceType } from '@/types'
import Image from 'next/image'

const experiences: ExperienceType[] = [
  {
    title: "AI Research Student",
    company: "WING NLP Lab @ NUS (Prof. Min-Yen Kan)",
    location: "Singapore",
    duration: "Jul 2026 - Present",
    description: [
      "Exploring test-time scaling methods for foundation models, focusing on inference-time self-improvement and iterative refinement."
    ],
    image: "/images/nus.png"
  },
  {
    title: "Computer Vision Algorithm Intern",
    company: "Sony Semiconductor Solutions",
    location: "Singapore",
    duration: "Jan 2026 - Jun 2026",
    description: [
      "Developed AI video-reconstruction models for next-generation single-photon SPAD sensors under extreme low light; achieved 37.1 dB PSNR, outperforming the retrained baseline by 6.5 dB with approximately 30 times fewer parameters and 248 times fewer FLOPs.",
      "Derived finite-sample Cramer-Rao lower-bound analysis for motion estimation under photon-limited noise and evaluated predictions through controlled ablations.",
      "Built a physics-accurate stochastic sensor simulator optimized with Numba JIT for 2 times speedup.",
      "Proposed a dual SPAD-CMOS sensor-fusion design benchmarked against CVPR, ICCV, and ECCV state-of-the-art methods."
    ],
    image: "/images/sony-semiconductor.png"
  },
  {
    title: "AI Research Student",
    company: "UW Paul G. Allen School of CSE (Prof. Simon Du)",
    location: "Seattle, USA",
    duration: "Sep 2025 - Dec 2025",
    description: [
      "Trained 6 visual-tokenizer/VLM combinations under a fixed MMol2-style two-stage pipeline using Qwen3 and distributed FSDP on 8 L40 GPUs; evaluated on 15 multimodal benchmarks.",
      "Built a 9-backbone by 6-probe evaluation suite across CLIP, DINOv2, SigLIP2, MAE, and VQ tokenizers.",
      "Constructed a semantic 1D tokenizer using frozen SigLIP2, Q-Former, and nested dropout to quantify token-compression cost across multimodal tasks."
    ],
    image: "/images/uw.png"
  },
  {
    title: "Software Engineer Intern",
    company: "Central Provident Fund Board (CPFB)",
    location: "Singapore",
    duration: "May 2025 - Aug 2025",
    description: [
      "Architected an enterprise document-migration pipeline processing 75,000+ legacy files around 50 times faster than the legacy process.",
      "Built an agentic sentiment-analysis platform on MCP and presented strategic insights to CPF leadership, including the CEO."
    ],
    image: "/images/cpf.png"
  },
  {
    title: "Software Engineer Intern",
    company: "Cyber Army Indonesia (NUS Overseas Colleges Indonesia)",
    location: "Bandung, Indonesia",
    duration: "May 2024 - Aug 2024",
    description: [
      "Engineered a CVE scanner with 50+ detection rules and prototyped cyber-threat-intelligence monitoring tools."
    ],
    image: "/images/cyberarmy.jpeg"
  },
  {
    title: "Software Engineer Intern (AI)",
    company: "NUS Smart Systems Institute",
    location: "Singapore",
    duration: "Jan 2024 - Apr 2024",
    description: [
      "Co-built TOM (UbiComp'24), an open-source wearable AI platform; integrated YOLOv8 and OpenAI LLMs into smart glasses."
    ],
    image: "/images/ssi.jpeg"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 border-b border-slate-200 pb-10 md:grid-cols-[0.75fr_1.25fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Experience</p>
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">A compact record of the work.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">The case studies carry the detail. This timeline shows where the work happened and the outcome that mattered most.</p>
          </div>
        </div>
        <div className="divide-y divide-slate-200">
          {experiences.map((exp, index) => (
            <article key={index} className="grid gap-5 py-8 md:grid-cols-[10rem_1fr] md:gap-8">
              <div>
                <p className="font-mono text-xs text-slate-500">{exp.duration}</p>
                <p className="mt-1 text-xs text-slate-400">{exp.location}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
                <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className={exp.company.includes('Sony')
                      ? 'object-contain bg-black p-2'
                      : 'object-contain bg-white p-1'}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{exp.title}</h3>
                  <p className="mt-1 text-sm font-medium text-indigo-700">{exp.company}</p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{exp.description[0]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
