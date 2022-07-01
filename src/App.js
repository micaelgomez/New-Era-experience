import "./App.scss";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Landing />
     
    </div>
  );
}

export default App;
