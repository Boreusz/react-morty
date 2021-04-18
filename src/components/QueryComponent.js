import React from 'react'
import Character from './Character';
const Query = ({data}) => {
  return (
    <main className='main'>
      <ul className='main__list'>
        <li className='main__element'>
          <ul className='character'>
            <li className='character__data'>Image</li>
            <li className='character__data'>ID</li>
            <li className='character__data'>Name</li>
            <li className='character__data'>Gender</li>
            <li className='character__data'>Species</li>
            <li className='character__data'>Episode</li>
            <li className='character__data'>Favorites</li>
          </ul>
        </li>
        {data.characters.results.map((character) => {
          return (
            <li className='main__element' key={character.id}>
              <Character
                character={character}
              />
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default Query
