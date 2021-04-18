import React from 'react';
import '../styles/Query.scss';
import QueryComponent from './QueryComponent';
const FavoritesQuery = ({favorites}) => {
  if (!favorites) return 'Loading...';
  return <QueryComponent data={favorites} />
};

export default FavoritesQuery
