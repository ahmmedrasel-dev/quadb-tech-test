import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const [show, setShow] = useState({});
  const { id } = useParams();
  const url = `https://api.tvmaze.com/shows/${id}`;
  useEffect(() => {
    const getData = async () => {
      await fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }
    getData()
  }, [])
  return (
    <div>

    </div>
  );
};

export default ShowDetails;