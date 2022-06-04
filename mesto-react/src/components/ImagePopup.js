import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_image">
      <figure className="popup__figure container">
        <button className="popup__button-close" type="button"></button>
        <img className="popup__picture"/>
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </div>
  )
};

export default ImagePopup;