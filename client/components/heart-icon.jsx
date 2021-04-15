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
          this.setState({ inDb: false });
        } else {
          this.setState({ inDb: true });
        }
      })
      .catch(err => console.error(err));
  }

  handleFavorite() {
    const { inDb } = this.state;
    const { gameId, game } = this.props;
    if (inDb) {
      fetch(`/api/remove/${gameId}`, {
        method: 'DELETE',
        body: JSON.stringify(gameId)
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ inDb: false });
        })
        .catch(err => console.error(err));
    } else {
      fetch(`/api/add/${gameId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
      })
        .then(res => res.json())
        .then(data => {
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
