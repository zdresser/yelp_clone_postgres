require('dotenv').config();
const express = require('express');
const morgan = require("morgan");
const db = require('./db');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

//get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {

  try {
    const results = await db.query('select * from restaurants')
    console.log(results)
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      }
      
    })
  } catch (err) {
    console.log(err)
  }
  
})

//get single restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
  
  try {
    const result = await db.query("select * from restaurants where id = $1", [req.params.id]) //avoid string interpolation b/c of vulnerability to sql injection
   
    res.status(200).json({
      status: 'success',
      data: {
        restaurant: result.rows[0], 
      }
    })
  } catch (err) {
    console.log(err)
  }
})

//Add restaurant

app.post('/api/v1/restaurants', async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1 $2 $3 returning *", [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(201).json({
      status: 'success',
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err)
  }
})

//Update 
app.put('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: 'success',
      data: {
        restaurant: results.rows[0]
      }
    });
  } catch (err) {
    console.log(err);
  }
})

//delete
app.delete('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = db.query("DELETE FROM restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});