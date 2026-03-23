const Welcome = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Welcome to <span className="text-blue-600">ICAEBMS-2026</span>
        </h2>

        <div className="w-10 h-1 bg-yellow-500 mb-6"></div>

        
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-10">
          <p>
            We warmly welcome you to the <strong>
              International Conference on Applied Science, Engineering, Education,
              Business, Management and Social Science & Humanities (ICAEBMS)
            </strong>.
          </p>

          <p>
           Theme <strong>“Interdisciplinary Innovations for a Sustainable Future”</strong> ICAEBMS serves as a
global platform where researchers, academicians, professionals and students from around the
world come together to exchange ideas, present findings and build collaborations across
disciplines.
          </p>

          <p>
           This conference is not just an academic gathering, it is a space for innovation, interchange
and the creation of solutions that address real-world challenges. By bringing together experts
in science, engineering, education, business, management, social sciences and humanities,
ICAEBMS fosters interdisciplinary connections that pave the way for impactful change.
          </p>
          <p>Join us in shaping the future through knowledge, research and collaboration. Together, we
can drive progress for a more sustainable and inclusive world.</p>
        </div>


        <div className="grid md:grid-cols-3 gap-5">
          
     
          <div className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <div className="text-2xl mb-2">🌐</div>
            <p className="text-md font-bold uppercase  mb-1">Diverse Network</p>
            <h3 className="text-sm opacity-80">
              Connect with Global Leaders Across Disciplines
            </h3>
          <svg
  className="absolute top-0 right-0 w-[110px] h-[110px] opacity-[0.13] pointer-events-none"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="160" cy="40" r="70" fill="none" stroke="#fff" strokeWidth="2.5" />
  <circle cx="160" cy="40" r="45" fill="none" stroke="#fff" strokeWidth="2" />
  <circle cx="60" cy="160" r="50" fill="none" stroke="#fff" strokeWidth="2" />
  
  <line x1="100" y1="100" x2="160" y2="40" stroke="#fff" strokeWidth="1.5" />

  <circle cx="160" cy="40" r="5" fill="#e8a020" />
</svg>
          </div>

    
          <div className="relative bg-gradient-to-br from-green-800 to-green-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <div className="text-2xl mb-2">🌍</div>
            <p className="text-xs uppercase opacity-70 mb-1">Global Reach</p>
            <h3 className="font-bold text-sm">
              Hybrid Format for Worldwide Accessibility
            </h3>
            <svg
        className="absolute top-0 right-0 w-[110px] h-[110px] opacity-[0.13] pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="2.5" />
        <ellipse cx="100" cy="100" rx="90" ry="36" fill="none" stroke="#fff" strokeWidth="2" />
        <ellipse cx="100" cy="100" rx="90" ry="36" fill="none" stroke="#fff" strokeWidth="2" transform="rotate(60 100 100)" />
        <circle cx="190" cy="100" r="4" fill="#e8a020" opacity=".8" />
      </svg>
          </div>

   
          <div className="relative bg-gradient-to-br from-orange-800 to-orange-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <div className="text-2xl mb-2">💡</div>
            <p className="text-xs uppercase opacity-70 mb-1">Innovation</p>
            <h3 className="font-bold text-sm">
              Cutting-Edge Solutions for Tomorrow's Challenges
            </h3>
            <svg
        className="absolute top-0 right-0 w-[110px] h-[110px] opacity-[0.13] pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="100,15 185,160 15,160" fill="none" stroke="#fff" strokeWidth="2.5" />
        <polygon points="100,45 165,155 35,155" fill="none" stroke="#fff" strokeWidth="2" />
        <polygon points="100,75 145,150 55,150" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="100" cy="15" r="5" fill="#e8a020" />
      </svg>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Welcome;