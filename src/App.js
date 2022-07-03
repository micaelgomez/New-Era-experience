import "./App.scss";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Video from "./components/video/Video";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Landing />
      <HowItWorks />
      <Video />
    </div>
  );
}

export default App;
