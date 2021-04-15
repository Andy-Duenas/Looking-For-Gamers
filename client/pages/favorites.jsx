import React from 'react';
import List from '../components/game-list';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: [],
      notLoaded: false
    };
  }

  componentDidMount() {
    fetch('/api/favorites')
      .then(res => res.json())
      .then(data => {
        const newData = data.map(single => {
          const newObj = {};
          newObj.id = single.gameId;
          newObj.name = single.title;
          newObj.image = single.img;
          newObj.deck = single.deck;
          return newObj;
        });
        this.setState({ searchFor: newData, notLoaded: true });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.notLoaded === false) {
      return <h1>Hello</h1>;
    } else {
      return (
        <div className="background">
        <List games={this.state.searchFor} favorite={true}></List>
        </div>
      );
    }
  }
}
