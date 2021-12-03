import React, { useState } from "react";
import styled from "styled-components";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function AddReview() {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        rating,
        review: reviewText,
      });
      navigate("/");
      navigate(location.pathname);
    } catch (err) {}
  };

  return (
    <div>
      <ReviewForm>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          pladeholder='Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='rating'>Rating</label>
        <select
          id='rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}>
          <option disabled>Rating</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <label htmlFor='review'>Review</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          id='review'></textarea>
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </ReviewForm>
    </div>
  );
}

const ReviewForm = styled.form`
  display: flex;
  margin: 5px;
  justify-content: space-around;
`;
export default AddReview;
