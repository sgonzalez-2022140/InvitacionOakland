export default function Letter({ isOpen, onToggle, children }) {
  return (
    <div
      className="letter-wrap"
      onClick={onToggle}
      role="button"
      aria-pressed={isOpen}
    >
      <div className={`envelope ${isOpen ? "open" : ""}`}>
        <div className="flap" />
        <div className="pocket" />

        {isOpen && (
          <div className="paper paper--up">
            {children}
          </div>
        )}

        {/* Sello desactivado por ahora */}
        {false && (
          <div className="envelope-front">
            <div className="seal">✉️</div>
            <div className="front-lines">
              <span />
              <span />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
