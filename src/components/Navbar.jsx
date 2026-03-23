import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-[#0d2d66] sticky top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-12 h-16">
  
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded">
      
          <div className="font-bold text-[#0d2d66] text-sm">
            ICAEBMS <span className="text-yellow-600">2026</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-white">

       
          <div className="relative">
            <button
              onClick={() => toggleMenu("about")}
              className="px-3 py-1 flex  rounded hover:bg-white/20"
            >
              About 
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg group-hover:rotate-180 transition-transform duration-500 relative z-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
            </button>

            {openMenu === "about" && (
              <div className="absolute top-10 left-0 bg-white text-black rounded shadow-md w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">About ICAEBMS</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Organizer </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Speakers</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Organizing Committee Member </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Organizing Committee Form</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("tracks")}
              className="px-3 flex py-1 rounded hover:bg-white/20"
            >
             Session Tracks 
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg group-hover:rotate-180 transition-transform duration-500 relative z-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
            </button>

            {openMenu === "tracks" && (
              <div className="absolute top-10 left-0 bg-white text-black rounded shadow-md w-56">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Session Tracks & Call for Papers</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Essential Downloads</a>
              
              </div>
            )}
          </div>
           <div className="relative">
            <button
              onClick={() => toggleMenu("paper")}
              className="px-3 flex py-1 rounded hover:bg-white/20"
            >
              Paper Submission 
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg group-hover:rotate-180 transition-transform duration-500 relative z-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
            </button>

            {openMenu === "paper" && (
              <div className="absolute top-10 left-0 bg-white text-black rounded shadow-md w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Abstract & Full Paper Submission</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submission Guidelines </a>
              </div>
            )}
          </div>

          <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            Publication
          </a>

 <div className="relative">
            <button
              onClick={() => toggleMenu("registration")}
              className="px-3 flex py-1 rounded hover:bg-white/20"
            >
              Registration 
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-lg group-hover:rotate-180 transition-transform duration-500 relative z-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
            </button>

            {openMenu === "registration" && (
              <div className="absolute top-10 left-0 bg-white text-black rounded shadow-md w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Registration Fee</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Available Payment Methods</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Registration Instruction</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Terms and Conditions</a>
              </div>
            )}
          </div>
      
           <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            FAQ
          </a>
        
          <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            Contact
          </a>

       
          <a
            href="#"
            className="bg-yellow-500 text-black px-4 py-1 rounded font-bold hover:bg-yellow-400"
          >
            Login
          </a>
        </div>
         <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>
      
{mobileOpen && (
  <div className="fixed inset-0 z-50 flex">
    
    

    <div
      className="flex-1 bg-black/40"
      onClick={() => setMobileOpen(false)}
    ></div>

    <div className="w-[76] bg-[#0d2d66] text-white p-5 space-y-4 transform transition-transform duration-300">
      
 
      <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded">
         
          <div className="font-bold text-[#0d2d66] text-sm">
            ICAEBMS <span className="text-yellow-600">2026</span>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(false)}
          className="text-2xl"
        >
          ✕
        </button>
      </div>

        <div className="md:hidden bg-[#0d2d66] flex flex-col text-white  pb-12 space-y-2  h-full overflow-y-auto  "> 

          <div className="relative">
            <button
              className="px-3 py-1 flex font-semibold text-lg "
            >
              About 
            </button>
              <div className="px-4 py-2 text-sm">
                <a href="#" className="block px-4 py-2  hover:bg-white/20">About ICAEBMS</a>
                <a href="#" className="block px-4 py-2  hover:bg-white/20">About Organizer </a>
                <a href="#" className="block px-4 py-2  hover:bg-white/20">Speakers</a>
                  <a href="#" className="block px-4 py-2 hover:bg-white/20">Organizing Committee Member </a>
                <a href="#" className="block px-4 py-2  hover:bg-white/20">Organizing Committee Form</a>
              </div>
            
          </div>

          <div className="relative">
            <button
              className="px-3 py-1 flex font-semibold text-lg "
            >
             Session Tracks 
            </button>
              <div className="px-4 py-2 text-sm">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Session Tracks & Call for Papers</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Essential Downloads</a>
              
              </div>
          </div>
           <div className="relative">
            <button
              className="px-3 py-1 flex font-semibold text-lg "
            >
              Paper Submission 
            </button>

              <div className="px-4 py-2 text-sm">
                <a href="#" className="block px-4 py-2 hover:bg-white/20 ">Abstract & Full Paper Submission</a>
                <a href="#" className="block px-4 py-2 hover:bg-white/20 ">Submission Guidelines </a>
              </div>
        
          </div>

          <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            Publication
          </a>

 <div className="relative">
            <button
              className="px-3 py-1 flex font-semibold text-lg "
            >
              Registration 
            </button>

              <div className="px-4 py-2 text-sm">
                <a href="#" className="block px-4 py-2  hover:bg-white/20">Registration Fee</a>
                <a href="#" className="block px-4 py-2  hover:bg-white/20">Available Payment Methods</a>
                <a href="#" className="block px-4 py-2  hover:bg-white/20">Registration Instruction</a>
                <a href="#" className="block px-4 py-2  hover:bg-white/20 ">Terms and Conditions</a>
              </div>
        
          </div>
           <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            Exhibits and Sponsors
          </a>
           <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            FAQ
          </a>
           <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            Venue
          </a>
          <a href="#" className="px-3 py-1 rounded hover:bg-white/20">
            Contact
          </a>

       
          <a
            href="#"
            className="bg-yellow-500 text-black text-center px-4 py-1 rounded font-bold hover:bg-yellow-400 "
          >
            Login
          </a>
        </div>
        </div>
        </div>
)}

    </nav>
  );
};

export default Navbar;