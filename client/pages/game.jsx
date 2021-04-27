import React from 'react';
import Heart from '../components/heart-icon';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      gotData: false,
      posts: 0
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

    fetch(`/api/amount/${gameId}`)
      .then(res => res.json())
      .then(num => {
        this.setState({ posts: num.count });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.gotData === false) {
      return <h1 className="row"><i className="fas fa-dragon loading-icon"></i></h1>;
    } else {
      const { game, posts } = this.state;
      const { name, deck, id } = game[0];
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
            <Heart gameId={this.props.gameId} game={{ name, deck, img }}/>
          </div>
          </div>
          <div className="row">
            <div className="col-posts">
            <p>Total Post: {posts} </p>
            </div>
          </div>
          <div className="row">
          <div className="col-description">
            <p>{deck}</p>
          </div>
          </div>
          <div className="row">
            <a href={'#thread?gameId=' + id}>
            <button className="enter-button">Enter Thread</button>
            </a>
          </div>
      </div>
      );
    }
  }
}
