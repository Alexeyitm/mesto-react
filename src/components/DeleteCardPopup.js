import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ card, isOpen, onClose, deleteCard }) {
  const [textButton, setTextButton] = useState("Да");

  function handleSubmit(e) {
    e.preventDefault();
    deleteCard(card, setTextButton);
  }

  return (
    <PopupWithForm 
      name="confirm" 
      title="Вы уверены?"
      textButton={textButton}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
    </PopupWithForm>
  )
};

export default DeleteCardPopup;