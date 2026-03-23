

const Publications = () => {
  return (
    <section id="pubs" className="px-4 sm:px-6 mb-20">
      <div
        className="relative max-w-[1400px] rounded-2xl mx-auto px-6 sm:px-10 py-14 sm:py-20 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #071a3e 0%, #0d2d66 50%, #1a3f8a 100%)",
        }}
      >

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

       
        <div
          className="absolute -right-24 -top-24 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(26,82,176,0.22) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">

         
          <div className="flex items-center justify-center gap-2 text-[0.65rem] font-bold tracking-[2px] uppercase text-white/40 mb-4">
            <span className="w-4 h-px bg-white/30" />
            Indexed Publications
            <span className="w-4 h-px bg-white/30" />
          </div>

          <h2
            className="text-white font-bold mb-3 text-2xl sm:text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Proceedings &amp; Publications
          </h2>

          <p className="text-white/60 text-sm sm:text-base mb-10 leading-relaxed">
            Selected papers published in high-impact, peer-reviewed international journals
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            
              <div
                
                className="flex items-center bg-white/10 border border-white/20 hover:border-white/50 hover:bg-white/15 transition-all duration-200 cursor-default px-5 py-2.5 rounded-lg"
              >
                <span className="font-extrabold text-sm text-white tracking-wide">
                  Scopus
                </span>
              </div>
               <div
                
                className="flex items-center bg-white/10 border border-white/20 hover:border-white/50 hover:bg-white/15 transition-all duration-200 cursor-default px-5 py-2.5 rounded-lg"
              >
                <span className="font-extrabold text-sm text-white tracking-wide">
                  SCIE
                </span>
              </div>
                <div  
                className="flex items-center bg-white/10 border border-white/20 hover:border-white/50 hover:bg-white/15 transition-all duration-200 cursor-default px-5 py-2.5 rounded-lg"
                >
                    <span className="font-extrabold text-sm text-white tracking-wide">
                    Web of Science
                    </span>
                </div>
                <div
                className="flex items-center bg-white/10 border border-white/20 hover:border-white/50 hover:bg-white/15 transition-all duration-200 cursor-default px-5 py-2.5 rounded-lg"
                >
                    <span className="font-extrabold text-sm text-white tracking-wide">
                     Clarivate
                    </span>
                </div>
            
          </div>

          <div
            className="inline-block w-full sm:w-auto bg-yellow-600 hover:bg-yellow-500 transition-colors duration-200 rounded-lg px-5 py-4 text-center"
          >
            <p className="text-xs sm:text-sm font-bold text-[#3a1c00] leading-relaxed">
              <span className="font-black">Note:</span> ICAEBMS-2026 Proceedings will be submitted to the{" "}
              Web of Science Book Citation Index (BkCI) and Scopus for evaluation
              and indexing purposes.{" "}
              <span className="opacity-70">(T&amp;C)* apply.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Publications;