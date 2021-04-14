/* eslint-disable no-console */
export function checkFavorites(game) {
  fetch(`/api/check/${game}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.notInDb) {
        console.log('Not in Database');
        return false;
      }
      console.log('continue');
    })
    .catch(err => console.error(err));
}

export function addToFavorites(game) {
  fetch(`/api/add/${game}`, {
    method: 'POST',
    body: JSON.stringify(game)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

export function removeFromFavorites(game) {
  fetch(`/api/remove/${game}`, {
    method: 'DELETE',
    body: JSON.stringify(game)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

export default { addToFavorites, removeFromFavorites, checkFavorites };
