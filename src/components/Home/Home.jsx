import React from 'react'
import About from '../about/About';
import Data from '../Data';
import './Home.css';

const Home = () => {
  return (
    <div className='cardhome'>
        {/* <Hero /> */}
      <About details={Data} />
    </div>
  )
}

export default Home
