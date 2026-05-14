import './Message.css'

export default function Message({ onNext }) {
  return (
    <section className="message-section">
      <header className="section-header">
        <span className="section-emoji animate-fade-in">💌</span>
        <h2 className="section-title text-gradient animate-fade-in delay-100">
          A Note for You
        </h2>
        <p className="section-sub animate-fade-in delay-200">From the heart</p>
      </header>

      <div className="msg-card glass-panel animate-fade-in delay-300">
        <p className="msg-to">To our King & Queen ,</p>

        <div className="msg-body">
          <p>
            Happy Anniversary! We just wanted to let you know how much we appreciate
            having both of you in our life. You bring so much happiness and light wherever
            you go, and I feel so lucky to be celebrating another year with you.
          </p>
          <p>
            අප ගැනම සිත සිතා වෙහෙසි
නොසැලී පිය නගන්නට අනාගතය වෙත නුඹලයි දිරිය දුන්නේ.
වෙහෙස නොබලා , වෙහෙසි
අප ජිවිත එළිය කළ හිරු සදු දෙදෙනා ඔබම විය.
          </p>
          <p>
            There is no word that can describe our happiness today. Congratulations, both of you, for spending another blessed year together. Happy 28th Anniversary!
          </p>
          <p className="msg-italic">
            ගෙවුනු මෙ අති වටිනා කාලයත් සමග ඔබ සැම සදා සුවපත් වේවා.
          </p>
        </div>

        <p className="msg-signature">With all our love 💕</p>
      </div>

      <div className="section-action animate-fade-in delay-700">
        <button className="btn-primary" onClick={onNext}>
          See Our Memories 📸
        </button>
      </div>
    </section>
  )
}