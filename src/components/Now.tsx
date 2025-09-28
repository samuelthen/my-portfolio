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
    title: "Student Exchange Programme",
    organization: "University of Washington (UW), Seattle",
    location: "Seattle, USA",
    duration: "Sep 2025 – Dec 2025",
    description: [
      "Currently pursuing exchange studies at UW's Paul G. Allen School of Computer Science & Engineering",
      "Taking 4 modules: CSE 461 (Intro Computer Networks), CSE 344 (Intro Data Management), MATH 407 (Linear Optimization), and STAT 491 (Intro Stochastic Processes)",
      "Gaining exposure to advanced computer science concepts in a U.S. research-intensive environment"
    ],
    image: "/images/uw.png"
  },
  {
    title: "Research Assistant",
    organization: "Prof. Simon Shaolei Du's Lab",
    location: "University of Washington",
    duration: "Sep 2025 – Present",
    description: [
      "Working under Prof. Simon Shaolei Du, Associate Professor in the Paul G. Allen School of Computer Science & Engineering",
      "Contributing to research on multimodal models, combining vision, language, and other modalities",
      "Collaborating with graduate students and faculty on cutting-edge AI research projects"
    ],
    image: "/images/uw.png"
  },
  {
    title: "Director of Software Development",
    organization: "NUS Fintech Society",
    location: "Singapore",
    duration: "AY25/26",
    description: [
      "Providing technical leadership for software development initiatives within the society",
      "Leading development teams and managing technical projects to advance fintech innovation at NUS"
    ],
    image: "/images/nus_fintech.jpeg"
  },
  {
    title: "Product Associate",
    organization: "Google Developer Group at NUS",
    location: "Singapore",
    duration: "Present",
    description: [
      "Contributing to product development and community engagement initiatives",
      "Organizing technical workshops and events for the developer community",
      "Supporting Google's developer ecosystem at NUS through various programs and activities"
    ],
    image: "/images/gdg2.png"
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
