import React from 'react';

export default class Game extends React.Component {

  render() {
    const { title, img, deck } = this.props.game;
    return (
      <div className="game-container" id="game-container">
        <div className="row">
          <div className="back-arrow">
          <a href="#search">
          <i className="fas fa-arrow-left arrow-icon" ></i>
          </a>
        </div>
        </div>
        <div className="row">
          <div className="img-cont">
            <img src={img}></img>
          </div>
        </div>
        <div className="row">
          <div className="col-title">
            <p className="single-title">{title}</p>
            <div className="heart-container">
              <i className="far fa-heart heart-icon"></i>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-posts">
            <p>Total Post: Placeholder</p>
            </div>
          </div>
          <div className="row">
          <div className="col-description">
            <p>{deck}</p>
          </div>
          </div>
          <div className="row">
            <button className="enter-button">Enter Thread</button>
          </div>
      </div>
    );
  }
}
