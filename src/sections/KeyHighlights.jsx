import { useState } from "react";

const highlights = [
  {
    title: "Multidisciplinary Platform",
    desc: "A unique forum uniting applied science, engineering, education, business, management, social sciences and humanities.",
    icon: "🌐",
    number: "01",
    tag: "Cross-domain",
  },
  {
    title: "Global Participation",
    desc: "Engage with renowned scholars, industry leaders and professionals from across the world.",
    icon: "🗺️",
    number: "02",
    tag: "International",
  },
  {
    title: "Call for Papers & Publications",
    desc: "Opportunities to publish in reputed Scopus-indexed journals. Selected papers will be considered for high-impact publications.",
    icon: "📘",
    number: "03",
    tag: "Publications",
  },
  {
    title: "Expert Keynote Sessions",
    desc: "Insights from distinguished speakers on cutting-edge research and global challenges.",
    icon: "🎤",
    number: "04",
    tag: "Speakers",
  },
  {
    title: "Workshops & Panel Discussions",
    desc: "Hands-on learning and thought-provoking debates on contemporary issues.",
    icon: "💡",
    number: "05",
    tag: "Sessions",
  },
  {
    title: "Networking Opportunities",
    desc: "Build academic, industrial and international collaborations.",
    icon: "🤝",
    number: "06",
    tag: "Community",
  },
  {
    title: "Recognition & Awards",
    desc: "Best paper and presentation awards to acknowledge outstanding contributions.",
    icon: "🏆",
    number: "07",
    tag: "Awards",
  },
  {
    title: "Student & Young Researcher Engagement",
    desc: "Special sessions to inspire and guide the next generation of scholars.",
    icon: "🚀",
    number: "08",
    tag: "Students",
  },
];


export default function KeyHighlights() {
  const [active, setActive] = useState(null);

  return (
    <section className=" text-white py-28 px-6 relative overflow-hidden"
     style={{ background: "linear-gradient(135deg, #071a3e 0%, #0d2d66 50%, #1a3f8a 100%)" }}>

      <div
        className="absolute inset-0 opacity-[0.04]"

      />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600 opacity-[0.07] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">


        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-blue-500" />
              <span className="text-blue-300 text-xs font-bold tracking-[4px] uppercase">
                Key Highlights
              </span>
            </div>

            <h2 className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-white">
              What makes{" "}
              <br className="hidden lg:block" />
              <span className="text-[#e8a020]">ICAEBMS</span> stand out
            </h2>
          </div>

        </div>

  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden  ">
          {highlights.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`relative p-8 transition-all duration-300 cursor-default bg-white/5  `}
            >
              
      

    
              <span
                className={`inline-block text-[10px] font-semibold uppercase tracking-[2px] px-2.5 py-1 rounded-full mb-3 transition-colors duration-300 ${
                  active === i
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {item.tag}
              </span>

            
              <h3
                className={`font-bold text-base mb-2 leading-snug transition-colors duration-300 ${
                  active === i ? "text-white" : "text-gray-100"
                }`}
              >
                {item.title}
              </h3>

             
              <p
                className={`text-sm leading-relaxed transition-colors duration-300 ${
                  active === i ? "text-blue-100" : "text-gray-400"
                }`}
              >
                {item.desc}
              </p>

              
              <div
                className={`mt-5 text-xs font-semibold transition-all duration-300 flex items-center gap-1 ${
                  active === i
                    ? "opacity-100 text-white translate-x-0"
                    : "opacity-0 -translate-x-2"
                }`}
              >
                <span>Learn more</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}