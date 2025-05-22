import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
<main className="relative h-screen">
  <div className="absolute inset-0 bg-gradient-to-r from-[#002c8c] via-[#5b00a7] to-[#00a58d]" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
  <div className="relative z-10">
    <Navbar />
    <Hero />
  </div>
</main>
  )
}
