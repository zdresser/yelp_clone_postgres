import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import styled from "styled-components";
import Header from "../components/Header";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

export default function RestaurantDetail() {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);

        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      {selectedRestaurant && (
        <>
          <h2>{selectedRestaurant.restaurant.name}</h2>
          <StarRating rating={selectedRestaurant.restaurant.average_rating} />

          {selectedRestaurant.restaurant.count
            ? `(${selectedRestaurant.restaurant.count})`
            : "(0)"}

          <Reviews reviews={selectedRestaurant.reviews} />
          <AddReview />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
