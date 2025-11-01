"use client";
import { useEffect, useRef } from "react";

export default function LightBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      width / 1.5
    );
    gradient.addColorStop(0, "rgba(50, 50, 255, 0.2)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.9)");

    function draw() {
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    draw();
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      draw();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
