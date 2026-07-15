import Image from 'next/image'

type CurrentActivity = {
  title: string
  organization: string
  location: string
  duration: string
  description: string[]
  image: string
}

const currentActivities: CurrentActivity[] = [
  {
    title: "AI Research Student",
    organization: "WING NLP Lab @ NUS",
    location: "Singapore",
    duration: "Jul 2026 - Present",
    description: [
      "Working with Prof. Min-Yen Kan on test-time scaling methods for foundation models.",
      "Exploring inference-time self-improvement and iterative refinement."
    ],
    image: "/images/nus.png"
  }
]

export default function Now() {
  return (
    <section id="now" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What I'm Doing Now
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            My current activities and ongoing commitments
          </p>
        </div>
        <div className="mt-12 space-y-12">
          {currentActivities.map((activity, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image
                    src={activity.image}
                    alt={activity.organization}
                    fill
                    className="object-cover rounded-t md:rounded-l md:rounded-t-none"
                  />
                </div>
                <div className="flex-1">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {activity.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {activity.organization} ({activity.location})
                    </p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {activity.duration}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="list-disc pl-5 space-y-2">
                      {activity.description.map((item, i) => (
                        <li key={i} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
