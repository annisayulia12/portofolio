export default function BackgroundLayout({ children }: any) {
  const dots = Array.from({ length: 30 }); // jumlah dot

  return (
    <div className="animated-bg">
      {/* LIGHT GLOW */}
      <div className="light-spot" />

      {/* NOISE */}
      <div className="noise" />

      {/* LINES */}
      <div className="lines">
        <svg viewBox="0 0 1440 320">
          <path d="M0,160 C300,250 600,50 900,160 C1200,270 1440,100 1440,160" />
          <path d="M0,200 C300,300 600,100 900,220 C1200,320 1440,150 1440,200" />
          <path d="M0,120 C300,180 600,0 900,120 C1200,200 1440,80 1440,120" />
        </svg>
      </div>

      {/* DOTS RANDOM */}
      {dots.map((_, i) => (
        <div
          key={i}
          className="dot"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.2 + Math.random() * 0.5,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
