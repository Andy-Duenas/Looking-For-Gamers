import React from 'react';

export default function SingleGame(props) {

  return (
    <div className="row-game">
      <div className="img-container">
        <img src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/monster-hunter-rise-switch/monster-hunter-rise-switch-hero.jpg"></img>
      </div>
      <div className="title-post">
        <p>Monster Hunter Rise</p>
        <p>Total Posts: 58</p>
      </div>
      <div className="heart-container">
        <i className="far fa-heart heart-icon"></i>
      </div>
    </div>
  );
}
