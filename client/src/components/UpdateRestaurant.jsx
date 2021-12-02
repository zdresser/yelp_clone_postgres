import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

function UpdateRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const navigate = useNavigate();
  const { id } = useParams();

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
    <div>
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
    </div>
  );
}

export default UpdateRestaurant;
