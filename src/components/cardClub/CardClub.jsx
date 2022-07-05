import React from "react";
import "./cardClub.scss";

function CardClub({ number, club, ciudad, telefono, foto }) {
  return (
    <div
      id={number}
      className="cardClub"
      style={{
        backgroundImage: `url(/images/${foto}.jpg)`,
      }}
    >
      <div className="content">
        <h4>{club}</h4>
        <h5>{ciudad}</h5>
        <h6>{telefono}</h6>
      </div>
    </div>
  );
}

export default CardClub;
