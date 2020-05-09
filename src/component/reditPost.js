import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../actions/index";

import { Form, Button, Row, Col } from "react-bootstrap";

const mapStateToProps = (state) => {
  const { stateUI, editPost, posts } = state;
  return {
    stateUI,
    editPost,
    posts,
  };
};
const actionCreators = {
  editPostTitleUpdate: actions.editPostTitleUpdate,
  editPostTextUpdate: actions.editPostTextUpdate,
  editPostSubmit: actions.editPostSubmit,

  setEdit: actions.setEdit,
};

class EditForm extends React.Component {
  handlerTitleUpdate = (e) => {
    const { editPostTitleUpdate } = this.props;
    editPostTitleUpdate(e.target.value);
  };

  handlerTextUpdate = (e) => {
    const { editPostTextUpdate } = this.props;
    editPostTextUpdate(e.target.value);
  };

  handlerCanel = (e) => {
    const { setEdit } = this.props;
    setEdit(false);
  };
  handlerSubmit = (e) => {
    e.preventDefault();
    const { editPost, editPostSubmit, stateUI, post } = this.props;

    editPostSubmit({
      title: editPost.title,
      body: editPost.body,
      userId: stateUI.userId,
      id: post.id,
    });
  };
  componentDidMount() {
    const { editPostTextUpdate, editPostTitleUpdate, post } = this.props;
    editPostTitleUpdate(post.title);
    editPostTextUpdate(post.body);
  }
  render() {
    const { editPost } = this.props;

    return (
      <form onSubmit={this.handlerSubmit}>
        <label forhtml="title">
          <h4>Заголовок:</h4>
        </label>
        <Form.Control
          type="text"
          value={editPost.title}
          name="title"
          required
          onChange={this.handlerTitleUpdate}
        />
        <label forhtml="post">
          <h4>Текст поста:</h4>
        </label>
        <Form.Control
          as="textarea"
          rows="4"
          value={editPost.body}
          name="text"
          required
          onChange={this.handlerTextUpdate}
        />
        <Row style={{ marginTop: 15 }}>
          <Col>
            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={this.handlerCanel}>
              Отменить
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(EditForm);
