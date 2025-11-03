// components/About.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import Image from "next/image";
import { Weight } from "lucide-react";



export default function About() {
  // список картинoк (меняй тут — public/images/*.jpg)
  const images = [
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpg",
    "/images/24.jpg",
    "/images/25.jpg",
    "/images/27.jpg",
    "/images/28.jpg",
    "/images/29.jpg",
    "/images/32.jpg",
    "/images/33.jpg",
    "/images/34.jpg"
  ];

  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null); // для звёзд
  const trackRef = useRef(null);

  // ------ Автопереключение (интервал) ------
  useEffect(() => {
    // автоплей
    autoplayRef.current = setInterval(() => {
      setCurrent((s) => (s + 1) % images.length);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [images.length]); // images — константа внутри компонента, безопасно

  // ------ touch/mouse swipe handlers ------
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let deltaX = 0;
    let isDown = false;

    const onStart = (e) => {
      clearInterval(autoplayRef.current); // стопим автоплей при взаимодействии
      isDown = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      track.style.transition = "none";
    };
    const onMove = (e) => {
      if (!isDown) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      deltaX = x - startX;

      track.style.transform = `translateX(calc(-${current * 100}% + ${deltaX}px))`;
    };
    const onEnd = () => {
      if (!isDown) return;
      isDown = false;
      track.style.transition = "transform 450ms cubic-bezier(.22,.9,.3,1)";
      const threshold = track.parentElement.clientWidth * 0.2;
      if (Math.abs(deltaX) > threshold) {
        if (deltaX < 0) setCurrent((s) => Math.min(s + 1, images.length - 1));
        else setCurrent((s) => Math.max(s - 1, 0));
      } else {
        // откат
        track.style.transform = `translateX(-${current * 100}%)`;
      }
      // восстановим автоплей (немного позже)
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrent((s) => (s + 1) % images.length);
      }, 4000);
      deltaX = 0;
    };

    // события
    track.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    track.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);

    return () => {
      track.removeEventListener("mousedown", onStart);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      track.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [current, images.length]);

  // ------ синхронизируем translate при смене current ------
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "transform 650ms cubic-bezier(.22,.9,.3,1)";
    track.style.transform = `translateX(-${current * 100}%)`;
  }, [current]);

  // ------ stars + comets background (full width) ------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    // звезды
    const starsCount = 160;
    for (let i = 0; i < starsCount; i++) {
      const s = document.createElement("div");
      s.className = "ab-star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.opacity = 0.2 + Math.random() * 0.9;
      s.style.width = s.style.height = Math.random() * 2 + "px";
      container.appendChild(s);
    }

    // кометы интервал
    const createComet = () => {
      const c = document.createElement("div");
      c.className = "ab-comet";
      c.style.top = Math.random() * 50 + "%";
      container.appendChild(c);

      const endX = container.clientWidth + 200;
      const endY = parseFloat(c.style.top) + 200 + Math.random() * 200;

      c.animate(
        [
          { transform: `translateX(-200px)`, opacity: 1 },
          { transform: `translate(${endX}px, ${endY}px)`, opacity: 0 },
        ],
        { duration: 3500 + Math.random() * 3000, easing: "ease-out" }
      );

      setTimeout(() => c.remove(), 6000);
    };

    const ci = setInterval(createComet, 3000 + Math.random() * 3000);

    // parallax
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      container.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      clearInterval(ci);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section id="about" className="ab-about">
      {/* stars background full width */}
      <div ref={containerRef} className="ab-stars-container" />

      <div className="ab-inner">
        <div className="ab-left">
          <h2 className="ab-title">Welcome to my universe</h2>
          <p className="ab-desc">
            <span style={{ color: "#71f6ffff", }}>Anastasia Babanska</span> — composer and artist from Kyiv, Ukraine, now based in France.
            </p>
            <p className="ab-desc">
            Through piano music and paintings, I share fragments of my inner world — my stories, emotions, and moments in time.
            My music carries a romantic melancholy and anxiety, while my paintings reflect the surreal tension of today’s world.
          </p>
          <a 
            className="contact-btn"
            href="./contact"
            rel="noopener noreferrer"
          >
            CONTACT
          </a>
        </div>

        <div className="ab-carousel">
          <div className="ab-track-viewport">
            <div ref={trackRef} className="ab-track">
              {images.map((src, i) => (
                <div className="ab-slide" key={i}>
                  <Image
                    src={src}
                    alt={`art ${i}`}
                    className="ab-slide-img"
                    width={800}
                    height={600}
                  />

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
