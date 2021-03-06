import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup'
import DeleteCardPopup from  './DeleteCardPopup';
import { api } from '../utils/Api';
import CurrentUserContext from '../context/CurrentUserContext';

function App() {
  
  const [currentUser, setUser] =  useState({});

  const [currentCards, setCards] =  useState([]);
  const [currentMyCards, setMyCards] =  useState([]);
  const [currentOtherCards, setOtherCards] =  useState([]);

  const [isEditAvatarPopupOpen, setIsAvatarPopup] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopup] = useState(false);
  const [isDeleteCardPopupOpen, deleteIsCardPopup] = useState({isOpen: false, card: {}});
  const [selectedCard, setIsSelectedCard] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([user, items]) => {
        setUser(user);
        setCards(items);
        setMyCards(items.filter(item => item.owner._id === user._id));
        setOtherCards(items.filter(item => item.owner._id !== user._id));
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
    setTimeout(() => {
      setIsSaving(false);
    }, 500);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      setMyCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      setOtherCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(err))
  }

  function handleUpdateAvatar(picture) {
    setIsSaving(true);
    api.setAvatar(picture).then((user) => {
      setUser(user);
    })
    .catch((err) => console.log(err))
    .finally(closeAllPopups);
  }

  function handleUpdateUser(user) {
    setIsSaving(true);
    api.setUser(user).then((user) => {
      setUser(user);
    })
    .catch((err) => console.log(err))
    .finally(closeAllPopups);
  }

  function handleAddPlaceSubmit(card) {
    setIsSaving(true);
    api.setCard(card).then((newCard) => {
      setCards([newCard, ...currentCards]);
      setMyCards([newCard, ...currentMyCards]);
    })
    .catch((err) => console.log(err))
    .finally(closeAllPopups);
  }

  function handleCardDelete(card) {
    setIsSaving(true);
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
      setMyCards((state) => state.filter((c) => c._id !== card._id)); 
      setOtherCards((state) => state.filter((c) => c._id !== card._id)); 
    })
    .catch((err) => console.log(err))
    .finally(closeAllPopups);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className='content'>
          <Header />
          <Main
            cards={currentCards}
            myCards={currentMyCards}
            otherCards={currentOtherCards}
            onEditAvatar={handleClickEditAvatar}
            onEditProfile={handleClickEditProfile}
            onAddPlace={handleClickAddPlace}
            onCardLike={handleCardLike}
            handleCardClick={handleCardClick}
            onCardDelete={handleClickDeleteCard}
          />
          <Footer />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isSaving={isSaving}
          />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isSaving={isSaving}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            isSaving={isSaving}
          />
          <DeleteCardPopup
            card={isDeleteCardPopupOpen.card}
            isOpen={isDeleteCardPopupOpen.isOpen}
            onClose={closeAllPopups}
            deleteCard={handleCardDelete}
            isSaving={isSaving}
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
