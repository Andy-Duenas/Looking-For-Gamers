import React from 'react';
import SingleGame from '../components/singlegame';

export default function TodoList(props) {

  return (
    <ul>
      {
        props.games.map(single => {
          return (
            <SingleGame
              key={single.name}
              title={single.name}
              img={single.image.super_url}
            />
          );
        })
      }
    </ul>
  );
}
