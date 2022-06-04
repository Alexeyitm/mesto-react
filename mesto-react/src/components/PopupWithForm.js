import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className={`popup__container popup__container_${props.name} container`}>
        <button className="popup__button-close" type="button"></button>
        <div className="popup__content">
          <h2 className="popup__title">{props.title}</h2>
          <form className={`popup__form popup__form_${props.name}`} name="Form" novalidate>
            {props.children}
          </form>
        </div>
      </div>
    </div>
  )
};

export default PopupWithForm;