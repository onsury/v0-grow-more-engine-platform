"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Copy, Check, Code, Settings, Eye, Zap } from "lucide-react"

export default function HubEmbed({ contentId, hubId, title, type }) {
  const [copied, setCopied] = useState(false)
  const [embedSettings, setEmbedSettings] = useState({
    autoplay: false,
    showTitle: true,
    showCompany: true,
    responsive: true,
    width: "100%",
    height: "auto",
    theme: "light",
  })

  const embedCode = `<iframe 
  src="https://growmoreengine.com/embed/${hubId}/${contentId}?autoplay=${embedSettings.autoplay}&showTitle=${
    embedSettings.showTitle
  }&showCompany=${embedSettings.showCompany}&theme=${embedSettings.theme}" 
  width="${embedSettings.width}" 
  height="${embedSettings.height}" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen 
  title="${title || "StartHub Media Content"}"
  ${embedSettings.responsive ? 'style="width: 100%; aspect-ratio: 16/9;"' : ""}
></iframe>`

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-orange-500" />
          Embed Content
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="code">
          <TabsList className="mb-4">
            <TabsTrigger value="code">
              <Code className="h-4 w-4 mr-2" />
              Embed Code
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="preview">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="code">
            <div className="space-y-4">
              <Textarea
                value={embedCode}
                readOnly
                className="font-mono text-sm h-32"
                onClick={(e) => e.currentTarget.select()}
              />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Copy this code and paste it into your website.</p>
                <Button onClick={handleCopy} variant="outline" size="sm">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    value={embedSettings.width}
                    onChange={(e) => setEmbedSettings({ ...embedSettings, width: e.target.value })}
                    placeholder="e.g., 100%, 600px"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    value={embedSettings.height}
                    onChange={(e) => setEmbedSettings({ ...embedSettings, height: e.target.value })}
                    placeholder="e.g., auto, 400px"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select
                  value={embedSettings.theme}
                  onValueChange={(value) => setEmbedSettings({ ...embedSettings, theme: value })}
                >
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoplay">Autoplay</Label>
                  <Switch
                    id="autoplay"
                    checked={embedSettings.autoplay}
                    onCheckedChange={(checked) => setEmbedSettings({ ...embedSettings, autoplay: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="showTitle">Show Title</Label>
                  <Switch
                    id="showTitle"
                    checked={embedSettings.showTitle}
                    onCheckedChange={(checked) => setEmbedSettings({ ...embedSettings, showTitle: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="showCompany">Show Company</Label>
                  <Switch
                    id="showCompany"
                    checked={embedSettings.showCompany}
                    onCheckedChange={(checked) => setEmbedSettings({ ...embedSettings, showCompany: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="responsive">Responsive</Label>
                  <Switch
                    id="responsive"
                    checked={embedSettings.responsive}
                    onCheckedChange={(checked) => setEmbedSettings({ ...embedSettings, responsive: checked })}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview">
            <div className="border rounded-md p-4">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-lg font-medium mb-2">{title || "Content Preview"}</p>
                  <p className="text-sm text-gray-500">
                    Preview will be available when embedded on your website.
                    <br />
                    Hub: {hubId} | Content ID: {contentId} | Type: {type}
                  </p>
                </div>
              </div>
              {embedSettings.showTitle && <p className="mt-2 font-medium">{title || "Content Title"}</p>}
              {embedSettings.showCompany && <p className="text-sm text-gray-500">Company Name</p>}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <p className="text-xs text-gray-500">
          This embedded content is powered by StartHub Media. For more options, visit your{" "}
          <a href="/starthub-media/dashboard" className="text-orange-600 hover:underline">
            dashboard
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  )
}
