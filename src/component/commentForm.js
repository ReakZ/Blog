import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../actions/index";
import { Field, reduxForm } from "redux-form";
import { Form, Card } from "react-bootstrap";

const mapStateToProps = (state) => {
  const { stateUI, comments } = state;
  return {
    comments,
    stateUI,
  };
};
const actionCreators = {
  createComment: actions.createComment,
};

class CommentForm extends React.Component {
  addTask = (values) => {
    const { postId, createComment, stateUI, comments } = this.props;
    createComment({
      id: comments.length + 1,
      userId: stateUI.userId,
      postId: postId,
      text: values.text,
    });
    this.props.reset();
  };

  render() {
    const { stateUI } = this.props;

    if (!stateUI.loginIs) {
      return (
        <div>
          <Card style={{ marginTop: 25, marginBottom: 25 }}>
            <Card.Header>
              <h5>Предупреждение</h5>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Для публикации комментария нужно быть залогиненым.</p>
                <p>Зарегистрируйтесь или войдите в свой профиль</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }

    return (
      <Form onSubmit={this.props.handleSubmit(this.addTask)}>
        
          <Form.Label>Текст комментария:</Form.Label>
        
        
          <Field
            name="text"
            required
            component="textarea"
            type="text"
            style={{ width: 100+'%' }}
          />
     
       
         
          <button type="submit" className="btn btn-primary btn-sm" style={{ marginBottom:15 }}>
            Опубликовать
          </button>
        
      </Form>
    );
  }
}

const CommentFormRedux = connect(mapStateToProps, actionCreators)(CommentForm);

export default reduxForm({
  form: "newComment",
})(CommentFormRedux);
