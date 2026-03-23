import { useState, useEffect, useRef } from "react";

export default function Slideshow({ slides }) {
  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const INTERVAL = 4500;
  const STEP = 50;
  const timerRef = useRef(null);
  const elapsedRef = useRef(0);

  useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      elapsedRef.current += STEP;
      setProgress((elapsedRef.current / INTERVAL) * 100);
      if (elapsedRef.current >= INTERVAL) {
        elapsedRef.current = 0;
        setCur((c) => (c + 1) % slides.length);
      }
    }, STEP);

    return () => clearInterval(timerRef.current);
  }, [cur]);

  const slide = slides[cur];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.35)]">

      <div className={`relative bg-gradient-to-br ${slide.bg} overflow-hidden transition-all duration-700`}>

        <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-white/5 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute top-2 right-4 text-white/10 font-black select-none pointer-events-none leading-none"
          style={{
            fontSize: "clamp(3rem, 10vw, 6rem)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {String(cur + 1).padStart(2, "0")}
        </div>
        <div className="relative z-10 p-5 sm:p-8 flex flex-col gap-3 sm:gap-4 min-h-[260px] sm:min-h-[320px] justify-between">

          <div className="flex flex-col gap-2 sm:gap-3">

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] sm:text-xs font-bold tracking-[2px] uppercase text-white/50">
                {String(cur + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <span className="w-4 sm:w-6 h-px bg-white/30" />
              <span className="text-[10px] sm:text-xs font-semibold text-white/70 tracking-wide">
                {slide.chip}
              </span>
            </div>
            <h2
              className="text-white font-bold leading-snug tracking-tight text-base sm:text-lg md:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {slide.title}
            </h2>

            <div className="flex items-center gap-2">
              <div className="w-6 sm:w-8 h-[3px] rounded-full bg-white/60" />
              <div className="w-2 sm:w-3 h-[3px] rounded-full bg-white/30" />
            </div>

            <p className="text-white/75 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
              {slide.body}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {slide.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] sm:text-[11px] font-semibold bg-white/10 border border-white/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-white/90 tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="h-[3px] bg-white/10 w-full">
          <div
            className="h-full bg-white/50 transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 bg-black/10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`rounded-full transition-all duration-300 ${
                i === cur
                  ? "bg-white w-4 sm:w-5 h-1.5 sm:h-2"
                  : "bg-white/30 w-1.5 sm:w-2 h-1.5 sm:h-2 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}