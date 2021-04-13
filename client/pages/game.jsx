import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      gotData: false
    };
  }

  componentDidMount() {
    const { gameId } = this.props;
    fetch(`/api/game/${gameId}`)
      .then(res => res.json())
      .then(game => {
        this.setState({ game, gotData: true });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.gotData === false) {
      return <h1 className="row">Loading...</h1>;
    } else {
      const game = this.state.game;
      const { name, deck } = game[0];
      const img = game[0].image.super_url;
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
            <p className="single-title">{name}</p>
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
}
