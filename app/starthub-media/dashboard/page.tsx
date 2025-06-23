"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
} from "lucide-react"

export default function DashboardPage() {
  const [copied, setCopied] = useState(false)
  const [embedCode, setEmbedCode] = useState(
    '<iframe src="https://growmoreengine.com/embed/video/1" width="100%" height="400" frameborder="0" allowfullscreen></iframe>',
  )

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">StartHub Media Dashboard</h1>
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
        <Tabs defaultValue="content" className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm border p-1">
            <TabsList className="grid grid-cols-5 h-auto">
              <TabsTrigger
                value="content"
                className="py-2 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
              >
                <FileText className="w-4 h-4 mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="py-2 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="embed"
                className="py-2 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
              >
                <Code className="w-4 h-4 mr-2" />
                Embed
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="py-2 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
              >
                <Users className="w-4 h-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="py-2 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
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
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/content-hubs/video/1">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-green-500">Article</Badge>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg">Milky Mist Success Story</CardTitle>
                  <CardDescription>From small dairy to national brand</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="relative aspect-video rounded-md overflow-hidden mb-3">
                    <Image
                      src="/placeholder.svg?height=180&width=320"
                      alt="Article thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      12.3K views
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      June 3, 2023
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-purple-500">Audio</Badge>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg">Music Temple Podcast</CardTitle>
                  <CardDescription>Classical music in modern India</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="relative aspect-video rounded-md overflow-hidden mb-3 bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                    <Image
                      src="/images/music-temple-logo.png"
                      alt="Podcast thumbnail"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 flex items-center justify-between">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Play className="h-4 w-4" />
                        </Button>
                        <div className="flex-1 mx-2">
                          <div className="h-1 bg-gray-200 rounded-full">
                            <div className="h-1 bg-purple-500 rounded-full w-1/3"></div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-700 mr-2">12:34</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      8.7K plays
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      April 22, 2023
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">124,582</div>
                  <p className="text-xs text-green-600 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    12% increase
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Watch Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,245 hrs</div>
                  <p className="text-xs text-green-600 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    8% increase
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Subscribers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,842</div>
                  <p className="text-xs text-green-600 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    15% increase
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.7%</div>
                  <p className="text-xs text-green-600 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    2% increase
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>View metrics across all your content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md border">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Analytics visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Embed Tab */}
          <TabsContent value="embed" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Embed Your Content</CardTitle>
                <CardDescription>Generate embed codes to share your content on other websites</CardDescription>
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
                  <Label htmlFor="content-id">Select Content</Label>
                  <Select defaultValue="1">
                    <SelectTrigger>
                      <SelectValue placeholder="Select content" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">K7 Computing Interview</SelectItem>
                      <SelectItem value="2">Milky Mist Success Story</SelectItem>
                      <SelectItem value="3">Music Temple Podcast</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="embed-options">Embed Options</Label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="autoplay" />
                      <Label htmlFor="autoplay">Autoplay</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="loop" />
                      <Label htmlFor="loop">Loop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="controls" defaultChecked />
                      <Label htmlFor="controls">Show Controls</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="branding" defaultChecked />
                      <Label htmlFor="branding">Show Branding</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="embed-size">Size</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="width" className="text-xs text-gray-500">
                        Width
                      </Label>
                      <Input id="width" defaultValue="100%" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-xs text-gray-500">
                        Height
                      </Label>
                      <Input id="height" defaultValue="400" />
                    </div>
                  </div>
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

                <div className="pt-2">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Generate Embed Code</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>See how your embedded content will appear</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md p-4 bg-gray-50">
                  <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Embed preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-700 rounded-full w-16 h-16 flex items-center justify-center"
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
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
                        {
                          id: 3,
                          name: "Anand Verma",
                          email: "anand@example.com",
                          role: "Viewer",
                          status: "Inactive",
                          lastActive: "2 weeks ago",
                        },
                        {
                          id: 4,
                          name: "Sunita Patel",
                          email: "sunita@example.com",
                          role: "Editor",
                          status: "Active",
                          lastActive: "3 days ago",
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
                            <Badge
                              variant={
                                user.role === "Admin" ? "default" : user.role === "Editor" ? "outline" : "secondary"
                              }
                            >
                              {user.role}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <div
                                className={`w-2 h-2 rounded-full mr-2 ${user.status === "Active" ? "bg-green-500" : "bg-gray-300"}`}
                              ></div>
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

            <Card>
              <CardHeader>
                <CardTitle>Invite New Users</CardTitle>
                <CardDescription>Add team members to collaborate on content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="editor">
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea id="message" placeholder="Add a personal message to your invitation" />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Send Invitation</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Hub Settings</CardTitle>
                <CardDescription>Customize your content hub appearance and behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hub-name">Content Hub Name</Label>
                  <Input id="hub-name" defaultValue="GrowMoreEngine Content Hub" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hub-description">Description</Label>
                  <Textarea
                    id="hub-description"
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

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Branding</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Logo</Label>
                      <div className="border rounded-md p-4 text-center">
                        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-md flex items-center justify-center mb-4">
                          <Image
                            src="/images/starthub-logo.png"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Change Logo
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Favicon</Label>
                      <div className="border rounded-md p-4 text-center">
                        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-md flex items-center justify-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">G</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Change Favicon
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Domain Settings</h3>
                  <div className="space-y-2">
                    <Label htmlFor="custom-domain">Custom Domain</Label>
                    <Input id="custom-domain" placeholder="hub.yourdomain.com" />
                    <p className="text-xs text-gray-500">
                      Enter your custom domain to use instead of the default subdomain.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="ssl" defaultChecked />
                    <Label htmlFor="ssl">Enable SSL</Label>
                  </div>
                </div>

                <Separator />

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
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-orange-600 hover:bg-orange-700">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
