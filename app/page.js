"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LightBackground from "../components/LightBackground";
import About from "../components/about";
import PianoBackground from "../components/PianoBackground";


export default function Home() {
  const album1Videos = [
    "MYzN6xJd81w",
    "rG0g_VDfSPA",
    "n-MwVGaOzcM",
    "RcZonGVKCFc",
    "sRczCdG4yZg",
    "E-cWQab3PMc",
    "pkAHDgKiCbw",
  ];

  const album2Videos = [
    "lpkvEidyfds", 
    "XLgPHQBl3J0"
  ];

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/7.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // helper to scroll to the extra block smoothly
  const revealMore = () => {
    setShowMore(true);
    // give a tick to let layout update then scroll
    setTimeout(() => {
      const target = document.querySelector(".album1-more");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };
// redeploy test

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden bg-black text-white">
      <LightBackground />

      {/* --- СЛАЙДЕР / БАННЕР --- */}
      <section
        id="slider"
        className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden z-0"
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1
            className="text-8xl md:text-9xl font-extrabold tracking-widest"
            style={{
              color: "white",
              textShadow: `
                0 0 30px rgba(255,255,255,0.9),
                0 0 60px rgba(180,220,255,0.8),
                0 0 100px rgba(150,200,255,0.6)
              `,
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.25em",
            }}
          >
            Bbnsk
          </h1>
        </motion.div>

        <a
          href="/gallery"
          className="banner-btn"
          rel="noopener noreferrer"
        >
          Open the gallery
        </a>
        
      </section>

      {/* --- ABOUT --- */}
      <About />

      {/* --- МУЗЫКА --- */}
          <section
            id="musique"
            className="relative w-full text-center py-0 overflow-visible"
            style={{ paddingTop: "0vh" }}
          >
            <div
              className="relative uppercase w-full flex items-center justify-center text-white text-6xl md:text-7xl font-bolder tracking-[0.25em] z-20 my-8"

              style={{
                background: "rgba(77, 77, 77, 0.55)",
                boxShadow: "0 0 25px rgba(73, 73, 73, 0.4)",
                height: "20vh",
                textShadow: `
                  0 0 20px rgba(0,191,255,0.9),
                  0 0 40px rgba(0,191,255,0.6),
                  0 0 60px rgba(0,191,255,0.3)
                `,
                fontFamily: "'Cinzel', serif",
                fontWeight: "bold",
                fontSize: "clamp(2.5rem, 6vw, 6rem)",   // ✅ адаптивный размер
                letterSpacing: "clamp(0.15em, 0.5vw, 0.3em)", // ✅ адаптивный интервал между буквами
                marginTop: 0,
              }}

            >
              MY ALBUMS
            </div>


        <PianoBackground />

        <div className="albums space-y-20 px-6 py-16 relative z-10 max-w-6xl mx-auto">
          {/* Album 1 */}
          <div className="album1 relative">
            <h3 className="text-3xl mb-6 uppercase tracking-wide text-gray-200">2. &quot;Rebirth&quot;</h3>

            {/* Верхний грид: только первые 4 видео */}
            <div className="media-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center">
              {album1Videos.slice(0, 2).map((id) => (
                <div key={id} className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube video ${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-lg shadow-lg"
                  ></iframe>
                </div>
              ))}
            </div>

            {/* Кнопка "Voir plus" */}
            <button
              type="button"
              className={`scroll-btn-full ${showMore ? "open" : ""}`}
              onClick={() => setShowMore(!showMore)}
              aria-expanded={showMore}
            >
              {showMore ? "↑ Less" : "↓ More"}
            </button>

            {/* Скрытые видео (разворачиваются) */}
            <div className={`album1-more mt-8 ${showMore ? "show" : ""}`}>
              <div className="media-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center">
                {album1Videos.slice(2, 7).map((id) => (
                  <div key={id} className="video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube video ${id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full aspect-video rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Album 2 */}
          <div className="album2">
            <h3 className="text-3xl mb-6 uppercase tracking-wide text-gray-200">
              2. &quot;The Glass Bead Game&quot; <span style={{ color: "#FBBF24" }}>(in progress)</span>
            </h3>
            <div className="media-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center">
              {album2Videos.map((id) => (
                <div key={id} className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube video ${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-lg shadow-lg"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="listen-btn-wrap">
          <a
            href="https://www.youtube.com/@AnastasiaBabanska"
            target="_blank"
            rel="noopener noreferrer"
            className="listen-all-btn-music mt-8 inline-block"
          >
            Listen all albums
          </a>
        </div>
      </section>
      
    </main>
  );
}
