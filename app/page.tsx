"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Carousel } from "@/components/carousel"
import Link from "next/link"

export default function Home() {
  const galleryImages = [
    { src: "/images/set1.jpg", alt: "Women celebrating together" },
    { src: "/images/set5.jpg", alt: "Worship and fellowship" },
    { src: "/images/set6.jpg", alt: "Leadership moment" },
    { src: "/images/set4.jpg", alt: "Ministry event" },
    { src: "/images/set2.jpg", alt: "Prayer moment" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">Every Wed</p>
              <p className="text-foreground/70">Regular Meetings</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary mb-2">9 - 11:30</p>
              <p className="text-foreground/70">Meeting Hours</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">Abuja</p>
              <p className="text-foreground/70">Nigeria</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-foreground/70">Women Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Our Fellowship in Action</h2>
            <p className="text-lg text-foreground/70">
              Celebrating victories, building sisterhood, and growing together
            </p>
          </div>

          <div className="aspect-[4/3]">
            <Carousel images={galleryImages} autoPlay={true} />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16">Why Join Us?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-4">01</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Spiritual Growth</h3>
              <p className="text-foreground/70 leading-relaxed">
                Develop a deeper relationship with God through meaningful worship, biblical teachings, and prayer
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-4">02</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Sisterhood & Support</h3>
              <p className="text-foreground/70 leading-relaxed">
                Connect with amazing women who share your values, faith, and commitment to living victoriously
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-4">03</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Empowerment & Purpose</h3>
              <p className="text-foreground/70 leading-relaxed">
                Be inspired and equipped to live victoriously in all aspects of life and fulfill your divine purpose
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor's Address Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Pastor's Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src="/images/set6.jpg"
                  alt="Pst. (Mrs) Anu Babadiya"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover h-96"
                />
              </div>
            </div>

            {/* Pastor's Message */}
            <div>
              <div className="mb-6">
                <p className="text-accent font-semibold text-lg mb-2">VISIONARY LEADERSHIP</p>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">A Message from Our Lead Pastor</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  "Welcome to Triumphant Women Fellowship, where we celebrate the strength, grace, and power within
                  every woman. As your lead pastor, it is my privilege to shepherd this beautiful community of winning
                  women who are committed to living victoriously."
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  "God has called us to be His battle axes and army—women of purpose, faith, and unshakeable conviction.
                  Together, we grow spiritually, support one another, and impact our communities with the love of
                  Christ. Whether you're seeking spiritual growth, sisterhood, or a place to discover your divine
                  purpose, you belong here."
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  "I invite you to join us every Wednesday as we worship, learn, and build lasting relationships. Your
                  presence matters. Your story matters. Your victory matters to us."
                </p>

                <div className="pt-4">
                  <p className="font-bold text-secondary text-lg">Pst. (Mrs) Anu Babadiya</p>
                  <p className="text-foreground/70">Lead Pastor, Triumphant Women Fellowship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Fellowship?</h2>
          <p className="text-xl mb-10 text-white/90">
            Meet us every Wednesday from 9:00 AM to 11:30 AM at The Triumphant Place in Lokogoma, Abuja
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Get Directions & Contact
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About Us</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                An interdenominational gathering of winning women united in faith, purpose, and empowerment.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block text-white/70 hover:text-accent transition">
                  Home
                </Link>
                <Link href="/mission-vision" className="block text-white/70 hover:text-accent transition">
                  Mission & Vision
                </Link>
                <Link href="/messages" className="block text-white/70 hover:text-accent transition">
                  Messages
                </Link>
                <Link href="/gallery" className="block text-white/70 hover:text-accent transition">
                  Gallery
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Location</h4>
              <p className="text-white/70 text-sm">
                The Triumphant Place
                <br />
                Opp. Efab Junction
                <br />
                Lokogoma, Abuja, Nigeria
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition"
                >
                  I
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition"
                >
                  X
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition"
                >
                  Y
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 Triumphant Women Fellowship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
