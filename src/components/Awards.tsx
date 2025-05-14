export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Awards & Leadership
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Honors */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Honors
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600">Deans List AY 23/24 Semester 2 (GPA 5.0/5.0)</li>
                <li className="text-gray-600">IMDA SG Digital Young Leader</li>
              </ul>
            </div>
          </div>

          {/* Hackathons & Olympiads */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Competitions
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600">AWS Build-On ASEAN Hackathon (First Runner Up)</li>
                <li className="text-gray-600">Singapore Mathematical Olympiad (Bronze)</li>
                <li className="text-gray-600">Physics Olympiad (Bronze)</li>
                <li className="text-gray-600">Chemistry Olympiad (Bronze)</li>
              </ul>
            </div>
          </div>

          {/* Leadership Roles */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Leadership Roles
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600">NUS Golf Club - Event Director (Aug 2024 - Present)</li>
                <li className="text-gray-600">Pioneer House Table Tennis Interest Group - Leader (Jan 2024 - Present)</li>
                <li className="text-gray-600">Sarawak Student Initiative - Co-Founder (Apr 2022 - Dec 2023)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 