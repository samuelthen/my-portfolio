import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-[#090909] py-24 text-[#f5f2e8] sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-sm bg-white/5">
            <Image src="/images/profile.jpeg" alt="Samuel Then" fill className="object-cover grayscale transition duration-700 hover:grayscale-0" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">Outside the line items</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                I like problems that look quiet until you learn how to listen.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
              <p className="text-base leading-7 text-white/60">
                Sarawak is home; Singapore is where I study and build. Moving between both has made me comfortable with different assumptions, different kinds of ambition, and the useful friction between them.
              </p>
              <p className="text-base leading-7 text-white/60">
                Away from a screen, I have spent time teaching first-year programmers, running golf events, and building a table-tennis community. I am usually happiest when something difficult becomes clear enough to share.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/45">
              <span>Kuching → Singapore</span>
              <span>Research → systems</span>
              <span>Golf → table tennis</span>
              <a href="mailto:samuel.then@u.nus.edu" className="text-white underline decoration-indigo-400 underline-offset-4">Start a conversation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
