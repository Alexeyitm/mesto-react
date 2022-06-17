import { React, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const [name, setName] =  useState('');
  const [description, setDescription] =  useState('');

  function handleChange(e) {
    setName(e.target.value);
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      name="user"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.isClose}
      textButton="Сохранить"
    >
      <input
        onChange={handleChange}
        id="name"
        className="popup__input popup__input_field_name"
        type="text"
        name="Name"
        placeholder="Имя"
        minlength="2"
        maxlength="40"
        required
      />
      <span
        id="name-error"
        className="popup__input-error popup__input-error_number_one"
      ></span>
      <input
        onChange={handleChange}
        id="job"
        className="popup__input popup__input_field_job"
        type="text"
        name="Job"
        placeholder="Профессиональная деятельность"
        minlength="2"
        maxlength="200"
        required
      />
      <span
        id="job-error"
        className="popup__input-error popup__input-error_number_two"
      ></span>
    </PopupWithForm>
  )
};

export default EditProfilePopup;