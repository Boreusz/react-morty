import React from 'react'
import { useQuery } from '@apollo/client';
import { query } from '../GraphQL/Queries';
import '../styles/Query.scss';
import QueryComponent from './QueryComponent';

const CustomQuery = ({page, filters}) => {
  const { error, loading, data } = useQuery(query());
  if (loading) return 'Loading...';
  if(error) return {error}
  return (
    <QueryComponent data={data}/>
  );
}

export default CustomQuery
