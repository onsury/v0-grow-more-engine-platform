import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ExternalLink, Shield, CheckCircle, XCircle, Users, DollarSign, Crown, Sparkles } from "lucide-react"
import { companies } from "@/data/real-companies"

export default function KumkumadiSerumPage() {
  const company = companies.find((c) => c.id === "jammi")!
  const product = company.products.find((p) => p.id === "jammi-kumkumadi-serum")!

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/jammi-kumkumadi-serum-product.png"
                alt="Jammi Kumkumadi Serum - BeAYUtiful.You"
                width={300}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  💅 {product.name}
                </h1>
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">{product.rating}/5</span>
                </div>
              </div>

              <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white mb-4">{product.category}</Badge>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.realTalkTitle}</h2>

              <p className="text-lg text-gray-700 mb-6 font-medium">🧖‍♀️ "{product.shortDescription}"</p>

              <div className="bg-purple-50 p-4 rounded-xl mb-6 border-l-4 border-purple-500">
                <p className="text-purple-800 font-medium">
                  <strong>12ml elixir of 12,000 years of beauty wisdom</strong> - Made with Kashmiri saffron, goat milk,
                  sandalwood, and 22 secret ingredients that sound like they came out of a Vedic Harry Potter book.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  <Link href={product.officialLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy from Jammi.in
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  <Link href={`/companies/${company.id}`}>
                    <Shield className="w-4 h-4 mr-2" />
                    View Jammi Profile
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Boomer Verdict */}
        <div className="bg-gradient-to-r from-pink-600 via-orange-600 to-red-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🧓 BOOMER VERDICT</h2>
            <div className="text-5xl font-bold mb-4">★★★★★</div>
            <p className="text-xl mb-4">"{product.boomerVerdict}"</p>
            <p className="text-lg opacity-90">{product.boomerLogic}</p>
          </div>
        </div>

        {/* The Royal Ingredients */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center">
            <Crown className="w-8 h-8 mr-3 text-orange-600" />👑 The Royal Treatment: What's Inside
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-2" />
                Royal Ingredients:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                  <strong>Kashmiri Saffron</strong> - You can smell the quality
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                  <strong>Goat Milk</strong> - Traditional purity
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                  <strong>Sandalwood</strong> - Authentic aromatic base
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                  <strong>22 Secret Ingredients</strong> - Vedic Harry Potter level
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">💰 Value Proposition:</h3>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">₹1,200</div>
                  <div className="text-sm text-gray-600">vs ₹2,000 market rate</div>
                </div>
                <p className="text-gray-800 text-sm">
                  <strong>Boomer Life Hack:</strong> You only need 3-4 drops. Not 30. This ain't a fairness cream from a
                  TV ad. This is old-school, cold-pressed, goat-milked, saffron-tinged skincare brilliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real User Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            🌟 Real User Story: Parvathi's Glow Transformation
          </h2>
          <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
            <blockquote className="text-lg italic text-gray-800 mb-4">
              "My skin is clearer and brighter now. Laughter lines? Diminished. Pigmentation? Reduced. My mom's using it
              too. We're glowing like haldi kumkum plates."
            </blockquote>
            <p className="text-pink-700 font-medium">- User Parvathi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center bg-yellow-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-yellow-600 mb-2">5.0</div>
              <div className="text-sm text-gray-600">Star Average</div>
              <p className="text-xs text-gray-500 mt-2">From 7 totally unfiltered users</p>
            </div>
            <div className="text-center bg-green-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">3-4</div>
              <div className="text-sm text-gray-600">Drops Needed</div>
              <p className="text-xs text-gray-500 mt-2">Lasts forever with proper use</p>
            </div>
            <div className="text-center bg-purple-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-2">4-6</div>
              <div className="text-sm text-gray-600">Weeks for Results</div>
              <p className="text-xs text-gray-500 mt-2">Patience brings glow</p>
            </div>
          </div>
        </div>

        {/* What Works vs What's Meh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-700 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Why Boomers Love It
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {product.thingsThatWork.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-700 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                Things That Are Just Meh
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {product.thingsThatAreMeh.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Feature Ratings */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            📊 Beauty Performance Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{feature.name}</span>
                  <span className="font-bold text-orange-600">{feature.rating}/10</span>
                </div>
                <Progress value={feature.rating * 10} className="h-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Company Heritage */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🏢 The Jammi Beauty Legacy
          </h2>
          <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
            <p className="text-gray-800 text-lg">{product.companyRoast}</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-700 flex items-center">
                <DollarSign className="w-6 h-6 mr-2" />
                Royal Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">₹{product.price}</div>
              <div className="text-sm text-gray-600 mb-4">12ml Bottle</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Value for Money</span>
                  <span className="font-bold">{product.valueForMoney}/10</span>
                </div>
                <Progress value={product.valueForMoney * 10} className="h-2" />
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Compare: ₹2,000 market rate for similar quality. Jammi gives you royal treatment without the royal
                price.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-700 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Perfect For
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">{product.targetAudience}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>✅ Decades of sun damage</div>
                <div>✅ Stress-induced skin issues</div>
                <div>✅ Pigmentation problems</div>
                <div>✅ Laughter lines (earned honestly)</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-700">Final Judgement</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 font-medium mb-4">{product.finalJudgement}</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  "When you've seen decades of beauty trends, you learn to spot the real deal. And this is it."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Royal Skin Treatment?</h2>
          <p className="text-lg mb-6 opacity-90">
            Stop chasing Instagram beauty trends. Start with 12,000 years of proven beauty wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              <Link href={product.officialLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Order Kumkumadi Serum
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/products">View More Jammi Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
