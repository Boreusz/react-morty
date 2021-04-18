import React from 'react';
import CustomQuery from './CustomQuery';
import InitQuery from './InitQuery';

const Home = ({searchInput, page}) => {
  if(page !== '1') {
    return( 
      <div>
        <CustomQuery page={page} filters={searchInput} />
      </div>
    )
  }else if (searchInput){
    <div>
      <CustomQuery filters={searchInput} />
    </div>
  }
  return(
    <div className="home">
      <InitQuery/>
    </div>
  )
}
export default Home