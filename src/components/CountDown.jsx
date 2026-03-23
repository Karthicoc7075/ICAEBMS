

import React ,{useState,useEffect} from 'react'


function Countdown() {
  const [time, setTime] = useState({ d: "000", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const tick = () => {
      const ms = new Date("2026-08-10T09:00:00") - new Date();
      if (ms <= 0) return;
      setTime({
        d: String(Math.floor(ms / 864e5)).padStart(3, "0"),
        h: String(Math.floor((ms % 864e5) / 36e5)).padStart(2, "0"),
        m: String(Math.floor((ms % 36e5) / 6e4)).padStart(2, "0"),
        s: String(Math.floor((ms % 6e4) / 1e3)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { key: "d", label: "Days",  bg: "bg-[#1a52b0]", text: "text-[#7eb8ff]" },
    { key: "h", label: "Hours", bg: "bg-[#e8a020]", text: "text-[#fff3d0]" },
    { key: "m", label: "Mins",  bg: "bg-[#d95400]", text: "text-[#ffd4b0]" },
    { key: "s", label: "Secs",  bg: "bg-[#138040]", text: "text-[#adf0c8]" },
  ];

  return (
    <div className="flex gap-3 mt-5">
      {boxes.map(({ key, label, bg, text }) => (
        <div key={key} className="text-center">
          <div
            className={`${bg} rounded-xl px-4 py-3 min-w-[72px] flex items-center justify-center shadow-lg`}
          >
            <span
              className={`font-extrabold text-3xl leading-none tracking-tighter tabular-nums ${text}`}
            >
              {time[key]}
            </span>
          </div>
          <div className="text-[0.65rem] font-bold tracking-widest uppercase text-[#5c708a] mt-1.5">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countdown;