import { React, useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from "../context/CurrentUserContext"

function EditProfilePopup(props) {
  const [name, setName] =  useState('');
  const [description, setDescription] =  useState('');

  function handleChange(e) {
    setName(e.target.value);
    setDescription(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
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
        minLength="2"
        maxLength="40"
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
        minLength="2"
        maxLength="200"
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