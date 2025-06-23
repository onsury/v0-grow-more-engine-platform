import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Users, Zap, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 flex items-center justify-center shadow-2xl">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              About GrowMoreEngine™
            </span>
          </h1>
          <p className="text-xl text-gray-700 font-medium">Run by Boomers. Not Bots.</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              {
                "To provide authentic product reviews with boomer wisdom, zero affiliate BS, and real talk from decades of experience. We've seen every marketing gimmick, tried every \"revolutionary\" product, and we're here to tell you what actually works."
              }
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-orange-700">Zero Affiliate Links</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We don't make money when you buy products. Our reviews are honest because we have no financial
                  incentive to lie.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-700">Real Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Our reviewers have decades of real-world experience. We've seen trends come and go, and we know what
                  lasts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <CardTitle className="text-pink-700">Indian Companies First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We focus on Indian companies with proven track records. Supporting homegrown businesses that actually
                  deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🧓 Our Boomer Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                What We Believe In
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Quality over quantity - we'd rather review 25 great products than 250 mediocre ones
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Experience trumps hype - we trust companies with decades of proven results
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Honest communication - we tell you the good, the bad, and the ugly
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Value for money - expensive doesn't always mean better
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">What We Don't Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li>❌ Affiliate marketing or sponsored content</li>
                <li>❌ Fake testimonials or paid reviews</li>
                <li>❌ Trendy buzzwords without substance</li>
                <li>❌ Unrealistic promises or miracle claims</li>
                <li>❌ Influencer partnerships or celebrity endorsements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Team */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet the Boomers</h2>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg mb-6 opacity-90">
              {
                "We're a collective of experienced professionals who've been around long enough to know the difference between marketing hype and actual quality. We've worked in various industries, built businesses, raised families, and made countless purchasing decisions - both good and bad."
              }
            </p>
            <p className="text-lg opacity-90">
              {
                "Our diverse backgrounds in technology, healthcare, business, and consumer goods give us the perspective to evaluate products across different categories with the wisdom that only comes from experience."
              }
            </p>
          </div>
        </div>

        {/* Our Promise */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Our Promise to You
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              {
                "We promise to always tell you the truth about products, even if it's not what you want to hear. We'll never recommend something we wouldn't use ourselves or give to our own families."
              }
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {
                "If a product is overpriced, we'll tell you. If it doesn't work as advertised, we'll call it out. If there's a better alternative, we'll point you in the right direction. That's the GrowMoreEngine™ guarantee."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                <Link href="/products">Read Our Reviews</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
