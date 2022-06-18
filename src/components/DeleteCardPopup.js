import { React } from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm 
      name="confirm" 
      title="Вы уверены?"
      textButton="Да"
      isOpen={isOpen}
      onClose={onClose}
    >
    </PopupWithForm>
  )
};

export default DeleteCardPopup;