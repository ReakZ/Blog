import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function User(props) {
  return (
    <div>
      <Card style={{ marginBottom: 15 }}>
        <Card.Header>
          Company <h5>{props.user?props.user.company.name:''}</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.user?props.user.name:''}</Card.Title>
          <Card.Text>
            <p>Login: {props.user?props.user.username:''}</p>
            <p>Password for test: qwerty</p>
            <p>E-mail: {props.user?props.user.email:''}</p>
            <p>Phone: {props.user?props.user.phone:''}</p>
          </Card.Text>
          <Link to={`profile/${props.user.id}`} className="btn btn-primary">
            Профиль
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
