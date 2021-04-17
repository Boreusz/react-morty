import React from 'react';
import { BsSearch } from 'react-icons/bs';
import '../styles/Search.scss';

const Search = () => {
  return (
    <div className="search-wrapper">
      <input placeholder="Start typing to search..."></input>
      <BsSearch className='search-icon'/>
    </div>
  )
}
export default Search