import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ExternalLink, Shield, CheckCircle, XCircle, Users, DollarSign, Droplet, ThumbsUp } from "lucide-react"
import { companies } from "@/data/real-companies"

export default function WatsanHomeROSystemPage() {
  const company = companies.find((c) => c.id === "watsan")!
  const product = company.products.find((p) => p.id === "watsan-home-ro-system")!

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/watsan-household-purifier.png"
                alt="Watsan Home RO System"
                width={200}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  💧 {product.name}
                </h1>
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-yellow-700">{product.rating}/5</span>
                </div>
              </div>

              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4">{product.category}</Badge>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                "Simple enough for your grandma. Strong enough for your enemies."
              </h2>

              <p className="text-lg text-gray-700 mb-6 font-medium">💬 "{product.shortDescription}"</p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  <Link href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Watsan.in
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
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
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🧓 BOOMER VERDICT</h2>
            <div className="text-5xl font-bold mb-4">★★★★★</div>
            <p className="text-xl mb-4">
              "Removes more toxins than your family WhatsApp group. And definitely more reliable than your last purifier
              brand."
            </p>
            <p className="text-lg opacity-90">
              This is NOT your mineral-water-at-₹200/month subscription nonsense. This is hardcore, gravity-based
              purification using natural Terafil®™ tech.
            </p>
          </div>
        </div>

        {/* The Technology */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🔬 The Technology: Terafil®™ - Not Some Back-Alley DIY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/watsan-filter-media.png"
                alt="Terafil Filter Media"
                width={300}
                height={300}
                className="rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-2">Terafil Filter Media</h3>
              <p className="text-gray-700">
                Developed in collaboration with CSIR-IMMT and CIPET, this isn't your average filter. The Terafil media
                is specially designed to remove arsenic, fluoride, bacteria, and other villainous microbes trying to
                turn your intestines into a war zone.
              </p>
            </div>
            <div>
              <Image
                src="/images/watsan-purifier-taps.png"
                alt="Purifier Taps"
                width={300}
                height={300}
                className="rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-bold text-green-700 mb-2">Gravity-Based Purification</h3>
              <p className="text-gray-700">
                No electricity needed. No RO-waste guilt. No recurring filters with the price tag of an iPhone screen.
                Just pure, gravity-driven filtration that works even during power cuts and water shortages. The system
                is designed for Indian conditions, not imported from countries with completely different water problems.
              </p>
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
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No electricity required - works during power cuts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No RO-waste water - environmentally responsible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Removes arsenic, fluoride, bacteria effectively</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Long-lasting filter media - no monthly replacements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Affordable price point - accessible to middle class</span>
                </li>
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
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Slower filtration than electric systems</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Basic design - won't win any beauty contests</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Limited availability in mainstream retail</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No fancy digital indicators or smart features</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Feature Ratings */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            📊 Performance Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Water Quality</span>
                <span className="font-bold text-blue-600">9/10</span>
              </div>
              <Progress value={90} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Water Recovery</span>
                <span className="font-bold text-blue-600">8/10</span>
              </div>
              <Progress value={80} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Build Quality</span>
                <span className="font-bold text-blue-600">8/10</span>
              </div>
              <Progress value={80} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Value for Money</span>
                <span className="font-bold text-blue-600">9/10</span>
              </div>
              <Progress value={90} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Service Support</span>
                <span className="font-bold text-blue-600">8/10</span>
              </div>
              <Progress value={80} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Environmental Impact</span>
                <span className="font-bold text-blue-600">10/10</span>
              </div>
              <Progress value={100} className="h-3" />
            </div>
          </div>
        </div>

        {/* Real User Experience */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-200">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            👨‍👩‍👧‍👦 Real User Experience
          </h2>
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            <p className="text-gray-800 text-lg mb-4">
              "We've been using the Watsan purifier for over 2 years now. No electricity bills, no wasted water, and no
              more stomach issues for the kids. The water tastes clean without being flat like RO water. And the best
              part? We've only had to clean the filter once, not replace it monthly like our neighbor's fancy brand."
            </p>
            <p className="text-green-700 font-medium">- Ramesh Kumar, Bengaluru</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center bg-blue-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">4 Lakh+</div>
              <div className="text-sm text-gray-600">Households Served</div>
              <p className="text-xs text-gray-500 mt-2">Across rural and urban India</p>
            </div>
            <div className="text-center bg-green-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">10+ Years</div>
              <div className="text-sm text-gray-600">Proven Track Record</div>
              <p className="text-xs text-gray-500 mt-2">Of reliable performance</p>
            </div>
            <div className="text-center bg-cyan-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-cyan-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Electricity Required</div>
              <p className="text-xs text-gray-500 mt-2">Works during power cuts</p>
            </div>
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
              <div className="text-sm text-gray-600 mb-4">One-time Investment</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Value for Money</span>
                  <span className="font-bold">{product.valueForMoney}/10</span>
                </div>
                <Progress value={product.valueForMoney * 10} className="h-2" />
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Compare: RO systems cost ₹15,000+ with monthly filter costs. This is a one-time investment.
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
                <div className="flex items-center">
                  <ThumbsUp className="w-4 h-4 text-green-500 mr-2" />
                  <span>Families tired of monthly filter costs</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="w-4 h-4 text-green-500 mr-2" />
                  <span>Areas with frequent power cuts</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="w-4 h-4 text-green-500 mr-2" />
                  <span>Environmentally conscious households</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="w-4 h-4 text-green-500 mr-2" />
                  <span>Rural and semi-urban areas</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-700 flex items-center">
                <Droplet className="w-6 h-6 mr-2" />
                Final Judgement
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 font-medium mb-4">{product.finalJudgement}</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  "If you want clean water without the environmental guilt, this is worth the investment. Expensive but
                  responsible. Sometimes doing the right thing costs more."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Wasting Water?</h2>
          <p className="text-lg mb-6 opacity-90">
            Stop feeling guilty about RO waste water. Stop paying monthly filter bills. Start with a system that
            actually makes sense for India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Link href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Get Watsan Home Purifier
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
