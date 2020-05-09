import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../actions/index";
import {  Col} from "react-bootstrap";

const mapStateToProps = (state) => {
  const { stateUI, editPost } = state;
  return {
    stateUI,
    editPost,
  };
};
const actionCreators = {
  removePost: actions.removePost,
  messageUpdate: actions.messageUpdate,
  setEdit: actions.setEdit,
};

class PanelPost extends React.Component {
  handlerRemovePost = (postId) => (e) => {
    const { removePost, messageUpdate } = this.props;
    removePost(postId);

    messageUpdate({ type: "danger", text: "Пост удален" });
    setTimeout(() => messageUpdate({ type: null, text: "" }), 2000);
  };

  handlerEdit = (e) => {
    const { setEdit } = this.props;
    setEdit(true);
  };
  render() {
    const { stateUI, postId, userId,  editPost } = this.props;

    if (stateUI.userId !== userId || editPost.isEdit) {
      return null;
    }

    return (
   
        <Col sm={3}>
        <button className="btn btn-info btn-sm" onClick={this.handlerEdit} style={{marginRight:15}}>
          Редактировать
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={this.handlerRemovePost(postId)}
        >
          удалить
        </button></Col>
   
    );
  }
}

export default connect(mapStateToProps, actionCreators)(PanelPost);
