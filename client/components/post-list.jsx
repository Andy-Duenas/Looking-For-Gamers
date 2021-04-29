import React from 'react';
import getPosts from '../lib/get-posts';
import AddReply from '../components/add-reply';
import getReplies from '../lib/get-replies';
import ReplyList from '../components/post-reply';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loaded: false,
      replies: []
    };
  }

  componentDidMount() {
    const posts = getPosts(this.props.gameId);
    posts.then(results => this.setState({ results, loaded: true }));
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
              postId={single.postId}
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

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      replies: []
    };
  }

  componentDidMount() {
    const reply = getReplies(this.props.postId);
    reply.then(replies => this.setState({ replies, loaded: true }));
  }

  render() {
    const { replies, loaded } = this.state;
    if (loaded) {
      return (
    <>
    <div className="post-background">
      <div className="row-post">
        <div className="col-post">
          <p className="post-user">TheLegend27</p>
          <p className="post-date">{this.props.createdAt}</p>
        </div>
      </div>
      <div className="row-post">
        <div className="col-message">
          <p className="post-message">{this.props.message}</p>
        </div>
      </div>
      <div className="row-post">
          <AddReply postId={this.props.postId}></AddReply>
      </div>
    </div>
        <ReplyList replies={replies} />
    </>
      );
    } else {
      return <h1 className="row"><i className="fas fa-dragon loading-icon"></i></h1>;
    }
  }
}
