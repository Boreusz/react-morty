import React from 'react';
import Gender from './Gender'
import '../styles/Character.scss';
import { AiFillStar } from 'react-icons/ai'

const Person = ({character}) => {
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
          <li className='character__data character__data--long'>{character.name}</li>
          <li className='character__data'><Gender gender={character.gender} /></li>
          <li className='character__data'>{character.species}</li>
          <li className='character__data'>
            {character.episode[character.episode.length - 1].episode}
          </li>
          <li><button className='character__favorites character__favorites--active'><AiFillStar className='character__icon'/></button></li>
        </ul>
  );
};

export default Person;
// TODO:
// if person is dead change color of the picure