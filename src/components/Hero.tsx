'use client'

import type { PointerEvent } from 'react'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  const moveSignal = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--signal-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--signal-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <section id="hero" onPointerMove={moveSignal} className="hero-signal relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-[#090909] text-[#f5f2e8]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-between px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/50">
          <p>NUS Computer Science · Class of 2027</p>
          <p className="hidden sm:block">Singapore / Kuching</p>
        </div>

        <div className="my-16 max-w-5xl sm:my-20">
          <p className="mb-6 text-sm font-medium text-indigo-300">AI researcher &amp; software engineer</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
            I build AI systems for <span className="text-white/35">difficult signals.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            I&apos;m Samuel, a CS student at NUS working across computational imaging, multimodal learning, and inference-time reasoning—from low-light reconstruction at Sony to foundation-model research at WING and UW.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="group inline-flex items-center gap-3 bg-[#f5f2e8] px-5 py-3 text-sm font-semibold text-[#090909] transition hover:bg-indigo-200">
              See selected work <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="mailto:samuel.then@u.nus.edu" className="inline-flex items-center border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/60">Contact me</a>
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end">
          <div>
            <p className="text-lg font-semibold text-white">37.1 dB</p>
            <p className="mt-1 text-xs text-white/45">SPAD reconstruction at Sony</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">15 benchmarks</p>
            <p className="mt-1 text-xs text-white/45">Multimodal evaluation at UW</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">4.89 / 5.0</p>
            <p className="mt-1 text-xs text-white/45">NUS GPA</p>
          </div>
          <div className="flex gap-5 text-sm text-white/55 sm:justify-end">
            <a href="https://github.com/samuelthen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/samuelthen/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
