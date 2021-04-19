import React from 'react'
import ReactLoading from 'react-loading';
import '../styles/App.scss'

const Loading = () => {
  return (
    <section className="loading">
      <h2>Your Query is being processed</h2>
      <ReactLoading className="loading" type={'spinningBubbles'} color={'#11B0C8'} height={'10%'} width={'10%'} />
    </section>
  )
}

export default Loading