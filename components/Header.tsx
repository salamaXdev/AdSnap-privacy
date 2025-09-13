'use client'

import { Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
              <Shield className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AdSnap</h1>
              <p className="text-sm text-gray-500">Privacy Policy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#introduction" className="text-gray-600 hover:text-primary-600 transition-colors">
              Introduction
            </a>
            <a href="#information-collected" className="text-gray-600 hover:text-primary-600 transition-colors">
              Data Collection
            </a>
            <a href="#data-usage" className="text-gray-600 hover:text-primary-600 transition-colors">
              Data Usage
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#introduction" className="text-gray-600 hover:text-primary-600 transition-colors">
                Introduction
              </a>
              <a href="#information-collected" className="text-gray-600 hover:text-primary-600 transition-colors">
                Data Collection
              </a>
              <a href="#data-usage" className="text-gray-600 hover:text-primary-600 transition-colors">
                Data Usage
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
