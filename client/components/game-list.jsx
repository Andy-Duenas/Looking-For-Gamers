import React from 'react';

export default function GameList(props) {
  return (
    <ul>
      {
        props.games.map(single => {
          return (
            <SingleGame
              key={single.name}
              title={single.name}
              img={single.image.super_url}
              id={single.id}
              description={single.description}
              deck={single.deck}
              getGame={props.getGame}
            />
          );
        })
      }
    </ul>
  );
}

function SingleGame(props) {
  const { id, title, img, deck, description } = props;
  const bringBack = () => {
    props.getGame(id, title, img, deck, description);
  };
  return (
    <div className="row-game" onClick={bringBack}>
      <div className="img-container">
        <img src={img}></img>
      </div>
      <div className="title-post">
        <a href={'#game?id=' + id}>
          <p>{title}</p>
        </a>
        <p>Total Posts: place holder</p>
      </div>
      <div className="heart-container">
        <i className="far fa-heart heart-icon"></i>
      </div>
    </div>
  );
}
