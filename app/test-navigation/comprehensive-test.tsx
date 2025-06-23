"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, AlertTriangle, ExternalLink, Smartphone, Monitor, Wifi, WifiOff } from "lucide-react"

export function ComprehensiveTest() {
  const [testResults, setTestResults] = useState<Record<string, "pass" | "fail" | "pending">>({})
  const [isOnline, setIsOnline] = useState(true)
  const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("desktop")

  useEffect(() => {
    // Detect device type
    const checkDevice = () => {
      setDeviceType(window.innerWidth < 768 ? "mobile" : "desktop")
    }

    // Check online status
    const checkOnline = () => {
      setIsOnline(navigator.onLine)
    }

    checkDevice()
    checkOnline()

    window.addEventListener("resize", checkDevice)
    window.addEventListener("online", checkOnline)
    window.addEventListener("offline", checkOnline)

    return () => {
      window.removeEventListener("resize", checkDevice)
      window.removeEventListener("online", checkOnline)
      window.removeEventListener("offline", checkOnline)
    }
  }, [])

  const updateTestResult = (testId: string, result: "pass" | "fail") => {
    setTestResults((prev) => ({ ...prev, [testId]: result }))
  }

  const criticalTests = [
    {
      id: "homepage",
      name: "Homepage Loads",
      url: "/",
      description: "Main homepage loads without errors",
      category: "critical",
    },
    {
      id: "navigation-mobile",
      name: "Mobile Navigation",
      url: "/",
      description: "Mobile menu opens and closes properly",
      category: "critical",
    },
    {
      id: "starthub-platform",
      name: "StartHub Media Platform",
      url: "/starthub-media",
      description: "Main platform page loads",
      category: "critical",
    },
    {
      id: "login-page",
      name: "Login Page",
      url: "/starthub-media/login",
      description: "Login form displays correctly",
      category: "critical",
    },
    {
      id: "companies-list",
      name: "Companies List",
      url: "/companies",
      description: "All companies display with images",
      category: "critical",
    },
    {
      id: "products-list",
      name: "Products List",
      url: "/products",
      description: "All products display correctly",
      category: "critical",
    },
  ]

  const hubTests = [
    {
      id: "hrhub",
      name: "HR Hub",
      url: "/content-hubs/hrhub",
      description: "HR Hub loads with company content",
      category: "hub",
    },
    {
      id: "techhub",
      name: "Tech Hub",
      url: "/content-hubs/techhub",
      description: "Tech Hub loads with K7 Computing content",
      category: "hub",
    },
    {
      id: "finhub",
      name: "Finance Hub",
      url: "/content-hubs/finhub",
      description: "Finance Hub loads with Milky Mist IPO content",
      category: "hub",
    },
    {
      id: "marketinghub",
      name: "Marketing Hub",
      url: "/content-hubs/marketinghub",
      description: "Marketing Hub loads with brand content",
      category: "hub",
    },
    {
      id: "saleshub",
      name: "Sales Hub",
      url: "/content-hubs/saleshub",
      description: "Sales Hub loads with sales strategies",
      category: "hub",
    },
    {
      id: "retailhub",
      name: "Retail Hub",
      url: "/content-hubs/retailhub",
      description: "Retail Hub loads with retail insights",
      category: "hub",
    },
  ]

  const companyTests = [
    {
      id: "k7-computing",
      name: "K7 Computing",
      url: "/companies/k7-computing",
      description: "K7 Computing page with products and founder info",
      category: "company",
    },
    {
      id: "jammi-ayurveda",
      name: "Jammi Ayurveda",
      url: "/companies/jammi",
      description: "Jammi Ayurveda page with product lineup",
      category: "company",
    },
    {
      id: "milky-mist",
      name: "Milky Mist",
      url: "/companies/milky-mist",
      description: "Milky Mist page with IPO tracker link",
      category: "company",
    },
    {
      id: "milky-mist-ipo",
      name: "Milky Mist IPO Tracker",
      url: "/companies/milky-mist/ipo-tracker",
      description: "IPO tracking page with financial data",
      category: "company",
    },
  ]

  const dashboardTests = [
    {
      id: "starthub-dashboard",
      name: "StartHub Dashboard",
      url: "/starthub-media/dashboard",
      description: "Main dashboard loads (may require login)",
      category: "dashboard",
    },
    {
      id: "user-management",
      name: "User Management",
      url: "/starthub-media/dashboard/users",
      description: "User management interface",
      category: "dashboard",
    },
    {
      id: "user-dashboard",
      name: "User Dashboard",
      url: "/dashboard",
      description: "Personal user dashboard",
      category: "dashboard",
    },
  ]

  const TestSection = ({ tests, title }: { tests: any[]; title: string }) => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <Badge variant="outline">
            {tests.filter((test) => testResults[test.id] === "pass").length} / {tests.length} passed
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tests.map((test) => (
            <div key={test.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                {testResults[test.id] === "pass" ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : testResults[test.id] === "fail" ? (
                  <XCircle className="w-5 h-5 text-red-500" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                )}
                <div>
                  <div className="font-medium">{test.name}</div>
                  <div className="text-sm text-gray-600">{test.description}</div>
                  <div className="text-xs text-gray-500 font-mono">{test.url}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateTestResult(test.id, "pass")}
                  className="text-green-600 hover:bg-green-50"
                >
                  ✓ Pass
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateTestResult(test.id, "fail")}
                  className="text-red-600 hover:bg-red-50"
                >
                  ✗ Fail
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href={test.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Status Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">MVP Launch Readiness Test</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {isOnline ? <Wifi className="w-5 h-5 text-green-500" /> : <WifiOff className="w-5 h-5 text-red-500" />}
              <span className="text-sm">{isOnline ? "Online" : "Offline"}</span>
            </div>
            <div className="flex items-center gap-2">
              {deviceType === "mobile" ? (
                <Smartphone className="w-5 h-5 text-blue-500" />
              ) : (
                <Monitor className="w-5 h-5 text-blue-500" />
              )}
              <span className="text-sm capitalize">{deviceType}</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-2">Testing Instructions:</h2>
          <ol className="text-sm text-yellow-700 space-y-1">
            <li>1. Click the external link icon to open each page in a new tab</li>
            <li>2. Verify the page loads without errors (no 404, no broken images)</li>
            <li>3. Check that content displays correctly and makes sense</li>
            <li>4. Test on both mobile and desktop (resize your browser)</li>
            <li>5. Mark each test as Pass ✓ or Fail ✗ based on your findings</li>
          </ol>
        </div>
      </div>

      <Tabs defaultValue="critical" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="critical">Critical Tests</TabsTrigger>
          <TabsTrigger value="hubs">Content Hubs</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboards</TabsTrigger>
        </TabsList>

        <TabsContent value="critical">
          <TestSection tests={criticalTests} title="Critical Functionality" />
        </TabsContent>

        <TabsContent value="hubs">
          <TestSection tests={hubTests} title="Content Hubs" />
        </TabsContent>

        <TabsContent value="companies">
          <TestSection tests={companyTests} title="Company Pages" />
        </TabsContent>

        <TabsContent value="dashboard">
          <TestSection tests={dashboardTests} title="Dashboard Pages" />
        </TabsContent>
      </Tabs>

      {/* Summary */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Launch Readiness Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {Object.values(testResults).filter((r) => r === "pass").length}
              </div>
              <div className="text-sm text-green-700">Tests Passed</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">
                {Object.values(testResults).filter((r) => r === "fail").length}
              </div>
              <div className="text-sm text-red-700">Tests Failed</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {[...criticalTests, ...hubTests, ...companyTests, ...dashboardTests].length -
                  Object.keys(testResults).length}
              </div>
              <div className="text-sm text-yellow-700">Not Tested</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(
                  (Object.values(testResults).filter((r) => r === "pass").length /
                    [...criticalTests, ...hubTests, ...companyTests, ...dashboardTests].length) *
                    100,
                ) || 0}
                %
              </div>
              <div className="text-sm text-blue-700">Ready Score</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Launch Recommendation:</h3>
            <p className="text-sm text-gray-700">
              {Object.values(testResults).filter((r) => r === "pass").length >= criticalTests.length
                ? "🚀 Ready for soft launch! All critical tests should pass before going live."
                : "⚠️ Fix critical issues before launching. Focus on the 'Critical Tests' tab first."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
