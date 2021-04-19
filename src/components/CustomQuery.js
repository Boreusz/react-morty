import React from 'react';
import { useQuery } from '@apollo/client';
import { query } from '../GraphQL/Queries';
import '../styles/Query.scss';
import QueryComponent from './QueryComponent';
import Loading from './Loading';

const CustomQuery = ({ page, filters, favorites, setFavorites }) => {
  const { error, loading, data } = useQuery(query(page, filters));
  if (loading) return <Loading />;
  if (error) return error.message;
  return (
    <QueryComponent
      data={data}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
};

export default CustomQuery;
