import { Header } from "@/components/header"
import Link from "next/link"

export default function Gallery() {
  const galleryItems = [
    { id: 1, src: "/images/set1.jpg", alt: "Women celebrating together", category: "Fellowship" },
    { id: 2, src: "/images/set5.jpg", alt: "Worship and fellowship moment", category: "Worship" },
    { id: 3, src: "/images/set6.jpg", alt: "Leadership moment", category: "Leadership" },
    { id: 4, src: "/images/set4.jpg", alt: "Ministry event", category: "Events" },
    { id: 5, src: "/images/set2.jpg", alt: "Prayer moment", category: "Prayer" },
    { id: 6, src: "/images/triumphant.jpg", alt: "Ministry logo", category: "Branding" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-purple-50/20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">Photo Gallery</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Capturing moments of faith, fellowship, and victory in our Triumphant Women Fellowship
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition aspect-square cursor-pointer"
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold text-primary mb-1">{item.category}</p>
                    <p className="text-lg font-bold">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16">Our Fellowship Moments</h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/set1.jpg" alt="Women celebrating" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">Celebrating Victory Together</h3>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  Our fellowship is all about celebrating the victories God has given us and lifting one another higher.
                  These moments capture the joy, strength, and sisterhood that defines our community.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  From corporate worship to personal testimonies, we create an environment where every woman feels
                  valued, heard, and empowered to rise.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-secondary mb-4">Powerful Ministry in Action</h3>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  Our leadership, led by Pst. (Mrs) Anu Babadiya, brings anointed teaching and spiritual guidance that
                  transforms lives. Every Wednesday, women gather to be strengthened in their faith.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  These are the moments where spiritual growth happens, where burdens are lifted, and where women find
                  their strength in God's word and in sisterhood.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/set6.jpg" alt="Leadership moment" className="w-full h-auto" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/set5.jpg" alt="Worship moment" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">Worship & Fellowship</h3>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  Worship is at the heart of everything we do. It's in these moments of corporate worship and genuine
                  fellowship that women encounter the presence of God.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  The atmosphere is filled with faith, hope, and love—a sanctuary where every woman is accepted,
                  celebrated, and encouraged to grow deeper in her relationship with God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of These Moments</h2>
          <p className="text-lg mb-8 text-white/90">
            Join us every Wednesday and be part of our growing fellowship of victorious women
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Join Us Now
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
