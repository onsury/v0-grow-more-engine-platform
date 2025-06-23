import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ExternalLink,
  Users,
  Award,
  Globe,
  Calendar,
  CheckCircle,
  Music,
  Brain,
  Zap,
  Heart,
  Trophy,
} from "lucide-react"
import { companies } from "@/data/real-companies"

export default function MusicTemplePage() {
  const company = companies.find((c) => c.id === "music-temple")!

  const aspectRatings = [
    {
      aspect: "Innovation (GBNS)",
      rating: 5,
      comment: "Finally, someone invented a music GPS. Hallelujah!",
      color: "green",
    },
    {
      aspect: "Impact on Music Education",
      rating: 5,
      comment: "Turns decades of oral chaos into neat boxes. Genius!",
      color: "blue",
    },
    {
      aspect: "Tech Integration (LMS)",
      rating: 5,
      comment: "Old-school gurus need to take notes from this.",
      color: "purple",
    },
    {
      aspect: "Accessibility & Inclusivity",
      rating: 5,
      comment: "Even the hearing-impaired and tone-deaf can now jam.",
      color: "green",
    },
    {
      aspect: "Business Model & Sustainability",
      rating: 4,
      comment: "Startup hustle is real. But this one's built to last.",
      color: "orange",
    },
    {
      aspect: "Founder Vision & Grit",
      rating: 5,
      comment: "From crores in film music to startup scars — respect.",
      color: "red",
    },
  ]

  const gbnsProducts = [
    {
      name: "GBNS for Schools (Carnatic)",
      rating: 5,
      highlight: "Kids singing Tyagaraja in school? Sign me up.",
      description:
        "Your morning assembly will now start with 'Sree Gananaatham' sung in perfect shruti by 12-year-olds wearing Bata shoes and absolute confidence.",
    },
    {
      name: "GBNS for Schools (Hindustani)",
      rating: 5,
      highlight: "Morning raagas and chai — perfect combo.",
      description:
        "Forget PT period, today we are doing Raag Bhairavi with tanpura backing. Also, the kid from 6th B is doing aalap in perfect meend. Unreal.",
    },
    {
      name: "GBNS for Film Music",
      rating: 4,
      highlight: "Learn how ARR tricks you into loving his tunes.",
      description:
        "Wanna be the next Anirudh? Learn ARR's chord transitions and SPB's vocal slides with graphical gamaka. This isn't just learning — it's decoding music's DNA.",
    },
    {
      name: "GBNS for Folk Music",
      rating: 5,
      highlight: "Village tunes, grandma's lullabies, immortalized.",
      description:
        "From Koothu pattus to village lullabies, this system preserves the true soul of folk without losing the bounce. Now your great-grandma's tune is not just in memory — it's in 4K resolution.",
    },
  ]

  const celebrityTestimonials = [
    {
      name: "V. S. Narasimhan",
      title: "Founder of Madras String Quartet",
      quote: "GBNS is a breakthrough and a great boon to South Indian classical students.",
      boomerTranslation:
        "Finally, something that saves us from endless hours of explaining why your 'sa' sounds like a confused crow.",
    },
    {
      name: "Pandit Ajoy Chakraborti",
      title: "Ace Hindustani Singer",
      quote: "Totally scientific methodology of notation!",
      boomerTranslation: "So now, the ancient ragas have a formula — who knew?",
    },
    {
      name: "Dr. N Rajam",
      title: "Ace Hindustani Violinist",
      quote: "GBNS lets students actually visualize gamakas",
      boomerTranslation: "It's basically the Indian classical music version of 3D glasses.",
    },
    {
      name: "Lalgudi G Jayaraman",
      title: "Violin Legend",
      quote: "You have achieved what we have not achieved so far!",
      boomerTranslation: "All those years of practice could have been 10x easier if GBNS existed.",
    },
    {
      name: "Aruna Sayeeram",
      title: "Vice-President of Sangeet Natak Academy",
      quote: "This is history; this is making history; this will create history!",
      boomerTranslation: "Triple-stamped with official boomer approval.",
    },
    {
      name: "Sudha Raghunathan",
      title: "The Voice That Melts Hearts",
      quote: "Mind-boggling innovation in music education",
      boomerTranslation: "So good, it might cause classical purists to rethink their entire life philosophy.",
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
                src="/images/music-temple-logo.png"
                alt="Music Temple Logo"
                width={200}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  🎶 {company.name}
                </h1>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">IIT-Incubated</Badge>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔥 "Where ancient tunes meet futuristic tech, and boomers ask, 'What the heck is a gamaka box?'"
              </h2>

              <p className="text-xl text-gray-700 mb-4 font-medium">
                💬 "Music Temple ain't your typical kumbaya kumbh. It's where deep-rooted Indian classical music meets
                cutting-edge technology."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-orange-500" />
                  <span>
                    <strong>Visionary:</strong> {company.founder}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" />
                  <span>
                    <strong>Innovation:</strong> Patented GBNS System
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-green-500" />
                  <span>
                    <strong>Experience:</strong> {company.yearsInBusiness}+ Years
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-2 text-purple-500" />
                  <span>
                    <strong>Mission:</strong> Democratizing Indian Music
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  <Link href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit MusicTemple.in
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  <Music className="w-4 h-4 mr-2" />
                  Try GBNS Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Ramesh Vinayakam Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🧙‍♂️ WHO IS THIS VINAYAKAM GUY AH?
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <p className="text-gray-700 mb-4">
                This is not your WhatsApp forward uncle who sings one line of "Kurai Ondrum Illai" in every family
                function. Ramesh Vinayakam is a classically trained, internationally recognized, award-winning composer,
                arranger, orchestrator, and now—yes, a startup founder. Basically, ARR Rahman without the PR team.
              </p>
              <p className="text-gray-700 mb-4">
                But instead of composing hit after hit and swimming in royalty cheques, this genius decides to patent an
                idea that entire Indian music world ignored for centuries — a music notation system for Indian classical
                music.
              </p>
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <p className="text-purple-800 font-medium italic">
                  💡 "Sa ni dha pa ma ga ri sa" was fine, but this man gave it a box, a shape, a grid, and a goddamn
                  algorithm. And the world said: 'Why didn't we think of this before?'
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/ramesh-vinayakam-presentation.png"
                alt="Ramesh Vinayakam presenting GBNS"
                width={400}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* GBNS Innovation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎹 GBNS – The Gamaka Box Notation System
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/gbns-banner.png"
                alt="GBNS - World's First Comprehensive Written Language for Indian Music"
                width={500}
                height={200}
                className="rounded-xl shadow-lg mb-6"
              />
              <p className="text-gray-700 mb-4">
                India invented zero, but forgot to invent a notation for Carnatic music that actually worked. All we had
                were swaras scribbled on ruled paper and oral instruction passed down like secret chutney recipes.
              </p>
              <p className="text-gray-700 mb-4">
                Enter GBNS — the only patented Indian music notation system that can record, decode, teach, share, and
                analyze the nuances of Indian music like never before.
              </p>
            </div>
            <div>
              <Image
                src="/images/gbns-logo.png"
                alt="GBNS Logo"
                width={300}
                height={300}
                className="rounded-xl shadow-lg mb-6"
              />
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Gamaka (ornamentation) shown visually</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Not just what to sing, but how to sing it</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Works for Carnatic, Hindustani, Film, Folk</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Even Kuthu songs get the royal treatment</span>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl mt-4">
                <p className="text-green-800 font-medium">
                  <strong>Boomer Verdict:</strong> This is like putting a GPS on Tyagaraja's compositions. No more
                  getting lost between "a" and "aa."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Boomer Rating Section */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">⭐️ GROWMOREENGINE BOOMER RATING</h2>
            <div className="text-6xl font-bold mb-4">5.0/5</div>
            <p className="text-xl mb-4">"Music Temple is the future, even if we oldies have to squint to see it."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aspectRatings.map((aspect, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{aspect.aspect}</CardTitle>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < aspect.rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                      />
                    ))}
                    <span className="ml-2 text-white font-bold">({aspect.rating}/5)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm italic">"{aspect.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GuruShish LMS Platform */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            💻 GuruShish LMS Platform: The New-age Gurukulam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Gone are the days when you had to sit next to an emotionally unstable Guru who'd throw a sruti box at
                your face if you missed the sangathi.
              </p>
              <p className="text-gray-700 mb-6">GuruShish LMS is the Spotify meets Udemy for Indian music. Built to:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Brain className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                  Teach with GBNS visualization
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                  Record sessions, show live gamaka traces
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  Reduce vocal strain for teachers
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  Help students self-learn with feedback loops
                </li>
                <li className="flex items-start">
                  <Globe className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
                  Democratize access across rural India and foreign learners
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-700 mb-4">🎤 For Everyone Who Thought:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>"Carnatic music is only for maamis in Kanchipuram silk"</li>
                <li>"You need to be born with a golden throat"</li>
                <li>"Classical music is too complicated"</li>
                <li>"Foreign learners can't understand Indian music"</li>
              </ul>
              <div className="bg-blue-100 p-4 rounded-lg mt-4">
                <p className="text-blue-900 font-medium italic">
                  <strong>Boomer Take:</strong> "In our time, you had to sit for 7 years just to learn how to say 'Sa'
                  properly. Now these kids learn a varnam between lunch and nap time. What a world!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GBNS Product Reviews */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            📦 GBNS Product Reviews (Because We Love Making Things Simple for Boomers)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gbnsProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">
                      GBNS Edition
                    </Badge>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">🎵 "{product.highlight}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Try This Edition
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Celebrity Testimonials */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-yellow-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            🎤 Celebrity Testimonials: The Who's Who Approval
          </h2>
          <p className="text-gray-700 mb-6">
            Ah, yes, the who's who of Indian classical music— the legends, the bigwigs, the maestros — all singing
            paeans for Ramesh Vinayakam's GBNS. It's like the Oscars of the classical music world decided to swap their
            tuxedos for tech nerd caps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {celebrityTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">{testimonial.name}</CardTitle>
                  <CardDescription className="text-yellow-600">{testimonial.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-800 italic mb-3">"{testimonial.quote}"</blockquote>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Boomer Translation:</strong> {testimonial.boomerTranslation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl mt-6 border-l-4 border-yellow-500">
            <p className="text-yellow-800 font-medium">
              <strong>The Boomer's Takeaway:</strong> If these legends are ready to endorse something, it's either a) a
              once-in-a-lifetime breakthrough or b) Ramesh bribed them with endless filter coffee and vada sambar.
              Either way, it's time for the rest of us mere mortals to sit up and take notes — literally and
              figuratively.
            </p>
          </div>
        </div>

        {/* 18-Month Revenue Blueprint for Investors */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🎶 Music Temple – The 18-Month Revenue Blueprint for Investors
          </h2>
          <p className="text-xl text-gray-700 mb-6 font-medium italic">
            "A grounded plan to make your money sing, not sink."
          </p>

          {/* Problem Areas */}
          <div className="bg-red-50 p-6 rounded-xl mb-8 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-4">
              🔧 Problem Areas Today (Post-Incubation Stall Zone):
            </h3>
            <ul className="space-y-2 text-red-800">
              <li>• Limited PO inflow = restricted working capital.</li>
              <li>• Fragmented outreach = no clear go-to-market.</li>
              <li>• Tech integration delayed = scalability slowed.</li>
              <li>• Music + Wellness misunderstood = tough investor pitch.</li>
              <li>• No solid sales team = no structured customer acquisition engine.</li>
            </ul>
            <p className="text-red-700 font-medium mt-4">
              All of these? Fixable. With capital + strategy. And Music Temple is ready.
            </p>
          </div>

          {/* Revenue Timeline */}
          <div className="space-y-8">
            {/* Month 0-3 */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">✅ Month 0–3: Stabilization & Activation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Fund Injection:</h4>
                  <p className="text-blue-700 mb-4">₹1–1.5 crore for working capital.</p>
                  <h4 className="font-bold text-blue-800 mb-2">Immediate use:</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Hire 1 Sales Head + 2 BDMs + 1 Ops Lead</li>
                    <li>• Fix digital infra (platform, UX, API payment integrations)</li>
                    <li>• Start marketing content for B2C and institutional push</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">First Revenue Inflows:</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Workshops + Performances (Offline): ₹6–8L/month</li>
                    <li>• Custom Corporate Wellness Pilots (via GBNS): ₹3L/month from 2–3 clients</li>
                    <li>• Govt-funded Research Alliances (AYUSH/Health): MOU-based ₹15–20L projects</li>
                  </ul>
                  <div className="bg-blue-100 p-3 rounded-lg mt-4">
                    <p className="text-blue-900 font-bold">💡 Projected Monthly Run Rate by end of Q1: ₹12–15L</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 4-9 */}
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 mb-4">✅ Month 4–9: Productization Phase</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">
                      Launch Paid Learning Modules on GBNS Music Therapy:
                    </h4>
                    <p className="text-purple-700 text-sm">Foundation, Intermediate, Advanced — ₹3K–₹12K/course.</p>
                    <p className="text-purple-700 text-sm">Target 1,000 students in first 6 months = ₹30L.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Launch Music for Tourism IP:</h4>
                    <p className="text-purple-700 text-sm">
                      Each album @ ₹3–4Cr funded — even 1 album = working capital safety net for 12 months.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Begin AYUSH/Health Startup Collaboration:</h4>
                    <p className="text-purple-700 text-sm">
                      Paid pilots with hospitals & wellness centres (₹1L–₹5L/month).
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">YouTube Content Monetization + Live Classes:</h4>
                    <p className="text-purple-700 text-sm">Ad revenues, donations, affiliate collaborations.</p>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <p className="text-purple-900 font-bold">💡 Projected Monthly Run Rate by end of Month 9: ₹25–30L</p>
                </div>
              </div>
            </div>

            {/* Month 10-18 */}
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-4">✅ Month 10–18: Scalability + Platform Model</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Subscription Platform for GBNS Music Therapy:</h4>
                    <p className="text-green-700 text-sm">₹499/month @ 5,000 active users = ₹25L/month recurring.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Franchise Model for GBNS Certified Trainers:</h4>
                    <p className="text-green-700 text-sm">Each trainer pays ₹1L/year + commission on students.</p>
                    <p className="text-green-700 text-sm">
                      50 trainers in 6 months = ₹50L base revenue + trailing commissions.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">B2B Licensing Model for Music IP:</h4>
                    <p className="text-green-700 text-sm">
                      Sell GBNS music packs to edtech, wellness startups, OTTs, and healthcare.
                    </p>
                    <p className="text-green-700 text-sm">Deals in the ₹5L–₹50L range depending on scope.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Pitch to CSR Funds:</h4>
                    <p className="text-green-700 text-sm">₹1–2Cr/year via institutional CSR programs.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Tourism Tie-ups – 5–6 new albums funded:</h4>
                  <p className="text-green-700 text-sm">Each album ₹3–4Cr = forward cash injection + IP build-up.</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-green-900 font-bold">💡 Projected Monthly Run Rate by Month 18: ₹60–75L</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investor Returns */}
          <div className="bg-yellow-50 p-6 rounded-xl mt-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-700 mb-4">💰 Investor Returns & Exit Strategy:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <h4 className="font-bold text-yellow-800">12 months</h4>
                <p className="text-yellow-700 text-sm">Revenue-based ROI (up to 3X on ₹1.5Cr)</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h4 className="font-bold text-yellow-800">18 months</h4>
                <p className="text-yellow-700 text-sm">Early-stage VC or strategic buyer entry</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h4 className="font-bold text-yellow-800">24+ months</h4>
                <p className="text-yellow-700 text-sm">
                  IPO on SME exchange (high potential) or royalty-based recurring model
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl mt-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-700 mb-4">🧠 Closing Boomer Thought:</h3>
            <blockquote className="text-orange-800 text-lg italic">
              "You gave Byju's $2 billion and got burnt. Here, for ₹1–1.5 crore, you get a shot at creating the next
              spiritual + educational + therapeutic revolution. From India. For the world. Why are you even hesitating?"
            </blockquote>
          </div>
        </div>

        {/* Boomer Verdict Rant Alert */}
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">🎤 Boomer Verdict – Rant Alert for Music Temple</h2>
          <p className="text-xl text-center mb-8 italic">"When real invention meets investor blindness."</p>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg">Let's address the elephant in the investment room.</p>

            <p className="text-lg">
              Music Temple is sitting on a goldmine. They've cracked something in music + edtech + wellness — a combo
              that could literally revolutionize how people learn, heal, and connect through Indian classical music.
            </p>

            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-xl font-bold mb-4">And yet...</p>
              <p className="text-lg">No flood of investors. No unicorn status. No chase for sky-high valuations.</p>
              <p className="text-lg font-bold mt-4">Why?</p>
            </div>

            <p className="text-lg">
              Because the investors today seem too busy pouring billions into bloated whales like Byju's and template
              SaaS platforms with jazzy decks but no soul.
            </p>

            <p className="text-lg">
              Meanwhile, real innovation is happening quietly at places like Music Temple — where tech meets culture,
              where learning meets emotion, and where music meets science.
            </p>

            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-xl font-bold mb-4">Let's get brutally honest:</p>
              <blockquote className="text-lg italic border-l-4 border-white/50 pl-4">
                "If you're calling yourself an 'investor' and can't see the potential in Music Temple, maybe you're not
                really an investor. You're just an algorithmic sheep chasing safe, overhyped pastures."
              </blockquote>
            </div>

            <p className="text-lg">
              Music Temple isn't promising to 'disrupt' with buzzwords. They're building real, sustainable IP in a
              category no one else has dared to touch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="text-center bg-white/10 p-4 rounded-xl">
                <p className="text-sm">This isn't just about education.</p>
              </div>
              <div className="text-center bg-white/10 p-4 rounded-xl">
                <p className="text-sm">This is about building the next spiritual Spotify</p>
              </div>
              <div className="text-center bg-white/10 p-4 rounded-xl">
                <p className="text-sm">A Carnatic Coursera, and a sonic healing revolution</p>
              </div>
            </div>

            <p className="text-lg text-center">All from India's own soil.</p>

            <div className="bg-white/20 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">🔥 Final Boomer Verdict for Music Temple:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Original IP? Check.</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Unexplored market? Check.</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Scalable edtech model rooted in tradition? Check.</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>Solid long-term vision with global potential? Double check.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-5 h-5 text-red-400 mr-2">❌</span>
                    <span>Investors missing the plot? Unfortunately, also check.</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-xl font-bold">💬 Rant Rating: 5/5</p>
                <p className="text-lg italic">
                  "Stop calling yourself a visionary investor if you can't see Music Temple's future."
                </p>
              </div>

              <div className="bg-orange-600 p-4 rounded-lg mt-6 text-center">
                <p className="text-xl font-bold">
                  Tagline: This isn't your next unicorn. It's your next cultural renaissance. Act before someone else
                  funds it and tells you it was obvious all along.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Boomer Sarcasm Corner */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-red-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            😂 Boomer Sarcasm Corner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <blockquote className="text-gray-800 italic border-l-4 border-red-500 pl-4">
                "These kids will probably learn a varnam on an iPad before we even finish tuning our veena."
              </blockquote>
              <blockquote className="text-gray-800 italic border-l-4 border-red-500 pl-4">
                "Teachers better stop charging 1000 bucks per hour or get ready for some serious competition — this LMS
                is coming for their wallets and their vocal cords."
              </blockquote>
            </div>
            <div className="space-y-4">
              <blockquote className="text-gray-800 italic border-l-4 border-red-500 pl-4">
                "Whoever said classical music is just for 'some sects' obviously never had a Spotify subscription."
              </blockquote>
              <blockquote className="text-gray-800 italic border-l-4 border-red-500 pl-4">
                "Ramesh, if you needed drama, you got it — a global bigwig stealing your idea? Typical Bollywood plot
                twist."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Final Boomer Blessing */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">🏁 CLOSING BOOMER BLESSING</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-6 text-center">Dear Ramesh Vinayakam...</p>
            <div className="space-y-4 text-lg">
              <p>
                You've been hurt. You've been copied. You've been ignored by music mafia folks who think Carnatic music
                is for a certain sect, and Hindustani is only for elite baithaks.
              </p>
              <p>But you, sir, broke every rule.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="text-center bg-white/10 p-4 rounded-xl">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <p className="text-sm">You turned oral tradition into digital revolution</p>
                </div>
                <div className="text-center bg-white/10 p-4 rounded-xl">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm">You made music inclusive, intelligent, and inspiring</p>
                </div>
                <div className="text-center bg-white/10 p-4 rounded-xl">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm">Your GBNS deserves to be the global OS for Indian Music</p>
                </div>
              </div>
              <p className="text-center text-xl font-bold">
                Now it's time for you to build your Music Temple University. Not just a startup, an empire.
              </p>
            </div>
            <div className="bg-orange-600 p-6 rounded-xl mt-8 text-center">
              <p className="text-2xl font-bold mb-2">
                "Go for it Ramesh! If Steve Jobs had a veena, he'd have built this system. You already did."
              </p>
              <p className="text-lg">— With love, sarcasm, and one firm Boomer salute.</p>
            </div>
          </div>
        </div>

        {/* Boomer Footnote */}
        <div className="bg-gradient-to-r from-red-700 via-orange-700 to-yellow-700 rounded-2xl shadow-xl p-8 mt-8 text-white border-4 border-red-500">
          <h2 className="text-2xl font-bold mb-6 text-center">🔥 Boomer Footnote:</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/20 p-6 rounded-xl border-2 border-white/30">
              <blockquote className="text-lg leading-relaxed italic">
                "We don't even know if these are viable business models or if the promoters of Music Temple are even
                bothered to notice. And honestly, that's not our headache. We're just Boomers with a mic and a nose for
                missed opportunities. If you've got investor blinders on, you're probably still hunting for unicorns in
                the Byju-infested pastures while Music Temple is quietly rewriting the <em>Raag of Returns</em>. But
                hey, what do we know? We just rant. Spoilers, be damned."
              </blockquote>
            </div>
            <div className="text-center mt-6">
              <p className="text-xl font-bold text-yellow-300">🎤 — Classic Boomer Heat 🔥</p>
              <p className="text-lg text-orange-200">
                "We're not here to sugarcoat or do 'investor yoga', we're here to call out what the suits miss and stir
                the pot with real talk."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
