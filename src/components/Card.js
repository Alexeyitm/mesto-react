import React from "react";

function Card(props) {
  const isOwn = props.card.owner._id === props.user._id;
  const cardDeleteButtonClassName = (`element__button-delete ${isOwn ? '' : 'element__button-delete_hidden'}`);
  const isLiked = props.card.likes.some(i => i._id === props.user._id);
  const cardLikeButtonClassName = (`element__svg-heart element__svg-heart_hover ${isLiked ? 'element__svg-heart_active' : ''}`);


  function handleClick() {
    props.handleCardClick({ link: props.card.link, name: props.card.name });
  }
  function handleLikeClick() {
    console.log(props.card)
    props.onCardLike(props.card);
  }

  return (
    <li className="element" key={props.myKey}>
      <article className="element__card">
        <button className={cardDeleteButtonClassName} type="button"></button>
        <img
          className="element__img"
          onClick={handleClick}
          src={props.card.link}
          alt={props.card.name}
        />
        <div className="element__description">
          <h2 className="element__figcaption">{props.card.name}</h2>
          <div className="element__like">
            <button
              className={cardLikeButtonClassName}
              type="button"
              onClick={handleLikeClick}
            ></button>
            <div className="element__count">{props.card.likes.length}</div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
