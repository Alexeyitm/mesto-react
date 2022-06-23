function Sort({ selectAllCards, selectMyCards, selectNotMyCards }) {
  return (
    <div className='sort'>
      <button className='sort__button' onClick={selectAllCards}>Все</button>
      <button className='sort__button' onClick={selectMyCards}>Мои</button>
      <button className='sort__button' onClick={selectNotMyCards}>Чужие</button>
    </div>
  );
}

export default Sort;