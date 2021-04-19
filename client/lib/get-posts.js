export default function getPosts(gameId) {
  return fetch(`/api/posts/${gameId}`)
    .then(res => res.json())
    .then(game => {
      return game;
    })
    .catch(err => {
      console.error(err);
    });
}
