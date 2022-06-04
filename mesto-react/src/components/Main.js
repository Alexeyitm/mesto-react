import React from 'react';
import { api } from '../utils/Api.js';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription] = React.useState();

  React.useEffect(() => {
    api.getUser()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch(err => console.log(err));
  });

  return (
    <main>
      <section className="profile">
        <button className="profile__button-avatar" type="button" onClick={props.onEditAvatar}>
          <img className="profile__avatar-img" src={userAvatar} alt={userName}/>
        </button>
        <div className="profile__info">
          <div className="profile__author">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  )
};

export default Main;
