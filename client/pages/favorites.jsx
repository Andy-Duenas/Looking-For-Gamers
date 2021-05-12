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
      return <a href="#search"><h2 className="search-for-games">Your favorite list is empty.</h2>
      <h2 className="search-for-games">Click here to search for games.</h2></a>;
    } else if (this.state.gameList.length > 0 && this.state.loaded === true) {
      return (
        <div className="background">
          <List games={this.state.gameList}></List>
        </div>
      );
    }
  }
}
