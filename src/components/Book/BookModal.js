import React from 'react';
import { json } from 'react-router-dom';

const BookModal = ({ show }) => {
  console.log(show)

  const { time, days } = show.schedule;

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      'movie': show.name,
      'date': time,
      'day': days,
      'userName': e.target.name.value,
      'userEmail': e.target.email.value,
    }

    localStorage.setItem('order', JSON.stringify(booking));

  }

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Booking Ticket</h3>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
            <span class="label-text">Movie Name</span>
            <input type="text" value={show.name} disabled className="input input-bordered input-primary w-full" />
            <span class="label-text">Genres</span>
            <input type="email" value={show.genres[0]} disabled className="input input-bordered input-primary w-full" />
            <span class="label-text">Schedule</span>
            <input type="text" name='phone' value={[time, days]} placeholder="Your Phone Number" disabled className="input input-bordered input-primary w-full" />
            <span class="label-text">Your Name</span>
            <input type="text" name="name" className="input input-bordered input-primary w-full" />
            <span class="label-text">Your Email</span>
            <input type="email" name='email' className="input input-bordered input-primary w-full" />
            <input type="submit" htmlFor="bookingModal" value="Confirm Booking" className="btn btn-primary w-full text-white" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookModal;