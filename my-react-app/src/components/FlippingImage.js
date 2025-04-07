import React from "react";
import "./FlippingImage.css";
import flipSound from "../assets/frog-croak.mp3"; 

const FlippingImage = () => {
    const playSound = () => {
        const audio = new Audio(flipSound);
        audio.play();
      };
    
      return (
        <div className="image-container">
          <img
            src="/frog.png"
            alt="Flipping"
            className="flip-on-hover"
            onClick={playSound}
          />
        </div>
      );
};

export default FlippingImage;
