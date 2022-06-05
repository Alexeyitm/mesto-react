import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([userInfo, items]) => {
        setUserAvatar(userInfo.avatar);
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);

        setCards(
          items.map((item) => ({
            name: item.name,
            link: item.link,
            likes: item.likes.length,
            key: item._id,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

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
            src={userAvatar}
            alt={userName}
          />
        </button>
        <div className="profile__info">
          <div className="profile__author">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__text">{userDescription}</p>
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
            cards.map((card) => (
              <Card 
                {...card} 
                handleCardClick={props.handleCardClick} 
              />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
