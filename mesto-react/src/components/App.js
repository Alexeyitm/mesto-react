import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

const handleEditAvatarClick = () => {
  document.querySelector('.popup_avatar').classList.add('popup_opened');
};
const handleEditProfileClick = () => {
  document.querySelector('.popup_user').classList.add('popup_opened');
};
const handleAddPlaceClick = () => {
  document.querySelector('.popup_card').classList.add('popup_opened');
};

function App() {
  return (
    <body className="page">
      <div className="content">

        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <Footer />

        <PopupWithForm name="avatar" title="Обновить аватар" isOpen>
          <input id="link-avatar" className="popup__input popup__input_field_avatar-link" type="url" name="Link" placeholder="Ссылка на картинку" required />
          <span id="link-avatar-error" className="popup__input-error popup__input-error_number_one"></span>
          <button className="popup__button-add popup__button-add_avatar" type="submit">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="user" title="Редактировать профиль" isOpen>
          <input id="name" className="popup__input popup__input_field_name" type="text" name="Name" placeholder="Имя" minlength="2" maxlength="40" required />
          <span id="name-error" className="popup__input-error popup__input-error_number_one"></span>
          <input id="job" className="popup__input popup__input_field_job" type="text" name="Job" placeholder="Профессиональная деятельность" minlength="2" maxlength="200" required />
          <span id="job-error" className="popup__input-error popup__input-error_number_two"></span>
          <button className="popup__button-add popup__button-add_user" type="submit">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="card" title="Новое место" isOpen>
          <input id="place" className="popup__input popup__input_field_place" type="text" name="Place" minlength="2" maxlength="30" placeholder="Название" required />
          <span id="place-error" className="popup__input-error popup__input-error_number_one"></span>
          <input id="link" className="popup__input popup__input_field_link" type="url" name="Link" placeholder="Ссылка на картинку" required />
          <span id="link-error" className="popup__input-error popup__input-error_number_two"></span>
          <button className="popup__button-add popup__button-add_card" type="submit">Создать</button>
        </PopupWithForm>
        <PopupWithForm name="confirm" title="Вы уверены?">
          <button className="popup__button-add popup__button-add_confirm" type="submit">Да</button>
        </PopupWithForm>

        <ImagePopup />

        <template className="element-template">
          <li className="element">
            <article className="element__card">
              <button className="element__button-delete" type="button"></button>
              <img className="element__img"/>
              <div className="element__description">
                <h2 className="element__figcaption"></h2>
                <div className="element__like">
                  <button className="element__svg-heart element__svg-heart_hover" type="button"></button>
                  <div className="element__count"></div>
                </div>
              </div>
            </article>
          </li>
        </template>

      </div>
    </body>
  );
}

export default App;