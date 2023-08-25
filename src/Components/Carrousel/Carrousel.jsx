import React, { useState } from 'react';
import './Carousel.scss';

const NeomorphismPopUp = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  return (
    <div className="popup-container">
      <button className="floating-button" onClick={togglePopup}>
        +
      </button>
      <div className={`popup-background ${isPopupVisible ? 'visible' : ''}`}>
        <div className="popup-content">
        <button className="close-button" onClick={togglePopup}>
          &times;
        </button>
          <h2 className="title">Elegi tu LATE</h2>
          <input
            type="text"
            className="neomorphism-input"
            placeholder="mandanos tu peticion"
          />
        </div>
      </div>
    </div>
  );
};

export default NeomorphismPopUp;
