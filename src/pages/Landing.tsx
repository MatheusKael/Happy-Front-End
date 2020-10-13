import React from "react";
import logoImg from "../images/Logo.svg";
import { FiArrowRight } from "react-icons/fi";
import "../styles/pages/landing-page.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={logoImg} alt="" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Anastácio</strong>
          <span>Mato Grosso do Sul</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={20} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
