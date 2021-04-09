import React from 'react';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleHeaderName = this.handleHeaderName.bind(this);
  // }

  handleHeaderName() {
    const { currentPage } = this.props;
    if (currentPage.path === '' || currentPage.path === 'search') {
      return 'Search';
    }
    if (currentPage.path === 'game') {
      return 'Game';
    }
  }

  render() {
    return (
      <>
        <div className="row header">
          <div className="menu-container">
           <div className="column-menu"><i className="fas fa-bars icon"></i></div>
           <div className="column-two-third">{this.handleHeaderName()}</div>
          </div>
        </div>
      </>
    );
  }
}
