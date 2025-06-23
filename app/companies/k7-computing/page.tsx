import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Shield, Users, Award, Globe, Calendar, CheckCircle, Zap, Brain, Lock } from "lucide-react"
import { companies } from "@/data/real-companies"

export default function K7ComputingPage() {
  const company = companies.find((c) => c.id === "k7-computing")!

  const featureAnalysis = [
    {
      feature: "🧬 Legacy",
      verdict: "30+ years of actual experience, not 'founded on a tweet and a hoodie'",
      rating: 9,
      color: "green",
    },
    {
      feature: "🧠 Founder Cred",
      verdict: "India's first ethical hacker — not a Silicon Valley dropout pitching at TEDx",
      rating: 10,
      color: "blue",
    },
    {
      feature: "🛡️ Product Strength",
      verdict: "Covers home, SMB, enterprise, mobile, and national security segments",
      rating: 9,
      color: "purple",
    },
    {
      feature: "⚙️ R&D",
      verdict: "Fully Indian-made, researched and built in-house in Chennai — not white-labeled junk",
      rating: 9,
      color: "green",
    },
    {
      feature: "🌍 Global Reach",
      verdict: "25 million+ users across 100+ countries — quietly winning, not shouting online",
      rating: 8,
      color: "blue",
    },
    {
      feature: "💻 Software Quality",
      verdict: "Low system usage, works well even on your uncle's 8-year-old laptop",
      rating: 9,
      color: "green",
    },
    {
      feature: "🔐 Security Focus",
      verdict: "Real-time protection, zero-day defenses, endpoint lockdown, and parental controls",
      rating: 9,
      color: "red",
    },
    {
      feature: "🔍 UI/UX",
      verdict: "Simple interface — because security is not Netflix",
      rating: 7,
      color: "orange",
    },
    {
      feature: "📦 Licensing & Certs",
      verdict: "CERT-In certified, ISO standard processes — not just 'our friends liked it'",
      rating: 9,
      color: "green",
    },
    {
      feature: "🔎 AI & ML Use",
      verdict: "Yes, but not like 'AI washing' others do — practical & focused usage",
      rating: 8,
      color: "purple",
    },
  ]

  const whatWeLoved = [
    "🇮🇳 Indian-Built, Indian-Tested, Indian-Trusted — and it still beats many foreign names",
    "🧓 Old-school ethical hacking meets modern machine learning — talk about vintage with turbo!",
    "🖥️ Lightweight Protection — it works on your outdated PC and your brand-new M2 chip Mac",
    "📦 Flexible for all — home use, mobile protection, or securing your cousin's small startup in Tirunelveli",
    "🛡️ Works silently, saves loudly — no annoying pop-ups every 5 minutes",
    "💰 Cheaper than your Spotify subscription, more useful than half your apps",
  ]

  const realWorldImpact = [
    {
      segment: "Home Users",
      users: "15M+",
      description: "Protecting family computers since Windows 95 era",
    },
    {
      segment: "SMBs",
      users: "5M+",
      description: "Small businesses that can't afford enterprise solutions",
    },
    {
      segment: "Enterprises",
      users: "3M+",
      description: "Corporations that need serious endpoint protection",
    },
    {
      segment: "Defense",
      users: "2M+",
      description: "Government and defense installations across India",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/k7-security-logo.png"
                alt="K7 Security Logo"
                width={120}
                height={120}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  🛡️ {company.name}
                </h1>
                <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  {company.yearsInBusiness}+ Years
                </Badge>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔥 "Real cybersecurity by people who were fighting viruses before the world got obsessed with going
                viral."
              </h2>

              <p className="text-xl text-gray-700 mb-4 font-medium">
                💬 "You want security? Don't go chasing the latest shiny app — trust the folks who've been battling
                viruses before you were born."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-orange-500" />
                  <span>
                    <strong>Founder:</strong> {company.founder}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" />
                  <span>
                    <strong>Global Users:</strong> 25 Million+
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-green-500" />
                  <span>
                    <strong>Founded:</strong> 1991 (Pre-Internet Era)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  <span>
                    <strong>Reach:</strong> 100+ Countries
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  <Link href={company.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit K7Computing.com
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            👴🏼 A Legacy Not From LinkedIn But the Real World
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              While the world was busy uploading selfies on Orkut (remember that?), a quiet tech veteran named J
              Kesavardhanan was out there doing real cybersecurity. India's first ethical hacker. Not a social media
              "guru." He didn't start K7 after watching an Elon Musk podcast — he built it, way back in the '90s, when
              antivirus actually meant something.
            </p>
            <p className="text-gray-700 mb-4">
              K7 Computing has since matured into one of India's most trusted and advanced cybersecurity companies —
              used in over 100+ countries by more than 25 million users.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium italic text-lg">
                💡 "Still think 'foreign is better'? This Chennai-based company has been protecting computers since
                before most cybersecurity startups even existed."
              </p>
            </div>
          </div>
        </div>

        {/* Feature Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🧬 What Makes K7Computing Stand Out?
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
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">⚖️ GROWMORE™ VERDICT</h2>
            <div className="text-6xl font-bold mb-4">4.6/5</div>
            <p className="text-xl mb-6 max-w-4xl mx-auto">"The Antivirus Hero We Didn't Appreciate Enough"</p>
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

        {/* Real World Impact */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🌍 Real World Impact: 25 Million+ Users Across Segments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realWorldImpact.map((segment, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50 text-center">
                  <CardTitle className="text-blue-700 text-lg">{segment.segment}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{segment.users}</div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 text-sm text-center">{segment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Website Screenshot */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🖥️ Website Review: K7Computing.com
          </h2>
          <div className="mb-4">
            <Image
              src="/images/k7-website-screenshot.jpg"
              alt="K7 Computing Website Screenshot"
              width={800}
              height={400}
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 mb-2">✅ What Works</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Logo positioned top-left, where every boomer expects it</li>
                <li>• Loads fast, looks sharp</li>
                <li>• No nonsense, no bloated design</li>
                <li>• Clear product categories and pricing</li>
                <li>• Download links that actually work</li>
                <li>• Technical specs for people who care</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-orange-600 mb-2">⚠️ Room for Growth</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Marketing game is weak (seriously, flex more!)</li>
                <li>• Could use more customer testimonials</li>
                <li>• Social media presence needs a boost</li>
                <li>• Free trial limits could be more generous</li>
                <li>• Case studies section missing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
            🔬 Technical Excellence: Why K7 Actually Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-700 flex items-center">
                  <Brain className="w-6 h-6 mr-2" />
                  AI & ML Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Behavioral analysis for zero-day threats</li>
                  <li>• Machine learning for pattern recognition</li>
                  <li>• Not "AI washing" like others</li>
                  <li>• Practical implementation, not buzzwords</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700 flex items-center">
                  <Lock className="w-6 h-6 mr-2" />
                  Security Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Real-time scanning engine</li>
                  <li>• Endpoint detection and response</li>
                  <li>• Network traffic monitoring</li>
                  <li>• Ransomware protection layers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-700 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Performance Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Low CPU and memory usage</li>
                  <li>• Works on legacy systems</li>
                  <li>• Fast boot times maintained</li>
                  <li>• Background operation without lag</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Boomer Verdict Add-On */}
        <div className="bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">💥 BOOMER VERDICT – ADD-ON</h2>
          <div className="text-center mb-6">
            <p className="text-lg italic">(The rating just got spicier)</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed">
              Let's get real here. This man — <strong>J Kesavardhanan</strong> — has been wild with his imagination,
              building K7 from scratch without the typical tech VC backing or flashy funding rounds. The man didn't
              chase unicorn status; instead, he chased <strong>unhackable protection</strong>.
            </p>

            <div className="bg-red-800 p-6 rounded-xl border-l-4 border-yellow-400">
              <p className="text-lg font-medium">
                But here's what baffles us —{" "}
                <strong>why didn't they go after the enterprise security space aggressively?</strong>
              </p>
              <p className="mt-3">
                We've got competitors dancing with governments, accepting "state-sponsored investments," planting shady
                software in other countries, and becoming <em>cybersecurity wolves in sheep's clothing</em>. One big
                Eastern European antivirus brand even got banned in India for spying.{" "}
                <strong>Yeah, that happened.</strong> And still, most people don't even know it.
              </p>
            </div>

            <div className="bg-green-800 p-6 rounded-xl border-l-4 border-orange-400">
              <p className="text-xl font-bold mb-3">But K7? They stayed clean. Mera Bharat Mahan level clean.</p>
              <p className="text-lg">
                No spyware. No government snooping. Just old-school firewall & file defense done right. A Made-in-India
                brand that never got the limelight it deserves.
              </p>
            </div>

            <div className="bg-yellow-800 p-6 rounded-xl">
              <p className="text-lg mb-4">Now, here's a Boomer thought you won't hear from CNBC:</p>
              <blockquote className="text-xl italic border-l-4 border-white pl-6 font-medium">
                "If you've got a few crores parked in FDs, bonds, or real estate that ain't growing… maybe it's time to
                take a trip to Chennai and knock on this man's door."
              </blockquote>
              <p className="text-lg mt-4">
                Because honestly,{" "}
                <strong>
                  he might just save your wealth the same way he's been saving users from deadly cyber viruses
                </strong>{" "}
                for over two decades. He's low-profile, but this company isn't low-potential.
              </p>
            </div>

            <div className="bg-orange-800 p-6 rounded-xl">
              <p className="text-lg font-medium">
                And by the way — <strong>why no IPO yet?</strong> When half-baked SaaS startups are walking into the
                stock market with losses, <strong>this profitable, tech-heavy brand is sitting idle?</strong>
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Brain className="w-6 h-6 mr-2" />💡 Investor Insight:
              </h3>
              <p className="text-lg">
                You're not buying a stock. You're buying <strong>a belief</strong> in a cybersecurity future that isn't
                controlled by foreign governments or shady data brokers.
              </p>
            </div>
          </div>
        </div>

        {/* Updated Final Boomer Verdict */}
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🔥 FINAL BOOMER VERDICT UPDATE</h2>
            <div className="text-6xl font-bold mb-4">4.6/5</div>
            <p className="text-2xl mb-6 max-w-4xl mx-auto font-medium">
              "The Antivirus Hero We Didn't Appreciate Enough"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
              <div className="bg-green-700 p-4 rounded-xl">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">K7 is not just underrated. It's underplayed.</p>
              </div>
              <div className="bg-blue-700 p-4 rounded-xl">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">Still founder-led. Still Made in India. Still Clean.</p>
              </div>
            </div>

            <div className="bg-red-600 p-6 rounded-xl inline-block">
              <p className="text-xl font-bold">🔥 HIGH ALERT TAG: For investors looking for safe, ethical returns</p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🔒 Product Reviews — The Boomer Way
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {company.products.map((product) => (
              <Card key={product.id} className="hover:shadow-2xl transition-all border-2 hover:border-orange-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700">
                      {product.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl flex items-center gap-2">
                    {product.name}
                    <Button asChild size="sm" variant="outline">
                      <Link href={product.officialLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </Button>
                  </CardTitle>

                  <CardDescription className="text-gray-600 font-medium">
                    💬 "{product.shortDescription}"
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <strong className="text-orange-600">🧓 Boomer Rating:</strong> {product.boomerLogic}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">✅ What Works</h4>
                        <ul className="text-xs space-y-1">
                          {product.thingsThatWork.slice(0, 3).map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">⚠️ What's Meh</h4>
                        <ul className="text-xs space-y-1">
                          {product.thingsThatAreMeh.slice(0, 3).map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      >
                        <Link href={`/products/${product.id}`}>Full Review</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Boomer Questions */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">❓BoomeREAL Questions That Need Asking</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <blockquote className="text-lg italic border-l-4 border-orange-500 pl-4">
              "Why are we still downloading foreign antivirus when K7 is sitting right here in Chennai?"
            </blockquote>
            <blockquote className="text-lg italic border-l-4 border-orange-500 pl-4">
              "If my desktop still works fine with K7 after 7 years, why does my nephew keep telling me to switch?"
            </blockquote>
            <blockquote className="text-lg italic border-l-4 border-orange-500 pl-4">
              "Can we just stop with the AI hype and start trusting things that have been quietly working for decades?"
            </blockquote>
            <blockquote className="text-lg italic border-l-4 border-orange-500 pl-4">
              "Maybe — just maybe — stop using that free Chinese antivirus you downloaded from an ad with a cat GIF?"
            </blockquote>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold mb-4">🧓 FINAL SAY FROM BOOMER HQ</h3>
            <p className="text-xl italic mb-4">
              "You want security? Trust the guy who's been fixing PCs since the Y2K scare. K7 is your silent knight. No
              cloak, no dagger — just protection."
            </p>
            <div className="bg-orange-600 p-4 rounded-xl inline-block">
              <p className="text-white font-bold">
                🖥️ Check them out:{" "}
                <Link href="https://www.k7computing.com" className="underline">
                  www.k7computing.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
