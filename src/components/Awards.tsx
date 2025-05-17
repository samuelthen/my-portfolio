import Image from 'next/image'

type Award = {
  title: string
  subtitle: string
  description: string
  image: string
}

const awards: Award[] = [
  {
    title: "2nd Place at NUS STePS 26",
    subtitle: "School of Computing Term Project Showcase",
    description: "Awarded 2nd place for project presentation at NUS STePS 26 among peers and industry professionals.",
    image: "/images/stepscert.png"
  },
  {
    title: "Deans List AY 23/24 Semester 2",
    subtitle: "NUS School of Computing",
    description: "Awarded for achieving a perfect GPA of 5.0/5.0 for the semester.",
    image: "/images/deanslist.png"
  },
  {
    title: "IMDA SG Digital Young Leader",
    subtitle: "IMDA Singapore",
    description: "Recognized as a promising tech talent under Singapore’s national digital initiative.",
    image: "/images/imda.jpg"
  },
  {
    title: "AWS Build-On ASEAN Hackathon",
    subtitle: "First Runner Up",
    description: "Built a full-stack application for sustainability and won 2nd place in a regional hackathon.",
    image: "/images/aws.png"
  },
  {
    title: "Olympiad Achievements (Bronze Medalist)",
    subtitle: "Mathematics, Physics, Chemistry",
    description: "Won Bronze medals in all three national science olympiads.",
    image: "/images/olympiads.png"
  }
]

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Awards & Achievements
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {awards.map((award, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {award.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {award.subtitle}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <p className="text-gray-600">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
