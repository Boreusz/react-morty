import React from 'react';

const MainListHeader = () => {
  return (
    <li className='main__element main__header'>
      <ul className='character'>
        <li className='character__data'>Image</li>
        <li className='character__data'>ID</li>
        <li className='character__data'>Name</li>
        <li className='character__data '>Gender</li>
        <li className='character__data '>Species</li>
        <li className='character__data '>Episode</li>
        <li className='character__data '>Favorites</li>
      </ul>
    </li>
  );
};

export default MainListHeader;
