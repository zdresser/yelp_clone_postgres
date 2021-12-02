import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

function RestaurantList() {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await RestaurantFinder.get("/");

        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    }
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    const response = await RestaurantFinder.delete(`/${id}`);
    setRestaurants(
      restaurants.filter((restaurant) => {
        return restaurant.id !== id;
      })
    );
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  return (
    <div className='list'>
      <Table>
        <thead>
          <tr>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>Rating</td>
                  <td>
                    <button onClick={(e) => handleUpdate(e, restaurant.id)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={(e) => handleDelete(e, restaurant.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

const Table = styled.table`
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
  }

  /* tbody tr:nth-child(2) {
    background-color: red;
  } */
`;
export default RestaurantList;
