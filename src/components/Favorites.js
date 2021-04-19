import React from 'react';
import FavoritesQuery from './FavoritesQuery';
import Loading from './Loading';

const Favorites = ({ favorites, setFavorites }) => {
  if (!favorites) return <Loading />;
  return <FavoritesQuery favorites={favorites} setFavorites={setFavorites} />;
};

export default Favorites;
