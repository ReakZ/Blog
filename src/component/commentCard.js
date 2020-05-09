import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function CommentCard(props) {
  return (
    <Card style={{ marginBottom: 15 }}>
      <Card.Header>{props.user}</Card.Header>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CommentCard;
