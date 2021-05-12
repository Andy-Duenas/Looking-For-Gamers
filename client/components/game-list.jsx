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
              currentGame={props.currentGame}
            />
          );
        })
      }
    </ul>
  );
}

class SingleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
  }

  componentDidMount() {
    const gameId = this.props.gameid;
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
    const { gameid, img, name, deck, currentGame } = this.props;
    if (currentGame === undefined) {
      return (
        <>
          <div className="row-game">
          <a href={'#game?gameId=' + gameid}>
          <div className="img-container">
            <img src={img} alt="game-img"></img>
          </div>
          <div className="title-post">
              <p>{name}</p>
            <p>Total Posts: {this.state.posts}</p>
            </div>
          </a>
            <Heart gameId={gameid} game={{ name, deck, img }}/>
        </div>
        </>
      );
    } else {
      const gameSearch = currentGame.game;
      return (
        <>
          <div className="row-game">
          <a href={'#game?gameId=' + gameid + '&gameSearch=' + gameSearch}>
          <div className="img-container">
            <img src={img} alt="game-img"></img>
          </div>
          <div className="title-post">
              <p>{name}</p>
            <p>Total Posts: {this.state.posts}</p>
            </div>
          </a>
            <Heart gameId={gameid} game={{ name, deck, img }}/>
        </div>
        </>
      );
    }

  }
}
