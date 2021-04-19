import React from 'react';
import getPosts from '../lib/get-posts';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loaded: false
    };
  }

  componentDidMount() {
    const test = getPosts(this.props.gameId);
    test.then(results => this.setState({ results, loaded: true }));
  }

  render() {
    if (this.props.isUpdating) {
      this.props.onSubmit(false);
      const test = getPosts(this.props.gameId);
      test.then(results => this.setState({ results, loaded: true }));
    }
    const { loaded } = this.state;
    const { results } = this.state;
    if (loaded) {
      return (
    <ul>
      {
        results.map(single => {
          return (
            <SinglePost
              key={single.createdAt}
              message={single.message}
              userId={single.userId}
              createdAt={single.created}
            />
          );
        })
      }
    </ul>
      );
    } else {
      return <h1 className="row"><i className="fas fa-dragon loading-icon"></i></h1>;
    }
  }
}

function SinglePost(props) {
  return (
    <>
    <div className="post-background">
      <div className="row-post">
        <div className="col-post">
          <p className="post-user">TheLegend27</p>
          <p className="post-date">{props.createdAt}</p>
        </div>
      </div>
      <div className="row-post">
        <div className="col-message">
          <p className="post-message">{props.message}</p>
        </div>
      </div>
      <div className="row-post">
        <div className="col-reply">
          <i className="fas fa-reply reply-icon"></i>
        </div>
      </div>
    </div>
    </>
  );
}
