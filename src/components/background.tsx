'use client';

import { useEffect, useRef } from 'react';

interface Print {
  x: number;
  y: number;
  angle: number;
  isLeft: boolean;
  alpha: number;
  scale: number;
}

export default function BootprintBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let prints: Print[] = [];

    const lastPos = { x: 0, y: 0, initialized: false };
    let isLeftStep = true;
    const stepDistance = 45;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawLunarBootprint = (
      ctx: CanvasRenderingContext2D, 
      x: number, 
      y: number, 
      angle: number, 
      isLeft: boolean, 
      alpha: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle + Math.PI / 2);
      
      const strokeColor = document.documentElement.classList.contains('dark')
        ? `rgba(255, 255, 255, ${alpha * 0.18})`
        : `rgba(0, 0, 0, ${alpha * 0.12})`;

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.moveTo(-10, -22);
      ctx.quadraticCurveTo(0, -26, 10, -22);
      ctx.quadraticCurveTo(12, -4, 9, 8);
      ctx.quadraticCurveTo(7, 24, 0, 24);
      ctx.quadraticCurveTo(-7, 24, -9, 8);
      ctx.quadraticCurveTo(-12, -4, -10, -22);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      for (let offset = -16; offset <= 16; offset += 4) {
        const widthFactor = offset > 4 ? 6 : 9;
        ctx.moveTo(-widthFactor, offset);
        ctx.lineTo(widthFactor, offset);
      }
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = prints.length - 1; i >= 0; i--) {
        const p = prints[i];

        p.alpha -= 0.0018; 

        if (p.alpha <= 0) {
          prints.splice(i, 1);
          continue;
        }

        drawLunarBootprint(ctx, p.x, p.y, p.angle, p.isLeft, p.alpha);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (!lastPos.initialized) {
        lastPos.x = currentX;
        lastPos.y = currentY;
        lastPos.initialized = true;
        return;
      }

      const dx = currentX - lastPos.x;
      const dy = currentY - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > stepDistance) {
        const angle = Math.atan2(dy, dx);

        const sideOffset = 14; 
        const offsetX = Math.cos(angle + Math.PI / 2) * (isLeftStep ? -sideOffset : sideOffset);
        const offsetY = Math.sin(angle + Math.PI / 2) * (isLeftStep ? -sideOffset : sideOffset);

        prints.push({
          x: currentX + offsetX,
          y: currentY + offsetY,
          angle: angle,
          isLeft: isLeftStep,
          alpha: 1.0,
          scale: 1.0
        });

        isLeftStep = !isLeftStep;
        
        lastPos.x = currentX;
        lastPos.y = currentY;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}