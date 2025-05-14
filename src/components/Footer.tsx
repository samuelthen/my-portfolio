import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="tel:+6583018093"
              className="inline-flex items-center text-gray-300 hover:text-white"
            >
              <FaPhone className="mr-2" /> +65 8301 8093
            </a>
            <a
              href="mailto:samuel.then@u.nus.edu"
              className="inline-flex items-center text-gray-300 hover:text-white"
            >
              <FaEnvelope className="mr-2" /> samuel.then@u.nus.edu
            </a>
            <a
              href="https://github.com/samuelthen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-white"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-shi-jie-then-7a18a1214"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-white"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
          <p className="mt-8 text-gray-400">© 2024 Samuel Then Shi Jie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}