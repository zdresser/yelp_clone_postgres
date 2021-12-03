import React from "react";
import StarRating from "./StarRating";
import styled from "styled-components";
function Reviews({ reviews }) {
  return (
    <ReviewsDiv>
      {reviews.map((review) => {
        return (
          <div key={review.id} className='review-card'>
            <span>{review.name}</span>
            <span>
              <StarRating rating={review.rating} />
            </span>
            <p>{review.review}</p>
          </div>
        );
      })}
    </ReviewsDiv>
  );
}

const ReviewsDiv = styled.div`
  display: flex;

  .review-card {
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    margin: 5px;
    padding-top: 5px;
    align-content: center;
    background-color: #9898dd;
  }
`;

export default Reviews;
