require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const axios = require('axios');
const pg = require('pg');

const app = express();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(staticMiddleware);
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/search/:title', (req, res) => {
  const title = req.params.title;
  axios.get(`http://www.giantbomb.com/api/search/?api_key=${process.env.API_KEY}&format=json&query="${title}"&resources=game`)
    .then(result => res.json(result.data.results))
    .catch(err => console.error(err));
});

app.get('/api/game/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  axios.get(`http://www.giantbomb.com/api/games/?api_key=${process.env.API_KEY}&filter=id:${gameId}&format=json`)
    .then(result => res.json(result.data.results))
    .catch(err => console.error(err));
});

app.get('/api/check/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  const userId = 1;
  const sql = `
    select *
    from "favorites"
    where "gameId" = $1
    and "userId" = $2
  `;
  const params = [gameId, userId];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      if (todo !== undefined) {
        res.status(201).json(todo);
      } else {
        res.status(201).json({ notInDb: 'not in database' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.post('/api/add/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  const sql = `
    insert into "favorites" ("gameId", "userId")
    values ($1, 1)
    returning *
  `;
  const params = [gameId];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      res.status(201).json(todo);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.delete('/api/remove/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  const sql = `
    delete from "favorites"
    where "gameId" = $1
    returning *
  `;
  const params = [gameId];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      res.status(201).json(todo);
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
