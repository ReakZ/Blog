import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Container } from "react-bootstrap";
import CardPost from "./cardPost";
const mapStateToProps = (state) => {
  const { posts, users } = state;

  return {
    posts,
    users,
  };
};

class General extends React.Component {
  render() {
    const { posts, users } = this.props;

    return (
      <div>
        <Jumbotron>
          <Container>
            <h2>Добро пожаловать !</h2>
            <p>Образец блога на react + redux.</p>{" "}
            <p>
              Данные предоставленны{" "}
              <a href="https://jsonplaceholder.typicode.com/">
                jsonplaceholder.typicode.com
              </a>{" "}
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <h2>Последние посты: </h2>

          <CardPost
            posts={posts.slice(posts.length - 3).reverse()}
            users={users}
          />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(General);
