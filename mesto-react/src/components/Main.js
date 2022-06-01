import React from 'react';

function Main() {
  return (
    <main>
      <section className="profile">
        <button className="profile__button-avatar">
          <img className="profile__avatar-img"/>
        </button>
        <div className="profile__info">
          <div className="profile__author">
            <h1 className="profile__name"></h1>
            <button className="profile__button-edit" type="button"></button>
          </div>
          <p className="profile__text"></p>
        </div>
        <button className="profile__button-add" type="button"></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section> 
    </main>
  )
};

export default Main;