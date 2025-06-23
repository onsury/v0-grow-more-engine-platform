import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ExternalLink, Shield, CheckCircle, XCircle, Users, DollarSign, Apple } from "lucide-react"
import { companies } from "@/data/real-companies"

export default function OrganicShandyFruitsPage() {
  const company = companies.find((c) => c.id === "organic-shandy")!
  const product = company.products.find((p) => p.id === "organic-shandy-fruits")!

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-32 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Apple className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-sm font-bold">NATURAL FRUITS</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  🍌 {product.name}
                </h1>
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">{product.rating}/5</span>
                </div>
              </div>

              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white mb-4">{product.category}</Badge>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.realTalkTitle}</h2>

              <p className="text-lg text-gray-700 mb-6 font-medium">🍎 "{product.shortDescription}"</p>

              <div className="bg-orange-50 p-4 rounded-xl mb-6 border-l-4 border-orange-500">
                <p className="text-orange-800 font-medium">
                  <strong>Boomer Reality Check:</strong> {product.boomerVerdict}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  <Link href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Order from Organic Shandy
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  <Link href={`/companies/${company.id}`}>
                    <Shield className="w-4 h-4 mr-2" />
                    View Company Profile
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Boomer Verdict */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🧓 BOOMER VERDICT</h2>
            <div className="text-5xl font-bold mb-4">★★★★☆</div>
            <p className="text-xl mb-4">"{product.boomerVerdict}"</p>
            <p className="text-lg opacity-90">{product.boomerLogic}</p>
          </div>
        </div>

        {/* The Fruit Reality */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🍇 The Fruit Reality: Natural Ripening vs Chemical Chaos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-orange-700 mb-4">🌱 What Makes These Different:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  <span>Natural ripening process - no carbide gas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  <span>No artificial sweeteners or preservatives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  <span>Seasonal variety ensures peak flavor</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  <span>No chemical coating or wax</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4">🎯 The Seasonal Reality:</h3>
              <div className="bg-red-50 p-6 rounded-xl">
                <p className="text-gray-800 mb-4">
                  <strong>Yes, we're docking points for seasonal availability.</strong> Because we're boomers and we
                  want mangoes year-round! But deep down, we know seasonal fruits taste better.
                </p>
                <p className="text-gray-700 text-sm">
                  This is what happens when you choose nature's schedule over artificial manipulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Works vs What's Meh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-700 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Things That Actually Work
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
            📊 Fruit Quality Breakdown
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
            🏢 The Organic Shandy Fruit Philosophy
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
                Pricing & Value
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">₹{product.price}</div>
              <div className="text-sm text-gray-600 mb-4">Average per kg</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Value for Money</span>
                  <span className="font-bold">{product.valueForMoney}/10</span>
                </div>
                <Progress value={product.valueForMoney * 10} className="h-2" />
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Compare: Supermarket fruits with artificial ripening and chemical treatments.
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
                <div>✅ Families wanting natural nutrition</div>
                <div>✅ People avoiding artificial ripening</div>
                <div>✅ Those who appreciate seasonal eating</div>
                <div>✅ Anyone who remembers real fruit taste</div>
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
                  "If you want fruits that taste like they're supposed to, deal with the seasonal limitations."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Fruits That Actually Taste Like Fruits?</h2>
          <p className="text-lg mb-6 opacity-90">
            Stop settling for plastic-tasting, artificially ripened fruits. Embrace the seasonal rhythm of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              <Link href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Order Natural Fruits
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/products">View More Organic Shandy Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
