import { useEffect, useState } from "react";

const lines = [
  "Holaaa"
];

export default function Invitation() {
  const YT_ID = "KJASEljQAlw"; // https://youtu.be/KJASEljQAlw

  return (
    <div className="invite-window">
      <div className="window-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <div className="window-title">Invitación</div>
      </div>

      <div className="window-body">
        <h2>Te invito a patinar 🛼</h2>

        <ul className="invite-list">
          <li><strong>Lugar:</strong> Oakland Place</li>
          <li><strong>Día:</strong> Sábado</li>
          <li><strong>Hora:</strong> 4:00–5:00 PM</li>
        </ul>

        {/* Video en la parte de abajo */}
        <div className="video-wrap">
          <iframe
            className="video-frame"
            src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1`}
            title="Plan para patinar en Oakland Place"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
