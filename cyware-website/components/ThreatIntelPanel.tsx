'use client'

import Image from 'next/image'
import Link from 'next/link'

type ThreatIntelPanelProps = {
  iconSrc?: string
  title: string
  highlightedPhrases: string[]
  highlightGradient?: string
  description?: string
  buttonLabel: string
  buttonLink: string
  imageSrc: string
  reverse?: boolean
}

export default function ThreatIntelPanel({
  iconSrc,
  title,
  highlightedPhrases,
  highlightGradient,
  description,
  buttonLabel,
  buttonLink,
  imageSrc,
  reverse = false,
}: ThreatIntelPanelProps) {
  const flexDirection = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'

  return (
    <section className={`mx-16 flex flex-col ${flexDirection} items-center justify-between gap-12 px-6 py-20`}>
      {/* Left Side */}
      <div className="w-fit p-6 rounded-2xl max-w-lg h-[380px] border-dashed border-1 border-[#595c69] flex flex-col justify-between">
        {iconSrc && (
          <div className="mb-6">
            <Image src={iconSrc} alt="Panel Icon" width={48} height={48} />
          </div>
        )}
        <h2 className=" text-[36px] lg:text-4xl font-bold mb-4 leading-tight">
          {title.split(' ').map((word, idx) => {
            const cleanWord = word.replace(/[.,]/g, '')
            const isHighlighted = highlightedPhrases.includes(cleanWord)
            const lineNumber = Math.floor(idx / 2)

            const gradient = highlightGradient ?? 'from-purple-500 to-white'
            const className = isHighlighted && lineNumber < 2
              ? `bg-gradient-to-br ${gradient} bg-clip-text text-transparent`
              : isHighlighted
              ? 'text-white'
              : ''

            return (
              <span key={idx} className={className}>
                {word}{' '}
              </span>
            )
          })}
        </h2>
        {description && <p className="text-gray-300 mb-6">{description}</p>}
        <Link
          href={buttonLink}
          className="w-fit inline-block text-white font-medium py-2 px-3 rounded-full border-1 border-white/50"
        >
          {buttonLabel} →
        </Link>
      </div>

      {/* Right Side */}
      <div className="max-w-3xl w-full">
        <Image
          src={imageSrc}
          alt="Threat Panel Image"
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  )
}
