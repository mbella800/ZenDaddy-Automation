'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Detect mobile
    const isMobile = window.innerWidth < 768;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = isMobile ? 20 : 16; // Larger on mobile = fewer columns
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Drastically reduce columns on mobile (every 2nd or 3rd column)
    const columnStep = isMobile ? 3 : 1;
    
    for (let i = 0; i < columns; i += columnStep) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;
    let lastTime = 0;
    const fps = isMobile ? 15 : 24; // Much lower FPS on mobile
    const frameInterval = 1000 / fps;

    function draw(currentTime: number) {
      animationId = requestAnimationFrame(draw);
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      
      lastTime = currentTime - (deltaTime % frameInterval);
      
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i += columnStep) {
        if (drops[i] === undefined) continue;
        
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    animationId = requestAnimationFrame(draw);

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20"
      style={{ 
        zIndex: 1,
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    />
  );
}
