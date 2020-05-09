import React from "react";
import { connect } from "react-redux";
import HeaderInfo from "./headerInfo";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import User from "../component/user";

const mapStateToProps = (state) => {
  const { users } = state;

  return {
    users,
  };
};

class ListUsers extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <Container>
        <HeaderInfo text="Пользователи форума:" />

        {users.map((x) => (
          <User key={x.id} user={x} />
        ))}
      </Container>
    );
  }
}

export default connect(mapStateToProps)(ListUsers);
