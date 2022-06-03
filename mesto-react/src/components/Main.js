import React from 'react';

function Main() {
  
  const handleEditAvatarClick = () => {
    document.querySelector('.popup_avatar').classList.add('popup_opened');
  };
  const handleEditProfileClick = () => {
    document.querySelector('.popup_user').classList.add('popup_opened');
  };
  const handleAddPlaceClick = () => {
    document.querySelector('.popup_card').classList.add('popup_opened');
  };
  
  return (
    <main>
      <section className="profile">
        <button className="profile__button-avatar" type="button" onClick={handleEditAvatarClick}>
          <img className="profile__avatar-img"/>
        </button>
        <div className="profile__info">
          <div className="profile__author">
            <h1 className="profile__name"></h1>
            <button className="profile__button-edit" type="button" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__text"></p>
        </div>
        <button className="profile__button-add" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  )
};

export default Main;
