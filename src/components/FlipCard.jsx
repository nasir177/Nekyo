import React, { useState } from "react";
import "./FlipCard.css";

export default function FlipCard({ front,  back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card${flipped ? " flipped" : ""}`} onClick={() => setFlipped(f => !f)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="kanji">{front}</div>
          
        </div>
        <div className="flip-card-back">
          <div className="meaning">{back}</div>
        </div>
      </div>
    </div>
  );
}