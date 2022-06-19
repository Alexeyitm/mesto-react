import { React } from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ card, isOpen, onClose, deleteCard }) {
  function handleSubmit(e) {
    e.preventDefault();
    deleteCard(card);
  }

  return (
    <PopupWithForm 
      name="confirm" 
      title="Вы уверены?"
      textButton="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
    </PopupWithForm>
  )
};

export default DeleteCardPopup;