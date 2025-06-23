import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Award, CheckCircle, AlertCircle, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MilkyMistGheePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/companies/milky-mist"
          className="inline-flex items-center text-yellow-600 hover:text-yellow-800 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Milky Mist
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.6/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Pure Cow Ghee
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Milky Mist Cow Ghee</h1>
              <p className="text-xl text-yellow-100 mb-6">
                Ghee so pure, even your cholesterol will thank you. Probably.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">₹280</span>
                <span className="text-yellow-200">per 200ml jar</span>
              </div>
              <div className="flex gap-4">
                <Button size="lg" asChild className="bg-white text-yellow-600 hover:bg-yellow-50">
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
                <div className="text-6xl mb-4">🧈</div>
                <p className="text-lg text-yellow-100">Pure Cow Ghee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Product Overview */}
        <Card className="mb-12 border-l-4 border-l-yellow-600">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-800 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Ghee That Smells Like Home
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p className="text-gray-700">
              Pure cow ghee made from fresh cream using traditional methods. The aroma alone will make your neighbors
              jealous. Ghee that smells like childhood memories and tastes like your grandmother's cooking.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800 font-semibold italic">
                "While others are busy making ghee that smells like nothing and tastes like everything, Milky Mist
                delivers the real deal that makes your kitchen smell like a temple."
              </p>
              <p className="text-yellow-600 text-sm mt-2">- GrowMoreEngine Boomer Logic</p>
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
                  <div className="text-4xl font-bold text-orange-600">4.6</div>
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
                    <span className="text-gray-600">Purity</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Aroma</span>
                    <span className="font-semibold text-green-600">10/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taste</span>
                    <span className="font-semibold text-green-600">9/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Value for Money</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Packaging</span>
                    <span className="font-semibold text-yellow-600">8/10</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-green-800 mb-2">✅ What Works:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Rich, authentic aroma</li>
                    <li>• Golden color indicates quality</li>
                    <li>• Doesn't smoke easily when heated</li>
                    <li>• Adds authentic flavor to food</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ What's Meh:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Price is on the higher side</li>
                    <li>• Limited packaging sizes</li>
                    <li>• Can be too aromatic for some</li>
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
                    <strong>Made from pure cow milk cream</strong>
                    <p className="text-gray-600 text-sm">No shortcuts or artificial additives</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Traditional churning methods</strong>
                    <p className="text-gray-600 text-sm">Time-tested process for authentic taste</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Rich aroma and golden color</strong>
                    <p className="text-gray-600 text-sm">Visual and olfactory indicators of quality</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Good shelf life without refrigeration</strong>
                    <p className="text-gray-600 text-sm">Convenient storage at room temperature</p>
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
                    <strong>Premium pricing compared to local brands</strong>
                    <p className="text-gray-600 text-sm">Quality comes at a cost</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Limited quantity options</strong>
                    <p className="text-gray-600 text-sm">Could use more size variants</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Can solidify in cold weather</strong>
                    <p className="text-gray-600 text-sm">Natural behavior but inconvenient</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Strong aroma may not suit everyone</strong>
                    <p className="text-gray-600 text-sm">Authentic smell can be overwhelming</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Target Audience */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-800 flex items-center gap-3">
              <Users className="w-6 h-6" />
              Who Should Buy This?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-yellow-800 mb-2">Health-Conscious Families</h3>
                <p className="text-gray-700 text-sm">Who want pure ghee for cooking and traditional preparations</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👵</div>
                <h3 className="font-bold text-orange-800 mb-2">Traditional Cooks</h3>
                <p className="text-gray-700 text-sm">Who appreciate authentic aroma and taste in their cooking</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h3 className="font-bold text-red-800 mb-2">Quality Seekers</h3>
                <p className="text-gray-700 text-sm">Who don't mind paying extra for genuine purity</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-800 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Final Boomer Verdict
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl">🧈</div>
              <h3 className="text-2xl font-bold text-yellow-800">
                4.6/5 - Ghee That Actually Smells and Tastes Like Ghee
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                If you want ghee that your ancestors would recognize, this is it. Novel concept in today's market - ghee
                that actually smells and tastes like ghee.
              </p>
              <div className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-400 max-w-2xl mx-auto">
                <p className="text-yellow-800 font-semibold">
                  "Rich, authentic aroma that makes your kitchen smell like a temple. Golden color indicates quality,
                  doesn't smoke easily when heated, and adds authentic flavor to food. This is what ghee should be."
                </p>
                <p className="text-yellow-600 text-sm mt-2">- GrowMoreEngine Boomer Council</p>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" asChild className="bg-yellow-600 hover:bg-yellow-700">
                  <a href="https://www.milkymist.com/products" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Milky Mist Ghee
                  </a>
                </Button>
                <Link href="/companies/milky-mist">
                  <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
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
