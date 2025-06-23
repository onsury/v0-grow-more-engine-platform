import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Award, CheckCircle, AlertCircle, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MilkyMistPaneerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/companies/milky-mist" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Milky Mist
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.8/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Flagship Product
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Milky Mist Fresh Paneer</h1>
              <p className="text-xl text-blue-100 mb-6">
                The paneer that made South India forget that paneer was a North Indian thing.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">₹120</span>
                <span className="text-blue-200">per 200g pack</span>
              </div>
              <div className="flex gap-4">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
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
                <p className="text-lg text-blue-100">Premium Fresh Paneer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <Card className="mb-12 border-l-4 border-l-blue-600">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
              <Award className="w-6 h-6" />
              The Paneer That Started a Revolution
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p className="text-gray-700">
              This is what paneer should taste like - soft, fresh, and without that rubbery texture that makes you
              question your life choices. Made with German technology and traditional Indian taste, this is the flagship
              product that built the Milky Mist empire.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 font-semibold italic">
                "While others were busy making paneer that bounced like a tennis ball, Milky Mist figured out how to
                make it soft and tasty. Revolutionary concept in the dairy industry."
              </p>
              <p className="text-blue-600 text-sm mt-2">- GrowMoreEngine Boomer Logic</p>
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
                  <div className="text-4xl font-bold text-orange-600">4.8</div>
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
                    <span className="text-gray-600">Freshness</span>
                    <span className="font-semibold text-green-600">10/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Texture Quality</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taste</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Value for Money</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-green-800 mb-2">✅ What Works:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Texture remains soft even after cooking</li>
                    <li>• Absorbs flavors well in curries</li>
                    <li>• Fresh taste without artificial aftertaste</li>
                    <li>• Consistent quality across batches</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ What's Meh:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Price is higher than local alternatives</li>
                    <li>• Shelf life is shorter than processed versions</li>
                    <li>• Not available in all cities yet</li>
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
                    <strong>Consistently soft and fresh texture</strong>
                    <p className="text-gray-600 text-sm">No more rubber ball paneer that bounces off your plate</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>No preservatives or artificial additives</strong>
                    <p className="text-gray-600 text-sm">Made from pure milk, not powder</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>German technology ensures quality</strong>
                    <p className="text-gray-600 text-sm">Precision engineering meets traditional taste</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Doesn't turn rubbery when cooked</strong>
                    <p className="text-gray-600 text-sm">Perfect for curries, grilling, and frying</p>
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
                    <strong>Shorter shelf life than processed alternatives</strong>
                    <p className="text-gray-600 text-sm">Fresh means it doesn't last as long</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Price premium over local brands</strong>
                    <p className="text-gray-600 text-sm">Quality costs, but it's worth it</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Limited availability outside South India</strong>
                    <p className="text-gray-600 text-sm">Expansion is happening, but slowly</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Requires refrigeration at all times</strong>
                    <p className="text-gray-600 text-sm">No room temperature storage</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Target Audience */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
              <Users className="w-6 h-6" />
              Who Should Buy This?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👨‍🍳</div>
                <h3 className="font-bold text-blue-800 mb-2">Home Cooks</h3>
                <p className="text-gray-700 text-sm">
                  Who want restaurant-quality paneer without the restaurant prices
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👵</div>
                <h3 className="font-bold text-green-800 mb-2">Quality Seekers</h3>
                <p className="text-gray-700 text-sm">Who remember what good paneer used to taste like</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-purple-800 mb-2">Families</h3>
                <p className="text-gray-700 text-sm">Who want consistent quality for daily cooking</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-300">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Final Boomer Verdict
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl">🧀</div>
              <h3 className="text-2xl font-bold text-green-800">4.8/5 - Paneer That Actually Tastes Like Paneer</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                If you want paneer that doesn't fight back when you bite it, this is your answer. Simple concept,
                perfectly executed. Does the job efficiently, doesn't cost a fortune, and doesn't make you question the
                meaning of the word 'paneer.'
              </p>
              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-400 max-w-2xl mx-auto">
                <p className="text-green-800 font-semibold">
                  "Texture remains soft even after cooking, absorbs flavors well in curries, and has that fresh taste
                  without artificial aftertaste. This is what happens when German precision meets Indian tradition."
                </p>
                <p className="text-green-600 text-sm mt-2">- GrowMoreEngine Boomer Council</p>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                  <a href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Milky Mist Paneer
                  </a>
                </Button>
                <Link href="/companies/milky-mist">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
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
