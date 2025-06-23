import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, Send, AlertTriangle } from "lucide-react"

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Submit Product for Review
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {
              "Think you've got a product that can handle the boomer treatment? Submit it for review. Fair warning: we don't go easy on anyone, and we definitely don't accept payment for positive reviews."
            }
          </p>
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                What We Look For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Companies with at least 5+ years in business
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Products that solve real problems
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Transparent pricing and policies
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Genuine customer testimonials
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Indian companies preferred
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                What We Don't Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  MLM or pyramid scheme products
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Get-rich-quick schemes
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Miracle cure claims
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Cryptocurrency or NFT projects
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  Companies less than 2 years old
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Submission Form */}
        <Card className="border-2 border-orange-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Product Submission Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Company Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input id="company-name" placeholder="Your company name" required />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website *
                    </label>
                    <Input id="website" type="url" placeholder="https://yourcompany.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="years-in-business" className="block text-sm font-medium text-gray-700 mb-2">
                      Years in Business *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10-25">10-25 years</SelectItem>
                        <SelectItem value="25+">25+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare/Ayurveda</SelectItem>
                        <SelectItem value="technology">Technology/Software</SelectItem>
                        <SelectItem value="food">Food/Organic</SelectItem>
                        <SelectItem value="education">Education/Creative</SelectItem>
                        <SelectItem value="cleantech">CleanTech/Environment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Product Information</h3>

                <div>
                  <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <Input id="product-name" placeholder="Name of the product you want reviewed" required />
                </div>

                <div>
                  <label htmlFor="product-category" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Category *
                  </label>
                  <Input id="product-category" placeholder="e.g., Antivirus Software, Organic Food, etc." required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                      Price (₹) *
                    </label>
                    <Input id="price" type="number" placeholder="Product price in rupees" required />
                  </div>
                  <div>
                    <label htmlFor="product-url" className="block text-sm font-medium text-gray-700 mb-2">
                      Product URL
                    </label>
                    <Input id="product-url" type="url" placeholder="Direct link to product page" />
                  </div>
                </div>

                <div>
                  <label htmlFor="product-description" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Description *
                  </label>
                  <Textarea
                    id="product-description"
                    placeholder="Describe what your product does, who it's for, and why it's worth reviewing. Be honest - we'll find out anyway."
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input id="contact-name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input id="contact-email" type="email" placeholder="your.email@company.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <Input id="role" placeholder="e.g., Founder, Marketing Manager, Product Manager" required />
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <Textarea
                  id="additional-info"
                  placeholder="Anything else you think we should know? Awards, certifications, unique selling points, etc."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit for Review
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="border-2 border-yellow-200 bg-yellow-50 mt-8">
          <CardHeader>
            <CardTitle className="text-yellow-700 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Review Process:</strong> We review submissions manually. Expect 2-4 weeks for initial response.
              </p>
              <p>
                <strong>No Guarantees:</strong> Submission doesn't guarantee a review. We're selective about what we
                cover.
              </p>
              <p>
                <strong>Honest Reviews Only:</strong> We don't accept payment for positive reviews. Our opinions can't
                be bought.
              </p>
              <p>
                <strong>Sample Required:</strong> If selected, we'll need a product sample for hands-on testing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
