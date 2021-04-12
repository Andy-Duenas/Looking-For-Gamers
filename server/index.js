require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const axios = require('axios');

const app = express();

app.use(staticMiddleware);
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/search/:title', (req, res) => {
  const title = req.params.title;
  axios.get(`http://www.giantbomb.com/api/search/?api_key=${process.env.API_KEY}&format=json&query="${title}"&resources=game`)
    .then(result => res.json(result.data.results))
    .catch(err => console.error(err));
});

app.get('/api/search/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`https://www.giantbomb.com/api/game/${id}/?api_key=${process.env.API_KEY}&format=json`)
    .then(result => res.json(result.data.results))
    .catch(err => console.error(err));
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
