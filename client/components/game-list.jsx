import React from 'react';
import SingleGame from '../components/singlegame';

export default function TodoList(props) {

  return (
    <ul className="list-group shadow-sm">
      {
        props.games.map(single => {
          return (
            <SingleGame
              key={single.name}
              title={single.name}
              img={single.image.thumb_url}
              description={single.deck}
            />
          );
        })
      }
    </ul>
  );
}
