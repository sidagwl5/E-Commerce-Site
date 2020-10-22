import React from 'react';
import PropTypes from 'prop-types';
import { BsStarHalf, BsStar, BsFillStarFill } from 'react-icons/bs';

const Rating = ({ rating, reviews, color }) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((start) =>
        start != 6 ? (
          <span>
            {rating >= start ? (
              <BsFillStarFill color={color} />
            ) : rating >= start - 0.5 ? (
              <BsStarHalf color={color} />
            ) : (
              <BsStar color={color} />
            )}
          </span>
        ) : (
          <span className='ml-2'>
            {rating} from {reviews} reviews
          </span>
        )
      )}
    </>
  );
};

Rating.defaultProps = {

    color: '#f8e825'
};

Rating.propTypes = {

    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default Rating;
