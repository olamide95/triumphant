"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  const backgroundImages = [
    "/images/set1.jpg",
    "/images/set5.jpg",
    "/images/set6.jpg",
    "/images/set4.jpg",
    "/images/set2.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
                <span className="text-white">Triumphant</span>
                <span className="block text-accent">Women Fellowship</span>
              </h1>
              <p className="text-2xl text-white/90 mb-4 font-bold leading-relaxed">
                An Interdenominational Gathering of Winning Women
              </p>
              <p className="text-xl text-accent font-bold">God's Battles Axes and Army</p>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Join our empowering community of faith-filled women. Meet every Wednesday for spiritual growth,
              sisterhood, and life-changing fellowship led by Pst. (Mrs) Anu Babadiya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition text-center"
              >
                Join Us Today
              </Link>
              <Link
                href="/mission-vision"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/30 transition text-center"
              >
                Learn Our Vision
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
