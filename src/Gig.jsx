import React from "react";

const Gig = (props) => {
    return (
        <div className="gig">
            {props.name && <h3>{props.name}</h3>}
            <img className="band" src={`/assets/${props.image}`} alt={props.name} />
            {props.description && <p>{props.description}</p>}
            {props.timedate && <p>{props.timedate}</p>}
            {props.location && <p>{props.location}</p>}
                {/* Code for adding button */}
            {props.children}
        </div>
    );
};

export default Gig;