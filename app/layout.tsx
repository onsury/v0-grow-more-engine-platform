import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GrowMoreEngine - Discover Indian Startups & Products",
  description:
    "Explore the best Indian startups, products, and companies. Get insights, reviews, and detailed information about emerging businesses in India.",
  keywords: "Indian startups, products, companies, business insights, startup reviews",
  authors: [{ name: "GrowMoreEngine Team" }],
  creator: "GrowMoreEngine",
  publisher: "GrowMoreEngine",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "GrowMoreEngine - Discover Indian Startups & Products",
    description:
      "Explore the best Indian startups, products, and companies. Get insights, reviews, and detailed information about emerging businesses in India.",
    siteName: "GrowMoreEngine",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowMoreEngine - Discover Indian Startups & Products",
    description: "Explore the best Indian startups, products, and companies.",
    creator: "@growmoreengine",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <AuthProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
