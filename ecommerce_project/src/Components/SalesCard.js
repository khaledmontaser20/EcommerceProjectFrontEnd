import React from "react";
import "./SalesCard.css";

function SalesCard({ src, name, percentage }) {
  return (
    <div className="container">
      <div>
        <img src={src} />
      </div>
      <div className="subCont">
        <h1 style={{ color: "gray" }}>{name}</h1>
        <h1 style={{ color: "black", fontWeight: "bold" }}>
          Up to {percentage}% off
        </h1>
        <p
          style={{
            color: "red",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          SHOP NOW
        </p>
      </div>
    </div>
  );
}

export default SalesCard;
