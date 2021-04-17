import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import {INITIAL_QUERY} from '../GraphQL/Queries'

const Home = () => {
  const {error, loading, data} = useQuery(INITIAL_QUERY);
  useEffect(() => {
    console.log(data);
  }, [data])
  return(
    <div className="home">

    </div>
  )
}
export default Home