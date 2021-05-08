import React from 'react';
import SearchBox from '../components/searchbox';
import List from '../components/game-list';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: []
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
    const { searchFor } = this.state;
    if (searchFor.length === 0) {
      return (
        <>
        <SearchBox onSubmit={this.makeGameList} />
        <div className="background">
          <h1 className="search-for-games">Enter a title of a game to start searching.</h1>
        </div>
        </>
      );
    } else {
      return (
      <>
        <SearchBox onSubmit={this.makeGameList} />
        <div className="background">
        <List games={this.state.searchFor}></List>
        </div>
      </>
      );
    }
  }
}
