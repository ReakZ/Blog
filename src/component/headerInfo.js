import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Nav } from "react-bootstrap";

function HeaderInfo(props) {
  return (
    <Nav className="navbar navbar-dark bg-dark" style={{ marginTop: 15 }}>
      <span className="navbar-brand">{props.text}</span>
    </Nav>
  );
}

export default HeaderInfo;
