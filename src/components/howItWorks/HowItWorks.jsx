import React from "react";
import "./howItWorks.scss";
import { cardInfo } from "../../dataCards";
import Steps from "../steps/Steps";

function HowItWorks() {
  return (
    <div className="howItWorks" id="functions">
      <div className="title">
        <h2>¿Como funciona?</h2>
        <h3>
          Instalamos cámaras en los complejos deportivos, los jugadores reviven
          sus partidos desde el teléfono o la computadora y participan por
          premios todos los meses.
        </h3>
      </div>
      <div className="cards">
        {cardInfo.map((info) => (
          <Steps
            id={info.id}
            description={info.description}
            title={info.title}
            link={info.link}
            logo={info.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
