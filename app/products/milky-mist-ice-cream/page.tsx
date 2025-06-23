import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Award, CheckCircle, AlertCircle, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MilkyMistIceCreamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/companies/milky-mist" className="inline-flex items-center text-pink-600 hover:text-pink-800 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Milky Mist
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.3/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Premium Ice Cream
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Milky Mist Premium Ice Cream</h1>
              <p className="text-xl text-pink-100 mb-6">
                Ice cream that tastes like ice cream, not frozen sugar water with artificial everything.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">₹150</span>
                <span className="text-pink-200">per 500ml tub</span>
              </div>
              <div className="flex gap-4">
                <Button size="lg" asChild className="bg-white text-pink-600 hover:bg-pink-50">
                  <a href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🍦</div>
                <p className="text-lg text-pink-100">Premium Ice Cream</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <Card className="mb-12 border-l-4 border-l-pink-600">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-800 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Ice Cream That Remembers It's Made from Milk
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p className="text-gray-700">
              Ice cream that doesn't make you read the ingredients list and wonder what half of those chemicals are.
              Premium ice cream made with real milk and cream. Multiple flavors that actually taste like what they claim
              to be.
            </p>
            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
              <p className="text-pink-800 font-semibold italic">
                "In a world where ice cream ingredients read like a chemistry textbook, Milky Mist keeps it simple with
                actual dairy products."
              </p>
              <p className="text-pink-600 text-sm mt-2">- GrowMoreEngine Boomer Logic</p>
            </div>
          </CardContent>
        </Card>

        {/* Rating Breakdown */}
        <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800 flex items-center gap-3">
              <Star className="w-6 h-6" />
              Boomer Rating Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-orange-600">4.3</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Creaminess</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flavor Authenticity</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Value for Money</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability</span>
                    <span className="font-semibold text-orange-600">7/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Variety</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-green-800 mb-2">✅ What Works:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Creamy texture without artificial thickeners</li>
                    <li>• Flavors taste authentic</li>
                    <li>• Good value for the quality</li>
                    <li>• Doesn't leave weird aftertaste</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ What's Meh:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Not available everywhere</li>
                    <li>• Some flavors are better than others</li>
                    <li>• Premium pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Review */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                The Good Stuff
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Made with real milk and cream</strong>
                    <p className="text-gray-600 text-sm">You can taste the difference from artificial alternatives</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Good variety of flavors</strong>
                    <p className="text-gray-600 text-sm">Multiple options to choose from</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Creamy texture without ice crystals</strong>
                    <p className="text-gray-600 text-sm">Smooth and consistent texture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Reasonable pricing for premium quality</strong>
                    <p className="text-gray-600 text-sm">Good value compared to international brands</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Room for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Limited availability in some areas</strong>
                    <p className="text-gray-600 text-sm">Not found in all stores yet</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Can be hard to find in smaller stores</strong>
                    <p className="text-gray-600 text-sm">Distribution could be better</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Some flavors are hit or miss</strong>
                    <p className="text-gray-600 text-sm">Quality varies across different flavors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Premium pricing compared to mass market brands</strong>
                    <p className="text-gray-600 text-sm">Costs more than basic options</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Target Audience */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-800 flex items-center gap-3">
              <Users className="w-6 h-6" />
              Who Should Buy This?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-pink-800 mb-2">Families</h3>
                <p className="text-gray-700 text-sm">Who want decent ice cream without the premium brand price shock</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🍨</div>
                <h3 className="font-bold text-purple-800 mb-2">Ice Cream Lovers</h3>
                <p className="text-gray-700 text-sm">
                  Who appreciate real dairy ingredients over artificial alternatives
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-blue-800 mb-2">Value Seekers</h3>
                <p className="text-gray-700 text-sm">Who want premium quality at reasonable prices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-300">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-800 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Final Boomer Verdict
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl">🍦</div>
              <h3 className="text-2xl font-bold text-pink-800">4.3/5 - Ice Cream Made with Actual Dairy Products</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Good ice cream that doesn't require a chemistry degree to understand the ingredients. Revolutionary
                concept in today's market - ice cream made with actual dairy products.
              </p>
              <div className="bg-pink-100 p-6 rounded-lg border-l-4 border-pink-400 max-w-2xl mx-auto">
                <p className="text-pink-800 font-semibold">
                  "Creamy texture without artificial thickeners, flavors taste authentic, good value for the quality,
                  and doesn't leave weird aftertaste. Decent variety of options without the premium price shock."
                </p>
                <p className="text-pink-600 text-sm mt-2">- GrowMoreEngine Boomer Council</p>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" asChild className="bg-pink-600 hover:bg-pink-700">
                  <a href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Milky Mist Ice Cream
                  </a>
                </Button>
                <Link href="/companies/milky-mist">
                  <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
