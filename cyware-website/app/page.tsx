import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e1218]">
      <Navbar />
      <div className="container mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold">Welcome to CYWARE</h1>
        <p className="mt-4 text-xl">Your content goes here</p>
      </div>
    </main>
  )
}
