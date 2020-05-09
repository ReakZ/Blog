import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { Navbar, Nav, Button, FormControl, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const mapStateToProps = (state) => {
  const { users, stateUI } = state;

  return {
    users,
    stateUI,
  };
};

const actionCreators = {
  loginUpdate: actions.loginUpdate,
  passwordUpdate: actions.passwordUpdate,
  userLogin: actions.userLogin,
  userLogout: actions.userLogout,
  messageUpdate: actions.messageUpdate,
  openModal: actions.openModal,
};

class Header extends React.Component {
  handlerLogin = (e) => {
    e.preventDefault();
    const { users, stateUI, userLogin, messageUpdate } = this.props;
    const { loginName, loginPassword } = stateUI;
    if (
      users.some((x) => x.username === loginName) &&
      loginPassword === "qwerty"
    ) {
      const userId = users.find((x) => x.username === loginName).id;
      const login = {
        loginIs: true,
        loginName: loginName,
        userId: userId,
        loginPassword: "",
      };
      userLogin({ login });
    } else {
      messageUpdate({ type: "danger", text: "Wrong login or password" });
      setTimeout(() => messageUpdate({ type: null, text: "" }), 2000);
    }
  };
  handlerChangeLogin = (e) => {
    const { loginUpdate } = this.props;
    loginUpdate(e.target.value);
  };
  handlerChangePassword = (e) => {
    const { passwordUpdate } = this.props;
    passwordUpdate(e.target.value);
  };

  handlerLogout = (e) => {
    const { userLogout } = this.props;
    userLogout(e.target.value);
  };
  handlerOpenModal = (e) => {
    const { openModal } = this.props;
    openModal();
  };
  render() {
    const { stateUI } = this.props;
    let block;

    if (!stateUI.loginIs) {
      block = (
        <Form inline onSubmit={this.handlerLogin}>
          <FormControl
            type="text"
            placeholder="Логин"
            className="mr-sm-2"
            onChange={this.handlerChangeLogin}
            value={stateUI.loginName}
          />
          <FormControl
            type="password"
            placeholder="Пароль"
            className="mr-sm-2"
            onChange={this.handlerChangePassword}
            value={stateUI.loginPassword}
          />
          <Button
            variant="outline-info"
            type="submit"
            style={{ marginRight: ".5rem" }}
          >
            Логин
          </Button>
          <Button variant="outline-info" onClick={this.handlerOpenModal}>
            Регистрация
          </Button>
        </Form>
      );
    } else {
      block = (
        <Form inline>
          <span className="navbar-brand">
            Добро пожаловать, {stateUI.loginName}{" "}
          </span>
          <Button variant="outline-info" onClick={this.handlerLogout}>
            Выход
          </Button>
        </Form>
      );
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Link to="/" className="navbar-brand">
            Blog
          </Link>
          <Nav className="mr-auto">
            <Link to="/posts" className="nav-link">
              Посты
            </Link>
            <Link to="/users" className="nav-link">
              Пользователи
            </Link>
            <Link to="/createPost" className="nav-link">
              Создать пост
            </Link>
          </Nav>
          {block}
        </Navbar>

        {stateUI.Message.type ? (
          <Alert variant={stateUI.Message.type} style={{marginBottom:0}}>{stateUI.Message.text}</Alert>
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Header);
