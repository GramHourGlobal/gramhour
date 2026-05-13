import { useEffect, useRef } from 'react';

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let mouse = { x: null as number | null, y: null as number | null, radius: 120 };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    setCanvasSize();

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      originX: Math.random() * canvas.width,
      originY: Math.random() * canvas.height,
      size: Math.random() < 0.6
        ? Math.random() * 1.5 + 0.5
        : Math.random() < 0.8
        ? Math.random() * 3 + 2
        : Math.random() * 5 + 4,
      color: Math.random() < 0.4
        ? '#FFD700'
        : Math.random() < 0.7
        ? '#C4943A'
        : '#F5E6A3',
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -(Math.random() * 0.5 + 0.1),
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      vx: 0,
      vy: 0
    })) as Array<{
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
      vx: number;
      vy: number;
      life?: number;
      isBlast?: boolean;
    }>;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    };

    const handleClick = (e: MouseEvent | { clientX: number; clientY: number }) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 / 15) * i;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: clickX,
          y: clickY,
          originX: clickX,
          originY: clickY,
          size: Math.random() * 4 + 1,
          color: Math.random() < 0.5 ? '#FFD700' : '#F5E6A3',
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          opacity: 0.9,
          pulse: 0,
          pulseSpeed: 0.05,
          vx: 0,
          vy: 0,
          life: 60,
          isBlast: true
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      handleClick({
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick as EventListener);
    window.addEventListener('touchstart', handleTouchStart as EventListener);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.isBlast) {
          p.life!--;
          p.opacity = p.life! / 60;
          p.x += p.speedX;
          p.y += p.speedY;
          p.speedX *= 0.95;
          p.speedY *= 0.95;

          if (p.life! <= 0) {
            particles.splice(i, 1);
            continue;
          }
        } else {
          if (mouse.x !== null) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
              const force = (mouse.radius - distance) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              p.vx += Math.cos(angle) * force * 2;
              p.vy += Math.sin(angle) * force * 2;
            }
          }

          p.vx *= 0.9;
          p.vy *= 0.9;
          p.x += p.speedX + p.vx;
          p.y += p.speedY + p.vy;

          if (p.y < -10) {
            p.y = canvas.height + 10;
            p.x = Math.random() * canvas.width;
          }
          if (p.x < -10) p.x = canvas.width + 10;
          if (p.x > canvas.width + 10) p.x = -10;
        }

        p.pulse += p.pulseSpeed;
        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.shadowBlur = p.size > 3 ? 10 : 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as EventListener);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        display: 'block'
      }}
    />
  );
}

export default ParticleField;
