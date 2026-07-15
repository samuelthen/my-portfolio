'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'] })

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Recognition', id: 'recognition' },
    { name: 'Teaching', id: 'teaching' },
    { name: 'Leadership', id: 'leadership' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
  ]

  return (
    <nav className="fixed z-50 w-full border-b border-slate-200 bg-[#f7f7f5]/95 text-slate-950 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between h-[4.5rem]">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => scrollToSection('hero')} className="flex items-center">
              <span className={`text-base font-semibold tracking-tight text-slate-950 ${spaceGrotesk.className}`}>Samuel Then</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 ${spaceGrotesk.className}`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-slate-500 transition-colors hover:text-slate-950"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-950"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`mb-3 border border-slate-200 bg-white p-2 shadow-xl ${spaceGrotesk.className}`}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full px-3 py-3 text-left text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
