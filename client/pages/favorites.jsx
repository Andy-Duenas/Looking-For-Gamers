import React from 'react';
// import List from '../components/game-list';

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
    return (
      <>
      <h1>Hi</h1>
        {/* <div className="background">
        <List games={this.state.searchFor}></List>
        </div> */}
      </>
    );
  }
}
