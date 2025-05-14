export default function About() {
    return (
      <section id = "about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              I&apos;m a Computer Science student at the National University of Singapore,
              focusing on Artificial Intelligence with a minor in Mathematics and Data Analytics.
              Currently maintaining a GPA of 4.9/5.0 with Highest Distinction.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
              <p className="mt-2 text-gray-500">English & Chinese (Native), Malay & Indonesian</p>
            </div>
          </div>
        </div>
      </section>
    )
  }