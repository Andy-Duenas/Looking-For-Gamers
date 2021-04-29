import React from 'react';
import AddReply from '../components/add-reply';

export default class ReplyList extends React.Component {
  render() {
    const { replies } = this.props;
    return (
      <ul>
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
        <div className="row-reply">
          <div className="col-reply">
            <p className="reply-user">TheLegend27</p>
            <p className="reply-date">{props.createdAt}</p>
          </div>
        </div>
        <div className="row-reply">
          <div className="col-message">
            <p className="post-message">{props.message}</p>
          </div>
        </div>
        <div className="row-reply">
          <AddReply postId={props.postId}></AddReply>
        </div>
      </div>
    </>
  );
}
