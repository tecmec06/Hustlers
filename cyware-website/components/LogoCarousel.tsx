'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { Logo } from '@/lib/data/partnerLogos'

interface LogoCarouselProps {
  readonly logos: readonly Logo[];
  readonly speed?: number;
  readonly pauseOnHover?: boolean;
  readonly height?: number;
  readonly width?: number;
}

export default function LogoCarousel({
  logos,
  speed = 40,
  pauseOnHover = false,
  height = 60,
  width = 120,
}: LogoCarouselProps) {
  return (
    <div className="w-full py-8 overflow-hidden">
      <Marquee
        gradient={false}
        speed={speed}
        pauseOnHover={pauseOnHover}
        direction="left"
        className="w-full"
      >
        {logos.map((logo) => (
          <div key={logo.name} className="px-8 flex items-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={width}
              height={height}
              className="grayscale opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
