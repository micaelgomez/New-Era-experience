import React from "react";
import "./Card.scss";

function Card({ id, title, description, logo }) {
  return (
    <div class="card">
      <div class="box">
        <div class="content">
          <h2> {id}</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="/#">{logo}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
