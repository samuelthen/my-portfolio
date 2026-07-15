import Image from 'next/image'

const experience = [
  {
    period: 'Jul 2026 — Present',
    role: 'AI Research Student',
    organization: 'WING NLP Lab, National University of Singapore',
    location: 'Singapore',
    image: '/images/nus.png',
    bullets: [
      'Researching test-time scaling for foundation models with Prof. Min-Yen Kan, with a focus on inference-time self-improvement and iterative refinement.',
    ],
  },
  {
    period: 'Jan 2026 — Jun 2026',
    role: 'Computer Vision Algorithm Intern',
    organization: 'Sony Semiconductor Solutions',
    location: 'Singapore',
    image: '/images/sony-semiconductor.png',
    bullets: [
      'Developed video-reconstruction models for photon-starved SPAD sensors, reaching 37.1 dB PSNR: +6.5 dB over the retrained baseline with about 30× fewer parameters and 248× fewer FLOPs.',
      'Derived finite-sample Cramér–Rao lower-bound analysis for motion estimation and built a physics-accurate stochastic sensor simulator.',
    ],
  },
  {
    period: 'Sep 2025 — Dec 2025',
    role: 'AI Research Student',
    organization: 'Paul G. Allen School of CSE, University of Washington',
    location: 'Seattle, USA',
    image: '/images/uw.png',
    bullets: [
      'Studied visual tokenizers for multimodal models with Prof. Simon Du; trained six VLM combinations on eight L40 GPUs and evaluated them across 15 benchmarks.',
      'Built a 9-backbone × 6-probe evaluation suite spanning CLIP, DINOv2, SigLIP2, MAE, and VQ tokenizers.',
    ],
  },
  {
    period: 'May 2025 — Aug 2025',
    role: 'Software Engineer Intern',
    organization: 'Central Provident Fund Board',
    location: 'Singapore',
    image: '/images/cpf.png',
    bullets: [
      'Architected an enterprise migration pipeline for 75,000+ legacy files, processing documents about 50× faster than the previous workflow.',
      'Built an agentic sentiment-analysis platform and presented strategic insights to senior leadership.',
    ],
  },
  {
    period: 'May 2024 — Aug 2024',
    role: 'Software Engineer Intern',
    organization: 'Cyber Army Indonesia',
    location: 'Bandung, Indonesia',
    image: '/images/cyberarmy.jpeg',
    bullets: ['Engineered a CVE scanner with 50+ detection rules and prototyped cyber-threat-intelligence monitoring tools.'],
  },
  {
    period: 'Jan 2024 — Apr 2024',
    role: 'Software Engineer Intern, AI',
    organization: 'NUS Smart Systems Institute',
    location: 'Singapore',
    image: '/images/ssi.jpeg',
    bullets: ['Co-built TOM, an open-source wearable AI platform presented at UbiComp 2024, integrating YOLOv8 and language models into smart glasses.'],
  },
  {
    period: 'Apr 2023 — Jul 2023',
    role: 'Backend Engineer Intern',
    organization: 'Rajang Digital Solutions',
    location: 'Kuching, Malaysia',
    image: '',
    bullets: [
      'Deployed named-entity recognition in an information-extraction workflow, improving system accuracy by 30%.',
      'Engineered document-processing and translation automation for financial documents, improving client satisfaction by 50%.',
    ],
  },
]

const projects = [
  {
    name: 'Steel Demand Forecasting Platform',
    meta: 'AI Singapore National AI Student Challenge · 3rd place',
    detail: 'Reduced forecasting error by 38.6% over baseline and built an LLM-assisted analytics dashboard.',
  },
  {
    name: 'Sarcasm Detection & Fact Verification',
    meta: 'Natural language processing · NUS STePS 2nd place',
    detail: 'Reached 0.938 F1 on sarcasm classification and 0.901 F1 on fact verification.',
  },
  {
    name: 'n8n Community Nodes',
    meta: 'Open source · TypeScript',
    detail: 'Published nodes for in-memory Excel operations and CrewAI agents using n8n tools and workflows.',
  },
  {
    name: 'NER Labelling Platform',
    meta: 'Next.js · Supabase',
    detail: 'Built a collaborative annotation platform with live sync, role-based access, and support for Sarawak dialect resources.',
  },
]

