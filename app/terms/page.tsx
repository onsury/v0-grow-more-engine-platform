import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Scale, Shield, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | GrowMoreEngine™ - Boomer Reviews You Can Trust",
  description:
    "Our terms of service explained in plain English. No legal jargon, just honest terms for using our authentic product review platform.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Terms of Service</h1>
              <p className="text-xl opacity-90">Plain English Rules for Using Our Platform</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-lg">
              <strong>Last Updated:</strong> December 2024 | <strong>Effective:</strong> Since Launch
            </p>
            <p className="mt-2">
              {"No legal mumbo-jumbo here. Just straightforward terms that make sense to real people."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Welcome to GrowMoreEngine™</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, you agree to these terms. We've written them in plain English because
              we believe in transparency, not legal confusion.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
              <p className="text-orange-800 font-medium">
                <strong>Boomer Philosophy:</strong> These terms are based on common sense and mutual respect. Treat our
                platform well, and we'll treat you well.
              </p>
            </div>
          </div>
        </div>

        {/* What We Provide */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">What We Provide</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Services Include</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Authentic Product Reviews:</strong> Honest, unbiased reviews from experienced reviewers
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Company Profiles:</strong> Detailed information about businesses and their founders
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Product Comparisons:</strong> Side-by-side analysis to help your decisions
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Educational Content:</strong> Insights and wisdom from decades of experience
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Our Promise to You</h4>
              <p className="text-green-700">
                We provide all content free of charge, with no affiliate links, no sponsored content disguised as
                reviews, and no hidden agendas. Just honest opinions from people who've been around long enough to know
                quality.
              </p>
            </div>
          </div>
        </div>

        {/* Your Responsibilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Your Responsibilities</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Expect From You</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">✅ Please Do</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use our content for personal decision-making</li>
                    <li>• Share our reviews with friends and family</li>
                    <li>• Provide honest feedback about our content</li>
                    <li>• Submit legitimate products for review</li>
                    <li>• Respect our intellectual property</li>
                    <li>• Follow basic internet etiquette</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">❌ Please Don't</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Copy our content without permission</li>
                    <li>• Use our platform for spam or scams</li>
                    <li>• Submit false or misleading information</li>
                    <li>• Attempt to hack or disrupt our services</li>
                    <li>• Harass our team or other users</li>
                    <li>• Use our content for commercial purposes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content and Reviews */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Content and Reviews</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Review Standards</h3>
              <p className="text-blue-700">
                All reviews are based on our genuine experience and research. We don't accept payment for positive
                reviews, and we don't let companies influence our opinions. Our "boomer perspective" means we value
                durability, value-for-money, and honest business practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What Our Reviews Include</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Honest pros and cons</li>
                  <li>• Value-for-money assessment</li>
                  <li>• Long-term durability insights</li>
                  <li>• Company background research</li>
                  <li>• Comparison with alternatives</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Important Disclaimers</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Reviews reflect our personal opinions</li>
                  <li>• Your experience may vary</li>
                  <li>• We're not liable for purchase decisions</li>
                  <li>• Product specifications may change</li>
                  <li>• Always verify current pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Limitations and Disclaimers */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Important Limitations</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Service Availability</h3>
              <p className="text-yellow-700">
                We strive to keep our website available 24/7, but we can't guarantee uninterrupted service. Maintenance,
                updates, or technical issues may occasionally cause temporary downtime.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">Limitation of Liability</h3>
              <p className="text-red-700">
                Our reviews are opinions based on our experience. We're not responsible for your purchase decisions or
                any issues you may have with products or companies we review. Always do your own research too!
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <h3 className="font-semibold text-gray-800 mb-2">External Links</h3>
              <p className="text-gray-700">
                We may link to company websites and product pages for your convenience. We're not responsible for the
                content, privacy practices, or policies of these external sites.
              </p>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to These Terms</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We may update these terms occasionally to reflect changes in our services or legal requirements. When we
              do:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ We'll update the "Last Updated" date at the top</li>
              <li>✅ We'll notify users of significant changes via email or website notice</li>
              <li>✅ Continued use of our services means you accept the updated terms</li>
              <li>✅ We'll always explain changes in plain English</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Questions About These Terms?</h2>
          <p className="text-lg mb-6">
            {"We believe in clear communication. If anything in these terms confuses you, just ask!"}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Get in Touch</h3>
              <div className="space-y-2">
                <p>📧 legal@growmoreengine.com</p>
                <p>📞 +91-TERMS-HELP</p>
                <p>📍 India</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Our Commitment</h3>
              <p className="text-sm opacity-90">
                We respond to all legal and terms-related questions within 48 hours. No automated responses, no legal
                runaround - just straight answers from real people.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center space-x-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/privacy"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
