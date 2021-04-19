export default function getAmount(gameId) {
  return fetch(`/api/amount/${gameId}`)
    .then(res => res.json())
    .then(number => {
      return number;
    })
    .catch(err => {
      console.error(err);
    });
}
