import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ExternalLink, Shield, CheckCircle, XCircle, Users, DollarSign } from "lucide-react"
import { companies } from "@/data/real-companies"

export default function K7TotalSecurityPage() {
  const company = companies.find((c) => c.id === "k7-computing")!
  const product = company.products.find((p) => p.id === "k7-total-security")!

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/k7-total-security-logo.png"
                alt="K7 Total Security Logo"
                width={200}
                height={120}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {product.name}
                </h1>
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">{product.rating}/5</span>
                </div>
              </div>

              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white mb-4">{product.category}</Badge>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.realTalkTitle}</h2>

              <p className="text-lg text-gray-700 mb-6 font-medium">💬 "{product.shortDescription}"</p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  <Link href={product.officialLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Official Product Page
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
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🧓 BOOMER VERDICT</h2>
            <div className="text-5xl font-bold mb-4">★★★★★</div>
            <p className="text-xl mb-4">"{product.boomerVerdict}"</p>
            <p className="text-lg opacity-90">{product.boomerLogic}</p>
          </div>
        </div>

        {/* Company Roast */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🏢 Company Roast + Respect
          </h2>
          <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
            <p className="text-gray-800 text-lg">{product.companyRoast}</p>
          </div>
        </div>

        {/* What Works vs What's Meh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-700 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Things That Work
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
            📊 Feature Breakdown
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
              <div className="text-sm text-gray-600 mb-4">Annual License</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Value for Money</span>
                  <span className="font-bold">{product.valueForMoney}/10</span>
                </div>
                <Progress value={product.valueForMoney * 10} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-700 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">{product.targetAudience}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-700">Final Judgement</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 font-medium">{product.finalJudgement}</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-lg mb-6 opacity-90">
            Stop asking your nephew to fix your computer. Get K7 Total Security and sleep better at night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              <Link href={product.officialLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Get K7 Total Security
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/products">View More Reviews</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
