import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Samuel Then</span>
            <span className="block text-indigo-600">Software Engineer & AI Enthusiast</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Computer Science student at NUS with a focus on Artificial Intelligence.
            Passionate about building innovative solutions and exploring new technologies.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/samuelthen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-shi-jie-then-7a18a1214"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}