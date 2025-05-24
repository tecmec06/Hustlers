import { Sparkles } from "lucide-react"
import { VideoPlayer } from "./video-player"
import styles from "./cyware-quarterback.module.css"

interface CywareQuarterbackProps {
  className?: string
}

export function CywareQuarterback({ className = "" }: CywareQuarterbackProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {/* Blue glow effect - oval shape in top-left */}
      <div className={`${styles.blueGradientPrimary} ${styles.gradientEffect}`}></div>
      <div className={`${styles.blueGradientSecondary} ${styles.gradientEffect}`}></div>

      {/* Purple glow effect - oval shape in bottom-right */}
      <div className={`${styles.purpleGradientPrimary} ${styles.gradientEffect}`}></div>
      <div className={`${styles.purpleGradientSecondary} ${styles.gradientEffect}`}></div>

      <div className={styles.header}>
        <h1 className={styles.title}>Powered by Cyware Quarterback AI</h1>
        <p className={styles.subtitle}>Agentic AI built for security teams. Designed for swift action.</p>
      </div>

      <div className={styles.videoContainer}>
        {/* Content container with glowing border effect */}
        <div className={styles.glowBorder}></div>
        <div className={styles.videoWrapper}>
          {/* Video player */}
          <VideoPlayer />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={`${styles.button} transition-transform duration-200 hover:scale-105`}>
          <Sparkles className={styles.buttonIcon} />
          <span>Cyware Quarterback AI</span>
          <span className={styles.buttonArrow}>→</span>
        </button>
      </div>
    </div>
  )
}
