import { cachedQuote } from "@/lib/keywordExtractor"

export default async function DynamicQuote() {
  console.log(cachedQuote)

  return (
    <div className="flex justify-center items-center">
    <div className="w-[600px] flex flex-col items-center mb-6 p-10">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-4 drop-shadow-lg">Weekly Cyber Wisdom</h2>
      <div className="relative max-w-4xl mx-auto p-10 min-h-[340px] bg-gradient-to-tr from-[#002c8c] via-[#5b00a7] to-[#00a58d] text-white rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md overflow-hidden flex flex-col items-center gap-6">
        <img src="https://images.ctfassets.net/zcd9ovevodsf/5hMiOaLhP23VkyyE4RDfqL/df2b83c535d0a063c407753014faf930/cyware-logo.svg" alt="Cyware Logo" className="h-14 mt-2" />
        <p className="italic text-xl text-gray-200 leading-relaxed text-center transition-colors duration-300">
          {cachedQuote}
        </p>
        <div className="absolute bottom-4 right-6 text-xs text-gray-400 opacity-80">Refreshed every 7 days</div>
      </div>
    </div>
    </div>
  )
}
