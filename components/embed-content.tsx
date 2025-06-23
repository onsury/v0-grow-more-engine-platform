"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Copy, Check, Code, ExternalLink } from "lucide-react"

interface EmbedContentProps {
  contentId: string
  contentType: "video" | "audio" | "article" | "gallery" | "hub"
  title?: string
  className?: string
}

export function EmbedContent({ contentId, contentType, title, className = "" }: EmbedContentProps) {
  const [copied, setCopied] = useState(false)
  const [embedCode, setEmbedCode] = useState("")
  const [embedOptions, setEmbedOptions] = useState({
    autoplay: false,
    loop: false,
    controls: true,
    branding: true,
    responsive: true,
    width: "100%",
    height: "400",
    theme: "light",
  })

  useEffect(() => {
    generateEmbedCode()
  }, [contentId, contentType, embedOptions])

  const generateEmbedCode = () => {
    const baseUrl = "https://growmoreengine.com/embed"
    const options = new URLSearchParams()

    options.append("autoplay", embedOptions.autoplay ? "1" : "0")
    options.append("loop", embedOptions.loop ? "1" : "0")
    options.append("controls", embedOptions.controls ? "1" : "0")
    options.append("branding", embedOptions.branding ? "1" : "0")
    options.append("theme", embedOptions.theme)

    const url = `${baseUrl}/${contentType}/${contentId}?${options.toString()}`

    let code = ""
    if (embedOptions.responsive) {
      code = `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe src="${url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>
</div>`
    } else {
      code = `<iframe src="${url}" width="${embedOptions.width}" height="${embedOptions.height}" frameborder="0" allowfullscreen></iframe>`
    }

    setEmbedCode(code)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOptionChange = (key: string, value: any) => {
    setEmbedOptions((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Embed {title || contentType}</CardTitle>
        <CardDescription>Generate code to embed this content on your website</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="standard" className="space-y-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="standard" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoplay">Autoplay</Label>
                  <Switch
                    id="autoplay"
                    checked={embedOptions.autoplay}
                    onCheckedChange={(checked) => handleOptionChange("autoplay", checked)}
                  />
                </div>
                <p className="text-xs text-gray-500">Automatically start playback when the embed loads</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="controls">Show Controls</Label>
                  <Switch
                    id="controls"
                    checked={embedOptions.controls}
                    onCheckedChange={(checked) => handleOptionChange("controls", checked)}
                  />
                </div>
                <p className="text-xs text-gray-500">Display playback controls for users</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="branding">Show Branding</Label>
                  <Switch
                    id="branding"
                    checked={embedOptions.branding}
                    onCheckedChange={(checked) => handleOptionChange("branding", checked)}
                  />
                </div>
                <p className="text-xs text-gray-500">Display GrowMoreEngine branding on the embed</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="responsive">Responsive</Label>
                  <Switch
                    id="responsive"
                    checked={embedOptions.responsive}
                    onCheckedChange={(checked) => handleOptionChange("responsive", checked)}
                  />
                </div>
                <p className="text-xs text-gray-500">Automatically adjust to fit container width</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  value={embedOptions.width}
                  onChange={(e) => handleOptionChange("width", e.target.value)}
                  disabled={embedOptions.responsive}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  value={embedOptions.height}
                  onChange={(e) => handleOptionChange("height", e.target.value)}
                  disabled={embedOptions.responsive}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <Select value={embedOptions.theme} onValueChange={(value) => handleOptionChange("theme", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="brand">Brand</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="loop">Loop</Label>
                <Switch
                  id="loop"
                  checked={embedOptions.loop}
                  onCheckedChange={(checked) => handleOptionChange("loop", checked)}
                />
              </div>
              <p className="text-xs text-gray-500">Automatically replay content when it ends</p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="embed-code">Embed Code</Label>
            <Button variant="ghost" size="sm" className="text-xs" onClick={copyToClipboard}>
              {copied ? <Check className="h-3 w-3 mr-1 text-green-500" /> : <Copy className="h-3 w-3 mr-1" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Textarea id="embed-code" value={embedCode} readOnly className="font-mono text-sm h-24" />
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-md border text-sm">
          <div className="flex items-start">
            <Code className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />
            <div>
              <p className="font-medium mb-1">Implementation Tips</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs">
                <li>Add this code to any HTML page where you want the content to appear</li>
                <li>For responsive embeds, make sure the container has a defined width</li>
                <li>Autoplay may be blocked by some browsers unless the video is muted</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="text-xs" asChild>
          <a href={`https://growmoreengine.com/${contentType}/${contentId}`} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3 w-3 mr-1" />
            View Content
          </a>
        </Button>
        <Button size="sm" className="text-xs bg-orange-600 hover:bg-orange-700">
          Apply to Website
        </Button>
      </CardFooter>
    </Card>
  )
}
