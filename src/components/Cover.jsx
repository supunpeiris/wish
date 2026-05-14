import { useState } from 'react'
import { Gift } from 'lucide-react'
import './Cover.css'

export default function Cover({ onOpen }) {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    setOpening(true)
    setTimeout(onOpen, 900)
  }

  return (
    <div className="cover-wrapper">
      <div className={`cover-card glass-panel animate-fade-in ${opening ? 'fade-out' : ''}`}>
        <div className="gift-orb animate-float delay-100">
          <Gift size={58} strokeWidth={1.4} color="var(--rose-dark)" />
        </div>

        <h1 className="cover-title text-gradient animate-fade-in delay-200">
          Happy Anniversary
        </h1>
        <h2 className="cover-name animate-fade-in delay-300">
          Amma & Thaththa ❤️😘
        </h2>
        <p className="cover-hint animate-pulse delay-500">
          ✨ We have a little surprise for you ✨
        </p>

        <button
          className="btn-primary cover-btn animate-fade-in delay-700"
          onClick={handleOpen}
        >
          Tap to Open 🎁
        </button>
      </div>
    </div>
  )
}