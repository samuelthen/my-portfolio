import type { Education as EducationType } from '@/types'

const education: EducationType[] = [
  {
    school: "National University of Singapore",
    degree: "Bachelor of Computing in Computer Science",
    duration: "Aug 2023 - Present",
    gpa: "4.9/5.0",
    details: [
      "Concentration in Artificial Intelligence (AI)",
      "Minor in Mathematics and Data Analytics",
      "Selected as Teaching Assistant for Programming Methodology",
      "Selected to join NUS Overseas Colleges Programme in Indonesia"
    ]
  }
]

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
            <p className="text-indigo-600">{edu.degree}</p>
            <p className="text-gray-500">{edu.duration} | GPA: {edu.gpa}</p>
            <ul className="mt-4 space-y-2">
              {edu.details.map((detail, i) => (
                <li key={i} className="text-gray-600">• {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}