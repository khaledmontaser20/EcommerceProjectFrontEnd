import React from "react";
import "./Card.css";

function Card({ src, name, price }) {
  return (
    <div className="container">
      <div className="imgCont">
        <img src={src} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</h1>
        <h1 style={{ fontSize: "20px", color: "gray", alignSelf: "center" }}>
          {price}$
        </h1>
      </div>
    </div>
  );
}

export default Card;
