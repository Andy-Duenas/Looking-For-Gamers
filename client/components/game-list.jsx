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
              img={single.image.medium_url}
              gameid={single.id}
              deck={single.deck}
              guid={single.guid}
            />
          );
        })
      }
    </ul>
  );
}

function SingleGame(props) {
  const { gameid, img, title } = props;
  return (
     <a href={'#game?gameId=' + gameid}>
       <div className="row-game">
       <div className="img-container">
        <img src={img}></img>
       </div>
       <div className="title-post">
          <p>{title}</p>
        <p>Total Posts: place holder</p>
        </div>
       <div className="heart-container">
        <i className="far fa-heart heart-icon"></i>
      </div>
    </div>
    </a>
  );
}
