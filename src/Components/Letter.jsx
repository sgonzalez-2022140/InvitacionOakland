export default function Letter({ isOpen, onToggle, children }) {
  return (
    <div className="letter-wrap" onClick={onToggle} role="button" aria-pressed={isOpen}>
      <div className={`envelope ${isOpen ? "open" : ""}`}>
        <div className="flap" />
        <div className="pocket" />

        {/* Estampita decorativa (emoji) */}
       {!isOpen && (
  <div className="sticker" aria-hidden="true">
    <span className="sticker-emoji">🕺</span>
  </div>
)}

        {isOpen && (
          <div className="paper paper--up">
            {children}
          </div>
        )}

        {/* sello original desactivado */}
        {false && (
          <div className="envelope-front">
            <div className="seal">✉️</div>
            <div className="front-lines"><span/><span/></div>
          </div>
        )}
      </div>
    </div>
  );
}
