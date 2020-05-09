import React from "react";

import Header from "./component/header";
import ModalForRegistration from "./component/modalForRegistration";
import Body from "./component/body";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <ModalForRegistration />
          <Body />
        </Router>
      </div>
    );
  }
}
