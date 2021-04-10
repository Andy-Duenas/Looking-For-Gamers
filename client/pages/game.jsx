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
      <>
      <a href="#search">
      <i className="fas fa-arrow-left" onClick={this.handlePageC}></i>
      </a>
      <h1 onClick={this.name}>Hello World</h1>
      </>
    );
  }
}
