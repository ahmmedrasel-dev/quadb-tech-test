import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Show from '../Show/Show';

const Home = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const data = axios.get('https://api.tvmaze.com/search/shows?q=all');
    data.then(data => setShow(data.data));
  }, []);

  return (
    <div className='max-w-7xl mx-auto grid grid-cols-3 gap-8 mt-8'>
      {
        show.map((item, index) => <Show key={index} shows={item}></Show>)
      }
    </div>
  );
};

export default Home;