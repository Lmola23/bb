import React, { useState, useEffect, useRef } from 'react';
import './CardLove.css';

interface LoveCardProps {
  message: string;
}

const LoveCard: React.FC<LoveCardProps> = ({ message }) => {
  const [revealedText, setRevealedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showHeart, setShowHeart] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Iniciar la música con la primera letra
      if (index === 1 && audioRef.current) {
        audioRef.current.play().catch(error => {
          console.warn("La reproducción automática de música fue bloqueada por el navegador.", error);
        });
      }

      if (index < message.length) {
        setRevealedText(prev => prev + message[index]);
        index++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
        // Mostrar el corazón después de un breve retraso
        setTimeout(() => setShowHeart(true), 500);
      }
    }, 100); // Ralentizar la velocidad de escritura para un efecto más dramático

    return () => clearInterval(interval);
  }, [message]);

  // Efecto para el auto-scroll
  useEffect(() => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollTop = cardContainerRef.current.scrollHeight;
    }
  }, [revealedText]);

  return (
    <div className="card-container" ref={cardContainerRef}>
      {/* Reemplaza 'path/to/your/song.mp3' con la ruta a tu canción */}
      <audio ref={audioRef} src="/music/SONG.mp3" loop />

      <p className="message-text">
        {revealedText}
        {showCursor && <span className="blinking-cursor">|</span>}
      </p>

      {/* Icono de Corazón SVG */}
      <svg 
        className={`heart-icon ${showHeart ? 'visible' : ''}`} 
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  );
};

export default LoveCard;