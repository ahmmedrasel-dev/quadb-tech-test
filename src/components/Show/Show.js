import React from 'react';
import { useNavigate } from 'react-router-dom';

const Show = ({ shows }) => {
  const { show } = shows;

  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={show.image.medium} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{show.name}</h2>
        <p><strong>Genres:</strong> {show.genres[0]} {show.genres[1]}</p>
        <p><strong>Relese:</strong> {show.premiered}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigateToDetails(show.id)}>More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Show;