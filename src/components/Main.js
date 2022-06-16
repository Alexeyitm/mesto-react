import { React, useContext } from "react";
//import { api } from "../utils/Api.js";
//import Card from "./Card.js";
import CurrentUserContext from "../context/CurrentUserContext"

function Main(props) {
  const user = useContext(CurrentUserContext);

  //const [cards, setCards] = useState([]);

  //useEffect(() => {
  //  Promise.all([api.getUser(), api.getCards()])
  //    .then(([userInfo, items]) => {
//
  //      setCards(
  //        items.map((item) => ({
  //          name: item.name,
  //          link: item.link,
  //          likes: item.likes.length,
  //          key: item._id,
  //        }))
  //      );
  //    })
  //    .catch((err) => console.log(err));
  //}, []);

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
            //cards.map((card) => (
            //  <Card 
            //    {...card} 
            //    handleCardClick={props.handleCardClick} 
            //  />
            //))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
