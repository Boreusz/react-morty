import React from 'react';
import Character from './Character';
import MainListHeader from './MainListHeader';
import BottomNavi from './BottomNavi'

const Query = ({ data, activePage, setActivePage, favorites, setFavorites }) => {
  return (
    <section className='main'>
      <ul className='main__list'>
        <MainListHeader />
        {data.characters.results.map((character) => {
          return (
            <li className='main__element' key={character.id}>
              <Character
                character={character}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </li>
          );
        })}
      </ul>
      <BottomNavi activePage={activePage} setActivePage={setActivePage} pages={parseInt(data.characters.info.pages)} />
    </section>
  );
};

export default Query;
