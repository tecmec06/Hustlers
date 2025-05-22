import Navbar from '@/components/Navbar';
import ContactHero from '@/components/ContactHero';
export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🌌 Composite Gradient Layers */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      {/* Left to right: deep navy to dark purple */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1837] via-[#0a0e1a] to-[#13021d] opacity-80" />

      {/* Dark vignette in center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.6)_30%,_transparent_70%)]" />

      {/* Right-side purple glow */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,_rgba(168,85,247,0.4)_0%,_transparent_70%)] blur-3xl" />

      {/* Bottom purple fade */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#2d0a41] to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <ContactHero />
      </div>
    </main>
  );
}
