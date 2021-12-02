import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import styled from "styled-components";

function UpdateRestaurant() {
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);

      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    navigate("/");
  };

  return (
    <Container>
      <h2>{name}</h2>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          className='form-control'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          id='location'
          className='form-control'
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor='price_range'>Price Range</label>
        <select
          className='custom-select'
          id='price_range'
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
          Edit Restaurant
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;

  label {
    margin: 5px;
  }

  button {
    margin: 5px;
  }
`;
export default UpdateRestaurant;
