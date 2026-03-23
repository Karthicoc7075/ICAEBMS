const steps = [
  {
    step: "Step 01",
    icon: "🕐",
    date: "31 Dec 2025",
    title: "Early Bird Registration",
    past: true,
  },
  {
    step: "Step 02",
    icon: "📄",
    date: "31 Jan 2026",
    title: "Abstract Submission",
  },
  {
    step: "Step 03",
    icon: "📘",
    date: "28 Feb 2026",
    title: "Full Paper Submission",
  },
  {
    step: "Step 04",
    icon: "✅",
    date: "31 Mar 2026",
    title: "Final Registration",
  },
  {
    step: "Conference",
    icon: "🎓",
    date: "10–11 Aug 2026",
    title: "Bangkok, Thailand",
  },
];

const Deadlines = () => {
  return (
    <section id="deadlines" className="bg-white px-4 sm:px-8 py-14 sm:py-16">
      <div className="max-w-[1400px] mx-auto">

  
        <div className="flex items-center gap-2 text-[0.68rem] font-bold tracking-[2px] uppercase text-[#1a52b0] mb-2">
          <span className="w-4 h-0.5 bg-[#1a52b0] rounded" />
          Important Dates
        </div>
        <h2
          className="text-[#111827] font-bold leading-tight mb-2 text-2xl sm:text-3xl md:text-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Submission <span className="text-[#1a52b0]">Deadlines</span>
        </h2>
        <div className="w-10 h-[3px] bg-[#e8a020] rounded mb-10" />

        <div className="hidden md:block">
          <div className="relative flex items-start gap-0">

           
            <div
              className="absolute top-[27px] h-[2px] z-0"
              style={{
                left: "calc(10% + 20px)",
                right: "calc(10% + 20px)",
                background:
                  "linear-gradient(90deg, #b0bdd0 0%, #b0bdd0 20%, #1a52b0 20%, #1a52b0 100% )",
              }}
            />

            {steps.map((s) => (
              <div
                key={s.step}
                className="flex-1 flex flex-col items-center text-center relative z-10 px-2"
              >
       
                <div
                  className="w-14 h-14 rounded-full border-[3px] flex items-center justify-center text-xl text-white mb-4 shadow-md flex-shrink-0"
                  style={{
                    borderColor: s.past ? "#9aabbf" : "#1a52b0",
                    backgroundColor: s.past ? "#b0bdd0" : "#1a52b0",
                  }}
                >
                  {s.icon}
                </div>

                <div
                  className={`w-full bg-[#f1f5fb] border-[1.5px] border-[#c6d7f0] rounded-xl px-3 py-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200 ${
                    s.past ? "opacity-60" : ""
                  }`}
                >
                  <div className="text-[0.6rem] font-extrabold tracking-[2px] uppercase text-[#5c708a] mb-1">
                    {s.step}
                  </div>
                  <div
                    className="font-bold text-[1rem] leading-snug mb-0.5"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color:  s.past ? "#9aabbf" : "#0d2d66",
                    }}
                  >
                    {s.date}
                  </div>
                  <div className="text-[0.78rem] font-semibold text-[#374151] leading-snug">
                    {s.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    
        <div className="flex flex-col gap-0 md:hidden relative">


          <div
            className="absolute left-[27px] top-[28px] bottom-[28px] w-[2px] z-0"
            style={{
              background:
                "linear-gradient(180deg, #b0bdd0 0%, #b0bdd0 20%, #1a52b0 20%, #1a52b0 40%, #e8a020 40%, #e8a020 60%, #d95400 60%, #d95400 80%, #138040 80%, #138040 100%)",
            }}
          />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className="flex items-start gap-4 relative z-10 pb-5 last:pb-0"
            >
  
              <div
                className="w-14 h-14 rounded-full border-[3px] flex items-center justify-center text-xl text-white shadow-md flex-shrink-0"
                style={{
                  borderColor: s.past ? "#9aabbf" : "#1a52b0",
                  backgroundColor: s.past ? "#b0bdd0" : "#1a52b0",
                }}
              >
                {s.icon}
              </div>

             
              <div
                className={`flex-1 bg-[#f1f5fb] border-[1.5px] border-[#c6d7f0] rounded-xl px-4 py-3 transition-all duration-200 ${
                  s.past ? "opacity-60" : ""
                }`}
              >
                <div className="text-[0.6rem] font-extrabold tracking-[2px] uppercase text-[#5c708a] mb-1">
                  {s.step}
                </div>
                <div
                  className="font-bold text-base leading-snug mb-0.5"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color:  s.past ? "#9aabbf" : "#0d2d66",
                  }}
                >
                  {s.date}
                </div>
                <div className="text-sm font-semibold text-[#374151] leading-snug">
                  {s.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#5c708a] mt-10">
          For detailed submission guidelines, please visit the{" "}
          <a href="#" className="text-[#1a52b0] font-semibold hover:underline">
            Submission Page →
          </a>
        </p>

      </div>
    </section>
  );
};

export default Deadlines;