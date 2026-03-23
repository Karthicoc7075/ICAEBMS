import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaFileAlt,
  FaPenNib,
  
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import {
    FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";


const Footer = () => {
  return (
    <footer
      className="text-white px-8 pt-12 pb-0"
      style={{
        background:
          "linear-gradient(160deg, #0a1a3a 0%, #0d2354 60%, #0e2860 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          <div>
            

            <h4 className="font-semibold text-lg" >ICAESBMS 2026</h4>
            <p className="text-white/80 text-[0.82rem] font-semibold leading-[1.65] mb-2">
              International Conference on Applied Science, Engineering, Education,
              Business, Management and Social Science & Humanities (ICAEBMS-2026)
            </p>

            <p className="text-white/70 text-[0.8rem] leading-[1.6] mb-1">
              <span className="font-bold text-white/90">Theme :</span>{" "}
              "Interdisciplinary Innovations for a Sustainable Future"
            </p>

            <p className="text-white/70 text-[0.8rem] leading-[1.6]">
              <span className="font-bold text-white/90">Organized by :</span>{" "}
              Confworld Educational Research and Development Association
            </p>
          </div>

          <div className="lg:pl-8">
            <div className="flex flex-col gap-3.5">

              <a href="#" className="flex items-center gap-3 text-white/75 text-sm hover:text-white">
                <FaHome  className="text-lg"/> Home
              </a>

              <a href="#" className="flex items-center gap-3 text-white/75 text-sm hover:text-white">
                <FaInfoCircle className="text-lg" /> About
              </a>

              <a href="#" className="flex items-center gap-3 text-white/75 text-sm hover:text-white">
                <FaCalendarAlt className="text-lg" /> Session
              </a>

              <a href="#" className="flex items-center gap-3 text-white/75 text-sm hover:text-white">
                <FaFileAlt className="text-lg" /> Paper Submission
              </a>

              <a href="#" className="flex items-center gap-3 text-white/75 text-sm hover:text-white">
                <FaPenNib className="text-lg" /> Registration
              </a>

            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3.5">

              <a href="https://www.facebook.com/people/Confworld-Educational-Research-and-Development-Association/61560894663027/"  className="flex items-center gap-2 text-white/75 text-sm hover:text-white">
                <FaFacebookF className="text-[#4267B2] text-lg" /> Facebook
              </a>

              <a href="https://www.youtube.com/@Confworld" className="flex items-center gap-2 text-white/75 text-sm hover:text-white">
                <FaYoutube className="text-[#FF0000] text-lg" /> Youtube
              </a>

              <a href="https://www.instagram.com/infoconfworld/?hl=en"  className="flex items-center gap-2 text-white/75 text-sm hover:text-white">
                <FaInstagram className="text-[#E1306C] text-lg" /> Instagram
              </a>

              <a href="https://www.instagram.com/infoconfworld/?hl=en" className="flex items-center gap-2 text-white/75 text-sm hover:text-white">
                <FaXTwitter className="text-white text-lg" /> Twitter
              </a>

              <a href="https://www.linkedin.com/company/confworld-educational-research-and-development-association/" className="flex items-center gap-2 text-white/75 text-sm hover:text-white">
                <FaLinkedinIn className="text-[#0077B5] text-lg" /> LinkedIn
              </a>

              <a href="https://whatsapp.com/channel/0029VbCQG5z4inos7Mt6r61W" className="flex items-center gap-2 text-white/75 text-sm hover:text-white">
                <FaWhatsapp className="text-[#25D366] text-lg" /> Whatsapp
              </a>

            </div>
          </div>

          <div>

            <a
              href="tel:+918072381719"
              className="flex items-center gap-2.5 text-white/85 text-[0.88rem] font-semibold mb-3 hover:text-white"
            >
              <FaPhoneAlt className="text-md" />
              +91 8072381719
            </a>

            <a
              href="mailto:info@icaebms.com"
              className="flex items-center gap-2.5 text-white/85 text-[0.88rem] font-semibold mb-6 hover:text-white"
            >
              <FaEnvelope className="text-md" />
              info@icaebms.com
            </a>

            <div className="border p-4 border-white/20 pt-4 rounded-lg">
              <div className="text-[#4dd9ff] font-bold text-sm mb-1.5">
                Organizer Address:
              </div>

              <p className="text-white/65 text-sm leading-[1.7]">
                No.147/383A, Second Floor, Paper Mills Road,
                Peravallur, Chennai-600082, Tamil Nadu, India.
              </p>
            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-4 text-center text-[0.78rem] text-white/50">
          © 2026 CERADA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;