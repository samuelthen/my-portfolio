import Image from 'next/image'

type EducationType = {
  institution: string
  degree: string
  gpa: string
  duration: string
  image: string
  description: string[]
}

const educations: EducationType[] = [
  {
    institution: "National University of Singapore (NUS)",
    degree: "Bachelor of Computing (Honours) in Computer Science, Second Major in Mathematics",
    gpa: "GPA: 4.88/5.0 (Highest Distinction)",
    duration: "Aug 2023 – May 2027",
    image: "/images/nus.png",
    description: [
      "Focus Area: Artificial Intelligence (Certificate of Distinction), Parallel Computing",
      "Leadership: Director of Software Development at NUS Fintech Society AY25/26; providing technical leadership",
      "Teaching: Teaching Assistant for Programming Methodology I, outstanding feedback rating of 4.9/5.0 (Mean: 4.2)",
      "Entrepreneurship: NUS Overseas Colleges Indonesia AY23/24 Special Term",
      "Relevant Coursework: Artificial Intelligence (A+), Data Structures & Algorithms (A), Software Engineering (A)"
    ]
  },
  // {
  //   institution: "University of Washington (UW), Seattle",
  //   degree: "Student Exchange Programme",
  //   gpa: "",
  //   duration: "Sep 2025 – Dec 2025",
  //   image: "/images/uw.png", 
  //   description: [
  //     "Selected for NUS Overseas Exchange Programme to broaden academic and cultural experience in a U.S. research-intensive environment.",
  //     "Engaged with peers and faculty in courses related to systems, data science, and innovation at UW's Paul G. Allen School of Computer Science & Engineering."
  //   ]
  // },
  {
    institution: "NUS Overseas Colleges (Indonesia)",
    degree: "Entrepreneurship Programme",
    gpa: "",
    duration: "AY23/24 Special Term",
    image: "/images/noc.jpg", 
    description: [
      "Immersed in Indonesia's startup ecosystem while interning full-time and attending entrepreneurship workshops.",
      "Explored product-market fit, go-to-market strategies, and startup ideation in collaboration with local founders and mentors."
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Education
          </h2>
        </div>
        <div className="mt-12 space-y-12">
          {educations.map((edu, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image
                    src={edu.image}
                    alt={edu.institution}
                    fill
                    className="object-cover rounded-t md:rounded-l md:rounded-t-none"
                  />
                </div>
                <div className="flex-1">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{edu.degree}</p>
                    <p className="mt-1 text-sm text-gray-500">{edu.gpa}</p>
                    <p className="mt-1 text-sm text-gray-500">{edu.duration}</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="list-disc pl-5 space-y-2">
                      {edu.description.map((item, i) => (
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
