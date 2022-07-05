import React from "react";
import "./clubs.scss";
import Carousel from "react-elastic-carousel";
import CardClub from "../cardClub/CardClub";
import { infoClubs } from "../../infoClubs";
import Fade from 'react-reveal/Fade';

function Clubs() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="clubs" id="clubes">
      <Fade right>      <h2>Establecimientos afiliados</h2>
      <Carousel breakPoints={breakPoints}>
        {infoClubs.map((club) => (
          <CardClub
            number={club.number}
            club={club.club}
            ciudad={club.ciudad}
            telefono={club.telefono}
            foto={club.foto}
            key={club.number}
          />
        ))}
      </Carousel>
      </Fade>

    </div>
  );
}

export default Clubs;
