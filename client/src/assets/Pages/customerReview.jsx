import React from 'react'
import { Menu4 } from '../Components/menu1'

function customerreview() {
  return (
    <div>
        <Menu4/>
        <div className='userReview'>
        <h1>Review</h1>
            <form action="userReview"></form>
            <table>
                <tr><textarea name="userReviewTitle" id=""></textarea></tr>
            <tr><textarea name="userReviewMessage" id=""></textarea></tr>
            <tr><h3>Give Us Stars</h3></tr>
            <tr><input type="file" /></tr>
            </table>
            <button>Submit</button>
            
            
            
        </div>
        
    </div>
  )
}

export default customerreview