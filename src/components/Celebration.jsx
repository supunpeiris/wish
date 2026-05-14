import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import PhotoCarousel from './PhotoCarousel';
import './Celebration.css';

export default function Celebration() {
  useEffect(() => {
    // Fire confetti when component mounts
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb4c8', '#ffccd5', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb4c8', '#ffccd5', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="celebration-container animate-fade-in">
      <header className="celebration-header">
        <h1 className="text-gradient animate-float">Happy Anniversary!</h1>
      </header>

      <section className="message-section glass-panel delay-300 animate-fade-in">
        <h2 className="message-title text-gradient">To my most precious queen & king,</h2>
        <div className="message-content">
          <p className="message-body">
            Happy Anniversary! We just wanted to let you know how much we appreciate having both of you in our life. You bring so much happiness and light wherever you go, and we feel so lucky to be celebrating another year with you. 
          </p>
          <p className="message-body">
            I hope your special day is filled with laughter, love, and all your favorite things. May this year ahead bring you nothing but joy, success, and everything your heart desires.
          </p>
          <p>You deserve the very best!</p>
          <p className="message-signature">With all our love,</p>
        </div>
      </section>

      <section className="carousel-section delay-700 animate-fade-in">
        <h3 className="carousel-title"> Beautiful Memories</h3>
        <PhotoCarousel />
      </section>
    </div>
  );
}
