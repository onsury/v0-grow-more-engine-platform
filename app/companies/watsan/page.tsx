import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ExternalLink,
  Shield,
  Users,
  Award,
  Globe,
  Calendar,
  CheckCircle,
  XCircle,
  Droplet,
  AlertTriangle,
  ThumbsUp,
} from "lucide-react"
import { companies } from "@/data/real-companies"

export default function WatsanPage() {
  const company = companies.find((c) => c.id === "watsan")!

  const featureAnalysis = [
    {
      feature: "🧬 Legacy",
      verdict: "20+ years of making water actually clean, not just clear",
      rating: 9,
      color: "green",
    },
    {
      feature: "🧠 Founder Cred",
      verdict: "Chandrashekar - the unsung hero fighting the water mafia",
      rating: 10,
      color: "blue",
    },
    {
      feature: "💧 Product Strength",
      verdict: "No-nonsense, value-for-money, scalable solutions that WORK",
      rating: 9,
      color: "purple",
    },
    {
      feature: "⚙️ R&D",
      verdict: "Terafil® tech developed with CSIR-IMMT and CIPET - not back-alley DIY",
      rating: 9,
      color: "green",
    },
    {
      feature: "🌍 Impact",
      verdict: "Over 4 lakh households served in 10+ years - real numbers, not marketing fluff",
      rating: 10,
      color: "blue",
    },
    {
      feature: "💰 Affordability",
      verdict: "Products that don't cost a kidney and actually work for real India",
      rating: 10,
      color: "green",
    },
    {
      feature: "🔧 Durability",
      verdict: "Built to last longer than most political promises",
      rating: 9,
      color: "red",
    },
    {
      feature: "🎯 CSR Potential",
      verdict: "The perfect partner for companies that want real impact, not just photo ops",
      rating: 10,
      color: "orange",
    },
  ]

  const whatWeLoved = [
    "💧 No-nonsense water purification that actually works without fancy marketing",
    "🚽 Sanitation solutions that respect dignity and don't vanish after ribbon-cutting",
    "💰 Affordable technology that doesn't make clean water a luxury",
    "🌱 Eco-friendly designs that don't waste water like typical RO systems",
    "🏠 Products built for real India - villages, small towns, and forgotten corners",
    "🔧 Sturdy, practical designs that survive in tough conditions",
  ]

  const governmentTalk = [
    {
      title: "The Good",
      points: [
        "Swachh Bharat initiative finally putting serious weight behind rural sanitation",
        "Jal Shakti Ministry endorsing community-level solutions",
        "Growing recognition of water crisis as a national priority",
      ],
    },
    {
      title: "The Bad",
      points: [
        "Still pushing flashy, overpriced water purifiers through tenders",
        "Big water mafia thriving on keeping solutions complicated and costly",
        "Limited support for affordable, effective solutions like Watsan's",
      ],
    },
    {
      title: "The Ugly Truth",
      points: [
        "Millions still suffering from unsafe drinking water and poor sanitation",
        "Rural India deserves better than lipstick-on-a-pig solutions",
        "We're nowhere near done - not by a long shot",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/watsan-logo.png"
                alt="Watsan Envirotech Logo"
                width={200}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  💧 {company.name}
                </h1>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  {company.yearsInBusiness}+ Years
                </Badge>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔥 "The Common Man's Weapon Against Water Snobbery & Toilet Tyranny"
              </h2>

              <p className="text-xl text-gray-700 mb-4 font-medium">
                💬 "Low-cost? Cheap? Nah. Just Underrated Genius Fighting the Water Mafia!"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span>
                    <strong>Founder:</strong> {company.founder}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-5 h-5 mr-2 text-cyan-500" />
                  <span>
                    <strong>Impact:</strong> 4 Lakh+ Households
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-green-500" />
                  <span>
                    <strong>Founded:</strong> {new Date().getFullYear() - company.yearsInBusiness}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  <span>
                    <strong>Recognition:</strong> Jal Shakti Ministry Endorsed
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  <Link href={company.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Watsan.in
                  </Link>
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <Shield className="w-4 h-4 mr-2" />
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            👨‍🔧 Founder Guts & Glory
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Enter Chandrashekar — the unsung hero with the tenacity of a boomer who's seen too many scams disguised as
              "premium water tech." This guy decided enough was enough. While everyone else was busy polishing their
              brands to look pretty, he went straight to the grassroots and built solutions that WORK, not just look
              good on the showroom floor.
            </p>
            <p className="text-gray-700 mb-4">
              His grit is like a vintage classic car: unpretentious, reliable, and just keeps going despite all odds.
              Chandrashekar and Watsan Envirotech aren't just another brand. They're the David facing the Goliath water
              mafia, armed with science, sincerity, and a burning desire to fix India's water crisis for good.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium italic">
                💡 "Watsan's biggest 'crime' in this cutthroat market? They don't play the elite game. They don't price
                their products to sound fancy or dangle glittering bells and whistles that confuse the hell out of you.
                No, Watsan is built for the real India."
              </p>
            </div>
          </div>
        </div>

        {/* Feature Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🧬 What Makes Watsan Stand Out?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureAnalysis.map((item, index) => (
              <Card key={index} className={`border-2 border-${item.color}-200 hover:shadow-lg transition-shadow`}>
                <CardHeader className={`bg-${item.color}-50`}>
                  <CardTitle className={`text-${item.color}-700 text-lg flex items-center justify-between`}>
                    <span>{item.feature}</span>
                    <Badge variant="outline" className={`border-${item.color}-500 text-${item.color}-700`}>
                      {item.rating}/10
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 text-sm">{item.verdict}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Boomer Rating Section */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">⭐️ GROWMOREENGINE BOOMER VERDICT</h2>
            <div className="text-6xl font-bold mb-4">5.0/5</div>
            <p className="text-xl mb-6 max-w-4xl mx-auto">
              "If you want the water mafia to lose, and real solutions to win, support Watsan!"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Droplet className="w-12 h-12 mx-auto mb-2" />
                <h3 className="font-semibold">Clean Water</h3>
                <p className="text-sm opacity-90">Not a luxury, but a human right</p>
              </div>
              <div>
                <Shield className="w-12 h-12 mx-auto mb-2" />
                <h3 className="font-semibold">Real Protection</h3>
                <p className="text-sm opacity-90">Against waterborne diseases</p>
              </div>
              <div>
                <Award className="w-12 h-12 mx-auto mb-2" />
                <h3 className="font-semibold">Affordable Excellence</h3>
                <p className="text-sm opacity-90">Technology that doesn't break the bank</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Loved */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            💥 What We Loved:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeLoved.map((item, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Showcase */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🚰 Watsan's Revolutionary Products
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Household Water Purifier */}
            <Card className="hover:shadow-2xl transition-all border-2 hover:border-blue-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/watsan-household-purifier.png"
                    alt="Watsan Household Water Purifier"
                    width={200}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-xl">Household Water Purifiers</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  "Simple enough for your grandma. Strong enough for your enemies."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    This is NOT your mineral-water-at-₹200/month subscription nonsense. This is hardcore, gravity-based
                    purification using natural Terafil®™ tech — developed in collaboration with CSIR-IMMT and CIPET.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">✅ What Works</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>No electricity needed</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>No RO-waste guilt</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>No recurring expensive filters</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">💧 Removes</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <Droplet className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Arsenic & fluoride</span>
                        </li>
                        <li className="flex items-start">
                          <Droplet className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Bacteria & pathogens</span>
                        </li>
                        <li className="flex items-start">
                          <Droplet className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Turbidity & impurities</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm font-medium">
                      <strong>Boomer Verdict:</strong> "Removes more toxins than your family WhatsApp group. And
                      definitely more reliable than your last purifier brand."
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    >
                      <Link href="/products/watsan-home-ro-system">Full Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Green Sanitation Solutions */}
            <Card className="hover:shadow-2xl transition-all border-2 hover:border-green-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/watsan-toilet-door.png"
                    alt="Watsan Green Sanitation Solution"
                    width={200}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-xl">Green Sanitation Solutions</CardTitle>
                <CardDescription className="text-green-600 font-medium">
                  "Flushes your assumptions along with the crap."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Watsan toilets are built in 2 days flat, from discarded materials (yes, recycled — not "rebranded
                    waste") and last longer than most political promises. While elite brands propose ₹60,000 designer
                    loos, Watsan delivers real toilets to real people.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">✅ Features</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Eco-friendly materials</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Theft-proof design</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Modular and scalable</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">🏠 Perfect For</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <ThumbsUp className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Schools & villages</span>
                        </li>
                        <li className="flex items-start">
                          <ThumbsUp className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Remote camps</span>
                        </li>
                        <li className="flex items-start">
                          <ThumbsUp className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Disaster zones</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      <strong>Boomer Verdict:</strong> "Finally, a toilet that doesn't cost more than a motorbike and
                      doesn't vanish after the ribbon-cutting ceremony."
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                    >
                      <Link href="/products/watsan-green-sanitation">Full Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Community Water Purifiers */}
            <Card className="hover:shadow-2xl transition-all border-2 hover:border-cyan-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/watsan-storage-tank.png"
                    alt="Watsan Community Water Purifier"
                    width={200}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-xl">Community Water Purifiers</CardTitle>
                <CardDescription className="text-cyan-600 font-medium">
                  "Hydration for all. Not just the chosen few with pin codes ending in 001."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    From 50 LPH to 2500 LPH, these bad boys are built for Bharat. No electricity? No problem. No clean
                    supply? We fix that. Your apartment association can't agree on whether to put a gate? Watsan can
                    install a community-level purifier before they finish debating.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-cyan-600 mb-2">🚰 Includes</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-cyan-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Water on Wheels (WOW)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-cyan-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Water ATW (Any Time Water)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-cyan-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Jal Shakti Ministry endorsed</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">💧 Capacity</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <Droplet className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>50 LPH for small communities</span>
                        </li>
                        <li className="flex items-start">
                          <Droplet className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>500 LPH for medium villages</span>
                        </li>
                        <li className="flex items-start">
                          <Droplet className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>2500 LPH for large settlements</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <p className="text-cyan-800 text-sm font-medium">
                      <strong>Boomer Verdict:</strong> "One of the rare community projects that doesn't just 'raise
                      awareness' — it raises water quality."
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                    >
                      <Link href="/products/watsan-community-purifier">Full Review</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Travel Purifiers */}
            <Card className="hover:shadow-2xl transition-all border-2 hover:border-purple-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/watsan-terafil-purifier.png"
                    alt="Watsan Travel Purifier"
                    width={200}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-xl">Travel Purifiers (Coming Soon)</CardTitle>
                <CardDescription className="text-purple-600 font-medium">
                  "Because drinking plastic-flavored water is sooo 2023."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Let's face it — buying plastic water bottles while travelling makes you part of the problem. One
                    litre = 240,000 plastic particles, and that's before the bottle hits your car's AC vent and melts
                    into a biohazard. Watsan's upcoming travel purifiers are poised to kill the bottled water industry.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-2">✅ Features</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Fits in your bag</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Filters microplastics</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Removes pathogens</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">🌱 Benefits</h4>
                      <ul className="text-xs space-y-1">
                        <li className="flex items-start">
                          <ThumbsUp className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Saves your gut</span>
                        </li>
                        <li className="flex items-start">
                          <ThumbsUp className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Protects the planet</span>
                        </li>
                        <li className="flex items-start">
                          <ThumbsUp className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>Saves money long-term</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800 text-sm font-medium">
                      <strong>Boomer Verdict:</strong> "Finally, a travel buddy that doesn't nag or charge you ₹40 at a
                      highway dhaba."
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <Badge className="bg-purple-100 text-purple-700">Coming Soon</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Government Talk */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-yellow-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            🏛️ A Nod to the Present Government — But Let's Not Get Cozy
          </h2>
          <p className="text-gray-700 mb-6">
            Look, hats off to the present government for finally waking up and throwing some serious weight behind rural
            sanitation facilities. It's a welcome change, no doubt. Swachh Bharat and other initiatives have brought
            toilets and basic sanitation to millions who never had it. But here's the kicker — we're nowhere near done.
            Not by a long shot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governmentTalk.map((section, index) => (
              <Card key={index} className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        {index === 0 ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        ) : index === 1 ? (
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        )}
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CSR Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">🎯 CSR Heads, Wake Up Call!</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-6 text-center">
              If you're a public company trying to "tick" your CSR checkboxes with one more solar lamp or annual
              calendar, stop. Stop it. Want to actually create impact?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">💡 Fund Real Change</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fund a village sanitation block</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sponsor a hundred school water purifiers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Build a rolling fleet of Water-on-Wheels for tribal belts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Go big with ATWs in urban slums and disaster zones</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-green-300">🌱 Why Watsan?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real metrics, not vanity numbers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real people, not stock photos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real stories, not marketing fluff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real impact, not just awareness</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl mb-6">
                WATSAN is your CSR dream project—with real metrics, real people, real stories. Not stock photos of
                smiling kids with suspiciously white teeth.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                Partner with Watsan
              </Button>
            </div>
          </div>
        </div>

        {/* Real Impact */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            👨‍👩‍👧‍👦 Real People, Real Impact
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-gray-700 mb-4">
                Millions suffer every day from unsafe drinking water and poor sanitation. It's not just inconvenience;
                it's a killer—diseases, lost lives, broken families. And the "official" solutions? Mostly paper tigers.
              </p>
              <p className="text-gray-700 mb-4">
                Watsan's tech actually solves the problem: reliable, effective water purification and sanitation,
                designed for Indian conditions, at prices that make sense. This isn't charity. This is investment in
                survival, health, and justice.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium italic">
                  💡 "We're done playing polite with overpriced brands who've hijacked basic needs and turned them into
                  luxury goods. Water is life. Sanitation is dignity. And Watsan delivers both with a fraction of the
                  noise and cost."
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/watsan-family-toilet.png"
                alt="Family with Watsan Sanitation Facility"
                width={300}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Real families benefiting from Watsan sanitation solutions
              </p>
            </div>
          </div>
        </div>

        {/* Final Boomer Thought */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">🚨 Final Boomer Salvo</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl mb-6 font-bold">
              "Watsan Envirotech is the brand your great-grandchildren will thank you for."
            </p>
            <p className="text-xl mb-6">
              Don't let it be the best-kept secret of Indian water tech anymore. Here's hoping Chandrashekar's fearless
              fight inspires change, not just in water quality, but in the very conscience of our governments.
            </p>
            <p className="text-xl font-bold">
              Because if they don't, they're complicit in a silent, deadly crime against millions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
