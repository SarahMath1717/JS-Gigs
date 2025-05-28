import React from "react"
import LikeToggle from "./Like.jsx"
import Gig from "./Gig.jsx"
import "./Gig.css";

function App() {
  return (
    <div className="App">
      <Gig name="Rob Zombie" image="RobZombie.webp" description="Freaks on Parade, Where Horror and Rock Collide" timedate="7pm, 6th June 2026" location="Glasgow OVO Hydro">
        <LikeToggle />
      </Gig>
      <Gig name="Nine Inch Nails" image="nin.webp" description="Trent Reznor brings the industrial fire" timedate="8pm, 10th June 2026" location="Manchester Arena">
        <LikeToggle />
      </Gig>        
      <Gig name="Tool" image="Tool.jpg" description="A night of progressive metal mastery" timedate="7:30pm, 12th June 2026" location="London O2 Arena">
        <LikeToggle />
      </Gig>        
      <Gig name="SOAD" image="SOAD.jpg" description="Get ready to break down the walls" timedate="9pm, 15th June 2026" location="Birmingham NEC">
        <LikeToggle />
      </Gig>    
    </div>
  );
}

export default App;