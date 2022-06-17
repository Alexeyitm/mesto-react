import { React } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      textButton="Сохранить"
    >
      <input
        id="link-avatar"
        className="popup__input popup__input_field_avatar-link"
        type="url"
        name="Link"
        placeholder="Ссылка на картинку"
        required
      />
      <span
        id="link-avatar-error"
        className="popup__input-error popup__input-error_number_one"
      ></span>
    </PopupWithForm>
  )
};

export default EditAvatarPopup;