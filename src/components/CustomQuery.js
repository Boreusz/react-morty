import React from 'react';
import { useQuery } from '@apollo/client';
import { query } from '../GraphQL/Queries';
import '../styles/Query.scss';
import QueryComponent from './QueryComponent';
import Loading from './Loading';

const CustomQuery = ({ activePage, setActivePage, filters, favorites, setFavorites }) => {
  const { error, loading, data } = useQuery(query(activePage, filters));
  if (loading) return <Loading />;
  if (error) return error.message;
  return (
    <QueryComponent
      data={data}
      activePage={activePage}
      setActivePage={setActivePage}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
};

export default CustomQuery;
