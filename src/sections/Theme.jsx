


const seeks = [
 "Encourage interdisciplinary collaboration among researchers, academicians, industry experts and policymakers." ,
  "Promote innovative research and practices that contribute to sustainable development." ,
  "Bridge the gap between science, technology, business and society through knowledge-sharing and discourse.",
  "Empower future leaders and young scholars with insights and opportunities for global engagement." ,
  "Foster solutions that are practical, inclusive and impactful in addressing real-world challenges." ,
];


const Theme = () => {
  return (
    <section id="theme" className="bg-white">

      <div
        className="relative overflow-hidden px-6 py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #071a3e 0%, #0d2d66 50%, #1a3f8a 100%)" }}
      >
       

        <div className="relative z-10 max-w-[1400px] mx-auto">
        
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-[#e8a020] rounded" />
            <span className="text-[0.68rem] font-bold tracking-[3px] uppercase text-white/50">
              Conference Theme 2026
            </span>
          </div>

          <div className="max-w-[900px]">
        
            <h2
              className="text-white font-bold leading-[1.25] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
              }}
            >
              Interdisciplinary Innovations
              <br />
              <span className="text-[#e8a020]">for a Sustainable Future</span>
            </h2>
            <p className="text-white/60 text-[0.95rem] leading-[1.85] max-w-[680px]">
              The theme reflects the core vision of ICAEBMS — bringing together diverse
              fields of knowledge to address global challenges and foster creativity,
              collaboration and sustainable solutions.
            </p>
          </div>

    
        </div>
      </div>

 
      <div className="px-6 py-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-[2px] bg-[#1a52b0] rounded" />
            <span className="text-[0.7rem] font-bold tracking-[2px] uppercase text-[#1a52b0]">
              Through this theme, ICAEBMS seeks:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {seeks.map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-5 border-b border-gray-100 last:border-0"
              >
            
                <span
                  className="text-[0.65rem] font-extrabold tracking-[1px] text-white bg-[#1a52b0] rounded-md px-2 py-1 flex-shrink-0 mt-1"
                >
                  0{i + 1}
                </span>
                <p className="text-[0.9rem] text-gray-600 leading-[1.75]">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Theme;