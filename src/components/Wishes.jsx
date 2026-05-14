import "./Wishes.css";

const WISHES = [
  
  {
    emoji: '✨',
    title: 'අම්මා',
    text: `නමට පමණක්ම සීමා නොවූ
යථාර්ථවාදී අර්ථකථනය...
ඇස්පනාපිටම ජීවමානව වැඩ සිටින
සදාතනික ස්නේහයේ පිළිරුව...
කොහෙන් දෙන්නට තවත් උපමා
ඒ අනුපමේය ස්නේයට
එක් දිනකට පමණක්ම සීමා නොවූ
ස්නේහයේ නොසන්සිදෙන
සප්ත මහා සාගරය... ❤️❤️❤️

"දෑත දෑත බැඳ ඈ ලංවී මට පෑව ආදරේ...
පිංසාර ඇයගේ තුරුලේ නැළවේ රජුන් පවා..."`,
  },
  {
    emoji: '🌟',
    title: 'තාත්තා',
    text: `හිරු මඬලක් සේ කිරණ බෙදා දී
නුග සෙවණක් සේ සිසිල සදා දී
ජීවිතයේ බර උරින් දරා
තාත්තාමයි මහ සයුරක් වී පොළොව නිවාලන්නේ... ❤️❤️❤️

"ජීවිතේ ගැන මේ තරම් දේ දන්න හැටි පුදුමයී...
තාත්තේ මගෙ ලෝකයේ මහ වීරයා ඔබමයි..."`,
  },
  
]

export default function Wishes({ onNext }) {
  return (
    <section className="wishes-section">
      <header className="section-header">
        <span className="section-emoji animate-fade-in">🌟</span>
        <h2 className="section-title text-gradient animate-fade-in delay-100">
          Thank You Amma & Thaththa
        </h2>
        <p className="section-sub animate-fade-in delay-200">
          
        </p>
      </header>

      <div className="wishes-grid animate-fade-in delay-300">
        {WISHES.map((wish, i) => (
          <div key={i} className="wish-card glass-panel">
            <span className="wish-emoji">{wish.emoji}</span>
            <h3 className="wish-title">{wish.title}</h3>
            <p className="wish-text">{wish.text}</p>
          </div>
        ))}
      </div>

      <div className="wishes-footer animate-fade-in delay-700">
        <p className="wishes-toast">Here's to you, Amma & Thaththa 🥂</p>
        <button className="btn-primary" onClick={onNext}>
          One last thing... 💬
        </button>
      </div>
    </section>
  )
}