import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookModal from '../Book/BookModal';

const ShowDetails = () => {
  const [show, setShow] = useState([]);
  const [booking, setBookig] = useState(null);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const url = `https://api.tvmaze.com/shows/${id}`;

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(url)
      setShow(data.data)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return 'loading...'
  }

  return (
    <div className='max-w-screen-md mx-auto mt-10'>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className='w-1/2'><img src={show.image.original} alt="Album" /></figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">{show.name}</h2>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres[0]} {show.genres[1]}</p>
          <p>Status: {show.status}</p>
          <p>Runtime: {show.runtime}</p>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <div className="card-actions justify-end">
            <label
              htmlFor="bookingModal"
              className="btn btn-primary"
              onClick={() => setBookig(show)}
            >Book Ticket</label>
          </div>

          {
            booking && <BookModal
              show={show}
            ></BookModal>
          }
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;