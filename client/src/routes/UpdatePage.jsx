import React from "react";
import UpdateRestaurant from "../components/UpdateRestaurant";
import Header from "../components/Header";
import styled from "styled-components";

export default function UpdatePage() {
  return (
    <Container>
      <Header />
      <UpdateRestaurant />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
