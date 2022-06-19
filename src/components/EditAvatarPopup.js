import { useRef, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [textButton, setTextButton] = useState("Сохранить");

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      link: inputRef.current.value
    }, setTextButton);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      textButton={textButton}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
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