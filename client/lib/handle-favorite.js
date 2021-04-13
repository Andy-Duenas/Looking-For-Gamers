/* eslint-disable no-console */
export default function addToFavorites(game) {
  console.log(`addToFavorite game=${game}`);
  fetch(`/api/add/${game}`, {
    method: 'POST',
    body: game
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => console.error(err));
  console.log(`addToFavorite game=${game}`);
}
