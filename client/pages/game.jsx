import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.name.bind(this);
  }

  name() {
    // eslint-disable-next-line no-console
    console.log('inside Game', this.props);
  }

  render() {

    return (
      <h2 onClick={this.name}>hi</h2>
    );
  }
}
