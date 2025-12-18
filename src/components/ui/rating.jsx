import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
    return (
    <div className="book__ratings">
    {
     [...Array(Math.floor(rating))].map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
    ))
  }
    {
    rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />   
    }
    </div>
    )
}

export default Rating;