import { useState, useEffect, useRef } from "react";

// ── TICKER ITEMS ──────────────────────────────────────────────
const tickerItems = [
  { text: "HYBRID EVENT – Participate", bold: "In Person", rest: " at Bangkok, Thailand or ", bold2: "Virtually", rest2: " from your home or office", icon: "🌏" },
  { text: "Conference Date:", bold: "10–11 Aug 2026", icon: "📅" },
  { text: "Early Bird:", bold: "31 Dec 2025", icon: "📝" },
  { text: "Abstract Submission:", bold: "31 Jan 2026", icon: "📄" },
  { text: "Full Paper:", bold: "28 Feb 2026", icon: "📘" },
  { text: "Final Registration:", bold: "31 Mar 2026", icon: "✅" },
  { text: "Best Paper & Presentation Awards", icon: "🏆" },
  { text: "ISBN:", bold: "978-95-813001-3-6", icon: "📗" },
];

// ── NAV DATA ──────────────────────────────────────────────────
const navItems = [
  { label: "Home", href: "#home", active: true },
  {
    label: "About",
    dropdown: [
      { label: "About ICAEBMS", href: "#welcome" },
      { label: "Conference Theme", href: "#theme" },
      { label: "Organizing Committee", href: "#" },
      { label: "Advisory Board", href: "#" },
      { label: "About CERADA", href: "#" },
    ],
  },
  {
    label: "Session Tracks",
    dropdown: [
      { label: "Session 1: Applied Science", href: "#tracks" },
      { label: "Session 2: Engineering & Technology", href: "#tracks" },
      { label: "Session 3: Education & Pedagogy", href: "#tracks" },
      { label: "Session 4: Business & Management", href: "#tracks" },
      { label: "Session 5: Social Science & Humanities", href: "#tracks" },
      { label: "Session 6: Finance & Marketing", href: "#tracks" },
    ],
  },
  {
    label: "Paper Submission",
    dropdown: [
      { label: "Submit Abstract", href: "#" },
      { label: "Submit Full Paper", href: "#" },
      { label: "Submission Guidelines", href: "#" },
      { label: "Paper Format / Template", href: "#" },
      { label: "Review Process", href: "#" },
    ],
  },
  { label: "Publication", href: "#pubs" },
  {
    label: "Registration",
    dropdown: [
      { label: "Registration Fees", href: "#" },
      { label: "Register Now", href: "#submit" },
      { label: "Group Registration", href: "#" },
    ],
  },
  { label: "Exhibits & Sponsors", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Venue", href: "#" },
  { label: "Contact Us", href: "#" },
];

// ── SLIDES ────────────────────────────────────────────────────
const slides = [
  {
    chip: "🎓 ICAEBMS 2026",
    title: "International Conference on Applied Science, Engineering, Education, Business, Management & Social Science",
    body: "Bangkok, Thailand · 10–11 August 2026\nOrganized by: Confworld Educational Research and Development Association",
    tags: ["🏛️ CERADA", "📊 Scopus", "📗 Clarivate WoS"],
    bg: "from-[#0b2b62] via-[#1a52b0] to-[#2060c8]",
  },
  {
    chip: "🌱 Conference Theme",
    title: '"Interdisciplinary Innovations for a Sustainable Future"',
    body: "Uniting Applied Science, Engineering, Education, Business, Management, Social Sciences & Humanities to foster creativity and sustainable solutions.",
    tags: ["🏆 Best Paper Awards", "🎤 Expert Keynotes", "🤝 Networking"],
    bg: "from-[#093a22] to-[#138040]",
  },
  {
    chip: "📘 Proceedings & Publications",
    title: "Scopus & Web of Science Indexed Proceedings",
    body: "ICAEBMS-2026 proceedings submitted to WoS Book Citation Index (BkCI) and Scopus. Selected papers considered for high-impact journals.",
    tags: ["📊 Scopus", "🔬 SCIE", "📗 Clarivate WoS · BkCI"],
    bg: "from-[#391e76] to-[#5535a6]",
  },
  {
    chip: "📅 Submission Deadlines",
    title: "Submit Your Research — Don't Miss These Key Dates",
    body: "🕐 Early Bird: 31 Dec 2025  ·  📄 Abstract: 31 Jan 2026\n📘 Full Paper: 28 Feb 2026  ·  ✅ Registration: 31 Mar 2026",
    tags: ["📝 6 Session Tracks", "🌍 Global Participation"],
    bg: "from-[#582000] to-[#d95400]",
  },
];

// ── COUNTDOWN BLOCK ───────────────────────────────────────────
function Countdown() {
  const [time, setTime] = useState({ d: "000", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const tick = () => {
      const ms = new Date("2026-08-10T09:00:00") - new Date();
      if (ms <= 0) return;
      const d = Math.floor(ms / 864e5);
      const h = Math.floor((ms % 864e5) / 36e5);
      const m = Math.floor((ms % 36e5) / 6e4);
      const s = Math.floor((ms % 6e4) / 1e3);
      setTime({
        d: String(d).padStart(3, "0"),
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { val: time.d, label: "Days",  bg: "bg-[#1a52b0]",  text: "text-[#7eb8ff]" },
    { val: time.h, label: "Hours", bg: "bg-[#e8a020]",  text: "text-[#fff3d0]" },
    { val: time.m, label: "Mins",  bg: "bg-[#d95400]",  text: "text-[#ffd4b0]" },
    { val: time.s, label: "Secs",  bg: "bg-[#138040]",  text: "text-[#adf0c8]" },
  ];

  return (
    <div className="flex gap-2 mt-4">
      {boxes.map(({ val, label, bg, text }) => (
        <div key={label} className="text-center">
          <div
            className={`${bg} rounded-xl px-3 py-2 min-w-[60px] flex flex-col items-center shadow-lg`}
          >
            <span
              className={`font-extrabold text-2xl leading-none tracking-tighter tabular-nums ${text}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {val}
            </span>
          </div>
          <div className="text-[0.58rem] font-bold tracking-widest uppercase text-white/40 mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── SLIDESHOW ─────────────────────────────────────────────────
function Slideshow() {
  const [cur, setCur] = useState(0);
  const [prog, setProg] = useState(0);
  const INTERVAL = 4500;
  const timerRef = useRef(null);

  const go = (n) => {
    setCur((n + slides.length) % slides.length);
    setProg(0);
  };

  useEffect(() => {
    const step = 50;
    let elapsed = 0;
    timerRef.current = setInterval(() => {
      elapsed += step;
      setProg(Math.min((elapsed / INTERVAL) * 100, 100));
      if (elapsed >= INTERVAL) {
        elapsed = 0;
        setCur((c) => (c + 1) % slides.length);
      }
    }, step);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = slides[cur];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border-[2.5px] border-[#c6d7f0] shadow-2xl min-h-[350px] flex flex-col">
      {/* gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 z-10 bg-gradient-to-r from-[#1a52b0] via-[#e8a020] to-[#138040]" />

      {/* slide content */}
      <div
        className={`flex-1 bg-gradient-to-br ${slide.bg} transition-all duration-700 flex flex-col justify-center p-8`}
      >
        {/* chip */}
        <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold tracking-[2px] uppercase bg-white/15 border border-white/25 px-3 py-1 rounded-full text-white mb-4 w-fit">
          {slide.chip}
        </span>

        {/* title */}
        <h2
          className="text-white font-bold leading-[1.4] mb-3 text-[1.08rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {slide.title}
        </h2>

        {/* body */}
        <p className="text-white/85 text-[0.8rem] leading-relaxed mb-4 whitespace-pre-line">
          {slide.body}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {slide.tags.map((t) => (
            <span
              key={t}
              className="text-[0.7rem] font-semibold bg-white/12 border border-white/22 px-3 py-1 rounded-md text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* footer: progress bar + dots */}
      <div className="bg-black/22 px-4 py-2.5 flex items-center justify-between">
        {/* progress bar */}
        <div className="flex-1 h-0.5 bg-white/15 rounded-full mr-4 overflow-hidden">
          <div
            className="h-full bg-[#e8a020] rounded-full transition-none"
            style={{ width: `${prog}%` }}
          />
        </div>
        {/* dots */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2 h-2 rounded-full border-none outline-none transition-all duration-200 ${
                i === cur
                  ? "bg-[#e8a020] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── NAV ITEM ──────────────────────────────────────────────────
function NavItem({ item }) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <a
        href={item.href}
        className={`flex items-center gap-1 text-[0.78rem] font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap transition-all duration-150
          ${item.active ? "bg-white/15 text-white" : "text-white/88 hover:bg-white/13 hover:text-white"}`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-[0.78rem] font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap text-white/88 hover:bg-white/13 hover:text-white transition-all duration-150">
        {item.label}
        <span className="text-[0.54rem] opacity-65 mt-0.5">▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-0.5 bg-white border border-[#c6d7f0] rounded-lg shadow-xl min-w-[210px] z-50 py-1.5">
          {item.dropdown.map((d) => (
            <a
              key={d.label}
              href={d.href}
              className="block px-4 py-2 text-[0.79rem] font-medium text-[#374151] hover:bg-[#f1f5fb] hover:text-[#1a52b0] transition-colors"
            >
              {d.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function HeaderHero() {
  return (
    <div className="font-['Inter',sans-serif] antialiased">

      {/* ── 1. TOP TICKER BAND ── */}
      <div className="bg-[#d95400] overflow-hidden whitespace-nowrap py-2 border-b-2 border-black/10">
        <div className="inline-flex items-center animate-[ticker_28s_linear_infinite]">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="mx-10 text-[0.79rem] font-bold text-white inline-flex items-center gap-1.5"
            >
              {item.icon} {item.text}{" "}
              {item.bold && (
                <b className="bg-white/22 px-2 py-px rounded font-extrabold">
                  {item.bold}
                </b>
              )}
              {item.rest}{" "}
              {item.bold2 && (
                <b className="bg-white/22 px-2 py-px rounded font-extrabold">
                  {item.bold2}
                </b>
              )}
              {item.rest2}
            </span>
          ))}
        </div>
      </div>

      {/* ── 2. QUICK ACCESS BAR ── */}
      <div className="bg-white border-b border-[#c6d7f0] flex items-center justify-center flex-wrap">
        {[
          { icon: "🌐", text: "Select Language ▾", href: "#" },
          { icon: "📝", text: "Register Now", href: "#submit" },
          { icon: "✉️", text: "info@cerada.in", href: "mailto:info@cerada.in" },
          { icon: "📱", text: "+91 8072381719", href: "tel:+918072381719" },
          { icon: "🤝", text: "Apply for Academic Partner", href: "#" },
        ].map((item, i, arr) => (
          <a
            key={item.text}
            href={item.href}
            className={`flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#374151] px-4 py-2
              hover:text-[#1a52b0] hover:bg-[#e5eefa] transition-colors
              ${i < arr.length - 1 ? "border-r border-[#c6d7f0]" : ""}`}
          >
            <span>{item.icon}</span> {item.text}
          </a>
        ))}
      </div>

      {/* ── 3. MAIN NAVIGATION ── */}
      <nav className="bg-[#0d2d66] sticky top-0 z-50 shadow-[0_2px_16px_rgba(8,24,70,0.24)]">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 h-[62px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 flex-shrink-0">
            <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#1a52b0] to-[#e8a020] flex items-center justify-center text-white text-[0.55rem] font-extrabold text-center leading-tight">
              ICAEBMS<br />2026
            </div>
            <span className="text-[0.97rem] font-extrabold text-[#0d2d66]">
              ICAEBMS <em className="not-italic text-[#b87810]">2026</em>
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
            <a
              href="#"
              className="text-[0.78rem] font-bold px-3.5 py-1.5 bg-[#e8a020] text-[#0d2d66] rounded-md hover:bg-[#f0b030] transition-colors ml-1"
            >
              Login
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white text-xl p-1">☰</button>
        </div>
      </nav>

      {/* ── 4. HERO SECTION ── */}
      <section
        id="home"
        className="bg-gradient-to-br from-[#d8e8f8] via-[#ecf3fd] to-[#f3f7ff] border-b-[3px] border-[#c6d7f0] px-6 py-12"
      >
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[54%_46%] gap-10 items-center">

          {/* LEFT ── */}
          <div>
            {/* eyebrow */}
            <div className="inline-flex items-center gap-1.5 bg-[#e5eefa] border-l-[3px] border-[#1a52b0] text-[#1a52b0] text-[0.7rem] font-bold tracking-[1.4px] uppercase px-3 py-1 rounded-r-md mb-4">
              🎓 International Academic Conference
            </div>

            {/* title */}
            <h1
              className="text-[#111827] font-bold leading-[1.42] mb-2.5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.1rem, 1.75vw, 1.5rem)",
              }}
            >
              International Conference on Applied Science, Engineering,
              Education, Business, Management and Social Science &amp; Humanities
              <span className="block text-[#1a52b0] font-extrabold mt-1">
                (ICAEBMS-2026)
              </span>
            </h1>

            {/* theme */}
            <p className="text-[0.86rem] text-[#5c708a] leading-relaxed mb-2">
              Theme:{" "}
              <strong className="text-[#111827]">
                "Interdisciplinary Innovations for a Sustainable Future"
              </strong>
            </p>

            {/* hybrid */}
            <div className="flex items-center gap-2 text-[0.83rem] font-bold text-[#d95400] mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d95400] animate-pulse flex-shrink-0" />
              Hybrid Conference: In Person + Online
            </div>

            {/* meta info */}
            {[
              ["Date:", "10–11 Aug, 2026"],
              ["City, Country:", "Bangkok, Thailand"],
              ["Organized by:", "Confworld Educational Research and Development Association"],
              ["ISBN:", "978-95-813001-3-6"],
            ].map(([k, v]) => (
              <p key={k} className="text-[0.8rem] text-[#374151] mb-1 leading-snug">
                <strong className="text-[#0d2d66]">{k}</strong> {v}
              </p>
            ))}

            {/* logo badges */}
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
              {[
                ["🏛️", "CERADA"],
                ["🎓", "ICAEBMS"],
                ["🌱", "SDG"],
                ["📊", "Scopus"],
                ["📗", "Clarivate WoS"],
              ].map(([icon, name]) => (
                <div
                  key={name}
                  className="flex items-center gap-1.5 bg-white border-[1.5px] border-[#c6d7f0] rounded-md px-3 py-1 text-[0.7rem] font-bold text-[#5c708a] shadow-sm"
                >
                  <span>{icon}</span> {name}
                </div>
              ))}
            </div>

            {/* pills */}
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-[#1a52b0] text-white text-[0.79rem] font-bold px-3.5 py-1.5 rounded-lg shadow-md">
                📅 10–11 Aug 2026
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#e8a020] text-[#3a1c00] text-[0.79rem] font-bold px-3.5 py-1.5 rounded-lg shadow-md">
                📍 Bangkok, Thailand
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#138040] text-white text-[0.79rem] font-bold px-3.5 py-1.5 rounded-lg shadow-md">
                💻 In Person + Online
              </span>
            </div>

            {/* countdown */}
            <Countdown />
          </div>

          {/* RIGHT — slideshow ── */}
          <div className="flex items-stretch">
            <Slideshow />
          </div>

        </div>
      </section>

      {/* Tailwind custom animation keyframe — add to your tailwind.config.js:
        theme: { extend: { keyframes: { ticker: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } } }, animation: { ticker: 'ticker 28s linear infinite' } } }
      */}
    </div>
  );
}