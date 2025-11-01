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
<div className="flex justify-center gap-6 mt-16">
    <a
    href="https://www.instagram.com/bbnsk.art/"
    target="_blank"
    rel="noopener noreferrer"
    className="banner-btn listen-all-btn px-8 py-4 text-lg rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center"
    style={{ display: "inline-flex", width: 300, margin: 30, marginBottom: 10 }}
  >
    Instagram
  </a>

</div>

       </main>
  );
}
