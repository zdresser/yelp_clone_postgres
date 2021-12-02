import React, { useState, useContext } from "react";
import styled from "styled-components";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

function AddRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const { addRestaurants } = useContext(RestaurantsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurant);
    } catch (error) {}
  };

  return (
    <Container>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          className='form-control'
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          className='custom-select'
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}>
          <option disabled>Price Range</option>
          <option value='1'>$</option>
          <option value='2'>$$</option>
          <option value='3'>$$$</option>
          <option value='4'>$$$$</option>
          <option value='5'>$$$$$</option>
        </select>

        <button type='submit' onClick={handleSubmit}>
          Add
        </button>
      </form>
    </Container>
  );
}

export default AddRestaurant;

const Container = styled.div`
  input,
  select {
    padding: 10px 15px;
    margin: 5px;
    box-sizing: border-box;
    border-radius: 4px;
  }

  button {
    background-color: cornflowerblue;
    border-radius: 4px;
    height: 45px;
    padding: 10px;
  }
`;
