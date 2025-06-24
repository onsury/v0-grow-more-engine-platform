"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Zap,
  Menu,
  X,
  Star,
  Building2,
  Users,
  Megaphone,
  LogIn,
  UserPlus,
  BarChart3,
  Settings,
  FileText,
  Code,
  DollarSign,
  BookOpen,
  Video,
  Upload,
  PlusCircle,
} from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200 shadow-lg">
      {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Main Navigation Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {/* GrowMoreEngine Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    GrowMoreEngine
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Platform Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled className="text-xs text-gray-500 font-medium">
                    — REVIEWS & RATINGS —
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/products" className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Products Reviews/Ratings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/companies" className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Companies Reviews/Ratings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/founders" className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Founders Reviews/Ratings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled className="text-xs text-gray-500 font-medium">
                    — FEATURED CONTENT —
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/featured-reviews">Featured Reviews</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ads">Sponsored Content</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about">About Platform</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* StartHub Media Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium"
                  >
                    <Megaphone className="w-4 h-4 mr-2" />
                    StartHub Media
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media" className="flex items-center">
                      <Megaphone className="w-4 h-4 mr-2" />
                      Platform Overview
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/dashboard" className="flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled className="text-xs text-gray-500 font-medium">
                    — CONTENT MANAGEMENT —
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/content-hubs" className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Content Hubs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/dashboard?tab=content" className="flex items-center">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Content
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/dashboard?tab=analytics" className="flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Analytics
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled className="text-xs text-gray-500 font-medium">
                    — PLATFORM FEATURES —
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/dashboard?tab=embed" className="flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Website Integration
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/dashboard?tab=users" className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      User Management
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media#pricing" className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Pricing Plans
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/dashboard?tab=settings" className="flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled className="text-xs text-gray-500 font-medium">
                    — RESOURCES —
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/documentation" className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Documentation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/api" className="flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      API Reference
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/starthub-media/videos" className="flex items-center">
                      <Video className="w-4 h-4 mr-2" />
                      Video Tutorials
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              >
                <Link href="/contact">Contact</Link>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/submit">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Submit Review
                </Link>
              </Button>
            </div>

            {/* Sign Up / Login Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                asChild
              >
                <Link href="/starthub-media/login">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                asChild
              >
                <Link href="/starthub-media/login?tab=signup">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 p-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* GrowMoreEngine Logo - Left */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="hidden xs:block">
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  GrowMoreEngine
                </h1>
                <p className="text-xs text-gray-600 font-medium hidden sm:block">Run by Boomers. Not Bots.</p>
                <p className="text-xs text-gray-500 hidden sm:block">Powered by StartHub Media</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 p-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>

            {/* StartHub Logo - Right (Hidden on small screens) */}
            <Link href="/starthub-media" className="hidden sm:block group">
              <div className="relative">
                <Image
                  src="/images/starthub-logo.png"
                  alt="StartHub Media Logo"
                  width={48}
                  height={48}
                  className="sm:w-16 sm:h-16 group-hover:scale-105 transition-transform shadow-lg rounded-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-orange-200 bg-white shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {/* GrowMoreEngine Mobile Section */}
            <div className="bg-orange-50 rounded-lg p-2 my-2">
              <div className="text-sm font-semibold text-orange-700 px-2 py-1 mb-2">GrowMoreEngine Platform</div>
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 className="w-4 h-4 inline mr-2" />
                Platform Dashboard
              </Link>
              <Link
                href="/products"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Star className="w-4 h-4 inline mr-2" />
                Products Reviews
              </Link>
              <Link
                href="/companies"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Building2 className="w-4 h-4 inline mr-2" />
                Companies Reviews
              </Link>
              <Link
                href="/founders"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-4 h-4 inline mr-2" />
                Founders Reviews
              </Link>
            </div>

            {/* StartHub Media Mobile Section */}
            <div className="bg-green-50 rounded-lg p-2 my-2">
              <div className="text-sm font-semibold text-green-700 px-2 py-1 mb-2">StartHub Media Platform</div>
              <Link
                href="/starthub-media"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Megaphone className="w-4 h-4 inline mr-2" />
                Platform Overview
              </Link>
              <Link
                href="/starthub-media/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 className="w-4 h-4 inline mr-2" />
                Dashboard
              </Link>
              <Link
                href="/content-hubs"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Content Hubs
              </Link>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Auth Section */}
            <div className="space-y-2">
              <Link
                href="/starthub-media/login"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-5 h-5 inline mr-3" />
                Login
              </Link>
              <Link
                href="/starthub-media/login?tab=signup"
                className="block px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg text-center font-medium shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="w-5 h-5 inline mr-3" />
                Sign Up
              </Link>
            </div>

            {/* CTA Section */}
            <div className="pt-4">
              <Link
                href="/submit"
                className="block px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg text-center font-medium shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <PlusCircle className="w-5 h-5 inline mr-3" />
                Submit Review
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
