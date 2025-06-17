import React, { useRef, useEffect, useCallback, useState } from "react";

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const initializeMatrix = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 300;

    const fontSize = 14;
    ctx.font = `${fontSize}px monospace`;
    const columns = Math.floor(canvas.width / fontSize);

    dropsRef.current = [];
    for (let i = 0; i < columns; i++) {
      dropsRef.current[i] = Math.random() * canvas.height / fontSize;
    }

    const characters = "01";
    const numChars = characters.length;
    let frame = 0;

    const animationLoop = () => {
      frame++;

      if (frame % 2 === 0) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";

        for (let i = 0; i < dropsRef.current.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * numChars));
          ctx.fillText(text, i * fontSize, dropsRef.current[i] * fontSize);

          if (dropsRef.current[i] * fontSize > canvas.height && Math.random() > 0.975) {
            dropsRef.current[i] = 0;
          }

          dropsRef.current[i] += 1;
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animationLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(animationLoop);
  }, []);

  useEffect(() => {
    if (isHovered) {
      initializeMatrix();
    } else if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  }, [isHovered, initializeMatrix]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
    >
      <div
        className={`relative w-[400px] h-[300px] rounded-lg transition-all duration-500 ease-in-out ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <canvas ref={canvasRef} className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default MatrixBackground;
