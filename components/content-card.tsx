import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Clock, Eye } from "lucide-react"

// Content types and their icons/colors
const contentTypeStyles = {
  video: {
    bg: "bg-blue-500",
    icon: <Play className="h-4 w-4" />,
  },
  podcast: {
    bg: "bg-purple-500",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
  },
  article: {
    bg: "bg-green-500",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  "case-study": {
    bg: "bg-amber-500",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
}

// Default style when content type is unknown
const defaultTypeStyle = {
  bg: "bg-gray-500",
  icon: <Play className="h-4 w-4" />,
}

export default function ContentCard({ content, getHubInfo, getCompany }) {
  // Get hub information
  const hubInfo = content.hub_id ? getHubInfo(content.hub_id) : null

  // Get company information
  const company = content.company_id ? getCompany(content.company_id) : null

  // Get content type styles
  const typeStyle = contentTypeStyles[content.content_type] || defaultTypeStyle

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-orange-300 h-full">
      <Link href={`/content-hubs/${hubInfo?.slug || "all"}/${content.id}`}>
        <div className="relative">
          {/* Hub color stripe */}
          <div className={`${hubInfo?.color || "bg-gray-500"} h-1 w-full absolute top-0 left-0 z-10`}></div>

          {/* Thumbnail image */}
          <Image
            src={content.thumbnail_url || "/placeholder.svg?height=180&width=320&query=content%20thumbnail"}
            alt={content.title}
            width={320}
            height={180}
            className="w-full object-cover"
          />

          {/* Duration badge for videos */}
          {content.duration && content.content_type === "video" && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {content.duration}
            </div>
          )}

          {/* Content badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            {/* Content type badge */}
            <Badge className={typeStyle.bg}>
              <div className="flex items-center">
                {typeStyle.icon}
                <span className="ml-1 capitalize">{content.content_type}</span>
              </div>
            </Badge>

            {/* Hub badge */}
            {hubInfo && (
              <Badge className={hubInfo.color || "bg-gray-500"}>
                <div className="flex items-center">
                  {hubInfo.icon}
                  <span className="ml-1">{hubInfo.name}</span>
                </div>
              </Badge>
            )}
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        {/* Content title */}
        <Link href={`/content-hubs/${hubInfo?.slug || "all"}/${content.id}`}>
          <h3 className="font-medium text-sm mb-3 line-clamp-2 hover:text-orange-600">{content.title}</h3>
        </Link>

        {/* Company information */}
        {company && (
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="h-6 w-6">
              <AvatarImage src={company.logo_url || "/placeholder.svg?height=64&width=64"} />
              <AvatarFallback>{company.name[0]}</AvatarFallback>
            </Avatar>
            <Link href={`/content-hubs/company/${company.id}`} className="text-xs font-medium hover:text-orange-600">
              {company.name}
            </Link>
          </div>
        )}

        {/* Stats (views and post date) */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <Eye className="w-3 h-3 mr-1" />
            {typeof content.views === "number"
              ? `${content.views >= 1000 ? `${Math.floor(content.views / 1000)}K` : content.views} views`
              : content.views}
          </div>
          {content.posted && (
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {content.posted}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
