import Image from 'next/image'

type LeadershipExperience = {
  title: string
  company: string
  location: string
  duration: string
  description: string[]
  image: string
}

const leadershipRoles: LeadershipExperience[] = [
  {
    title: "Event Director",
    company: "NUS Golf Club",
    location: "Singapore",
    duration: "Aug 2024 - Present",
    description: [
      "Spearheading event planning and logistics for golf tournaments and networking sessions.",
      "Increased member participation by 40% through strategic outreach and collaborations."
    ],
    image: "/images/nusgolf.jpeg"
  },
  {
    title: "Interest Group Leader",
    company: "Pioneer House Table Tennis IG",
    location: "NUS, Singapore",
    duration: "Jan 2024 - Present",
    description: [
      "Organized regular training sessions and friendly competitions.",
      "Built a community of over 50 residents participating actively in events."
    ],
    image: "/images/ph.jpeg"
  },
  {
    title: "Co-Founder",
    company: "Sarawak Student Initiative",
    location: "Malaysia",
    duration: "Apr 2022 - Dec 2023",
    description: [
      "Launched student-led outreach programs to support underprivileged youth in Sarawak.",
      "Managed a team of 15 volunteers; reached over 300 students through workshops."
    ],
    image: "/images/sarawak.jpeg"
  }
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Leadership Experience
          </h2>
        </div>
        <div className="mt-12 space-y-12">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image
                    src={role.image}
                    alt={role.company}
                    fill
                    className="object-cover rounded-t md:rounded-l md:rounded-t-none"
                  />
                </div>
                <div className="flex-1">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {role.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {role.company} ({role.location})
                    </p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {role.duration}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="list-disc pl-5 space-y-2">
                      {role.description.map((item, i) => (
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
