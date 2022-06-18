import { React } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
            name="card"
            title="Новое место"
            textButton="Создать"
            isOpen={isOpen}
            onClose={onClose}
          >
            <input
              id="place"
              className="popup__input popup__input_field_place"
              type="text"
              name="Place"
              minLength="2"
              maxLength="30"
              placeholder="Название"
              required
            />
            <span
              id="place-error"
              className="popup__input-error popup__input-error_number_one"
            ></span>
            <input
              id="link"
              className="popup__input popup__input_field_link"
              type="url"
              name="Link"
              placeholder="Ссылка на картинку"
              required
            />
            <span
              id="link-error"
              className="popup__input-error popup__input-error_number_two"
            ></span>
          </PopupWithForm>
  )
};

export default AddPlacePopup;