/* eslint-disable no-console */
require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');
const axios = require('axios');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/search/:title', (req, res) => {
  const title = req.params.title;
  axios.get(`http://www.giantbomb.com/api/search/?api_key=${process.env.API_KEY}&format=json&query="${title}"&resources=game`)
    // `http://www.giantbomb.com/api/games/?api_key=${process.env.API_KEY}&format=json&filter=name:${title}`
    .then(result => res.json(result.data.results))
    .catch(err => console.error(err));
});

app.get('/api/list', (req, res) => {
  const sql = `
    select *
      from "gameInfo"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
