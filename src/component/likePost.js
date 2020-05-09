import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../actions/index";
import { Col } from "react-bootstrap";
const mapStateToProps = (state) => {
  const { users, likes, stateUI } = state;

  return {
    users,
    stateUI,
    likes,
  };
};
const actionCreators = {
  setLike: actions.setLike,
  deleteLike: actions.deleteLike,
};

class LikePost extends React.Component {
  handlerLike = (e) => {
    const { likes, stateUI, postId } = this.props;
    if (
      likes
        .filter((x) => x.userId === stateUI.userId)
        .filter((x) => x.postId === this.props.postId).length > 0
    ) {
      const { deleteLike } = this.props;
      deleteLike({ userId: stateUI.userId, postId: postId });
      return;
    }
    const { setLike } = this.props;
    setLike({ id: likes.length, userId: stateUI.userId, postId: postId });
  };
  render() {
    const { likes, stateUI } = this.props;
    const likesforpost = likes.filter((x) => x.postId === this.props.postId)
      .length;
    const myLike =
      likes.filter((x) => x.userId === stateUI.userId).length > 0
        ? "btn btn-primary"
        : "btn btn-secondary";
    return (
      <Col>
        <button
          onClick={this.handlerLike}
          disabled={!stateUI.loginIs}
          className={myLike}
        >
          Like: {likesforpost}
        </button>
      </Col>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(LikePost);
