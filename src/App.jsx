import { useState, useCallback, useRef } from 'react'
import { Music, Music2 } from 'lucide-react'
import Cover      from './components/Cover'
import Message    from './components/Message'
import PhotoCarousel from './components/PhotoCarousel'
import Wishes      from './components/Wishes'
import Feedback    from './components/Feedback'
import Confetti    from './components/Confetti'
import './App.css'

const SECTIONS = ['cover', 'message', 'gallery', 'wishes', 'feedback']

export default function App() {
  const [sectionIdx, setSectionIdx] = useState(0)
  const [fireConfetti, setFireConfetti] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  const [hearts] = useState(() =>
    [...Array(18)].map(() => ({
      left:            `${Math.random() * 100}%`,
      fontSize:        `${14 + Math.random() * 18}px`,
      animationDelay:  `${Math.random() * 8}s`,
      animationDuration:`${7 + Math.random() * 8}s`,
    }))
  )

  const goTo = useCallback((i) => {
    setSectionIdx(Math.max(0, Math.min(SECTIONS.length - 1, i)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleOpen = useCallback(() => {
    setFireConfetti(true)
    if (audioRef.current) {
      audioRef.current.volume = 1.0
      audioRef.current.play().catch(e => console.log("Audio play failed:", e))
    }
    setTimeout(() => {
      goTo(1)
      setFireConfetti(false)
    }, 700)
  }, [goTo])

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const isOpened = sectionIdx > 0

  return (
    <main className="app-container">
      {/* Music Toggle */}
      {isOpened && (
        <button 
          className="music-toggle glass-panel animate-fade-in" 
          onClick={toggleMusic}
          aria-label={isMuted ? "Play Music" : "Pause Music"}
        >
          {isMuted ? <Music2 size={24} /> : <Music size={24} />}
        </button>
      )}

      {/* Floating hearts */}
      <div className="hearts-background" aria-hidden="true">
        {hearts.map((style, i) => (
          <div key={i} className="floating-heart" style={style}>
            {['♥', '❤', '♡'][i % 3]}
          </div>
        ))}
      </div>

      {/* Confetti burst */}
      {fireConfetti && <Confetti />}

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music/New Recording 10.mp3"
        loop
        preload="auto"
      />

      {/* Content */}
      <div className="content-layer">
        {sectionIdx === 0 && <Cover onOpen={handleOpen} />}
        {sectionIdx === 1 && <Message onNext={() => goTo(2)} />}
        {sectionIdx === 2 && <PhotoCarousel onNext={() => goTo(3)} />}
        {sectionIdx === 3 && <Wishes onNext={() => goTo(4)} />}
        {sectionIdx === 4 && <Feedback onRestart={() => goTo(0)} />}
      </div>

      {/* Bottom nav */}
      {isOpened && (
        <nav className="bottom-nav" aria-label="Section navigation">
          <button
            className="nav-arrow"
            onClick={() => goTo(sectionIdx - 1)}
            disabled={sectionIdx <= 1}
            aria-label="Previous section"
          >
            ‹
          </button>
          <div className="nav-dots">
            {SECTIONS.slice(1).map((_, i) => (
              <button
                key={i}
                className={`nav-dot ${i + 1 === sectionIdx ? 'active' : ''}`}
                onClick={() => goTo(i + 1)}
                aria-label={`Go to section ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="nav-arrow"
            onClick={() => goTo(sectionIdx + 1)}
            disabled={sectionIdx >= SECTIONS.length - 1}
            aria-label="Next section"
          >
            ›
          </button>
        </nav>
      )}
    </main>
  )
}