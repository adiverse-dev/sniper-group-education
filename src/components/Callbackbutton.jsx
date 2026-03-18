import { useState } from 'react'

export default function CallbackButton() {
  const [hovered, setHovered] = useState(false)

  const scrollToCallback = () => {
    const el = document.getElementById('callback-section')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div
      className="fixed bottom-[26px] right-[92px] z-[200] flex flex-col items-center gap-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <span className={`text-[11.5px] font-semibold text-white bg-[#0d1b3e] px-3 py-1 rounded-lg whitespace-nowrap transition-all duration-200
        ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4px] pointer-events-none'}`}>
        Request a Callback
      </span>

      {/* Button */}
      <button
        onClick={scrollToCallback}
        className="relative w-[54px] h-[54px] rounded-full bg-[#0d1b3e] flex items-center justify-center shadow-[0_4px_16px_rgba(13,27,62,0.4)] border-none cursor-pointer transition-all hover:bg-[#1a3260] hover:scale-[1.08]"
      >
        {/* Pulse ring */}
        <span className="animate-wapulse absolute inset-[-4px] rounded-full border-2 border-[#0d1b3e]"
          style={{ animationDelay: '0.5s' }} />

        <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-white">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </button>
    </div>
  )
}