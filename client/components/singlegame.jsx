import React from 'react';

export default function SingleGame(props) {

  return (
    <a href={'#game?gameTitle' + props.title}>
      <div className="row-game">
         <div className="img-container">
           <img src={props.img}></img>
         </div>
         <div className="title-post">
           <p>{props.title}</p>
           <p>Total Posts: place holder</p>
         </div>
         <div className="heart-container">
           <i className="far fa-heart heart-icon"></i>
        </div>
      </div>
    </a>
  );
}
