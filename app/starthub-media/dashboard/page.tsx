"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  BarChart3,
  Upload,
  FileText,
  Settings,
  Users,
  Code,
  Copy,
  Check,
  PlusCircle,
  Trash2,
  Edit,
  Eye,
  Play,
  Search,
  Filter,
  ArrowUpRight,
  Calendar,
  DollarSign,
  BookOpen,
  Video,
  CreditCard,
  Globe,
  Home,
  LayoutDashboard,
  FolderOpen,
  TrendingUp,
  HelpCircle,
  FileCode,
} from "lucide-react"

export default function StartHubMediaDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [copied, setCopied] = useState(false)
  const [embedCode, setEmbedCode] = useState(
    '<iframe src="https://growmoreengine.com/embed/video/1" width="100%" height="400" frameborder="0" allowfullscreen></iframe>',
  )

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sidebarItems = [
    { id: "overview", label: "Platform Overview", icon: <Home className="w-4 h-4" />, href: "/starthub-media" },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
      href: "/starthub-media/dashboard",
    },
    { id: "content", label: "Content", icon: <FileText className="w-4 h-4" />, active: true },
    { id: "analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "content-hubs", label: "Content Hubs", icon: <FolderOpen className="w-4 h-4" />, href: "/content-hubs" },
    { id: "embed", label: "Website Integration", icon: <Code className="w-4 h-4" /> },
    { id: "users", label: "User Management", icon: <Users className="w-4 h-4" /> },
    {
      id: "pricing",
      label: "Pricing Plans",
      icon: <DollarSign className="w-4 h-4" />,
      href: "/starthub-media#pricing",
    },
    { id: "billing", label: "Billing", icon: <CreditCard className="w-4 h-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
    {
      id: "documentation",
      label: "Documentation",
      icon: <BookOpen className="w-4 h-4" />,
      href: "/starthub-media/documentation",
    },
    { id: "api", label: "API Reference", icon: <FileCode className="w-4 h-4" />, href: "/starthub-media/api" },
    { id: "videos", label: "Video Tutorials", icon: <Video className="w-4 h-4" />, href: "/starthub-media/videos" },
    { id: "support", label: "Support", icon: <HelpCircle className="w-4 h-4" />, href: "/contact" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/starthub-logo.png"
                alt="StartHub Media"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">StartHub Media Dashboard</h1>
                <p className="text-sm text-gray-600">Content management platform that actually works</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                <PlusCircle className="w-4 h-4 mr-2" />
                Create New
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-24">
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <div key={item.id}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                      >
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          activeTab === item.id || item.active
                            ? "text-orange-600 bg-orange-50"
                            : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                        }`}
                      >
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Button size="sm" className="w-full justify-start bg-orange-600 hover:bg-orange-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Content
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <Globe className="w-4 h-4 mr-2" />
                    Embed Widget
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Overview</CardTitle>
                    <CardDescription>
                      Welcome to StartHub Media - Your comprehensive content management solution
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Content Creation</h3>
                        <p className="text-sm text-gray-600">Create and manage content across all formats</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BarChart3 className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Analytics</h3>
                        <p className="text-sm text-gray-600">Track performance and engagement metrics</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Globe className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Integration</h3>
                        <p className="text-sm text-gray-600">Embed content anywhere on the web</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 text-orange-500" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">124</p>
                          <p className="text-sm text-gray-600">Total Content</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <Eye className="h-8 w-8 text-blue-500" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">45.2K</p>
                          <p className="text-sm text-gray-600">Total Views</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <Users className="h-8 w-8 text-green-500" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">15</p>
                          <p className="text-sm text-gray-600">Team Members</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <TrendingUp className="h-8 w-8 text-purple-500" />
                        <div className="ml-4">
                          <p className="text-2xl font-bold">+23%</p>
                          <p className="text-sm text-gray-600">Growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Content Tab */}
            {activeTab === "content" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input type="search" placeholder="Search content..." className="pl-8 w-[300px]" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Content
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Sample content cards */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge className="bg-blue-500">Video</Badge>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="text-lg">K7 Computing Interview</CardTitle>
                      <CardDescription>Cybersecurity insights with the founder</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="relative aspect-video rounded-md overflow-hidden mb-3">
                        <Image
                          src="/placeholder.svg?height=180&width=320"
                          alt="Video thumbnail"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/60 rounded-full p-2">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          24.5K views
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          May 15, 2023
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Add more content cards as needed */}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Overview</CardTitle>
                    <CardDescription>Track your content performance and engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold">124,582</div>
                          <p className="text-xs text-green-600 flex items-center">
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                            12% increase
                          </p>
                          <p className="text-sm text-gray-600">Total Views</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold">8,245 hrs</div>
                          <p className="text-xs text-green-600 flex items-center">
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                            8% increase
                          </p>
                          <p className="text-sm text-gray-600">Watch Time</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold">3,842</div>
                          <p className="text-xs text-green-600 flex items-center">
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                            15% increase
                          </p>
                          <p className="text-sm text-gray-600">Subscribers</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold">4.7%</div>
                          <p className="text-xs text-green-600 flex items-center">
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                            2% increase
                          </p>
                          <p className="text-sm text-gray-600">Engagement Rate</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md border">
                      <div className="text-center">
                        <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Analytics visualization would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Embed Tab */}
            {activeTab === "embed" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Website Integration</CardTitle>
                    <CardDescription>Embed your content anywhere on the web</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="content-type">Content Type</Label>
                      <Select defaultValue="video">
                        <SelectTrigger>
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                          <SelectItem value="gallery">Gallery</SelectItem>
                          <SelectItem value="hub">Content Hub</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="embed-code">Embed Code</Label>
                      <div className="relative">
                        <Textarea
                          id="embed-code"
                          value={embedCode}
                          onChange={(e) => setEmbedCode(e.target.value)}
                          className="font-mono text-sm h-24"
                        />
                        <Button variant="ghost" size="sm" className="absolute top-2 right-2" onClick={copyToClipboard}>
                          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700">Generate Embed Code</Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Team Members</h2>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-medium">User</th>
                            <th className="text-left p-4 font-medium">Role</th>
                            <th className="text-left p-4 font-medium">Status</th>
                            <th className="text-left p-4 font-medium">Last Active</th>
                            <th className="text-right p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              id: 1,
                              name: "Rajesh Kumar",
                              email: "rajesh@example.com",
                              role: "Admin",
                              status: "Active",
                              lastActive: "Today",
                            },
                            {
                              id: 2,
                              name: "Priya Sharma",
                              email: "priya@example.com",
                              role: "Editor",
                              status: "Active",
                              lastActive: "Yesterday",
                            },
                          ].map((user) => (
                            <tr key={user.id} className="border-b">
                              <td className="p-4">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium mr-3">
                                    {user.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge variant={user.role === "Admin" ? "default" : "outline"}>{user.role}</Badge>
                              </td>
                              <td className="p-4">
                                <div className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                  {user.status}
                                </div>
                              </td>
                              <td className="p-4">{user.lastActive}</td>
                              <td className="p-4 text-right">
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4 mr-1" />
                                  Edit
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Settings</CardTitle>
                    <CardDescription>Configure your StartHub Media platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="platform-name">Platform Name</Label>
                      <Input id="platform-name" defaultValue="GrowMoreEngine Content Hub" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="platform-description">Description</Label>
                      <Textarea
                        id="platform-description"
                        defaultValue="Authentic stories, expert insights, and exclusive content from India's most trusted companies and founders."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primary-color">Primary Color</Label>
                        <div className="flex">
                          <Input id="primary-color" defaultValue="#f97316" className="rounded-r-none" />
                          <div className="w-10 h-10 bg-orange-500 rounded-r-md border border-l-0 border-gray-200"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accent-color">Accent Color</Label>
                        <div className="flex">
                          <Input id="accent-color" defaultValue="#dc2626" className="rounded-r-none" />
                          <div className="w-10 h-10 bg-red-600 rounded-r-md border border-l-0 border-gray-200"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Privacy & Access</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="public-hub" defaultChecked />
                          <div>
                            <Label htmlFor="public-hub">Public Content Hub</Label>
                            <p className="text-xs text-gray-500">Make your content hub visible to everyone</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="require-login" />
                          <div>
                            <Label htmlFor="require-login">Require Login</Label>
                            <p className="text-xs text-gray-500">Users must log in to view content</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="allow-comments" defaultChecked />
                          <div>
                            <Label htmlFor="allow-comments">Allow Comments</Label>
                            <p className="text-xs text-gray-500">Enable commenting on content</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-6">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-orange-600 hover:bg-orange-700">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing & Subscription</CardTitle>
                    <CardDescription>Manage your subscription and billing information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">Professional Plan</h3>
                          <p className="text-sm text-gray-600">₹7,999/month • Access to 4 hubs</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-700">Active</Badge>
                          <p className="text-sm text-gray-500 mt-1">Next billing: Jan 15, 2024</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="outline">Update Payment Method</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