const teaching = [
  {
    period: 'AY26/27 Semester 1',
    status: 'Current',
    role: 'Teaching Assistant',
    organization: 'NUS Computing',
    image: '/images/nussoc.jpg',
    bullets: [
      'CS2109S — Introduction to AI and Machine Learning',
      'PI3880 — Advanced Technology Attachment Programme',
    ],
  },
  {
    period: 'AY24/25 Semester 1',
    status: 'Previous',
    role: 'Teaching Assistant',
    organization: 'NUS Computing',
    image: '/images/nussoc.jpg',
    bullets: [
      'CS1101S — Programming Methodology I',
      'Received a 4.9/5.0 student rating.',
    ],
  },
]

const leadership = [
  {
    period: 'AY25/26',
    role: 'Director of Software Development',
    organization: 'NUS Fintech Society',
    image: '/images/nus_fintech.jpeg',
  },
  {
    period: 'AY25/26',
    role: 'Product Associate',
    organization: 'Google Developer Group',
    image: '/images/gdg2.png',
  },
  {
    period: 'Aug 2024 — May 2025',
    role: 'Event Director',
    organization: 'NUS Golf Club',
    image: '/images/nusgolf.jpeg',
  },
  {
    period: 'Jan 2024 — May 2025',
    role: 'Interest Group Leader',
    organization: 'Pioneer House Table Tennis',
    image: '/images/ph.jpeg',
  },
  {
    period: 'Apr 2022 — Dec 2023',
    role: 'Co-Founder',
    organization: 'Sarawak Student Initiative',
    image: '/images/sarawak.jpeg',
  },
]

