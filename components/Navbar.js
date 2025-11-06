"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../app/globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // для отслеживания открытого подменю

  const links = [
    { name: "Home", href: "/" },
    { name: "Paintings", href: "/gallery" },
    {
      name: "Streaming platforms:",
      sublinks: [
        { name: "YouTube", href: "https://www.youtube.com/@AnastasiaBabanska" },
        { name: "SoundCloud", href: "https://soundcloud.com/anastasia-babanska" },
        { name: "Apple Music", href: "https://music.apple.com/za/artist/anastasia-babanska/1790922079" },
        { name: "Spotify", href: "https://open.spotify.com/artist/70DqE4HUO60Ra1sBZztRIW" },
        { name: "Deezer", href: "https://www.deezer.com/ru/artist/298563611" },
        { name: "BandCamp", href: "https://anastasiababanska.bandcamp.com/" },
        { name: "Amazon Music", href: "https://www.amazon.fr/music/player/artists/B0DT7PX93G/anastasia-babanska" },

      ],
    },
    { name: "Instagram", href: "https://www.instagram.com/bbnsk.art/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Кнопка-бургер */}
      <div className="navbar-burger">
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`burger-btn ${isOpen ? "open" : ""}`}
        >
          {!isOpen ? (
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#7CE7FF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="menu-overlay"
          >
            <div className="menu-background" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="menu-panel"
            >
              <nav className="menu-links">
                {links.map((link, i) => (
                  <div key={link.name}>
                    {/* Если есть подменю */}
                    {link.sublinks ? (
                      <div>
                        <motion.button
                          className="submenu-toggle"
                          onClick={() =>
                            setOpenSubmenu(openSubmenu === link.name ? null : link.name)
                          }
                          initial={{ x: -6, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.04, duration: 0.18 }}
                        >
                          {link.name}
                        </motion.button>

                        <AnimatePresence>
                          {openSubmenu === link.name && (
                            <motion.ul
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.2 }}
                              className="submenu"
                            >
                              {link.sublinks.map((sub) => (
                                <li key={sub.name}>
                                  <a
                                    href={sub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sub.name}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        href={link.href}
                        target={link.href.startsWith("/") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        initial={{ x: -6, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.04, duration: 0.18 }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </motion.a>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
