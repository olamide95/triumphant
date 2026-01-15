"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/images/triumphant.jpg" alt="Triumphant Women Fellowship" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-accent leading-none">TRIUMPHANT</p>
              <p className="text-xs text-secondary leading-none">Women Fellowship</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/mission-vision" className="text-sm font-medium text-foreground hover:text-primary transition">
              Mission & Vision
            </Link>
            <Link href="/messages" className="text-sm font-medium text-foreground hover:text-primary transition">
              Messages
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-foreground hover:text-primary transition">
              Gallery
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-gray-200 pt-4">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/mission-vision"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition"
            >
              Mission & Vision
            </Link>
            <Link
              href="/messages"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition"
            >
              Messages
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
