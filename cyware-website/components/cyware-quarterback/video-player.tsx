"use client"

import { useEffect, useRef } from "react"
import styles from "./video-player.module.css"

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <video ref={videoRef} className={styles.video} loop muted playsInline>
      <source src="https://videos.ctfassets.net/zcd9ovevodsf/6W7GNytm5ueFaMcSOsYRqR/dadac48db807d0621a0abcb6fa997035/Cyware_Quarterback_AI_Overview_Video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
