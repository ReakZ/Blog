import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import CardPost from "./cardPost";
import { Container } from "react-bootstrap";
import HeaderInfo from "./headerInfo";

const mapStateToProps = (state) => {
  const { posts, users } = state;

  return {
    posts,
    users,
  };
};

class ListPosts extends React.Component {
  render() {
    const { posts, users } = this.props;

    return (
      <div>
        <Container>
          <HeaderInfo text="Посты:" />
          <CardPost posts={posts} users={ users} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListPosts);
