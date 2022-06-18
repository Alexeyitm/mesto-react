import { useEffect, useState, useContext} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import { api } from "../utils/Api";
import CurrentUserContext from "../context/CurrentUserContext";
import CurrentCardsContext from "../context/CurrentCardsContext";

function App() {
  const user = useContext(CurrentUserContext);
  const cards = useContext(CurrentCardsContext);
  
  const [currentUser, setUser] =  useState({});
  const [currentCards, setCards] =  useState([]);
  const [isEditAvatarPopupOpen, setIsAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopup] = useState(false);
  const [selectedCard, setIsSelectedCard] = useState({});

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([user, items]) => {
        setUser(user);
        setCards(items);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleClickEditAvatar() {
    setIsAvatarPopup(true);
  }

  function handleClickEditProfile() {
    setIsProfilePopup(true);
  }

  function handleClickAddPlace() {
    setIsPlacePopup(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === user._id);
    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
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

  function handleUpdateAvatar(picture) {
    api.setAvatar(picture).then((user) => {
      setUser(user);
    })
    .catch((err) => console.log(err))
    .finally(closeAllPopups);
  }

  function handleUpdateUser(user) {
    api.setUser(user).then((user) => {
      setUser(user);
    })
    .catch((err) => console.log(err))
    .finally(closeAllPopups);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardsContext.Provider value={currentCards}>
        <div className="content">
          <Header />
          <Main
            onEditAvatar={handleClickEditAvatar}
            onEditProfile={handleClickEditProfile}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onAddPlace={handleClickAddPlace}
            handleCardClick={handleCardClick}
            setCards={setCards}
          />
          <Footer />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            name="card"
            title="Новое место"
            textButton="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
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
