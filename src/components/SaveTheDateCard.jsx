import { useEffect, useState } from "react";
import "../styles/SaveTheDateCard.css";

export default function SaveTheDateCard() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");

  // Loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle tap to open + SAFE SOFT MUSIC FADE-IN
  const handleOpen = () => {
    setOpen(true);
    const audio = document.getElementById("bg-music");

    if (audio) {
      audio.muted = false;
      audio.volume = 0;

      let v = 0;
      const fade = setInterval(() => {
        v = Math.min(v + 0.05, 1);
        audio.volume = v;

        if (v >= 1) {
          clearInterval(fade);
        }
      }, 150);
    }
  };

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div className="loading-screen">
          <h1 className="initials">B & F</h1>
        </div>
      )}

      {!loading && (
        <div className="save-date-wrapper">
          {/* LANGUAGE TOGGLE */}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
          >
            {lang === "en" ? "Français" : "English"}
          </button>

          {/* Background Video */}
          <video className="bg-video" autoPlay loop muted playsInline>
            <source src="/videos/save-bg.mp4" type="video/mp4" />
          </video>

          {/* Purple overlay */}
          <div className="overlay"></div>

          {/* Background music */}
          <audio
            id="bg-music"
            src="/audio/save-the-date-music.mp3"
            autoPlay
            loop
            muted
          />

          {/* ENVELOPE ONLY */}
          <div
            className={`envelope-container ${open ? "open" : ""}`}
            onClick={handleOpen}
          >
            {!open && <p className="tap-text">Tap to Open</p>}

            <img
              src="/images/envelope.png"
              className="envelope"
              alt="envelope"
            />
          </div>

          {/* CARD */}
          <div className={`card ${open ? "show" : ""}`}>
            {/* GOLD RING ICON */}
            <img src="/images/ring-icon.png" className="ring-icon" alt="ring" />

            {/* FLORAL FRAME */}
            <img
              src="/images/floral-frame.png"
              className="floral-frame"
              alt="frame"
            />

            <div className="card-content">
              <h1 className="simple-text">
                {lang === "en" ? "Save The Date" : "Réservez la Date"}
              </h1>

              <h2 className="simple-text">Blandine & Fouad</h2>

              <p className="simple-text">
                {lang === "en" ? "June 20, 2026" : "20 Juin 2026"}
              </p>

              <p className="simple-text">
                {lang === "en"
                  ? "Statesville, NC"
                  : "Statesville, Caroline du Nord"}
              </p>

              <p className="simple-text">
                {lang === "en"
                  ? "Two hearts, one destiny."
                  : "Deux cœurs, une destinée."}
              </p>

              <p className="simple-text">
                {lang === "en"
                  ? "More information coming soon"
                  : "Plus d’informations bientôt"}
              </p>

              <p className="simple-text">
                {lang === "en"
                  ? "Design and code by the bride"
                  : "Design et code par la mariée"}
              </p>

              <a
                href="/images/save-the-date-card.png"
                download="SaveTheDate.png"
              >
                <button className="download-btn fade-item">
                  {lang === "en"
                    ? "Download Save‑the‑Date"
                    : "Télécharger la carte"}
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
