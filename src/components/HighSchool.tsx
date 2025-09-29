import Image from 'next/image'

type HighSchoolAchievement = {
  title: string
  organization: string
  duration: string
  description: string[]
  image: string
}

const highSchoolAchievements: HighSchoolAchievement[] = [
  {
    title: "River Valley High School",
    organization: "Singapore-Cambridge A-Level",
    duration: "Jan 2019 - Dec 2022",
    description: [
      "A-Level Results: H2 Physics, Chemistry, Mathematics, Economics - AAAA, H3 Mathematics - Distinction",
      "Rank Points: 88.875",
      "Leadership: Student Councillor, Science Leaders Academy Department Head"
    ],
    image: "/images/rv.png"
  },
  {
    title: "Science Research Programme",
    organization: "NUS - Student Researcher",
    duration: "Jun 2021 - Feb 2022",
    description: [
      "Developed image-based dietary monitoring system using deep learning and computer vision techniques",
      "Created CNN model for 5 food classes with 76.6% accuracy using TensorFlow",
      "Mentored by Dr Chua Dingjuan (NUS)"
    ],
    image: "/images/nus.png"
  },
  {
    title: "Nanyang Research Programme",
    organization: "NTU - Student Researcher (Gold Award)",
    duration: "May 2020 - Jan 2021",
    description: [
      "Synthesized electro-catalysts for Oxygen evolution reaction through electrodeposition",
      "Conducted Cobalt(II) Hydroxide on Nickel foam with Oxygen plasma activation",
      "Mentored by Prof. Fan Hongjin (NTU)"
    ],
    image: "/images/ntu.png"
  },
  {
    title: "Olympiad Achievements",
    organization: "National Science Olympiads",
    duration: "2021",
    description: [
      "Mathematics Olympiad - Bronze Medal",
      "Physics Olympiad - Bronze Medal", 
      "Chemistry Olympiad - Bronze Medal"
    ],
    image: "/images/olympiads.png"
  }
]

export default function HighSchool() {
  return (
    <section id="highschool" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            High School & Research Experience
          </h2>
        </div>
        <div className="mt-12 space-y-12">
          {highSchoolAchievements.map((achievement, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image
                    src={achievement.image}
                    alt={achievement.organization}
                    fill
                    className="object-cover rounded-t md:rounded-l md:rounded-t-none"
                  />
                </div>
                <div className="flex-1">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {achievement.organization}
                    </p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {achievement.duration}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="list-disc pl-5 space-y-2">
                      {achievement.description.map((item, i) => (
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
