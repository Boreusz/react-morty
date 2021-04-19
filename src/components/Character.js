import React, { useState, useEffect } from 'react';
import Gender from './Gender';
import '../styles/Character.scss';
import { AiFillStar } from 'react-icons/ai';

const Person = ({ character, favorites, setFavorites }) => {
  const [active, setActive] = useState(false);
  const button = (
    <button
      className={`character__favorites `}
      onClick={() => addToFavorties(favorites)}
    >
      <AiFillStar className='character__icon' />
    </button>
  );
  const button1 = (
    <button
      className={`character__favorites character__favorites--active`}
      onClick={() => removeFromFavorties(favorites)}
    >
      <AiFillStar className='character__icon' />
    </button>
  );
  const addToFavorties = (favorites) => {
    let copiedCharacter = Object.assign({}, character);
    setFavorites(favorites.concat(copiedCharacter));
    setActive(true);
  };

  const removeFromFavorties = (favorites) => {
    setFavorites(favorites.filter((element) => element.id !== character.id));
    setActive(false);
  };
  useEffect(() => {
    if (favorites.find((element) => element.id === character.id)) {
      setActive(true);
    }
  }, []);
  return (
    <ul className='character'>
      <li className='character__data'>
        <img
          className='character__image'
          src={character.image}
          alt={character.name + ' - ID: ' + character.id}
        ></img>
      </li>
      <li className='character__data'>{character.id}</li>
      <li className='character__data character__data--long'>
        {character.name}
      </li>
      <li className='character__data'>
        <Gender gender={character.gender} />
      </li>
      <li className='character__data'>{character.species}</li>
      <li className='character__data'>
        {character.episode[character.episode.length - 1].episode}
      </li>
      <li>{active ? button1 : button}</li>
    </ul>
  );
};

export default Person;
// TODO:
// - if person is dead change color of the picure
// - Favorites button
