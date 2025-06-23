"use client"

import type React from "react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  BarChart3,
  PenTool,
  Video,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Smartphone,
  Monitor,
  Code,
  LinkIcon,
  ShoppingBag,
  FileText,
  Music,
  ImageIcon,
  Lock,
  Unlock,
  Building2,
  Phone,
  MapPin,
  Crown,
  Shield,
} from "lucide-react"
import { useState } from "react"

export default function StartHubMediaPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    founderName: "",
    platformAdmin: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    companyNature: "",
    employeeCount: "",
    email: "",
    website: "",
    contactNumber: "",
    subscriptionPlan: "",
    selectedHubs: [],
    businessGoals: "",
    currentChallenges: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  })

  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleHubSelection = (hubId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      selectedHubs: checked ? [...prev.selectedHubs, hubId] : prev.selectedHubs.filter((id) => id !== hubId),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for signing up! We will contact you within 24 hours to set up your StartHub Media dashboard.")
  }

  const hubs = [
    {
      id: 1,
      name: "HRHub",
      icon: <Users className="w-8 h-8" />,
      description: "Human resources content management that simplifies recruitment, training, and employee engagement",
      features: [
        "Employee onboarding materials",
        "Training documentation & videos",
        "Company policy templates",
        "Performance review frameworks",
        "Team building resources",
      ],
      boomerTruth: "HR content that actually helps you hire and keep good people, not just tick compliance boxes.",
    },
    {
      id: 2,
      name: "FinHub",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Financial content management for clear reporting, investor relations, and financial education",
      features: [
        "Financial report templates",
        "Investor presentation builders",
        "Budget planning resources",
        "Financial literacy training",
        "Tax documentation guides",
      ],
      boomerTruth: "Financial content that makes sense to normal humans, not just accountants with three PhDs.",
    },
    {
      id: 3,
      name: "TechHub",
      icon: <Code className="w-8 h-8" />,
      description: "Technical content management for product documentation, support, and knowledge bases",
      features: [
        "Product documentation templates",
        "Technical support resources",
        "API documentation tools",
        "Software release notes",
        "Technical training materials",
      ],
      boomerTruth: "Tech documentation that users can actually understand without needing to be a programmer.",
    },
    {
      id: 4,
      name: "SalesHub",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Sales content management for proposals, presentations, and customer relationship materials",
      features: [
        "Sales proposal templates",
        "Product presentation builders",
        "Customer testimonial management",
        "Sales training resources",
        "CRM content integration",
      ],
      boomerTruth: "Sales materials that help close deals, not just look pretty in a PowerPoint nobody reads.",
    },
    {
      id: 5,
      name: "MarketingHub",
      icon: <PenTool className="w-8 h-8" />,
      description: "Marketing content management for campaigns, social media, and brand consistency",
      features: [
        "Campaign planning tools",
        "Social media content calendars",
        "Brand asset management",
        "Email marketing templates",
        "Content performance analytics",
      ],
      boomerTruth:
        "Marketing content that generates actual leads and sales, not just likes from bots in foreign countries.",
    },
    {
      id: 6,
      name: "RetailHub",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "Retail content management for product catalogs, promotions, and in-store materials",
      features: [
        "Product catalog management",
        "Promotional material templates",
        "In-store signage creator",
        "Loyalty program content",
        "Seasonal campaign resources",
      ],
      boomerTruth:
        "Retail materials that help sell products, not just look good on a shelf while nobody buys anything.",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      description: "Consistent pricing across all 6 hubs",
      features: [
        "Access to 2 hubs of your choice",
        "All content formats supported",
        "Basic embedding options",
        "5 team members",
        "Email support",
        "Public & private content options",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹7,999",
      period: "/month",
      description: "Consistent pricing across all 6 hubs",
      features: [
        "Access to 4 hubs of your choice",
        "All content formats supported",
        "Advanced embedding options",
        "15 team members",
        "Priority support + phone calls",
        "Public & private content options",
        "Custom branding options",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹19,999",
      period: "/month",
      description: "Consistent pricing across all 6 hubs",
      features: [
        "Access to all 6 hubs",
        "All content formats supported",
        "Premium embedding suite",
        "Unlimited team members",
        "Dedicated account manager",
        "Public & private content options",
        "White-label options",
        "Custom integrations",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src="/images/starthub-logo.png"
                alt="StartHub Media Logo"
                width={120}
                height={120}
                className="shadow-2xl rounded-2xl"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl blur opacity-30"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              StartHub Media
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mb-4 font-medium">Content Management Platform That Actually Works</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Six integrated hubs that handle everything from content creation to analytics. Built by people who
            understand business, not just technology. Embed our tools directly into your website and social platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl text-lg px-8 py-4"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-4"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* The Boomer Truth */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🧓 The Boomer Truth About Content Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="font-semibold text-green-700 mb-4 text-lg">What We Believe</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Content should solve problems, not create them</li>
                <li>• Analytics should be understandable by humans</li>
                <li>• Tools should work for your business, not against it</li>
                <li>• Integration should be simple, not rocket science</li>
                <li>• Support should come from people who know stuff</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <h3 className="font-semibold text-red-700 mb-4 text-lg">What We Don't Do</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Overpromise and underdeliver</li>
                <li>• Create dependency on trendy features</li>
                <li>• Hide important features behind paywalls</li>
                <li>• Make you learn 47 different interfaces</li>
                <li>• Charge extra for basic human support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 6 Hubs */}
        <div id="hubs" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              The 6 Content Hubs
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each hub is designed to solve real business problems. No fluff, no unnecessary complexity, just tools that
            help you create, manage, and measure content that actually works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hubs.map((hub) => (
              <Card key={hub.id} className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white">
                      {hub.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{hub.name}</CardTitle>
                      <Badge variant="outline" className="border-orange-500 text-orange-700 mt-1">
                        Hub {hub.id}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base">{hub.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {hub.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <p className="text-sm text-gray-700 italic">
                        <strong>Boomer Truth:</strong> {hub.boomerTruth}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Formats */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Multi-Format Content Creation
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Create and manage content in all major formats across every hub. Consistent pricing means you don't pay
            extra for different content types.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white">
                    <Video className="w-6 h-6" />
                  </div>
                  <CardTitle>Video Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create, edit, and manage video content for training, marketing, and more.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• Product demonstrations</p>
                  <p>• Training videos</p>
                  <p>• Customer testimonials</p>
                  <p>• Promotional content</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                    <Music className="w-6 h-6" />
                  </div>
                  <CardTitle>Audio Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Produce and distribute audio content for podcasts, training, and announcements.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• Podcast episodes</p>
                  <p>• Audio training</p>
                  <p>• Voice announcements</p>
                  <p>• Audio branding</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <CardTitle>Image Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Design and manage visual content for all your business needs.</p>
                <div className="text-sm text-gray-500">
                  <p>• Infographics</p>
                  <p>• Product photography</p>
                  <p>• Social media graphics</p>
                  <p>• Presentation visuals</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white">
                    <FileText className="w-6 h-6" />
                  </div>
                  <CardTitle>PDF Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Create and manage professional documents for every department.</p>
                <div className="text-sm text-gray-500">
                  <p>• White papers</p>
                  <p>• Product catalogs</p>
                  <p>• Financial reports</p>
                  <p>• Training manuals</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Website Integration & Embedding */}
        <div id="embedding" className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <Globe className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Seamless Website & Social Integration</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Embed StartHub Media tools directly into your website and social platforms. Your content, your brand,
                your control - but with our powerful backend doing the heavy lifting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Monitor className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Website Integration</h3>
                <p className="text-sm opacity-90">
                  Embed content widgets, forms, and analytics directly into your website. One line of code, unlimited
                  possibilities.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Smartphone className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Social Platforms</h3>
                <p className="text-sm opacity-90">
                  Connect your social media accounts and manage everything from one dashboard. Post, schedule, and
                  analyze across all platforms.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Code className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">API Access</h3>
                <p className="text-sm opacity-90">
                  Full API access for custom integrations. Build exactly what you need with our robust backend
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div id="pricing" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Honest Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            No hidden fees, no surprise charges, no "contact us for pricing" nonsense. Pick what works for your business
            and scale as you grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-2 border-orange-500 shadow-xl" : "border-2 hover:border-orange-200"} transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1 my-4">
                    <span className="text-4xl font-bold text-orange-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToForm}
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                        : "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Start {plan.name} Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why It Makes a Difference */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Why StartHub Media Makes a Real Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                For Your Business Growth
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Unified Strategy:</strong> All your content efforts work together instead of competing
                    against each other
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Real ROI Tracking:</strong> See exactly which content drives sales, not just vanity metrics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Time Savings:</strong> Manage everything from one dashboard instead of juggling 15 different
                    tools
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Professional Results:</strong> Content that looks and performs like you hired an expensive
                    agency
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                For Your Customers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Consistent Experience:</strong> Your brand voice and message stay consistent across all
                    touchpoints
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Relevant Content:</strong> They see content that actually helps them solve problems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Better Support:</strong> Integrated help systems and knowledge bases that actually work
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Trust Building:</strong> Professional, reliable content that builds confidence in your brand
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Embedding Examples */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <LinkIcon className="w-8 h-8 inline-block mr-2" />
            Embed Your Content Anywhere
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Website Integration</h3>
              <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400">{"<!-- Add to your website -->"}</div>
                <div className="text-blue-400">{'<script src="https://starthub.media/embed.js"></script>'}</div>
                <div className="text-yellow-400">
                  {'<div data-starthub="content" data-hub="hrhub" data-id="12345"></div>'}
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Embed any content you create directly into your website with a simple code snippet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Social Platform Integration</h3>
              <div className="space-y-2">
                <div className="bg-gray-800 rounded-lg p-3 text-sm">
                  <span className="text-blue-400">Facebook:</span>{" "}
                  <span className="text-gray-300">Share content directly to your page</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-sm">
                  <span className="text-pink-400">Instagram:</span>{" "}
                  <span className="text-gray-300">Post images and videos seamlessly</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-sm">
                  <span className="text-blue-300">LinkedIn:</span>{" "}
                  <span className="text-gray-300">Share professional content and documents</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-sm">
                  <span className="text-red-400">YouTube:</span>{" "}
                  <span className="text-gray-300">Upload and manage videos directly</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Unlock className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-400">Public Content</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Content that's available for anyone to view. Perfect for marketing materials, public announcements, and
                promotional content.
              </p>
              <div className="text-sm text-gray-400">
                <p>• Easily shareable across platforms</p>
                <p>• Indexed by search engines</p>
                <p>• Trackable engagement metrics</p>
                <p>• Embeddable on any website</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-semibold text-orange-400">Private Content</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Secure content that's only accessible to authorized users. Ideal for internal documentation, sensitive
                information, and premium content.
              </p>
              <div className="text-sm text-gray-400">
                <p>• Access control with user permissions</p>
                <p>• Password protection options</p>
                <p>• Secure embedding with authentication</p>
                <p>• Usage tracking and analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Generation Form */}
        <div id="signup-form" className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Start Your Content Generation Journey
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out this form to get started with your StartHub Media dashboard. We'll set up your account and
                provide you with comprehensive analytics and SaaS dashboard access within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-600" />
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyNature">Nature of Company *</Label>
                    <Select onValueChange={(value) => handleInputChange("companyNature", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="employeeCount">Number of Employees *</Label>
                    <Select onValueChange={(value) => handleInputChange("employeeCount", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employee count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://www.yourcompany.com"
                      type="url"
                    />
                  </div>
                </div>
              </div>

              {/* Leadership Information */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-blue-600" />
                  Leadership Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="founderName">Founder / MD / CEO Name *</Label>
                    <Input
                      id="founderName"
                      value={formData.founderName}
                      onChange={(e) => handleInputChange("founderName", e.target.value)}
                      placeholder="Enter founder/CEO name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="platformAdmin">Platform Admin Name *</Label>
                    <Input
                      id="platformAdmin"
                      value={formData.platformAdmin}
                      onChange={(e) => handleInputChange("platformAdmin", e.target.value)}
                      placeholder="Enter platform admin name"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-600" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="admin@yourcompany.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactNumber">Contact Number *</Label>
                    <Input
                      id="contactNumber"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  Address Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter your complete business address"
                      rows={3}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="City"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="State"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        placeholder="Pincode"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        placeholder="India"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription Plan */}
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-600" />
                  Subscription Plan
                </h3>
                <div>
                  <Label htmlFor="subscriptionPlan">Choose Your Plan *</Label>
                  <Select onValueChange={(value) => handleInputChange("subscriptionPlan", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subscription plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter - ₹2,999/month</SelectItem>
                      <SelectItem value="professional">Professional - ₹7,999/month (Most Popular)</SelectItem>
                      <SelectItem value="enterprise">Enterprise - ₹19,999/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Hub Selection */}
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4">Select Your Hubs</h3>
                <p className="text-gray-600 mb-4">Choose the hubs you want to start with (you can add more later):</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hubs.map((hub) => (
                    <div key={hub.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`hub-${hub.id}`}
                        checked={formData.selectedHubs.includes(hub.id.toString())}
                        onCheckedChange={(checked) => handleHubSelection(hub.id.toString(), checked)}
                      />
                      <Label htmlFor={`hub-${hub.id}`} className="text-sm font-medium">
                        {hub.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Goals */}
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-4">Business Goals & Challenges</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="businessGoals">What are your main business goals for content management?</Label>
                    <Textarea
                      id="businessGoals"
                      value={formData.businessGoals}
                      onChange={(e) => handleInputChange("businessGoals", e.target.value)}
                      placeholder="e.g., Improve brand consistency, increase lead generation, streamline internal communications..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentChallenges">What are your current content management challenges?</Label>
                    <Textarea
                      id="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                      placeholder="e.g., Scattered content across multiple platforms, inconsistent messaging, time-consuming manual processes..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                    required
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the{" "}
                    <a href="/terms" className="text-orange-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-orange-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    *
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToMarketing"
                    checked={formData.agreeToMarketing}
                    onCheckedChange={(checked) => handleInputChange("agreeToMarketing", checked)}
                  />
                  <Label htmlFor="agreeToMarketing" className="text-sm">
                    I agree to receive marketing communications and updates about StartHub Media
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl text-lg px-12 py-4"
                >
                  Launch My StartHub Media Dashboard
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  🚀 Your dashboard will be ready within 24 hours with full analytics and SaaS features
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Ready to Stop Wrestling with Content?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who've ditched the content chaos for a system that actually works. 30-day free
            trial, no credit card required, no BS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl text-lg px-8 py-4"
            >
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-4"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Questions? Call us at +919566075910. Real humans answer the phone.
          </p>
        </div>
      </div>
    </div>
  )
}
