import React, { useEffect, useState } from 'react';
import { Menu5 } from '../Components/menu1';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminReview() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ sortBy: 'rating', order: 'asc' });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get('http://localhost:2000/admin/view', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const fetchedReviews = response.data?.reviews || response.data || [];
  
        if (Array.isArray(fetchedReviews)) {
          setReviews(fetchedReviews);
        } else {
          console.error('Expected array, but got:', fetchedReviews);
          setReviews([]); // fallback safe
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error.response?.data || error.message);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchReviews();
  }, []);

  // Function to handle sorting toggle
  const toggleSort = (field) => {
    setSortConfig((prevConfig) => {
      let newOrder = 'asc';
      if (prevConfig.sortBy === field && prevConfig.order === 'asc') {
        newOrder = 'desc';
      }
      return { sortBy: field, order: newOrder };
    });
  };

  // Function to fetch sorted reviews based on sortConfig
  useEffect(() => {
    const fetchSortedReviews = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const { sortBy, order } = sortConfig;
        const response = await axios.get(`http://localhost:2000/admin/sort?sortBy=${sortBy}&order=${order}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const fetchedReviews = response.data?.reviews || response.data || [];
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Failed to fetch sorted reviews:', error.response?.data || error.message);
      }
    };
  
    fetchSortedReviews();
  }, [sortConfig]); // Trigger whenever sortConfig changes

  return (
    <>
      <Menu5 />
      <div className="adminContainer">
        <div className="sideBar">
          <ul>
            <br />
            <li><Link to="/adminreview/rating">Rating</Link></li>
            <li><Link to="/adminreview/allreviews">All reviews</Link></li>
            <li><Link to="/adminreview/customers">Customers</Link></li>
          </ul>
        </div>

        <div className="adminReview">
          <h1>Reviews</h1>

          <div className="totavg">
            <div className="reviewTotal">
              <h3>Total reviews: {reviews.length}</h3>
            </div>
            <div className="reviewAvg">
              <h3>Avg rating: {
                reviews.length > 0 
                  ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
                  : 0
              }</h3>
            </div>
          </div>

          <div className="customerRatingBox">
            {loading ? (
              <p>Loading reviews...</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>
                      Rating 
                      <button onClick={() => toggleSort('rating')}>
                        {sortConfig.sortBy === 'rating' && sortConfig.order === 'asc' ? '↑' : '↓'}
                      </button>
                    </th>
                    <th>
                      Date 
                      <button onClick={() => toggleSort('createdAt')}>
                        {sortConfig.sortBy === 'createdAt' && sortConfig.order === 'asc' ? '↑' : '↓'}
                      </button>
                    </th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(reviews) && reviews.length > 0 ? (
                    reviews.map((review) => (
                      <tr key={review._id}>
                        <td>{review.userId?.name || 'Unknown'}</td>
                        <td>{review.rating}</td>
                        <td>{new Date(review.createdAt).toLocaleDateString()}</td>
                        <td>{review.reviewMessage || 'No message'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No reviews found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminReview;
