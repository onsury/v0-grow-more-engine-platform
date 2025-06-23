import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Award, CheckCircle, AlertCircle, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MilkyMistCheesePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/companies/milky-mist"
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Milky Mist
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.4/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Processed Cheese
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Milky Mist Processed Cheese</h1>
              <p className="text-xl text-orange-100 mb-6">
                Cheese that melts properly and doesn't taste like plastic wrapped in foil.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">₹95</span>
                <span className="text-orange-200">per 200g pack</span>
              </div>
              <div className="flex gap-4">
                <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-orange-50">
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
                <div className="text-6xl mb-4">🧀</div>
                <p className="text-lg text-orange-100">Processed Cheese That Works</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <Card className="mb-12 border-l-4 border-l-orange-600">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Processed Cheese That Doesn't Insult Your Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p className="text-gray-700">
              Finally, processed cheese that doesn't make you question the meaning of the word 'cheese.' Processed
              cheese that actually melts and tastes like cheese should. Perfect for sandwiches, pasta, and midnight
              snacking.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <p className="text-orange-800 font-semibold italic">
                "In a market full of cheese that tastes like salted plastic, Milky Mist manages to make processed cheese
                that actually resembles cheese."
              </p>
              <p className="text-orange-600 text-sm mt-2">- GrowMoreEngine Boomer Logic</p>
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
                  <div className="text-4xl font-bold text-orange-600">4.4</div>
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
                    <span className="text-gray-600">Melting Quality</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taste</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Texture</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Value for Money</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Versatility</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-green-800 mb-2">✅ What Works:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Melts properly for sandwiches and pasta</li>
                    <li>• Decent cheese flavor</li>
                    <li>• Good texture for cooking</li>
                    <li>• Doesn't separate when heated</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ What's Meh:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Still processed, not artisanal</li>
                    <li>• Limited flavor varieties</li>
                    <li>• Higher price than basic options</li>
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
                    <strong>Melts evenly without separating</strong>
                    <p className="text-gray-600 text-sm">Perfect for grilled sandwiches and pasta</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Good cheese flavor, not artificial</strong>
                    <p className="text-gray-600 text-sm">Tastes like actual cheese, not chemicals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Proper texture for cooking</strong>
                    <p className="text-gray-600 text-sm">Doesn't turn rubbery when heated</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Works well in Indian and Western dishes</strong>
                    <p className="text-gray-600 text-sm">Versatile for various cooking styles</p>
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
                    <strong>Still processed, not natural cheese</strong>
                    <p className="text-gray-600 text-sm">Can't compete with artisanal cheese</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Higher sodium content</strong>
                    <p className="text-gray-600 text-sm">Typical of processed cheese products</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Limited variety in flavors</strong>
                    <p className="text-gray-600 text-sm">Mostly plain cheese options</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>More expensive than basic brands</strong>
                    <p className="text-gray-600 text-sm">Premium pricing for better quality</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Target Audience */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800 flex items-center gap-3">
              <Users className="w-6 h-6" />
              Who Should Buy This?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-orange-800 mb-2">Families</h3>
                <p className="text-gray-700 text-sm">
                  Who want decent processed cheese for everyday cooking and snacking
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🥪</div>
                <h3 className="font-bold text-yellow-800 mb-2">Sandwich Lovers</h3>
                <p className="text-gray-700 text-sm">Who need cheese that melts properly for grilled sandwiches</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🍝</div>
                <h3 className="font-bold text-red-800 mb-2">Pasta Enthusiasts</h3>
                <p className="text-gray-700 text-sm">Who want cheese that doesn't separate in hot dishes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-300">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Final Boomer Verdict
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl">🧀</div>
              <h3 className="text-2xl font-bold text-orange-800">
                4.4/5 - Processed Cheese That Knows It's Processed But Tries to Be Decent About It
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                For processed cheese, this is about as good as it gets in India. Processed cheese that knows it's
                processed but tries to be decent about it.
              </p>
              <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-400 max-w-2xl mx-auto">
                <p className="text-orange-800 font-semibold">
                  "Melts properly for sandwiches and pasta, decent cheese flavor, good texture for cooking, and doesn't
                  separate when heated. Convenient for daily use without the drama."
                </p>
                <p className="text-orange-600 text-sm mt-2">- GrowMoreEngine Boomer Council</p>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                  <a href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Milky Mist Cheese
                  </a>
                </Button>
                <Link href="/companies/milky-mist">
                  <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
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
