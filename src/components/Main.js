import { React, useContext } from "react";
import Card from "./Card.js";
import { api } from "../utils/Api";
import CurrentUserContext from "../context/CurrentUserContext"
import CurrentCardsContext from "../context/CurrentCardsContext"

function Main({ onEditAvatar, onEditProfile, onAddPlace, handleCardClick, setCards }) {
  const user = useContext(CurrentUserContext);
  const cards = useContext(CurrentCardsContext);

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

  return (
    <main>
      <section className="profile">
        <button
          className="profile__button-avatar"
          type="button"
          onClick={onEditAvatar}
        >
          <img
            className="profile__avatar-img"
            src={user.avatar}
            alt={user.name}
          />
        </button>
        <div className="profile__info">
          <div className="profile__author">
            <h1 className="profile__name">{user.name}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__text">{user.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map(function(card) {              
              return (<Card 
                card={card}
                user={user}
                key={card._id}
                handleCardClick={handleCardClick}
                onCardLike = {handleCardLike}
                onCardDelete = {handleCardDelete}
              />)
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
