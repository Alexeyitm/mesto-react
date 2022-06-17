import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div
        className={`popup__container popup__container_${props.name} container`}
      >
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <div className="popup__content">
          <h2 className="popup__title">{props.title}</h2>
          <form
            onSubmit={props.onSubmit}
            className={`popup__form popup__form_${props.name}`}
            name="Form"
            noValidate
          >
            {props.children}
            <button
              className={`popup__button-add popup__button-add_${props.name}`}
              type="submit"
            >
              {props.textButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
