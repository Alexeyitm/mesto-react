import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_image ${props.card.link && 'popup_opened'}`}>
      <figure className="popup__figure container">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__picture"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__figcaption">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
