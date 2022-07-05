import "./App.scss";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Video from "./components/video/Video";
import Clubs from "./components/clubs/Clubs";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Landing />
      <HowItWorks />
      <Video />
      <Clubs />
      

    </div>
  );
}

export default App;
