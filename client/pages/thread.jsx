import React from 'react';
import Addpost from '../components/add-post';
import PostList from '../components/post-list';
import getPosts from '../lib/get-posts';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      gotData: false,
      results: [],
      loaded: false,
      posts: 0
    };
    this.update = this.update.bind(this);
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

    fetch(`/api/amount/${gameId}`)
      .then(res => res.json())
      .then(num => {
        this.setState({ posts: num.count });
      })
      .catch(err => {
        console.error(err);
      });
  }

  update(hasUpdated) {
    const test = getPosts(this.props.gameId);
    const { gameId } = this.props;
    test.then(results => this.setState({ results, loaded: hasUpdated }));
    fetch(`/api/amount/${gameId}`)
      .then(res => res.json())
      .then(num => {
        this.setState({ posts: num.count });
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
                <a href={this.props.gameSearch === null ? '#game?gameId=' + id : '#game?gameId=' + id + '&gameSearch=' + this.props.gameSearch }>
             <i className="fas fa-arrow-left arrow-icon" ></i>
            </a>
          </div>
            <div className="col-thr-title">
              <p className="thread-title">{name}</p>
            </div>
        </div>
        <div className="thread-cont">
          <div className="row-thread-header">
          <PostList gameId={id} isUpdating={this.state.loaded} onSubmit={this.update}></PostList>
        </div>
        <Addpost gameId={id} onSubmit={this.update}></Addpost>
        </div>
      </div>
    </div>
      );
    }
  }
}
