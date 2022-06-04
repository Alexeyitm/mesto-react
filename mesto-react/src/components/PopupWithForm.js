import React from 'react';

function PopupWithForm(props) {
  if (props.isOpen) {
    return (
      <div className={`popup popup_${props.name} popup_opened`}>
        <div className={`popup__container popup__container_${props.name} container`}>
          <button className="popup__button-close" type="button" onClick={props.onClose}></button>
          <div className="popup__content">
            <h2 className="popup__title">{props.title}</h2>
            <form className={`popup__form popup__form_${props.name}`} name="Form" novalidate>
              {props.children}
            </form>
          </div>
        </div>
      </div>
    )
  }  
};

export default PopupWithForm;