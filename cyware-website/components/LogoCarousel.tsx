'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const logos = [
  'https://images.ctfassets.net/zcd9ovevodsf/5p8Vd1ZVVuuZS34BglgGxe/774c80295668c2683842734f921ab4c3/Trace3__1_.svg',
  'https://images.ctfassets.net/zcd9ovevodsf/3g2EwhXG5Djdj92v8mgYkZ/6d2ef0d284856b62d22230813c0375ec/ecs.svg',
  'https://images.ctfassets.net/zcd9ovevodsf/5tayfuhOwQ5okmgxovqFtB/848460895be30ccdebc8a3dd45da58c0/accenture.svg',
  'https://images.ctfassets.net/zcd9ovevodsf/24EHg5Rt09lI3zr6uFixC2/24cbf036065b02a7e127781902838f3c/Word_Wide_Technology.svg',
  'https://images.ctfassets.net/zcd9ovevodsf/1pk5FF8d1yGBsCZJln7Xtp/a407a9bf523c798ce5c508268f911ee4/Hoop_Cyber__1_.svg',
  'https://images.ctfassets.net/zcd9ovevodsf/1KfXvDduTCPZEMOC6eMeXp/3b985a6f308d13850f1da5a1375afc37/Cyber_Fusion_Distribution__1_.svg',
];


const allLogos = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <div className="w-full py-12 overflow-hidden">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={false}
        direction="left"
        className="w-full"
      >
        {allLogos.map((src, idx) => (
          <div key={idx} className="px-8 flex items-center">
            <Image
              src={src}
              alt={`Logo ${idx}`}
              width={120}
              height={48}
              className="grayscale opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

