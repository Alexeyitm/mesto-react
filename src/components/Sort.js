import { NavLink } from "react-router-dom";

function Sort() {
  
  return (
    <div className='sort'>
      <NavLink className={({ isActive }) => isActive ? 'sort__button_active' : 'sort__button'} to='/'>Все</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'sort__button_active' : 'sort__button'} to='/mycards'>Мои</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'sort__button_active' : 'sort__button'} to='/othercards'>Не мои</NavLink>
    </div>
  );
}

export default Sort;