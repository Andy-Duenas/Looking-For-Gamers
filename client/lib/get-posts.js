export default function getPosts(gameId) {
  return fetch(`/api/posts/${gameId}`)
    .then(res => res.json())
    .then(game => {
      handleDate(game);
      return game;
    })
    .catch(err => {
      console.error(err);
    });
}

function handleDate(game) {
  const newGame = game.map(single => {
    const newDate = single.createdAt.slice(0, 10);
    single.created = newDate;
    return single;
  });
  return newGame;
}
