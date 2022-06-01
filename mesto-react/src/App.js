import React from 'react';
import logo from './image/Vector.svg';

function App() {
  return (
    <body className="page">

      <div className="content">

        <header className="header">
          <img className="header__logo" src={logo}/>
        </header>

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

        <footer className="footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>

        <div className="popup popup_avatar">
          <div className="popup__container popup__container_avatar container">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__content">
              <h2 className="popup__title">Обновить аватар</h2>
              <form className="popup__form popup__form_avatar" name="Form" novalidate>
                <input id="link-avatar" className="popup__input popup__input_field_avatar-link" type="url" name="Link" placeholder="Ссылка на картинку" required />
                <span id="link-avatar-error" className="popup__input-error popup__input-error_number_one"></span>
                <button className="popup__button-add popup__button-add_avatar" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>

        <div className="popup popup_user">
          <div className="popup__container popup__container_user container">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__content">
              <h2 className="popup__title">Редактировать профиль</h2>
              <form className="popup__form popup__form_edit" name="Form" novalidate>
                <input id="name" className="popup__input popup__input_field_name" type="text" name="Name" placeholder="Имя" minlength="2" maxlength="40" required />
                <span id="name-error" className="popup__input-error popup__input-error_number_one"></span>
                <input id="job" className="popup__input popup__input_field_job" type="text" name="Job" placeholder="Профессиональная деятельность" minlength="2" maxlength="200" required />
                <span id="job-error" className="popup__input-error popup__input-error_number_two"></span>
                <button className="popup__button-add popup__button-add_user" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>

        <div className="popup popup_card">
          <div className="popup__container popup__container_card container">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__content">
              <h2 className="popup__title">Новое место</h2>
              <form className="popup__form popup__form_add" name="Form" novalidate>
                <input id="place" className="popup__input popup__input_field_place" type="text" name="Place" minlength="2" maxlength="30" placeholder="Название" required />
                <span id="place-error" className="popup__input-error popup__input-error_number_one"></span>
                <input id="link" className="popup__input popup__input_field_link" type="url" name="Link" placeholder="Ссылка на картинку" required />
                <span id="link-error" className="popup__input-error popup__input-error_number_two"></span>
                <button className="popup__button-add popup__button-add_card" type="submit">Создать</button>
              </form>
            </div>
          </div>
        </div>

        <div className="popup popup_image">
          <figure className="popup__figure container">
            <button className="popup__button-close" type="button"></button>
            <img className="popup__picture"/>
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
        </div>

        <div className="popup popup_confirm">
          <div className="popup__container popup__container_confirm container">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__content popup__content_confirm">
              <h2 className="popup__title">Вы уверены?</h2>
              <form className="popup__form popup__form_confirm" name="Form" novalidate>
                <button className="popup__button-add popup__button-add_confirm" type="submit">Да</button>
              </form>
            </div>
          </div>
        </div>

        <template className="element-template">
          <li className="element">
            <article className="element__card">
              <button className="element__button-delete" type="button"></button>
              <img className="element__img"/>
              <div className="element__description">
                <h2 className="element__figcaption"></h2>
                <div className="element__like">
                  <button className="element__svg-heart element__svg-heart_hover" type="button"></button>
                  <div className="element__count"></div>
                </div>
              </div>
            </article>
          </li>
        </template>

      </div>
    </body>
  );
}

export default App;