import React from "react";

function Card(props) {
  function handleClick() {
    props.handleCardClick({ link: props.link, name: props.name });
  }

  return (
    <li className="element" key={props.myKey}>
      <article className="element__card">
        <button className={props.cardDeleteButton} type="button"></button>
        <img
          className="element__img"
          onClick={handleClick}
          src={props.link}
          alt={props.name}
        />
        <div className="element__description">
          <h2 className="element__figcaption">{props.name}</h2>
          <div className="element__like">
            <button
              className={props.cardLikeButton}
              type="button"
            ></button>
            <div className="element__count">{props.likes.length}</div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
