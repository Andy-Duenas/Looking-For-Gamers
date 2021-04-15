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
        // console.log('data', data);
        const array = [];
        array.push(data);
        this.setState({ searchFor: array, notLoaded: true });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.notLoaded === false) {
      return <h1>Hello</h1>;
    } else {
      return (
        <div className="background">
        <List games={this.state.searchFor}></List>
        </div>
      );
    }
  }
}
