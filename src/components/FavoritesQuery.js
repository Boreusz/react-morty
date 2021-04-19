import React from 'react';
import Character from './Character';
import MainListHeader from './MainListHeader';
import '../styles/Query.scss';

const FavoritesQuery = ({ favorites, setFavorites }) => {
  return (
    <section className='main'>
      <ul className='main__list'>
        <MainListHeader />
        {favorites.map((character) => {
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
    </section>
  );
};

export default FavoritesQuery;
