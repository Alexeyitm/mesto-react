import {React, useEffect, useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import CurrentUserContext from "../context/CurrentUserContext";
import CurrentCardsContext from "../context/CurrentCardsContext";

function App() {
  const [currentUser, setUser] =  useState({});
  const [currentCards, setCards] =  useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([userInfo, items]) => {
        setUser(userInfo);
        setCards(items);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isEditAvatarPopupOpen, setIsAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopup] = useState(false);
  const [selectedCard, setIsSelectedCard] = useState({});

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
    setIsSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardsContext.Provider value={currentCards}>
        <div className="content">
          <Header />
          <Main
            onEditAvatar={handleClickEditAvatar}
            onEditProfile={handleClickEditProfile}
            onAddPlace={handleClickAddPlace}
            handleCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
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
          <PopupWithForm
            name="user"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            textButton="Сохранить"
          >
            <input
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
          <PopupWithForm
            name="card"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            textButton="Создать"
          >
            <input
              id="place"
              className="popup__input popup__input_field_place"
              type="text"
              name="Place"
              minlength="2"
              maxlength="30"
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
          <PopupWithForm 
            name="confirm" 
            title="Вы уверены?"
            textButton="Да"
          >
          </PopupWithForm>
          <ImagePopup 
            card={selectedCard} 
            onClose={closeAllPopups} 
          />
        </div>
      </CurrentCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
