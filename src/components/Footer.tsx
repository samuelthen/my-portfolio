import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/samuelthen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-shi-jie-then-7a18a1214"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:samuel.then@u.nus.edu"
            className="text-gray-600 hover:text-gray-900"
            aria-label="Email Contact"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="mt-4 text-center text-gray-500">
          © {new Date().getFullYear()} Samuel Then. All rights reserved.
        </div>
      </div>
    </footer>
  )
}