import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsAvatarPopup] = React.useState();
  const [isEditProfilePopupOpen, setIsProfilePopup] = React.useState();
  const [isAddPlacePopupOpen, setIsPlacePopup] = React.useState();
  const [selectedCard, setIsSelectedCard] = React.useState();

  function handleClickEditAvatar() {
    setIsAvatarPopup(true);
  }

  function handleClickEditProfile() {
    setIsProfilePopup(true);
  }

  function handleClickAddPlace() {
    setIsPlacePopup(true);
  }

  function handleCardClick(card) {
    setIsSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAvatarPopup(false);
    setIsProfilePopup(false);
    setIsPlacePopup(false);
    setIsSelectedCard(false)
  }
    
  return (
    <div className="content">
      <Header />
      <Main onEditAvatar={handleClickEditAvatar} onEditProfile={handleClickEditProfile} onAddPlace={handleClickAddPlace} handleCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="link-avatar" className="popup__input popup__input_field_avatar-link" type="url" name="Link" placeholder="Ссылка на картинку" required />
        <span id="link-avatar-error" className="popup__input-error popup__input-error_number_one"></span>
        <button className="popup__button-add popup__button-add_avatar" type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name="user" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="name" className="popup__input popup__input_field_name" type="text" name="Name" placeholder="Имя" minlength="2" maxlength="40" required />
        <span id="name-error" className="popup__input-error popup__input-error_number_one"></span>
        <input id="job" className="popup__input popup__input_field_job" type="text" name="Job" placeholder="Профессиональная деятельность" minlength="2" maxlength="200" required />
        <span id="job-error" className="popup__input-error popup__input-error_number_two"></span>
        <button className="popup__button-add popup__button-add_user" type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="place" className="popup__input popup__input_field_place" type="text" name="Place" minlength="2" maxlength="30" placeholder="Название" required />
        <span id="place-error" className="popup__input-error popup__input-error_number_one"></span>
        <input id="link" className="popup__input popup__input_field_link" type="url" name="Link" placeholder="Ссылка на картинку" required />
        <span id="link-error" className="popup__input-error popup__input-error_number_two"></span>
        <button className="popup__button-add popup__button-add_card" type="submit">Создать</button>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?">
        <button className="popup__button-add popup__button-add_confirm" type="submit">Да</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;