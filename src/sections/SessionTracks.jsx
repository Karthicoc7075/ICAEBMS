import { useState } from "react";

const tracks = [
  { icon: "🔬", name: "Applied Science", desc: "Empirical research & scientific method" },
  { icon: "⚙️", name: "Engineering & Technology", desc: "Systems design & technological advancement" },
  { icon: "📚", name: "Education & Pedagogy", desc: "Learning frameworks & pedagogical innovation" },
  { icon: "💼", name: "Business & Management", desc: "Organisational behaviour & strategic studies" },
  { icon: "🌍", name: "Social Science & Humanities", desc: "Society, culture & the human condition" },
  { icon: "💰", name: "Finance, Accountancy & Marketing", desc: "Markets, accountability & value creation" },
];

export default function SessionTracks() {
  return (
    <section className="bg-[#f8f9fb] py-[72px] px-[clamp(20px,6vw,80px)] font-[Plus_Jakarta_Sans]">
      
      <div className="max-w-[1100px] mx-auto">

        <div className="mb-12">
          <span className="inline-block text-[0.68rem] font-bold tracking-[2.5px] uppercase text-blue-600 mb-3">
            Call for Papers
          </span>

          <div className="flex justify-between items-end flex-wrap gap-4">
            <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold text-slate-900 tracking-[-0.8px] leading-tight">
              Session Tracks
            </h2>

            <a
              href="#submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-yellow-500  text-sm font-semibold tracking-wide hover:bg-blue-600 transition whitespace-nowrap"
            >
              Submit a Paper →
            </a>
          </div>

          <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-[540px]">
            We invite researchers, academicians and professionals to submit their papers.
            Topics include, but are not limited to:
          </p>
        </div>

        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))]">
          {tracks.map((track, i) => (
            <Card key={i} track={track} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function Card({ track, i }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`bg-white rounded-[14px] px-6 py-5 flex flex-col gap-3 transition-all duration-200 cursor-default
        ${hover 
          ? "border-[1.5px] border-blue-600 shadow-[0_8px_28px_#2563eb14] " 
          : "border-[1.5px] border-[#e8eaf0] shadow-sm"
        }`}
    >

      <div className="flex justify-between items-center">
        <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-lg">
          {track.icon}
        </div>

        <span className="text-sm font-bold tracking-[2px] uppercase text-slate-300">
          Track {i + 1}
        </span>
      </div>

      <div
        className={`h-[2.5px] bg-blue-600 rounded transition-all duration-300 ${
          hover ? "w-9" : "w-6"
        }`}
      />

    
      <h3 className="text-base font-bold text-slate-900 leading-snug tracking-tight">
        {track.name}
      </h3>

      <p className="text-xs text-slate-400 leading-relaxed font-medium">
        {track.desc}
      </p>
    </div>
  );
}