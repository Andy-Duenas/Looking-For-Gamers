import React from 'react';
import Addpost from '../components/add-post';
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
    const { name, id } = this.state.game;
    if (this.state.gotData === false) {
      return <h1 className="row"><i className="fas fa-dragon loading-icon"></i></h1>;
    } else {
      return (
    <div className="background">
      <div className="back-post">
        <div className="row-thread-back">
          <div className="back-arrow">
            <a href="#favorites">
             <i className="fas fa-arrow-left arrow-icon" ></i>
            </a>
          </div>
        </div>
        <div className="thread-cont">
          <div className="row-thread-header">
            <div className="col-thr-title">
              <p className="thread-title">{name}</p>
              <p className="thread-total">Total Posts: PlaceHolder</p>
            </div>
          <Addpost gameId={id}></Addpost>
        </div>
        <div className="post-background">
        </div>
        </div>
      </div>
    </div>
      );
    }
  }
}
