import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}
    };
  }

  render() {
    const { title, img, description } = this.props.game;
    return (
      <>
        <div className="row">
          <a href="#search">
          <i className="fas fa-arrow-left" ></i>
          </a>
        </div>
        <div className="row">
          <img src={img}></img>
        </div>
        <div className="row">
          <div className="col-title">
            <p>{title}</p>
            <p>{description}</p>
          </div>
          <div className="heart-container">
            <i className="far fa-heart heart-icon"></i>
          </div>
        </div>
        <button>Enter</button>
      </>
    );
  }
}
