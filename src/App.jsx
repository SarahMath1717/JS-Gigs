import React from "react"
import Gig from "./Gig.jsx"
import "./Gig.css";

function App() {
  return (
    <div className="App">
      <Gig name="Rob Zombie" image="RobZombie.webp" description="Rob Zombie rocking out the classics, with touring support act Ministry" timedate="7pm, 6th June 2026" location="Glasgow OVO Hydro" />
    </div>
  );
}

export default App;