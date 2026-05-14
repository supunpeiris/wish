import { Heart, RotateCcw } from 'lucide-react'
import './Feedback.css'

export default function Feedback({ onRestart }) {
  return (
    <section className="feedback-section">
      <header className="section-header">
        <span className="section-emoji animate-fade-in">🙏</span>
        <h2 className="section-title text-gradient animate-fade-in delay-100">
          ස්තූතියි අම්මේ, තාත්තේ!
        </h2>
        <p className="section-sub animate-fade-in delay-200">
          ඔබ අප වෙනුවෙන් කළ ඒ සියල්ලටම...
        </p>
      </header>

      <div className="feedback-card glass-panel animate-fade-in delay-300" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
        <div className="feedback-icon-box" style={{ margin: '0 auto 1.5rem auto' }}>
          <Heart size={36} color="var(--rose-dark)" fill="var(--rose-pale)" />
        </div>

        <p className="wish-text" style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-deep)', whiteSpace: 'pre-line' }}>
          {`අපේ ජීවිත ආලෝකමත් කරන්නට ඔබ දෙපළ කළ ඒ අපමණ කැපවීම්වලට, 
          දුන් නිමාවක් නැති ආදරයට සහ සෙවනැල්ලක් සේ දුන් රැකවරණයට 
          අපගේ හදපිරි පුණ්‍යානුමෝදනාව සහ ස්තූතිය!

          ඔබගේ මේ සුන්දර විවාහ සංවත්සරය තවත් බොහෝ කාලයක් 
          සතුටින්, සාමයෙන් සහ නිදුක් නීරෝගීව සමරන්නට ලැබේවා යැයි 
          අපි හදවතින්ම ප්‍රාර්ථනා කරමු!`}
        </p>
        
        <p style={{ marginTop: '2.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--rose-dark)', fontStyle: 'italic' }}>
          ආදරණීය දූ දරුවන්ගෙන් 💖
        </p>
      </div>

      <button className="btn-restart animate-fade-in delay-700" onClick={onRestart} style={{ marginTop: '1.5rem' }}>
        <RotateCcw size={16} style={{ marginRight: '8px' }} /> Start Over
      </button>
    </section>
  )
}
