import React from 'react'
import { Menu5 } from '../Components/menu1'
import { Link } from 'react-router-dom'

function adminReview() {
    return (
        <>
            <Menu5 />

            <div className='adminContainer'>
                <div className='sideBar'>

                    <ul>
                        <br />
                        <li><Link to={'/adminreview/rating'}>Rating</Link></li>
                        <li><Link>All reviews</Link></li>
                        <li><Link>Customers</Link></li>
                    </ul>
                </div>
                <div className='adminReview'>
                    <h1>Reviews</h1>
                    
                   
                       <div className='totavg'> <div className='reviewTotal'><h3>Total reviews</h3></div>
                       <div className='reviewAvg'><h3>Avg reviews</h3></div></div>

                        <div className='customerRatingBox'>
                    <table>
                        <tr>
                            <th>Customer</th>
                            <th>Rating
                                <button>^</button>
                            </th>
                            <th>Date
                                <button>^</button>
                            </th>
                            <th>Message</th>
                        </tr>
                        <tr></tr>
                    </table>
                </div>
                </div>
                

        </div >
    </>
    
  )
}

export default adminReview

