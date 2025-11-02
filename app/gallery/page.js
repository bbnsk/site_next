"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "./gallery.css"; // импортируем стили

export default function Galerie() {
  const images = [
    "/images/1.jpg",
    "/images/4.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/6.jpg",
    "/images/9.jpg",
    "/images/2.jpg",
    "/images/5.jpg",
    "/images/3.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
  ];

  return (
    <main className="galerie-page">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="galerie-title"
      >
        Gallery
      </motion.h1>

      {/* Галерея — на весь экран */}
      <div className="galerie-grid">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="galerie-item"
          >
            <Image
              src={src}
              alt={`Artwork ${i + 1}`}
              width={1000}
              height={1000}
              className="galerie-image"
            />
          </motion.div>
        ))}
      </div>
      
{/* --- КНОПКИ ВНИЗУ --- */}

      {/* иконки*/}
      <h2 className="tittle-insta">All relevants on my instagram:</h2>
        <div className="gallery-icon">
          <a href="https://www.instagram.com/bbnsk.art/" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <circle cx="17.5" cy="4.5" r="0.5" fill="currentColor" />
            </svg>
          </a>

        </div>


       </main>
  );
}
