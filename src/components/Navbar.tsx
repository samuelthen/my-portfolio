'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'], 
  style: ['italic'],
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Awards', id: 'awards' },
  ]

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {pathname === '/blog' ? (
              <Link href="/" className="flex items-center">
                <span className={`text-2xl text-gray-900 hover:text-indigo-600 italic ${playfair.className}`}>
                  Samuel Then
                </span>
              </Link>
            ) : (
              <button onClick={() => scrollToSection('hero')} className="flex items-center">
                <span className={`text-2xl text-gray-900 hover:text-indigo-600 italic ${playfair.className}`}>
                  Samuel Then
                </span>
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pathname === '/' ? (
              <>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <span className="text-gray-300">|</span>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Blog
                </Link>
              </>
            ) : (
              <Link
                href="/"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Back to Home
              </Link>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {pathname === '/' ? (
                <>
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Link
                    href="/blog"
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600"
                  >
                    Blog
                  </Link>
                </>
              ) : (
                <Link
                  href="/"
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600"
                >
                  Back to Home
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
