import TopBand from "./components/TopBand";
import QuickBar from "./components/QuickBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero"
import Welcome from "./sections/Welcome";
import Theme from "./sections/Theme";
import KeyHighlights from "./sections/KeyHighlights";
import SessionTracks from "./sections/SessionTracks";
import Deadlines from "./sections/Deadlines";
import WhyJoin from "./sections/WhyJoin";
import Publications from "./sections/Publications";

function App() {
  return (
    <div className="font-sans">
      <TopBand />
      <QuickBar />
      <Navbar />

      <Hero />
      <Welcome />
      <Theme />
      <KeyHighlights />
      <SessionTracks />
      <Deadlines />
      <WhyJoin />
      <Publications /> 

      <Footer />
    </div>
  );
}

export default App;