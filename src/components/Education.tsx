// import type { Education as EducationType } from '@/types'

// const education: EducationType[] = [
//   {
//     school: "National University of Singapore",
//     degree: "Bachelor of Computing in Computer Science",
//     duration: "Aug 2023 - Present",
//     gpa: "4.9/5.0",
//     details: [
//       "Concentration in Artificial Intelligence (AI)",
//       "Minor in Mathematics and Data Analytics",
//       "Selected as Teaching Assistant for Programming Methodology",
//       "Selected to join NUS Overseas Colleges Programme in Indonesia"
//     ]
//   }
// ]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Education
          </h2>
        </div>
        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                National University of Singapore
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Bachelor of Computing in Computer Science
              </p>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                GPA: 4.9/5.0 (Highest Distinction)
              </p>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Aug 2023 – Dec 2026
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Concentration</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Artificial Intelligence (AI); Minor in Mathematics and Data Analytics
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Coursework</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Software Engineering, Natural Language Processing
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Achievements</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    • Selected as Teaching Assistant for Programming Methodology with 4.9/5.0 student rating
                    <br />
                    • Selected to join NUS Overseas Colleges Programme in Indonesia to hone entrepreneurial skills
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}