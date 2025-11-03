"use client";
import "./contact.css";
import { useState, useRef, useEffect } from "react";
export const metadata = {
  title: "Contact | Anastasia Babanska",
  description: "Get in touch with Anastasia Babanska — for exhibitions, collaborations or film scoring inquiries.",
};


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "music",
    message: "",
  });

  const containerRef = useRef(null);

  // 🌌 Звезды и кометы (фон)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    // --- звезды ---
    const starsCount = 160;
    for (let i = 0; i < starsCount; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.opacity = 0.2 + Math.random() * 0.9;
      s.style.width = s.style.height = Math.random() * 2 + "px";
      s.style.animationDelay = Math.random() * 6 + "s";
      container.appendChild(s);
    }

    // --- кометы ---
    const createComet = () => {
      const c = document.createElement("div");
      c.className = "comet";
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

    const cometInterval = setInterval(createComet, 3000 + Math.random() * 3000);

    // --- параллакс эффект ---
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      container.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      clearInterval(cometInterval);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // 🌠 Логика формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("✅ Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "music", message: "" });
  } else {
    alert("❌ Something went wrong. Please try again later.");
  }
};

  return (
    <section className="contact-section">
      {/* контейнер фона */}
      <div ref={containerRef} className="stars-bg" />

      <div className="contact-container">
        <h1 className="contact-title">CONTACT</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>E-MAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>SUBJECT</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="music">Music</option>
            <option value="art">Art</option>
            <option value="other">Other (concert, exhibition, etc.)</option>
          </select>

          <label>MESSAGE</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">SEND</button>
        </form>

      {/* иконки*/}
      <h2 className="follow-title">Subscribe:</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/bbnsk.art/" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>

          <a href="https://music.apple.com/za/artist/anastasia-babanska/1790922079" target="_blank" aria-label="Apple Music">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M12 2v11.55A4 4 0 1014 17V8h4V2h-6z"/>
          </svg>
          </a>

          <a href="https://www.youtube.com/@AnastasiaBabanska" target="_blank" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.7-.8-2.1-.9C17.4 2.6 12 2.6 12 2.6s-5.4 0-8.6.3c-.4 0-1.3.1-2.1.9C.2 4.5 0 6.2 0 6.2S0 8 0 9.7v4.6c0 1.7.2 3.5.3 3.5s.2 1.7.8 2.4c.8.8 1.8.8 2.3.9 1.7.1 7 .3 7 .3s5.4 0 8.6-.3c.4 0 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.2-1.8.2-3.5V9.7c0-1.7-.2-3.5-.2-3.5zM9.6 15.1V8.9l6 3.1-6 3.1z"/>
          </svg>
          </a>

          <a href="https://soundcloud.com/anastasia-babanska" target="_blank" aria-label="SoundCloud">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M17.5 10.8a3.2 3.2 0 00-3.08-2.3 3.8 3.8 0 00-1.48.31A5 5 0 006.1 11H6a2.8 2.8 0 00-.2 5.6H17.5a2.2 2.2 0 000-4.4z"/>
            <path d="M4.5 12.2a1 1 0 00-1 1v1.6h1V12.2z" opacity="0"/>
          </svg>
          </a>

          <a href="https://open.spotify.com/artist/70DqE4HUO60Ra1sBZztRIW" target="_blank" aria-label="Spotify">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M7.5 11.5c3.5-1.2 7.5-1 10.5.8l.9-1.3C16.7 7.5 11 6.8 7 8.3 6.8 8.4 6.6 8.6 7.5 11.5zM7.1 14.8c3.1-1.4 7-1.6 10.3-.3l.7-1.4c-3.7-1.5-8.4-1.2-11.6.3-.5.2-.6 1 .6 1.4zM6.8 17.8c2.8-1.6 7.2-1.9 9.8-.5l.6-1.5c-3-1.6-7.8-1.3-10.8.5-.6.3-.8 1.5.4 1.5z"/>
          </svg>
          </a>

          <a href="https://www.deezer.com/ru/artist/298563611" target="_blank" aria-label="Deezer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M3 15h1V9H3v6zm2 0h1V7H5v8zm2 0h1V5H7v10zm2 0h1V11H9v4zm2 0h1V3h-1v12zm2 0h1V13h-1v2zm2 0h1V9h-1v6z"/>
          </svg>
          </a>
        </div>


      </div>
    </section>
  );
}
