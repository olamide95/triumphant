import { Header } from "@/components/header"
import Link from "next/link"

export default function Messages() {
  const messages = [
    {
      id: 1,
      title: "The Power of a Victorious Woman",
      speaker: "Pst. (Mrs) Anu Babadiya",
      date: "December 25, 2024",
      description:
        "Discover the power within you as God's battle axe and army. Learn how to live victoriously in every area of life.",
      link: "https://youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Building Unshakeable Faith",
      speaker: "Pst. (Mrs) Anu Babadiya",
      date: "December 18, 2024",
      description:
        "Strengthen your foundation of faith and overcome challenges that come your way with God's promises.",
      link: "https://youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "Sisterhood: The Power of Unity",
      speaker: "Pst. (Mrs) Anu Babadiya",
      date: "December 11, 2024",
      description:
        "Explore the transformative power of genuine sisterhood and how women lift each other to higher heights.",
      link: "https://youtube.com/watch?v=example3",
    },
    {
      id: 4,
      title: "Purpose, Passion & Living Victoriously",
      speaker: "Pst. (Mrs) Anu Babadiya",
      date: "December 4, 2024",
      description: "Uncover your divine purpose and passion, then learn how to live a life of victory and impact.",
      link: "https://youtube.com/watch?v=example4",
    },
    {
      id: 5,
      title: "Breaking Chains: Freedom in Christ",
      speaker: "Pst. (Mrs) Anu Babadiya",
      date: "November 27, 2024",
      description: "Experience true freedom through Christ and break free from limitations that hold you back.",
      link: "https://youtube.com/watch?v=example5",
    },
    {
      id: 6,
      title: "From Struggle to Strength",
      speaker: "Pst. (Mrs) Anu Babadiya",
      date: "November 20, 2024",
      description: "Transform your struggles into strength and discover God's grace in your most difficult moments.",
      link: "https://youtube.com/watch?v=example6",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-purple-50/20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">Messages & Sermons</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Inspiring messages of faith, empowerment, and victory for women everywhere
          </p>
        </div>
      </section>

      {/* Messages Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {messages.map((message) => (
              <div
                key={message.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition group"
              >
                <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-5xl font-bold text-primary/20">♪</div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-primary mb-2">{message.date}</p>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition">
                    {message.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4">{message.speaker}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">{message.description}</p>

                  <a
                    href={message.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast/Channel Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">Subscribe to Our Channel</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <div className="text-6xl mb-4">▶</div>
              <h3 className="text-xl font-bold text-secondary mb-3">YouTube</h3>
              <p className="text-foreground/70 mb-6">Watch our latest messages and ministry highlights on YouTube</p>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Subscribe
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <div className="text-6xl mb-4">🎙</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Podcast</h3>
              <p className="text-foreground/70 mb-6">Listen to our podcast on your favorite platform</p>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition"
              >
                Listen
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Social Media</h3>
              <p className="text-foreground/70 mb-6">Follow us on social media for daily inspiration</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-accent text-secondary rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Miss Any Message</h2>
          <p className="text-lg mb-8 text-white/90">
            Join us every Wednesday to experience powerful, life-changing messages live
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Join Us This Wednesday
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
