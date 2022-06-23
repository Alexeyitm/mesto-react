import { useContext } from 'react';
import Card from './Card.js';
import Sort from './Sort';
import CurrentUserContext from '../context/CurrentUserContext'

function Main({ 
  cards, 
  onEditAvatar, 
  onEditProfile, 
  onAddPlace, 
  onCardLike, 
  handleCardClick, 
  onCardDelete,
  selectAllCards,
  selectMyCards,
  selectNotMyCards
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
        selectAllCards={selectAllCards}
        selectMyCards={selectMyCards}
        selectNotMyCards={selectNotMyCards}
      />
      <section className='elements'>
        <ul className='elements__list'>
          {
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
        </ul>
      </section>
    </main>
  );
}

export default Main;
