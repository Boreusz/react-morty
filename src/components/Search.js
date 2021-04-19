import React, { useCallback } from 'react';
import debounce from 'lodash.debounce'
import { BsSearch } from 'react-icons/bs';
import '../styles/Search.scss';

const Search = ({ setSearchValue }) => {
  
  const debounced = useCallback(
    debounce((e) => {
      setSearchValue(e.target.value)
      // send the server request here		
    }, 1000),
    []
  );

  return (
    <div className="search-wrapper">
      <input placeholder="Start typing name to search..." onChange={ (e) => debounced(e)}></input>
      <BsSearch className='search-icon'/>
    </div>
  )
}
export default Search