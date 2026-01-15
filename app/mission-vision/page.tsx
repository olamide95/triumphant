import { Header } from "@/components/header"
import Link from "next/link"

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-purple-50/20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">Our Mission & Vision</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Driven by faith, united in purpose, empowering generations of winning women
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Our Mission</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Triumphant Women Fellowship exists to empower women through faith, fellowship, and spiritual growth. We
                are committed to building a community of winning women who stand as God's battle axes and army,
                transforming lives through the power of God's word.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Our mission is to inspire, uplift, and strengthen women in their personal faith journey, enabling them
                to become victorious in all aspects of life—spiritually, emotionally, mentally, and physically.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We believe that when women are empowered in their faith, they have the power to impact their families,
                communities, and nations for the kingdom of God.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Core Mission</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-3xl text-primary flex-shrink-0">▸</span>
                  <div>
                    <p className="font-bold text-secondary">Spiritual Empowerment</p>
                    <p className="text-sm text-foreground/70">Deepen faith and relationship with God</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-primary flex-shrink-0">▸</span>
                  <div>
                    <p className="font-bold text-secondary">Community Building</p>
                    <p className="text-sm text-foreground/70">Create lasting bonds of sisterhood</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-primary flex-shrink-0">▸</span>
                  <div>
                    <p className="font-bold text-secondary">Personal Growth</p>
                    <p className="text-sm text-foreground/70">Develop into victorious, purposeful women</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-primary flex-shrink-0">▸</span>
                  <div>
                    <p className="font-bold text-secondary">Kingdom Impact</p>
                    <p className="text-sm text-foreground/70">Transform families, communities, and nations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-secondary/10 to-accent/10 p-12 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Our Vision for the Future</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-3xl text-secondary flex-shrink-0">✦</span>
                  <div>
                    <p className="font-bold text-primary">Global Reach</p>
                    <p className="text-sm text-foreground/70">Expanding to women across nations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-secondary flex-shrink-0">✦</span>
                  <div>
                    <p className="font-bold text-primary">Generational Legacy</p>
                    <p className="text-sm text-foreground/70">Mentoring and raising victorious generations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-secondary flex-shrink-0">✦</span>
                  <div>
                    <p className="font-bold text-primary">Holistic Development</p>
                    <p className="text-sm text-foreground/70">Supporting spiritual, social, and economic growth</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-secondary flex-shrink-0">✦</span>
                  <div>
                    <p className="font-bold text-primary">Kingdom Transformation</p>
                    <p className="text-sm text-foreground/70">Creating lasting change in God's kingdom</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-secondary mb-8">Our Vision</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Our vision is to see a generation of victorious women arising in every nation—women who are deeply
                rooted in their faith, secure in their identity in Christ, and committed to making a Kingdom impact.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                We envision a global fellowship of Triumphant Women—women who are God's battle axes in their spheres of
                influence, standing firm in faith, and transforming their worlds with the power of the Gospel.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A sisterhood that transcends denominational boundaries, cultural differences, and geographic locations,
                united in the purpose of advancing God's kingdom and empowering women to live victoriously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16">Our Core Values</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Faith & Spirituality</h3>
              <p className="text-foreground/70 leading-relaxed">
                Deep-rooted in God's word and principles, we believe in the transformative power of genuine faith and a
                personal relationship with Jesus Christ.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Sisterhood & Unity</h3>
              <p className="text-foreground/70 leading-relaxed">
                We celebrate our diversity and build strong bonds of unity, support, and love that transcend all
                boundaries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Integrity & Excellence</h3>
              <p className="text-foreground/70 leading-relaxed">
                We commit to living with integrity, pursuing excellence in all we do, and being examples of God's grace
                and truth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Empowerment & Purpose</h3>
              <p className="text-foreground/70 leading-relaxed">
                We believe every woman has divine purpose and potential, and we are committed to empowering each other
                to rise and fulfill that purpose.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Growth & Development</h3>
              <p className="text-foreground/70 leading-relaxed">
                Continuous spiritual, intellectual, emotional, and personal development is central to our fellowship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Community & Impact</h3>
              <p className="text-foreground/70 leading-relaxed">
                We are committed to making a positive impact in our communities and beyond, living out our faith through
                service and love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-lg mb-8 text-white/90">
            Be part of a thriving community of victorious women. Meet us every Wednesday!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Get Connected
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
                <Link href="/gallery" className="block text-white/70 hover:text-accent transition">
                  Gallery
                </Link>
                <Link href="/contact" className="block text-white/70 hover:text-accent transition">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Location</h4>
              <p className="text-white/70 text-sm">
                The Triumphant Place
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
