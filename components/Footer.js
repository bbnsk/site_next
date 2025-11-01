export default function Footer() {
  return (
    <footer className="footer mt-24 py-12 text-center bg-black ">
      <div className="relative z-10">

        <div className="flex justify-center gap-10">
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Home
          </a>
          <a
            href="/gallery"
            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Paintings
          </a>
          <a
            href="https://www.youtube.com/@AnastasiaBabanska"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/bbnsk.art/"
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Instagram
          </a>
          <a
            href="https://music.apple.com/za/artist/anastasia-babanska/1790922079"
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            AppleMusic
          </a>
          <a
            href="https://open.spotify.com/artist/70DqE4HUO60Ra1sBZztRIW"
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Spotify
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
        <div className="footer">
          <p>© 2025 Anastasia Babanska — All rights reserved</p>
        </div>
      </div>
      
    </footer>
  );
}
