import Image from 'next/image'

export default function Hero() {
  return (
    <div id = "hero" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I&apos;m Samuel Then Shi Jie</span>
              <span className="block text-indigo-600">Software Engineer & AI Enthusiast</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Computer Science student at NUS with a focus on Artificial Intelligence and Mathematics.
              Passionate about building innovative solutions and exploring new technologies.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600">
              <Image
                src="/placeholder-profile.jpg"
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