import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      gotData: false
    };
  }

  componentDidMount() {
    const { gameId } = this.props;
    fetch(`/api/game/${gameId}`)
      .then(res => res.json())
      .then(game => {
        const [data] = game;
        this.setState({ game: data, gotData: true });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <div className="row-thread-back">
          <div className="back-arrow">
          <a href="#favorites">
          <i className="fas fa-arrow-left arrow-icon" ></i>
          </a>
        </div>
        </div>
        <div className="row-thread-header">
          <div className="col-thr-title">
            <h1 className="thread-title">Title</h1>
            <p className="thread-total">Total Posts: PlaceHolder</p>
          </div>
          <div className="thread-icon">
            <i className="fas fa-plus-circle"></i>
          </div>
        </div>
      </>
    );
  }
}
