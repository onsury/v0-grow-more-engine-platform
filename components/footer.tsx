import Link from "next/link"
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  GrowMoreEngine™
                </h3>
                <p className="text-sm text-gray-400">Run by Boomers. Not Bots.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {
                "Authentic product reviews with boomer wisdom, zero affiliate BS, and real talk from decades of experience. We've seen it all, tried it all, and we're here to tell you what actually works."
              }
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-orange-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/featured-reviews" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Featured Reviews
                </Link>
              </li>
              <li>
                <Link href="/founders" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Founders
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Compare Products
                </Link>
              </li>
              <li>
                <Link href="/starthub-media" className="text-gray-300 hover:text-orange-400 transition-colors">
                  StartHub Media Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Featured Companies</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/companies/jammi" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Jammi Ayurveda (128+ years)
                </Link>
              </li>
              <li>
                <Link href="/companies/k7-computing" className="text-gray-300 hover:text-orange-400 transition-colors">
                  K7 Computing (30+ years)
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/organic-shandy"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Organic Shandy (25+ years)
                </Link>
              </li>
              <li>
                <Link href="/companies/music-temple" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Music Temple (IIT-incubated)
                </Link>
              </li>
              <li>
                <Link href="/companies/watsan" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Watsan Envirotech
                </Link>
              </li>
              <li>
                <Link href="/companies/milky-mist" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Milky Mist (40+ years)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">starthubbusiness@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+919566075910</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Chennai, India (Where Wisdom Lives)</span>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Contact
              </Link>
              <Link href="/submit" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Submit Product
              </Link>
              <Link href="/advertise" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Advertise With Us
              </Link>
              <Link href="/privacy" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GrowMoreEngine™. All rights reserved. No affiliate links, no BS, just honest reviews.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with</span>
              <span className="text-red-400">❤️</span>
              <span className="text-gray-400 text-sm">by Boomers who actually know stuff</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
