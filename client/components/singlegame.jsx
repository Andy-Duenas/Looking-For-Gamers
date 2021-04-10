import React from 'react';

export default function SingleGame(props) {
  const { title } = props;
  return (
      <div className="row-game">
         <div className="img-container">
           <img src={props.img}></img>
         </div>
        <div className="title-post">
        <a href={'#game?title=' + title}>
           <p>{props.title}</p>
           </a>
           <p>Total Posts: place holder</p>
         </div>
         <div className="heart-container">
           <i className="far fa-heart heart-icon"></i>
        </div>
      </div>
  );
}
