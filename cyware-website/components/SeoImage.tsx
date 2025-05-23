'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import { getImageAlts } from '@/lib/imageAlts'

type SeoImageProps = {
  name: string
} & Omit<ImageProps, 'alt'>

export default function SeoImage({ name, ...rest }: SeoImageProps) {
  const [altText, setAltText] = useState('Image related to Cyware Security Platform')

  useEffect(() => {
    getImageAlts().then((alts) => {
      if (alts[name]) setAltText(alts[name])
    })
  }, [name])

  return <Image alt={altText} {...rest} />
}