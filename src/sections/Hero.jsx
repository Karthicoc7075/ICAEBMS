
import Slideshow from "../components/SliderShow";
import Countdown from "../components/CountDown";



const slides = [
  {
    chip: "ICAEBMS 2026",
    title: "International Conference on Applied Science, Engineering, Education, Business, Management & Social Science",
    body: "Bangkok, Thailand · 10–11 August 2026\nOrganized by: Confworld Educational Research and Development Association",
    tags: ["CERADA", "Scopus", "Clarivate"],
    bg: "from-[#0b2b62] via-[#1a52b0] to-[#2060c8]",
  },
  {
    chip: "Conference Theme",
    title: '"Interdisciplinary Innovations for a Sustainable Future"',
    body: "Uniting Applied Science, Engineering, Education, Business, Management, Social Sciences & Humanities to foster creativity and sustainable solutions.",
    tags: ["Best Paper Awards", "Expert Keynotes", "Networking"],
    bg: "from-[#093a22] to-[#138040]",
  },
  {
    chip: "Proceedings & Publications",
    title: "Scopus & Web of Science Indexed Proceedings",
    body: "ICAEBMS-2026 proceedings submitted to WoS Book Citation Index (BkCI) and Scopus. Selected papers considered for high-impact journals.",
    tags: ["Scopus", "SCIE", "Clarivate"],
    bg: "from-[#391e76] to-[#5535a6]",
  },
  {
    chip: "Submission Deadlines",
    title: "Submit Your Research — Don't Miss These Key Dates",
    body: "Early Bird: 31 Dec 2025  ·  Abstract: 31 Jan 2026\nFull Paper: 28 Feb 2026  ·  Registration: 31 Mar 2026",
    tags: ["6 Session Tracks", "Global Participation"],
    bg: "from-[#582000] to-[#d95400]",
  },
];



const Hero = () => {
  return (
  <section
  id="home"
  className="bg-gradient-to-br from-[#d8e8f8] via-[#ecf3fd] to-[#f3f7ff] border-b-[3px] border-[#c6d7f0] px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16"
>
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 sm:gap-10 lg:gap-4 items-center">

    <div>
      <div className="inline-flex items-center gap-2 bg-[#e5eefa] border-l-4 border-[#1a52b0] text-[#1a52b0] text-xs sm:text-sm font-bold tracking-[1.6px] uppercase px-3 sm:px-4 py-1.5 rounded-r-md mb-4 sm:mb-5">
        International Academic Conference
      </div>

      <h1
        className="text-[#111827] font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.4] mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        International Conference on Applied Science, Engineering,
        Education, Business, Management and Social Science &amp; Humanities
        <span className="block text-[#1a52b0] font-extrabold mt-2">
          (ICAEBMS-2026)
        </span>
      </h1>

      <p className="text-sm sm:text-base text-[#5c708a] leading-relaxed mb-2.5">
        Theme:{" "}
        <strong className="text-[#111827]">
          "Interdisciplinary Innovations for a Sustainable Future"
        </strong>
      </p>

      <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#d95400] mb-3">
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#d95400] animate-pulse flex-shrink-0" />
        Hybrid Conference: In Person + Online
      </div>


      <div className="mb-5 space-y-1.5">
        <p className="text-sm sm:text-base text-[#374151] leading-snug">
          <strong className="text-[#0d2d66]">Date:</strong> 10–11 Aug, 2026
        </p>
        <p className="text-sm sm:text-base text-[#374151] leading-snug">
          <strong className="text-[#0d2d66]">City, Country:</strong> Bangkok, Thailand
        </p>
        <p className="text-sm sm:text-base text-[#374151] leading-snug">
          <strong className="text-[#0d2d66]">Organized by:</strong> Confworld Educational Research and Development Association
        </p>
        <p className="text-sm sm:text-base text-[#374151] leading-snug">
          <strong className="text-[#0d2d66]">ISBN:</strong> 978-95-813001-3-6
        </p>
      </div>


      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#1a52b0] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md">
          📅 10–11 Aug 2026
        </span>
        <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#e8a020] text-[#3a1c00] text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md">
          📍 Bangkok, Thailand
        </span>
        <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#138040] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md">
          💻 In Person + Online
        </span>
      </div>

  
      <Countdown />
    </div>


    <div className="w-full mt-4 lg:mt-0">
      <Slideshow slides={slides} />
    </div>

  </div>
</section>
  );
};

export default Hero;