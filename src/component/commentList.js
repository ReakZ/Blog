import React from "react";
import { connect } from "react-redux";

import CommentCard from "./commentCard";
const mapStateToProps = (state) => {
  const { users, posts, comments } = state;
  return {
    users,
    posts,
    comments,
  };
};

class CommentList extends React.Component {
  render() {
    const { users, comments, postId } = this.props;
    const list = comments.filter((x) => x.postId === postId);
    return (
      <div>
        {list.map((x) => (
          <CommentCard
          key={x.id}
            text={x.text}
            user={
              users.find((a) => {
                return x.userId === a.id;
              }).name
            }
          />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CommentList);
