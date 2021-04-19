import React from 'react';
import CustomQuery from './CustomQuery';

const Home = ({ searchInput, page, favorites, setFavorites }) => {
  return (
    <CustomQuery
      page={page}
      filters={searchInput}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
};
export default Home;
