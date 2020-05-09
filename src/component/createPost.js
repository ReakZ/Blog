import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { Container, Row,Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  const { stateUI, posts, users, newPost } = state;

  return {
    stateUI,
    posts,
    users,
    newPost,
  };
};

const actionCreators = {
  newPostTitleUpdate: actions.newPostTitleUpdate,
  newPostTextUpdate: actions.newPostTextUpdate,
  newPostCreate: actions.newPostCreate,
  messageUpdate: actions.messageUpdate,
};

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.olol = {
      red: false,
    };
  }
  handlerTitleUpdate = (e) => {
    const { newPostTitleUpdate } = this.props;
    newPostTitleUpdate(e.target.value);
  };

  handlerTextUpdate = (e) => {
    const { newPostTextUpdate } = this.props;
    newPostTextUpdate(e.target.value);
  };
  handlerPostSubmit = (e) => {
    e.preventDefault();
    const {
      newPostCreate,
      stateUI,
      posts,
      newPost,
      messageUpdate,
    } = this.props;

    const abuz = {
      id: posts.length + 1,
      title: newPost.title,
      body: newPost.text,
      userId: stateUI.userId,
    };
    newPostCreate({ abuz });

    messageUpdate({ type: "success", text: "Post create" });
    setTimeout(() => messageUpdate({ type: null, text: "" }), 2000);
    this.olol.red = true;
  };
  render() {
    const { stateUI, newPost, posts } = this.props;
    if (this.olol.red) {
      return <Redirect to={`/post/${posts.length}`} />;
    } else if (!stateUI.loginIs) {
      return (
        <Container>
          <Card style={{ marginTop: 25 }}>
            <Card.Header>
              <h5>Предупреждение</h5>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Для создания поста нужно быть залогиненым.</p>
                <p>Зарегистрируйтесь или войдите в свой профиль</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      );
    }

    return (
      <Container>
        <form onSubmit={this.handlerPostSubmit} style={{ marginTop: 15 }}>
          <Row>
            <label forHTML="title">
              <h4>Заголовок:</h4>
            </label>
          </Row>
          <Row>
            <Form.Control
              type="text"
              onChange={this.handlerTitleUpdate}
              value={newPost.title}
              name="title"
              required
            />{" "}
          </Row>
          <Row>
            <label forHTML="post">
              <h4>Текст поста:</h4>
            </label>
          </Row>
          <Row>
            <Form.Control
              as="textarea"
              rows="4"
              onChange={this.handlerTextUpdate}
              value={newPost.text}
              name="text"
              required
            />
          </Row>
          <Row>
            <Button variant="primary" type="submit" style={{ marginTop: 15 }}>
              Опубликовать
            </Button>
          </Row>
        </form>
      </Container>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(CreatePost);
