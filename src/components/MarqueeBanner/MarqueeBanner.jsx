import React, { useRef, useEffect, useState } from 'react';
import './MarqueeBanner.css';

const TEXT = 'Que se teje en WEBEO? -';
const SPEED = 50; // segundos
const BACKGROUND = '#97fd3f';
const COLOR = '#121212';
const HEIGHT = '60px';
const FONT_FAMILY = 'PirataOne-Regular, sans-serif';
const FONT_SIZE = '2.2rem';

function MarqueeBanner() {
  const marqueeRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(20);

  useEffect(() => {
    // Calcular cuántas repeticiones hacen falta para llenar el ancho
    const calcRepeats = () => {
      if (!marqueeRef.current) return;
      const containerWidth = marqueeRef.current.offsetWidth;
      // Crear un span temporal para medir el ancho del texto
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.fontFamily = FONT_FAMILY;
      tempSpan.style.fontSize = FONT_SIZE;
      tempSpan.innerText = TEXT;
      document.body.appendChild(tempSpan);
      const textWidth = tempSpan.offsetWidth;
      document.body.removeChild(tempSpan);
      // Aseguramos que el grupo ocupe al menos 2 veces el ancho del contenedor
      const count = Math.ceil((containerWidth * 2) / textWidth) + 1;
      setRepeatCount(count);
    };
    calcRepeats();
    window.addEventListener('resize', calcRepeats);
    return () => window.removeEventListener('resize', calcRepeats);
  }, []);

  const groupStyle = {
    animationDuration: `${SPEED}s`,
  };

  return (
    <div
      className="marquee-banner-container"
      ref={marqueeRef}
      style={{ background: BACKGROUND, color: COLOR, height: HEIGHT, fontFamily: FONT_FAMILY }}
    >
      <div className="marquee-banner-single" style={groupStyle}>
        {Array.from({ length: repeatCount }).map((_, i) => (
          <span
            key={`text-${i}`}
            style={{ color: COLOR, fontFamily: FONT_FAMILY, fontSize: FONT_SIZE }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeBanner; 