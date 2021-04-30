import React from 'react';

export default class ReplyList extends React.Component {
  render() {
    const { replies } = this.props;
    return (
      <ul className="reply-list">
        {
          replies.map(single => {
            return (
              <Replies
                key={single.createdAt}
                postId={single.postId}
                message={single.message}
                createdAt={single.created}
              />
            );
          })
        }
      </ul>
    );
  }
}

function Replies(props) {
  return (
    <>
      <div className="reply-background">
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
      </div>
    </>
  );
}
