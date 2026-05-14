import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './PhotoCarousel.css'

// Replace these paths with your actual photo paths
const PHOTOS = [
  { src: '/photos/1.jpg', caption: 'Memory 1' },
  { src: '/photos/2.jpg', caption: 'Memory 2' },
  { src: '/photos/3.jpg', caption: 'Memory 3' },
  { src: '/photos/4.jpg', caption: 'Memory 4' },
  { src: '/photos/5.jpg', caption: 'Memory 5' },
]

export default function PhotoCarousel({ onNext }) {
  const [idx, setIdx] = useState(0)
  const total = PHOTOS.length

  const goTo = useCallback((i) => {
    setIdx((i + total) % total)
  }, [total])

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => goTo(idx + 1), 5000)
    return () => clearInterval(timer)
  }, [idx, goTo])

  return (
    <section className="gallery-section">
      <header className="section-header">
        <span className="section-emoji animate-fade-in">📸</span>
        <h2 className="section-title text-gradient animate-fade-in delay-100">
         Beautiful Memories
        </h2>
        <p className="section-sub animate-fade-in delay-200">
          Moments to treasure forever
        </p>
      </header>

      <div className="carousel-outer animate-fade-in delay-300">
        {/* Viewport */}
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {PHOTOS.map((photo, i) => (
              <div key={i} className="carousel-slide">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="carousel-img"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

          {/* Prev/next */}
          <button
            className="carousel-btn left"
            onClick={() => goTo(idx - 1)}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="carousel-btn right"
            onClick={() => goTo(idx + 1)}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Counter badge */}
          <div className="carousel-counter">
            {idx + 1} / {total}
          </div>
        </div>

        {/* Caption */}
        <p className="carousel-caption">{PHOTOS[idx].caption}</p>

        {/* Dots */}
        <div className="carousel-dots" role="tablist">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              className={`carousel-dot ${i === idx ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="section-action animate-fade-in delay-700">
        <button className="btn-primary" onClick={onNext}>
          wishes 🌟
        </button>
      </div>
    </section>
  )
}