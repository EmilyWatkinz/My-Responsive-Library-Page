import React from 'react';
import Landing from '../components/landing.jsx';
import Highlights from '../components/highlights.jsx';
import Featured from '../components/featured.jsx';
import Discounted from '../components/discounted.jsx';
import Explore from '../components/explore.jsx';

const Home = () => {
    return (
      <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      </>
    )
}

export default Home;