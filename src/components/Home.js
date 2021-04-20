import React from 'react';
import CustomQuery from './CustomQuery';

const Home = ({ searchInput, activePage, setActivePage, favorites, setFavorites }) => {
  return (
    <CustomQuery
      activePage={activePage}
      setActivePage={setActivePage}
      filters={searchInput}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
};
export default Home;
