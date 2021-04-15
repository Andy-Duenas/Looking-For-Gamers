import React from 'react';
import List from '../components/game-list';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetch('/api/favorites')
      .then(res => res.json())
      .then(data => {
        if (!data.notInDb) {
          const newData = data.map(single => {
            const newObj = {};
            newObj.id = single.gameId;
            newObj.name = single.title;
            newObj.image = {};
            newObj.image.medium_url = single.img;
            newObj.deck = single.deck;
            return newObj;
          });
          this.setState({ gameList: newData, loaded: true });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.loaded === false) {
      return <h1 className="row"><i className="fas fa-dragon loading-icon"></i></h1>;
    } else {
      return (
        <div className="background">
        <List games={this.state.gameList}></List>
        </div>
      );
    }
  }
}
