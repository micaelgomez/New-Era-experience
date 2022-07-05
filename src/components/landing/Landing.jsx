import "./landing.scss";
import logo from "../../assets/logo.png";
import Bounce from "react-reveal/Bounce";

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="content">
        <Bounce top>
          <div className="info">
            <div className="top">
              <img src={logo} alt="logo-info" className="logo-info" />
              <div className="title">
                <h2>NEW ERA</h2>
                <h3>¡Reviví tu pasión y gana premios todos los meses!</h3>
              </div>
            </div>
            <a href="/#" className="btn">
              VER PARTIDOS
            </a>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Landing;
