import { useEffect, useState, useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup"
import DeleteCardPopup from  "./DeleteCardPopup";
import { api } from "../utils/Api";
import CurrentUserContext from "../context/CurrentUserContext";

function App() {
  const user = useContext(CurrentUserContext);

  const [currentUser, setUser] =  useState({});
  const [currentCards, setCards] =  useState([]);
  const [isEditAvatarPopupOpen, setIsAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopup] = useState(false);
  const [isDeleteCardPopupOpen, deleteIsCardPopup] = useState({isOpen: false, card: {}});
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

  function handleClickDeleteCard(card) {
    deleteIsCardPopup({isOpen: true, card: card});  
  }

  function handleCardClick(card) {
    setIsSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAvatarPopup(false);
    setIsProfilePopup(false);
    setIsPlacePopup(false);
    deleteIsCardPopup({isOpen: false, card: {}});
    setIsSelectedCard({});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === user._id);
    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(err))
  }

  function handleUpdateAvatar(picture, setTextButton) {
    setTextButton("Сохранение...");

    api.setAvatar(picture).then((user) => {
      setUser(user);
    })
    .catch((err) => console.log(err))
    .finally(() => ClosePopup('Сохранить', setTextButton));
  }

  function handleUpdateUser(user, setTextButton) {
    setTextButton("Сохранение...");

    api.setUser(user).then((user) => {
      setUser(user);
    })
    .catch((err) => console.log(err))
    .finally(() => ClosePopup('Сохранить', setTextButton));
  }

  function handleAddPlaceSubmit(card, setTextButton) {
    setTextButton("Создание...");

    api.setCard(card).then((newCard) => {
      setCards([newCard, ...currentCards]); 
    })
    .catch((err) => console.log(err))
    .finally(() => ClosePopup('Создать', setTextButton));
  }

  function handleCardDelete(card, setTextButton) {
    setTextButton("Удаление...");

    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));   
    })
    .catch((err) => console.log(err))
    .finally(() => ClosePopup('Да', setTextButton));
  }

  function ClosePopup(textButton, setTextButton) {
    closeAllPopups();
    setTimeout(() => setTextButton(textButton), 1000);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="content">
          <Header />
          <Main
            cards={currentCards}
            onEditAvatar={handleClickEditAvatar}
            onEditProfile={handleClickEditProfile}
            onCardLike={handleCardLike}
            onCardDelete={handleClickDeleteCard}
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
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <DeleteCardPopup
            card={isDeleteCardPopupOpen.card}
            isOpen={isDeleteCardPopupOpen.isOpen}
            onClose={closeAllPopups}
            deleteCard={handleCardDelete}
          />
          <ImagePopup 
            card={selectedCard} 
            onClose={closeAllPopups} 
          />
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
