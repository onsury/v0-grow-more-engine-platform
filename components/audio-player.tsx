"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, RotateCw, Repeat, Shuffle } from "lucide-react"

interface AudioPlayerProps {
  src: string
  title?: string
  artist?: string
  coverArt?: string
  autoPlay?: boolean
  onEnded?: () => void
  className?: string
}

export function AudioPlayer({
  src,
  title,
  artist,
  coverArt,
  autoPlay = false,
  onEnded,
  className = "",
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const onPlay = () => {
      setIsPlaying(true)
    }

    const onPause = () => {
      setIsPlaying(false)
    }

    const onWaiting = () => {
      setIsBuffering(true)
    }

    const onCanPlay = () => {
      setIsBuffering(false)
    }

    const onVolumeChange = () => {
      setVolume(audio.volume)
      setIsMuted(audio.muted)
    }

    audio.addEventListener("loadedmetadata", onLoadedMetadata)
    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("waiting", onWaiting)
    audio.addEventListener("canplay", onCanPlay)
    audio.addEventListener("volumechange", onVolumeChange)

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata)
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("waiting", onWaiting)
      audio.removeEventListener("canplay", onCanPlay)
      audio.removeEventListener("volumechange", onVolumeChange)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
  }

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = value[0]
    audio.volume = newVolume
    if (newVolume === 0) {
      audio.muted = true
    } else if (audio.muted) {
      audio.muted = false
    }
  }

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
  }

  const skipForward = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration)
  }

  const skipBackward = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = Math.max(audio.currentTime - 10, 0)
  }

  const toggleRepeat = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = !audio.loop
    setIsRepeat(!isRepeat)
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle)
    // In a real app, this would modify the playlist behavior
  }

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className={`bg-white rounded-lg shadow-md border ${className}`}>
      <audio ref={audioRef} src={src} onEnded={onEnded} autoPlay={autoPlay} className="hidden" />

      <div className="p-4">
        <div className="flex items-center space-x-4">
          {/* Cover Art */}
          <div className="relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
            {coverArt ? (
              <img src={coverArt || "/placeholder.svg"} alt={title || "Audio"} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Volume2 className="h-8 w-8 text-orange-500" />
              </div>
            )}
            {isBuffering && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <RotateCw className="w-6 h-6 text-white animate-spin" />
              </div>
            )}
          </div>

          {/* Info and Controls */}
          <div className="flex-1">
            <div className="mb-2">
              <h3 className="font-medium line-clamp-1">{title || "Unknown Title"}</h3>
              <p className="text-sm text-gray-500">{artist || "Unknown Artist"}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-2">
              <Slider value={[currentTime]} min={0} max={duration || 100} step={0.1} onValueChange={handleSeek} />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${isShuffle ? "text-orange-600" : "text-gray-500"}`}
              onClick={toggleShuffle}
            >
              <Shuffle className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={skipBackward}>
              <SkipBack className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant={isPlaying ? "outline" : "default"}
            size="icon"
            className={`h-10 w-10 rounded-full ${isPlaying ? "border-orange-600 text-orange-600" : "bg-orange-600 text-white"}`}
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={skipForward}>
              <SkipForward className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${isRepeat ? "text-orange-600" : "text-gray-500"}`}
              onClick={toggleRepeat}
            >
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 mt-4">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleMute}>
            {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>

          <Slider
            value={[isMuted ? 0 : volume]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