const recognition = [
  {
    title: 'Singapore National AI Student Challenge',
    result: '3rd Place',
    image: '/images/aisingapore.png',
  },
  {
    title: 'NUS STePS 26',
    result: '2nd Place',
    image: '/images/stepscert.png',
  },
  {
    title: 'AWS Build On ASEAN',
    result: '2nd Place',
    image: '/images/aws.png',
  },
  {
    title: 'NUS Dean’s List',
    result: 'Three semesters',
    image: '/images/deanslist.png',
  },
  {
    title: 'NUS ASEAN Undergraduate Merit Scholarship',
    result: 'Merit scholarship',
    image: '/images/deanslist.png',
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="border-b border-slate-300 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{children}</h2>
}

export default function OnlineCV() {
  return (
    <div className="bg-[#f7f7f5] text-slate-900">
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <header className="grid gap-7 border-b border-slate-400 pb-10 sm:grid-cols-[7rem_1fr] md:grid-cols-[7rem_1fr_auto] md:items-end">
          <div className="relative h-24 w-24 overflow-hidden bg-slate-200 sm:h-28 sm:w-28">
            <Image src="/images/profile.jpeg" alt="Samuel Then" fill priority sizes="112px" className="object-cover" />
          </div>
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Samuel Then</h1>
            <p className="mt-4 text-lg text-slate-700">Computer Science at NUS · AI research and software engineering</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              I work on efficient multimodal learning, computational imaging, and reliable software systems. Currently researching test-time scaling at WING NLP Lab.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm sm:col-start-2 md:col-start-auto md:max-w-48 md:flex-col md:items-end">
            <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900" href="mailto:samuel.then@u.nus.edu">Email</a>
            <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900" href="https://github.com/samuelthen" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900" href="https://www.linkedin.com/in/samuelthen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="text-slate-500">Singapore</span>
          </div>
        </header>

        <main className="mt-12 space-y-14">
          <section id="experience">
            <SectionTitle>Experience &amp; Research</SectionTitle>
            <div className="divide-y divide-slate-200">
              {experience.map((item) => (
                <article key={`${item.organization}-${item.period}`} className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <div className="font-mono text-xs leading-5 text-slate-500">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                  <div className="grid grid-cols-[3rem_1fr] gap-4">
                    <div className={`relative flex h-12 w-12 items-center justify-center overflow-hidden border border-slate-200 ${item.organization.includes('Sony') ? 'bg-black' : 'bg-white'}`}>
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="48px"
                          className={`object-contain ${item.organization.includes('Sony') ? 'p-1.5' : 'p-1'}`}
                        />
                      ) : (
                        <span className="text-[0.65rem] font-bold tracking-[0.08em] text-slate-500">RDS</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-indigo-700">{item.organization}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                        {item.bullets.map((bullet) => <li key={bullet} className="relative pl-4 before:absolute before:left-0 before:content-['—']">{bullet}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="education">
            <SectionTitle>Education</SectionTitle>
            <div className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <p className="font-mono text-xs leading-5 text-slate-500">2023 — 2027</p>
              <div>
                <h3 className="font-semibold">National University of Singapore</h3>
                <p className="mt-1 text-sm text-slate-700">Bachelor of Computing (Honours) in Computer Science · Second Major in Mathematics</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">GPA 4.89/5.00, Highest Distinction · AI Focus Area Certificate of Distinction · ASEAN Merit Scholarship · Dean&apos;s List (3 semesters)</p>
              </div>
            </div>
            <div className="grid gap-3 border-t border-slate-200 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <p className="font-mono text-xs leading-5 text-slate-500">Fall 2025</p>
              <div>
                <h3 className="font-semibold">University of Washington</h3>
                <p className="mt-1 text-sm text-slate-600">Student exchange at the Paul G. Allen School of Computer Science &amp; Engineering · Dean&apos;s List</p>
              </div>
            </div>
          </section>

          <section id="recognition">
            <SectionTitle>Recognition</SectionTitle>
            <div className="grid gap-x-10 md:grid-cols-2">
              {recognition.map((item) => (
                <article key={item.title} className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-slate-200 py-4">
                  <div className="relative h-11 w-11 overflow-hidden border border-slate-200 bg-white">
                    <Image src={item.image} alt="" fill sizes="44px" className="object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{item.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="teaching">
            <SectionTitle>Teaching</SectionTitle>
            <div className="divide-y divide-slate-200">
              {teaching.map((item) => (
                <article key={item.period} className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <div className="font-mono text-xs leading-5 text-slate-500">
                    <p>{item.period}</p>
                    <p className={item.status === 'Current' ? 'text-emerald-700' : ''}>{item.status}</p>
                  </div>
                  <div className="grid grid-cols-[3rem_1fr] gap-4">
                    <div className="relative h-12 w-12 overflow-hidden border border-slate-200 bg-white">
                      <Image src={item.image} alt="" fill sizes="48px" className="object-contain p-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-indigo-700">{item.organization}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                        {item.bullets.map((bullet) => <li key={bullet} className="relative pl-4 before:absolute before:left-0 before:content-['—']">{bullet}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="leadership">
            <SectionTitle>Leadership</SectionTitle>
            <div className="grid gap-x-10 md:grid-cols-2">
              {leadership.map((item) => (
                <article key={`${item.role}-${item.organization}`} className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-slate-200 py-4">
                  <div className="relative h-11 w-11 overflow-hidden border border-slate-200 bg-white">
                    <Image src={item.image} alt="" fill sizes="44px" className="object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-950">{item.role}</h3>
                    <p className="mt-1 text-xs text-indigo-700">{item.organization}</p>
                    <p className="mt-1 font-mono text-[0.68rem] text-slate-500">{item.period}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects">
            <SectionTitle>Selected Projects</SectionTitle>
            <div className="grid gap-x-10 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="border-b border-slate-200 py-6">
                  <h3 className="font-semibold text-slate-950">{project.name}</h3>
                  <p className="mt-1 text-xs font-medium text-indigo-700">{project.meta}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="skills">
            <SectionTitle>Technical Skills</SectionTitle>
            <dl className="mt-5 grid gap-4 text-sm leading-6 md:grid-cols-3">
              <div><dt className="font-semibold">AI</dt><dd className="mt-1 text-slate-600">PyTorch, computer vision, NLP, LLMs, diffusion models</dd></div>
              <div><dt className="font-semibold">Engineering</dt><dd className="mt-1 text-slate-600">Python, TypeScript, Java, C, PostgreSQL, Docker, Terraform, CI/CD</dd></div>
              <div><dt className="font-semibold">Languages</dt><dd className="mt-1 text-slate-600">English and Chinese (native)</dd></div>
            </dl>
          </section>
        </main>
      </div>
    </div>
  )
}
