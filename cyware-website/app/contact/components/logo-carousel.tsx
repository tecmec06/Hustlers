"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Logo {
  name: string
  src: string
}

interface LogoCarouselProps {
  logos: Logo[]
  speed?: number
}

export default function LogoCarousel({ logos, speed = 30 }: LogoCarouselProps) {
  const [duplicatedLogos, setDuplicatedLogos] = useState<Logo[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Duplicate logos to create seamless loop
  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos])
  }, [logos])

  return (
    <div
      className="relative overflow-hidden w-full py-4 bg-black/20 backdrop-blur-sm rounded-xl border border-gray-800/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex items-center transition-transform duration-1000"
        style={{
          animation: isHovered ? "none" : `scroll ${speed}s linear infinite`,
          transform: isHovered ? "translateX(0)" : undefined,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 mx-8 hover:opacity-80 transition-opacity"
            style={{ minWidth: "120px" }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={60}
              className="h-10 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${logos.length * 136}px);
          }
        }
      `}</style>
    </div>
  )
}
