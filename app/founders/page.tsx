import Link from "next/link"
import { Star, Award, TrendingUp, Users, Building2, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function FoundersPage() {
  const founders = [
    {
      id: "jammi-family",
      name: "Jammi Family Dynasty",
      company: "Jammi Ayurveda",
      companyLink: "/companies/jammi",
      yearsActive: "127+ Years (4th Generation)",
      location: "Tamil Nadu, India",
      industry: "Healthcare/Ayurveda",
      founded: "1897",
      story:
        "Four generations of uninterrupted healing tradition. When your family business is older than most countries' independence, you're not just selling products—you're preserving culture.",
      achievement: "127 years of authentic Ayurvedic wisdom",
      boomerRating: 9.2,
      icon: "🏛️",
    },
    {
      id: "kesavardhanan",
      name: "J Kesavardhanan",
      company: "K7 Computing",
      companyLink: "/companies/k7-computing",
      yearsActive: "32+ Years",
      location: "Chennai, India",
      industry: "Cybersecurity/Software",
      founded: "1991",
      story:
        "India's first ethical hacker who started fighting viruses before the world got obsessed with going viral. Built a cybersecurity empire when most people didn't even know what a computer virus was.",
      achievement: "India's First Ethical Hacker & Cybersecurity Pioneer",
      boomerRating: 8.9,
      icon: "🛡️",
    },
    {
      id: "sathish-kumar",
      name: "T. Sathish Kumar",
      company: "Milky Mist",
      companyLink: "/companies/milky-mist",
      yearsActive: "39+ Years",
      location: "Erode, Tamil Nadu",
      industry: "Dairy/Food",
      founded: "1985",
      story:
        "At 16, when his friends were worried about board exams, Sathish Kumar was worried about saving his father's failing milk business. School dropout? Yes. Visionary? Absolutely. From a struggling milk trader in Erode to building a dairy empire that teaches MBAs how it's done.",
      achievement: "Built India's Most Trusted Dairy Brand from Scratch",
      boomerRating: 4.9,
      icon: "🥛",
    },
    {
      id: "murali-hari",
      name: "Murali & Hari Sethuraman",
      company: "Organic Shandy",
      companyLink: "/companies/organic-shandy",
      yearsActive: "25+ Years",
      location: "Chennai, India",
      industry: "Organic Food",
      founded: "1999",
      story:
        "The OG Farm Whisperer (Murali) and the IITian turned Nature Lover (Hari). Started organic farming when people thought they were crazy for avoiding chemicals. Now they're the organic vigilantes Chennai deserves.",
      achievement: "Made Organic Feel Original Again",
      boomerRating: 4.8,
      icon: "🌱",
    },
    {
      id: "ramesh-vinayakam",
      name: "Ramesh Vinayakam",
      company: "Music Temple",
      companyLink: "/companies/music-temple",
      yearsActive: "15+ Years",
      location: "Chennai, India",
      industry: "Creative/Education",
      founded: "2009",
      story:
        "A musician who understands both technology and traditional music education. IIT-incubated platform that actually teaches music, not just sells courses.",
      achievement: "Revolutionizing Indian Music Education",
      boomerRating: 4.2,
      icon: "🎵",
    },
    {
      id: "chandrashekar",
      name: "Chandrashekar",
      company: "Watsan Envirotech",
      companyLink: "/companies/watsan",
      yearsActive: "20+ Years",
      location: "Bangalore, India",
      industry: "CleanTech/Water",
      founded: "2004",
      story:
        "Environmental Engineers Collective who were tired of seeing water treatment as an afterthought. Making water actually clean, not just clear.",
      achievement: "Real Water Solutions for Real India",
      boomerRating: 5.0,
      icon: "💧",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              <Users className="w-5 h-5 mr-2" />
              Founder Hall of Fame
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            The Legends Behind the Brands
            <span className="block text-2xl font-normal text-blue-200 mt-4">
              Real Stories. Real Struggles. Real Success.
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries who built empires not with PowerPoint presentations, but with grit, determination, and
            an unshakeable belief in their dreams. These aren't your typical startup founders—these are the real deal.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Founders Grid */}
        <div className="grid gap-8 mb-16">
          {founders.map((founder, index) => (
            <Card
              key={founder.id}
              className={`border-l-4 ${index % 2 === 0 ? "border-l-blue-600" : "border-l-purple-600"} hover:shadow-lg transition-shadow`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{founder.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-gray-800 mb-2">{founder.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Building2 className="w-3 h-3 mr-1" />
                          {founder.company}
                        </Badge>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          {founder.yearsActive}
                        </Badge>
                        <Badge variant="outline" className="text-purple-600 border-purple-600">
                          <MapPin className="w-3 h-3 mr-1" />
                          {founder.location}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xl font-bold text-orange-600">{founder.boomerRating}</span>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Boomer Rating
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="font-bold text-gray-800 mb-3">The Story</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">{founder.story}</p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                      <h5 className="font-semibold text-gray-800 mb-2">🏆 Greatest Achievement:</h5>
                      <p className="text-gray-700 italic">"{founder.achievement}"</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <h5 className="font-bold text-blue-800 mb-2">Industry</h5>
                      <p className="text-blue-700">{founder.industry}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <h5 className="font-bold text-green-800 mb-2">Founded</h5>
                      <p className="text-green-700">{founder.founded}</p>
                    </div>
                    <Link href={founder.companyLink}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Award className="w-4 h-4 mr-2" />
                        View Company
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Spotlight: T. Sathish Kumar */}
        <Card className="mb-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-800 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              Spotlight: The Ultimate Rags-to-Riches Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">
                  T. Sathish Kumar - The 16-Year-Old Who Built an Empire
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>1985:</strong> At just 16, Sathish Kumar made a decision that would change everything. His
                    father's milk business was failing, and instead of hitting the books, he hit the streets. School
                    dropout? Yes. Visionary? Absolutely.
                  </p>
                  <p>
                    <strong>The Struggle:</strong> What started as a desperate attempt to save the family business
                    became a masterclass in turning adversity into opportunity. From milk trading to paneer production,
                    every step was a lesson in resilience.
                  </p>
                  <p>
                    <strong>The Breakthrough:</strong> 1994 - Paneer production begins. 1997 - "Milky Mist" brand is
                    born. 2010 - First TV commercial takes the brand to millions of households. 2018 - Fully automated
                    robotic processing with German technology.
                  </p>
                  <p>
                    <strong>The Empire:</strong> From 3 metric tons of paneer per day in 2011 to a full dairy empire by
                    2023. 20+ products, own logistics chain, and operations across India and international markets.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-800 mb-4">🎯 The Boomer Wisdom:</h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="text-orange-800 font-semibold italic">
                      "When life gives you a failing milk business, you don't make lemonade. You make paneer, curd,
                      ghee, and eventually an empire that teaches MBAs how it's done."
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="text-orange-800 font-semibold italic">
                      "German technology + Indian heart = Success formula. Meanwhile, other brands: Chinese machinery +
                      Marketing heart = Confusion."
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p className="text-orange-800 font-semibold italic">
                      "When a school dropout builds a better dairy empire than most engineering graduates, you know this
                      is the real deal."
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link href="/companies/milky-mist">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                      <Building2 className="w-5 h-5 mr-2" />
                      Read Full Milky Mist Story
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boomer Philosophy */}
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 text-center">
              🎭 The GrowMoreEngine Founder Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">What Makes a Real Founder:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Solves real problems, not imaginary ones</li>
                  <li>✅ Builds for decades, not just for the next funding round</li>
                  <li>✅ Knows their customers personally, not just through analytics</li>
                  <li>✅ Creates value, not just valuations</li>
                  <li>✅ Survives without venture capital drama</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">What We Don't Need More Of:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>❌ "Disrupting" things that work perfectly fine</li>
                  <li>❌ Burning money to acquire customers who don't want you</li>
                  <li>❌ Calling everything "revolutionary" and "game-changing"</li>
                  <li>❌ Building apps for problems that don't exist</li>
                  <li>❌ Pivot stories that sound like excuses</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 italic">
                "These founders didn't need accelerators, incubators, or pitch decks. They just needed grit, vision, and
                the courage to start."
              </p>
              <p className="text-gray-600 text-sm mt-2">- The GrowMoreEngine Boomer Council</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
