export default function HeroPhoto() {
  return (
    <div className="relative w-[320px] h-105">
      {/* BACKGROUND SHAPE (paling belakang) */}
      <div className="absolute inset-0 bg-cream rounded-[40%] z-0" />
      <div className="absolute inset-0 bg-blush/20 blur-2xl rounded-[40%] z-0" />

      {/* IMAGE (layer tengah) */}
      <div className="absolute inset-0 rounded-t-full overflow-hidden z-10">
        <img
          alt="Hero"
          src="/portofolio/me.jpeg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DECOR ORANGE (DEPAN IMAGE) */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-mauve rounded-tr-[60px] z-30" />

      {/* DOT DECOR (DEPAN IMAGE) */}
      <div className="absolute top-10 left-0 grid grid-cols-4 gap-1 z-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        ))}
      </div>

      {/* GREEN DECOR (DEPAN IMAGE) */}
      <div className="absolute bottom-6 -left-6 w-20 h-20 bg-soft-mauve rounded-bl-[40px] z-30" />

      {/* ARROW (PALING DEPAN) */}
      <div className="absolute right-0 bottom-10 text-2xl z-40">→</div>
    </div>
  );
}
