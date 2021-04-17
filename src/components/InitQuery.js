import React from 'react'
import { useQuery, useLazyQuery} from '@apollo/client';
import {INITIAL_QUERY} from '../GraphQL/Queries'
import { useEffect } from 'react';
const InitQuery = () => {
  const {error, loading, data} = useQuery(INITIAL_QUERY);
  useEffect(() => {
    console.log(data.characters.results);
  }, [data])
  return (
    <div>
      <ul>
         {data.characters.results.map((character) => {
          return (
            <li>
              <ul>
                <li><img src={character.image} alt={character.name + ' - ID: ' + character.id}></img></li>
                <li>{character.id}</li>
                <li>{character.name}</li>
                <li>{character.gender}</li>
                <li>{character.species}</li>
                <li>{character.episode[character.episode.length - 1].episode}</li>
                <li>{}</li>
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InitQuery
