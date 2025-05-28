import React, { useState } from "react"
import LikeToggle from "./components/Like.jsx"
import Gig from "./components/Gig.jsx"
import "./Gig.css";

function App() {
  const [gigs, setGigs] = useState([
    {
      id: 1,
      name: "Rob Zombie", 
      image: "RobZombie.webp", 
      description: "Freaks on Parade, Where Horror and Rock Collide",
      timedate: "7pm, 6th June 2026", 
      location: "Glasgow OVO Hydro",
      liked: true
    },
    {
      id: 2,
      name: "Nine Inch Nails",
      image: "nin.webp",
      description: "Trent Reznor brings the industrial fire",
      timedate: "8pm, 10th June 2026",
      location: "Manchester Arena",
      liked: false
    },
    {
      id: 3,
      name: "Tool",
      image: "Tool.jpg",
      description: "A night of progressive metal mastery",
      timedate: "7:30pm, 12th June 2026",
      location: "London O2 Arena",
      liked: false
    },
    {
      id: 4,
      name: "SOAD",
      image: "SOAD.jpg", 
      description: "Get ready to break down the walls",
      timedate: "9pm, 15th June 2026",
      location: "Birmingham NEC",
      liked: true
    }
  ])

  // set up the mechanism for liking gigs
  const toggleLike = (id) => {
    setGigs(prevGigs =>
      prevGigs.map(gig =>
        gig.id === id ? { ...gig, liked: !gig.liked } : gig
      )
    );
  };

  //split gigs into liked and other gigs
  const likedGigs = gigs.filter(gig => gig.liked);
  const unlikedGigs = gigs.filter(gig => !gig.liked);

  return (
    <div className="App gig-grid">
      {[...likedGigs, ...unlikedGigs].map(gig => (
        <Gig
          key={gig.id}
          name={gig.name}
          image={gig.image}
          description={gig.description}
          timedate={gig.timedate}
          location={gig.location}
        >
          <LikeToggle liked={gig.liked} onToggle={() => toggleLike(gig.id)} />
        </Gig>
      ))}
    </div>
  );
}

export default App;