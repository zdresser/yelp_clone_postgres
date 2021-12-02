import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import styled from "styled-components";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
  }
`;
