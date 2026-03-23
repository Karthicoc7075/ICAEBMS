
const benefits = [
  { num: "01", icon: "🎤", title: "Present Your Research",      desc: "Share your ideas, findings and innovations with a global audience." },
  { num: "02", icon: "📖", title: "Get Published",               desc: "Publish in reputed journals with high impact factor and indexed proceedings." },
  { num: "03", icon: "💡", title: "Learn from Experts",          desc: "Gain insights from keynote addresses, workshops and panel discussions." },
  { num: "04", icon: "🤝", title: "Expand Your Network",         desc: "Connect with academicians, industry leaders and fellow researchers worldwide." },
  { num: "05", icon: "🔬", title: "Interdisciplinary Exposure",  desc: "Explore diverse perspectives by engaging with multiple fields of study." },
  { num: "06", icon: "🏆", title: "Recognition & Awards",        desc: "Compete for Best Paper and Best Presentation awards." },
  { num: "07", icon: "🌍", title: "Global Visibility",           desc: "Enhance your academic profile and contribute to international collaborations." },
  { num: "08", icon: "🚀", title: "Empower the Future",          desc: "Inspire and be inspired by young researchers, innovators and thought leaders." },
];

const WhyJoin = () => {
  return (
    <section id="why" className="bg-white px-8 py-16">
      <div className="max-w-[1400px] mx-auto">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
          <div>
            <div className="flex items-center gap-2 text-[0.68rem] font-bold tracking-[2px] uppercase text-[#1a52b0] mb-2">
              <span className="w-4 h-0.5 bg-[#1a52b0] rounded" />
              Benefits of Joining
            </div>
            <h2
              className="text-[#111827] font-bold leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 2.3vw, 2.05rem)" }}
            >
              Why Join Us at{" "}
              <span className="text-[#1a52b0]">ICAEBMS?</span>
            </h2>
            <div className="w-10 h-[3px] bg-[#e8a020] rounded mb-4" />
            <p className="text-[0.94rem] text-[#374151] leading-[1.85]">
              ICAEBMS is more than just an academic event — it's a global platform for
              innovation, collaboration and growth.
            </p>
          </div>

    
          <div className="border-2 border-[#c6d7f0] rounded-[14px] p-7 text-blue">
            <h3
              className="text-lg font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Global Platform for Every Researcher
            </h3>
            <p className="text-sm text-blue/80 leading-[1.7]">
             The International Conference on Applied Science, Engineering, Education, Business,
            Management and Social Science & Humanities (ICAEBMS) is more than just an academic
            event, it’s a global platform for innovation, collaboration and growth.     
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          {benefits.map((b, i) => (
            <div
              key={b.num}
              className={`flex items-start gap-4 py-4 border-b border-[#c6d7f0] group hover:pl-2 transition-all duration-200 ${
                i >= benefits.length - 2 ? "border-b-0" : ""
              }`}
            >
             
              <span
                className="text-[2.2rem] font-extrabold leading-none text-[#c6d7f0] group-hover:text-[#1a52b0] transition-colors duration-200 flex-shrink-0 select-none"
                style={{ fontFamily: "'Playfair Display', serif", minWidth: "46px" }}
              >
                {b.num}
              </span>

    
              <div className="pt-0.5">
                <span className="text-[1.3rem] mb-1 block">{b.icon}</span>
                <div className="font-bold text-[0.9rem] text-[#111827] mb-1">{b.title}</div>
                <div className="text-[0.78rem] text-[#5c708a] leading-[1.55]">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyJoin;