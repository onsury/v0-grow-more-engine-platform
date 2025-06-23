"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  PlusCircle,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  UserPlus,
  Users,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ChevronDown,
} from "lucide-react"

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const toggleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId))
    } else {
      setSelectedUsers([...selectedUsers, userId])
    }
  }

  const selectAllUsers = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map((user) => user.id))
    }
  }

  // Mock user data
  const users = [
    {
      id: "1",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "Today, 10:45 AM",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Jan 15, 2023",
      permissions: ["manage_content", "manage_users", "billing", "analytics"],
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "Editor",
      status: "Active",
      lastActive: "Yesterday, 4:30 PM",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Mar 22, 2023",
      permissions: ["manage_content", "analytics"],
    },
    {
      id: "3",
      name: "Anand Verma",
      email: "anand@example.com",
      role: "Viewer",
      status: "Inactive",
      lastActive: "2 weeks ago",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Apr 10, 2023",
      permissions: ["view_content"],
    },
    {
      id: "4",
      name: "Sunita Patel",
      email: "sunita@example.com",
      role: "Editor",
      status: "Active",
      lastActive: "3 days ago",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Feb 5, 2023",
      permissions: ["manage_content", "analytics"],
    },
    {
      id: "5",
      name: "Vikram Singh",
      email: "vikram@example.com",
      role: "Contributor",
      status: "Active",
      lastActive: "Today, 9:15 AM",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "May 18, 2023",
      permissions: ["create_content"],
    },
    {
      id: "6",
      name: "Meera Reddy",
      email: "meera@example.com",
      role: "Viewer",
      status: "Pending",
      lastActive: "Never",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "Jun 30, 2023",
      permissions: ["view_content"],
    },
  ]

  // Mock invitations data
  const invitations = [
    {
      id: "i1",
      email: "karthik@example.com",
      role: "Editor",
      status: "Pending",
      sentDate: "Jul 2, 2023",
      sentBy: "Rajesh Kumar",
    },
    {
      id: "i2",
      email: "divya@example.com",
      role: "Contributor",
      status: "Pending",
      sentDate: "Jul 1, 2023",
      sentBy: "Rajesh Kumar",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="users" className="space-y-8">
          <TabsList>
            <TabsTrigger value="users" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger
              value="invitations"
              className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Invitations
            </TabsTrigger>
            <TabsTrigger value="roles" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Shield className="w-4 h-4 mr-2" />
              Roles & Permissions
            </TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search users..." className="pl-10 w-full sm:w-[300px]" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="contributor">Contributor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="active">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled={selectedUsers.length === 0}>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  disabled={selectedUsers.length === 0}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remove
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-medium">
                          <div className="flex items-center">
                            <Checkbox
                              checked={selectedUsers.length === users.length && users.length > 0}
                              onCheckedChange={selectAllUsers}
                              className="mr-2"
                            />
                            User
                          </div>
                        </th>
                        <th className="text-left p-4 font-medium">Role</th>
                        <th className="text-left p-4 font-medium">Status</th>
                        <th className="text-left p-4 font-medium">Last Active</th>
                        <th className="text-right p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center">
                              <Checkbox
                                checked={selectedUsers.includes(user.id)}
                                onCheckedChange={() => toggleSelectUser(user.id)}
                                className="mr-3"
                              />
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge
                              variant={
                                user.role === "Admin"
                                  ? "default"
                                  : user.role === "Editor"
                                    ? "outline"
                                    : user.role === "Contributor"
                                      ? "secondary"
                                      : "secondary"
                              }
                            >
                              {user.role}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <div
                                className={`w-2 h-2 rounded-full mr-2 ${
                                  user.status === "Active"
                                    ? "bg-green-500"
                                    : user.status === "Inactive"
                                      ? "bg-gray-300"
                                      : "bg-yellow-500"
                                }`}
                              ></div>
                              {user.status}
                            </div>
                          </td>
                          <td className="p-4 text-sm text-gray-600">{user.lastActive}</td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end">
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/starthub-media/dashboard/users/${user.id}`}>
                                  <Edit className="w-4 h-4 mr-1" />
                                  Edit
                                </Link>
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{users.length}</span>{" "}
                  of <span className="font-medium">{users.length}</span> users
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Invitations Tab */}
          <TabsContent value="invitations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Invitations</CardTitle>
                    <CardDescription>Track and manage invitations sent to new users</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-medium">Email</th>
                            <th className="text-left p-4 font-medium">Role</th>
                            <th className="text-left p-4 font-medium">Sent Date</th>
                            <th className="text-left p-4 font-medium">Status</th>
                            <th className="text-right p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invitations.map((invitation) => (
                            <tr key={invitation.id} className="border-b hover:bg-gray-50">
                              <td className="p-4">
                                <div className="font-medium">{invitation.email}</div>
                                <div className="text-xs text-gray-500">Invited by: {invitation.sentBy}</div>
                              </td>
                              <td className="p-4">
                                <Badge variant="outline">{invitation.role}</Badge>
                              </td>
                              <td className="p-4 text-sm text-gray-600">{invitation.sentDate}</td>
                              <td className="p-4">
                                <Badge
                                  variant="secondary"
                                  className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                >
                                  {invitation.status}
                                </Badge>
                              </td>
                              <td className="p-4 text-right">
                                <div className="flex justify-end">
                                  <Button variant="ghost" size="sm">
                                    <Mail className="w-4 h-4 mr-1" />
                                    Resend
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Invite New User</CardTitle>
                    <CardDescription>Send an invitation to join your team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
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
                          <SelectItem value="contributor">Contributor</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Personal Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Add a personal message to your invitation"
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Send Invitation
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Roles & Permissions Tab */}
          <TabsContent value="roles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Role Definitions</CardTitle>
                    <CardDescription>Define what each role can do in your content hub</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-medium">Role</th>
                            <th className="text-left p-4 font-medium">Description</th>
                            <th className="text-left p-4 font-medium">Users</th>
                            <th className="text-right p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center">
                                <div className="bg-orange-100 p-1.5 rounded-full mr-2">
                                  <ShieldAlert className="w-4 h-4 text-orange-600" />
                                </div>
                                <span className="font-medium">Admin</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-gray-600">
                              Full access to all features including user management and billing
                            </td>
                            <td className="p-4">
                              <Badge>1</Badge>
                            </td>
                            <td className="p-4 text-right">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center">
                                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="font-medium">Editor</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-gray-600">
                              Can create, edit, and publish all content, and access analytics
                            </td>
                            <td className="p-4">
                              <Badge>2</Badge>
                            </td>
                            <td className="p-4 text-right">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center">
                                <div className="bg-green-100 p-1.5 rounded-full mr-2">
                                  <Shield className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="font-medium">Contributor</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-gray-600">
                              Can create and edit content, but cannot publish without approval
                            </td>
                            <td className="p-4">
                              <Badge>1</Badge>
                            </td>
                            <td className="p-4 text-right">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center">
                                <div className="bg-gray-100 p-1.5 rounded-full mr-2">
                                  <Shield className="w-4 h-4 text-gray-600" />
                                </div>
                                <span className="font-medium">Viewer</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-gray-600">
                              Can only view content and basic analytics, no editing capabilities
                            </td>
                            <td className="p-4">
                              <Badge>2</Badge>
                            </td>
                            <td className="p-4 text-right">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <Button variant="outline">
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Create Custom Role
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Permission Settings</CardTitle>
                    <CardDescription>Configure what each role can access</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Content Management</Label>
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          Edit
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-2 pl-2 border-l-2 border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span>Create content</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Editor
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Contributor
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Edit content</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Editor
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Contributor
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Publish content</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Editor
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Delete content</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Editor
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>User Management</Label>
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          Edit
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-2 pl-2 border-l-2 border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span>Invite users</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Manage roles</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Remove users</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Analytics & Reporting</Label>
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          Edit
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-2 pl-2 border-l-2 border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span>View analytics</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Editor
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Viewer
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Export reports</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className="text-xs">
                              Admin
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Editor
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
