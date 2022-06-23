import { useContext } from 'react';
import Card from './Card.js';
import Sort from './Sort';
import CurrentUserContext from '../context/CurrentUserContext'
import { Route, Routes } from 'react-router';

function Main({ 
  cards,
  myCards,
  otherCards,
  onEditAvatar, 
  onEditProfile, 
  onAddPlace, 
  onCardLike, 
  handleCardClick, 
  onCardDelete,
}) {

  const user = useContext(CurrentUserContext);

  return (
    <main>
      <section className='profile'>
        <button
          className='profile__button-avatar'
          type='button'
          onClick={onEditAvatar}
        >
          <img
            className='profile__avatar-img'
            src={user.avatar}
            alt={user.name}
          />
        </button>
        <div className='profile__info'>
          <div className='profile__author'>
            <h1 className='profile__name'>{user.name}</h1>
            <button
              className='profile__button-edit'
              type='button'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__text'>{user.about}</p>
        </div>
        <button
          className='profile__button-add'
          type='button'
          onClick={onAddPlace}
        ></button>
      </section>
      <Sort
      />
      <section className='elements'>
        <ul className='elements__list'>
          <Routes>
            <Route path='/'
              element={
                cards.map(function(card) {              
                  return (<Card 
                    card={card}
                    key={card._id}
                    handleCardClick={handleCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                  />)
                })
              }
            />
            <Route path='/mycards'
              element={
                myCards.map(function(card) {              
                  return (<Card 
                    card={card}
                    key={card._id}
                    handleCardClick={handleCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                  />)
                })
              }
            />
            <Route path='/othercards'
              element={
                otherCards.map(function(card) {              
                  return (<Card 
                    card={card}
                    key={card._id}
                    handleCardClick={handleCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                  />)
                })
              }
            />  
          </Routes>
        </ul>
      </section>
    </main>
  );
}

export default Main;
