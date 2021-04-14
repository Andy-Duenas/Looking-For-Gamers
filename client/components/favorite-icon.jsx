/* eslint-disable no-console */
import React from 'react';

export default class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inDb: false
    };
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    const { gameId } = this.props;
    fetch(`/api/check/${gameId}`)
      .then(res => res.json())
      .then(data => {
        if (data.notInDb) {
          console.log('Not In Database');
          this.setState({ inDb: false });
        } else {
          console.log('In Database');
          this.setState({ inDb: true });
        }
      })
      .catch(err => console.error(err));
  }

  handleFavorite() {
    const { inDb } = this.state;
    const { gameId } = this.props;
    if (inDb) {
      fetch(`/api/remove/${gameId}`, {
        method: 'DELETE',
        body: JSON.stringify(gameId)
      })
        .then(res => res.json())
        .then(data => {
          console.log('Data remove', data);
          this.setState({ inDb: false });
        })
        .catch(err => console.error(err));
    } else {
      fetch(`/api/add/${gameId}`, {
        method: 'POST',
        body: JSON.stringify(gameId)
      })
        .then(res => res.json())
        .then(data => {
          console.log('Data Add', data);
          this.setState({ inDb: true });
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
            <div className={this.state.inDb === false ? 'heart-container' : 'heart-container-blue'} onClick={this.handleFavorite}>
              <i className="far fa-heart heart-icon"></i>
            </div>
    );
  }
}
