import { Header } from "@/components/header"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-purple-50/20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">Get Connected</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join our fellowship and be part of a community of victorious women
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">Location</h3>
                  <p className="text-foreground/70 text-lg">
                    The Triumphant Place
                    <br />
                    Opp. Efab Junction by Dagondaga Junction
                    <br />
                    Lokogoma, Abuja, Nigeria
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">Meeting Schedule</h3>
                  <p className="text-foreground/70 text-lg">
                    <span className="font-bold">Day:</span> Every Wednesday
                    <br />
                    <span className="font-bold">Time:</span> 9:00 AM - 11:30 AM
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">Leadership</h3>
                  <p className="text-foreground/70 text-lg">
                    <span className="font-bold">Pastor:</span> Pst. (Mrs) Anu Babadiya
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6 bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg">
                  <p className="text-foreground/80 italic text-lg leading-relaxed">
                    "Join us in this blessed fellowship where faith, hope, and love unite winning women in the service
                    of God and in building a victorious future together."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Why Join */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-secondary mb-8">Why Join Us?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl text-primary flex-shrink-0">▸</div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Spiritual Growth</p>
                    <p className="text-foreground/70">
                      Develop a deeper relationship with God through powerful worship and biblical teaching
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary flex-shrink-0">▸</div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Sisterhood & Support</p>
                    <p className="text-foreground/70">
                      Connect with amazing women who share your values and commitment to faith
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary flex-shrink-0">▸</div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Empowerment</p>
                    <p className="text-foreground/70">
                      Be inspired and equipped to live victoriously in all aspects of life
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary flex-shrink-0">▸</div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Community Impact</p>
                    <p className="text-foreground/70">Be part of a ministry making a difference in women's lives</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary flex-shrink-0">▸</div>
                  <div>
                    <p className="font-bold text-secondary text-lg">Prayer & Intercession</p>
                    <p className="text-foreground/70">Experience the power of corporate prayer and intercession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-gray-200 pt-20">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">Follow Us on Social Media</h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">f</div>
                <p className="font-bold text-secondary">Facebook</p>
                <p className="text-sm text-foreground/70 mt-2">Follow our community</p>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">I</div>
                <p className="font-bold text-secondary">Instagram</p>
                <p className="text-sm text-foreground/70 mt-2">Daily inspiration</p>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">▶</div>
                <p className="font-bold text-secondary">YouTube</p>
                <p className="text-sm text-foreground/70 mt-2">Watch messages</p>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">X</div>
                <p className="font-bold text-secondary">Twitter</p>
                <p className="text-sm text-foreground/70 mt-2">Latest updates</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Find Us Here</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-200 flex items-center justify-center">
            <p className="text-foreground/50 text-lg">
              Lokogoma, Abuja - The Triumphant Place
              <br />
              <span className="text-sm">Visit us every Wednesday, 9:00 AM - 11:30 AM</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Triumph?</h2>
          <p className="text-xl mb-10 text-white/90">
            Don't wait another week. Join us this Wednesday and discover the power of Triumphant Women Fellowship.
          </p>
          <button className="px-10 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            See You Wednesday
          </button>
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
                Lokogoma, Abuja, Nigeria
                <br />
                Wed 9:00 AM - 11:30 AM
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
