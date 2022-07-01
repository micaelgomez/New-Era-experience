import "./landing.scss";
import logo from "../../assets/logo.png";


function Landing() {
  return (
    <div className="landing">

      <div className="content">
        <div className="info">
          <div className="top">
            <img src={logo} alt="logo-info" className="logo-info" />
            <div className="title">
              <h2>NEW ERA</h2>
              <h3>¡ Reviví tu pasión y gana premios todos los meses !</h3>
            </div>

          </div>
          <a href="/#" className="btn">VER PARTIDOS</a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
