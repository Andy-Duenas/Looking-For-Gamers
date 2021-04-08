/* eslint-disable no-console */
import React from 'react';
import SearchBox from '../components/searchbox';
import List from '../components/game-list';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchFor: [] };
    this.makeGameList = this.makeGameList.bind(this);
  }

  makeGameList(data) {
    console.log('data', data.game);
    fetch(`/api/search/${data.game}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ searchFor: data });
        console.log(data);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  }

  render() {

    return (
      <>
        <SearchBox onSubmit={this.makeGameList} />
        <List games={this.state.searchFor}></List>
      </>
    );
  }
}
