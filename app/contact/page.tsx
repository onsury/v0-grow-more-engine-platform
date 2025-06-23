import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {
              "Got questions? Suggestions? Want to tell us we're wrong about something? We're all ears. Real people answer real emails here - no chatbots, no auto-responses, just honest communication."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-orange-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-orange-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what's on your mind. We appreciate honest feedback, even if it's criticism."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-700">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">hello@growmoreengine.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91-BOOMER-TALK</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">India (Where Wisdom Lives)</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-600 mr-3" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">24-48 hours (We're not robots)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boomer Communication Style */}
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-xl text-red-700">🧓 Boomer Communication Style</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-700">
                    <strong>We prefer:</strong> Direct, honest communication. Tell us exactly what you think.
                  </p>
                  <p className="text-gray-700">
                    <strong>We don't do:</strong> Corporate speak, buzzwords, or beating around the bush.
                  </p>
                  <p className="text-gray-700">
                    <strong>Response style:</strong> Straight talk, no fluff, practical solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Quick Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Product suggestions:</strong> We're always looking for new products to review.
                  </p>
                  <p className="text-gray-700">
                    <strong>Corrections:</strong> Found an error? Let us know, we'll fix it.
                  </p>
                  <p className="text-gray-700">
                    <strong>Partnerships:</strong> We don't do affiliate marketing, but we're open to honest
                    collaborations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Boomer Promise */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 mt-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Our Communication Promise</h2>
          <p className="text-xl mb-6 opacity-90">
            {
              "We read every email personally. No AI chatbots, no automated responses, no outsourced customer service. When you contact us, you're talking to the actual people who write the reviews."
            }
          </p>
          <p className="text-lg opacity-75">
            {
              "Expect honest, direct responses. We might not always tell you what you want to hear, but we'll always tell you what we actually think."
            }
          </p>
        </div>
      </div>
    </div>
  )
}
