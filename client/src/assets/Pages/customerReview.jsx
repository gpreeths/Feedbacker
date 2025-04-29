import React, { useState } from 'react';
import { Menu4 } from '../Components/menu1';
import axios from 'axios';

function CustomerReview() {
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewMessage, setReviewMessage] = useState('');
  const [rating, setRating] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setErrorMessage('You must be logged in to submit a review.');
        return;
      }

      const response = await axios.post(
        'http://localhost:2000/user/createreview',
        {
          reviewTitle,
          reviewMessage,
          rating,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setSuccessMessage('Thanks for your feedback!');
      setErrorMessage('');
      setReviewTitle('');
      setReviewMessage('');
      setRating(1);
    } catch (error) {
      console.error(error);
      setSuccessMessage('');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <Menu4 />
      <div className="userReview">
        <h1>Enjoyed Your Visit? Tell Us All About It!</h1>

        <form onSubmit={handleSubmit} className="reviewForm">
          <input
            type="text"
            placeholder="Title your review (e.g., Amazing Coffee!)"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your thoughts here..."
            value={reviewMessage}
            onChange={(e) => setReviewMessage(e.target.value)}
            required
          ></textarea>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          />
          <button type="submit">Submit Review</button>
        </form>

        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div>
    </div>
  );
}

export default CustomerReview;
