import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Eye, Lock, UserCheck, Database, Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | GrowMoreEngine™ - Boomer Reviews You Can Trust",
  description:
    "Our privacy policy explains how we handle your data with the same integrity we bring to our reviews. No BS, just straight talk about your privacy rights.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Shield className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-xl opacity-90">Protecting Your Privacy Like We Protect Our Integrity</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-lg">
              <strong>Last Updated:</strong> December 2024 | <strong>Effective:</strong> Since Day One
            </p>
            <p className="mt-2">
              {
                "We're boomers who believe in doing business the right way. Your privacy matters to us as much as honest reviews matter to you."
              }
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <UserCheck className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Privacy Promise</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              At GrowMoreEngine™, we operate with the same principles our generation was raised on:
              <strong> honesty, integrity, and respect</strong>. This privacy policy explains how we collect, use, and
              protect your personal information when you visit our website or interact with our services.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
              <p className="text-orange-800 font-medium">
                <strong>Boomer Promise:</strong> We don't sell your data, we don't spam you, and we don't play games
                with your privacy. Period.
              </p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Contact Information:</strong> Name, email address, phone number when you contact us
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Product Submissions:</strong> Company details, product information when you submit for
                    review
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Comments & Feedback:</strong> Your thoughts on our reviews and suggestions
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Automatically Collect</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Usage Data:</strong> Pages visited, time spent, referring websites
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Device Information:</strong> Browser type, operating system, IP address
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Cookies:</strong> Small files to improve your browsing experience
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Primary Uses</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Respond to your inquiries and requests</li>
                <li>✅ Process product submissions for review</li>
                <li>✅ Improve our website and user experience</li>
                <li>✅ Send important updates about our services</li>
                <li>✅ Analyze website traffic and performance</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">What We DON'T Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li>❌ Sell your personal information</li>
                <li>❌ Share data with advertisers</li>
                <li>❌ Send spam or unwanted marketing</li>
                <li>❌ Track you across other websites</li>
                <li>❌ Use your data for affiliate schemes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">How We Protect Your Data</h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Technical Safeguards</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure hosting infrastructure</li>
                  <li>• Regular security updates and patches</li>
                  <li>• Access controls and authentication</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Operational Safeguards</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Limited access to personal data</li>
                  <li>• Regular data backup procedures</li>
                  <li>• Employee privacy training</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-700">You have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>
                  📧 <strong>Access:</strong> Request copies of your personal data
                </li>
                <li>
                  ✏️ <strong>Correct:</strong> Update or correct inaccurate information
                </li>
                <li>
                  🗑️ <strong>Delete:</strong> Request deletion of your personal data
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>
                  🚫 <strong>Object:</strong> Opt-out of certain data processing
                </li>
                <li>
                  📤 <strong>Portability:</strong> Receive your data in a portable format
                </li>
                <li>
                  ⏸️ <strong>Restrict:</strong> Limit how we process your data
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Questions About Your Privacy?</h2>
          <p className="text-lg mb-6">
            {"We're here to help! Contact our privacy team with any questions or concerns."}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>privacy@growmoreengine.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+91-PRIVACY-HELP</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>India</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm opacity-90">
              <strong>Response Time:</strong> We respond to all privacy requests within 72 hours. Because your privacy
              deserves prompt attention, not corporate delays.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
