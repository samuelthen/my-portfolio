import Image from 'next/image'

export default function Hero() {
  return (
    <div id = "hero" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl tracking-tight font-semibold text-gray-800 sm:text-3xl md:text-3xl">
              <span className="block">Hi, I&apos;m Samuel Then</span>
            </h2>
            <h1 className="mt-2 text-4xl tracking-tight font-extrabold text-indigo-600 sm:text-5xl md:text-6xl leading-tight">
              <span className="block">Building reliable systems with intelligence and intent.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              I'm a Computer Science student at NUS with a focus on AI, data, and systems. 
              I enjoy designing solutions that are efficient, scalable, and grounded in real-world impact.
              I value clean abstractions, sharp tools, and continuous learning - both in code and beyond.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600">
              <Image
                src="/images/profile.jpeg"
                alt="Samuel Then"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}