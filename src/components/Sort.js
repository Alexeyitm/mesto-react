import { useContext} from 'react';
import CurrentUserContext from '../context/CurrentUserContext'

function Sort({ cards }) {
  const user = useContext(CurrentUserContext);

  return (
    <div className='sort'>
      <button className='sort__button'>Все</button>
      <button className='sort__button'>Мои</button>
      <button className='sort__button'>Чужие</button>
    </div>
  );
}

export default Sort;