import React from 'react';
import Heart from './heart-icon';

export default function GameList(props) {

  return (
    <ul>
      {
        props.games.map(single => {
          return (
            <SingleGame
              key={single.name}
              name={single.name}
              img={single.image.medium_url}
              gameid={single.id}
              deck={single.deck}
            />
          );
        })
      }
    </ul>
  );
}

function SingleGame(props) {
  const { gameid, img, name, deck } = props;

  return (
    <>
       <div className="row-game">
       <a href={'#game?gameId=' + gameid}>
       <div className="img-container">
        <img src={img}></img>
       </div>
       <div className="title-post">
          <p>{name}</p>
        <p>Total Posts: place holder</p>
        </div>
      </a>
        <Heart gameId={gameid} game={{ name, deck, img }}/>
    </div>
    </>
  );
}
