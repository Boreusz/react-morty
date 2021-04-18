import React from 'react';
import { useQuery } from '@apollo/client';
import { query } from '../GraphQL/Queries';
import '../styles/Query.scss';
import QueryComponent from './QueryComponent';
const InitQuery = () => {
  const { error, loading, data } = useQuery(query());
  if (loading) return 'Loading...';
  if(error) return {error}
  console.log(data);
  return (
    <QueryComponent data={data}/>
  );
};

export default InitQuery;
