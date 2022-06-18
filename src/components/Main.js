import { useContext } from "react";
import Card from "./Card.js";
import CurrentUserContext from "../context/CurrentUserContext"
import CurrentCardsContext from "../context/CurrentCardsContext.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardLike, onCardDelete, handleCardClick }) {
  const user = useContext(CurrentUserContext);
  const cards = useContext(CurrentCardsContext);

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
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />)
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
