import React from "react";
import robZombie from "./assets/RobZombie.webp";

const Gig = () => {
    return (
        <div id="rob-zombie">
            <h3 id="name">Rob Zombie</h3>
            <img className="band" src={robZombie}></img>
            <p id="description">Rob Zombie rocking out the classics, with touring support act Ministry</p>
            <p id="time-date">6th June 2026</p>
            <p id="location">Glasgow OVO Hydro</p>
        </div>
    );
};

export default Gig;