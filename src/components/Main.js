import { React, useContext } from "react";
import Card from "./Card.js";
import { api } from "../utils/Api";
import CurrentUserContext from "../context/CurrentUserContext"
import CurrentCardsContext from "../context/CurrentCardsContext"

import { setCards } from "./App"


function Main(props) {
  const user = useContext(CurrentUserContext);
  const cards = useContext(CurrentCardsContext);

  return (
    <main>
      <section className="profile">
        <button
          className="profile__button-avatar"
          type="button"
          onClick={props.onEditAvatar}
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
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__text">{user.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map(function(card) {              
              function handleCardLike(card) {
                const isLiked = card.likes.some(i => i._id === user._id);
                console.log(isLiked)
                api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
                  
                });
              } 

              return (<Card 
                card={card}
                user={user}
                key={card._id}
                handleCardClick={props.handleCardClick}
                onCardLike = {handleCardLike}
              />)
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
