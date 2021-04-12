import React from 'react';
import SearchBox from '../components/searchbox';
import List from '../components/game-list';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: [],
      singleGame: {}
    };
    this.makeGameList = this.makeGameList.bind(this);
  }

  makeGameList(data) {
    fetch(`/api/search/${data.game}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ searchFor: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <SearchBox onSubmit={this.makeGameList} />
        <div className="background">
        <List games={this.state.searchFor} getGame={this.props.getGame}></List>
        </div>
      </>
    );
  }
}
