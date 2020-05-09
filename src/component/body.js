import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPosts from "./listPosts";
import ListUsers from "./ListUser";
import UserProfile from "./userProfile";
import General from "./main";
import PostPage from "./postPage";
import CreatePost from "./createPost";

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users,
  };
};

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <General />
        </Route>
        <Route path="/users">
          <ListUsers />
        </Route>
        <Route path="/posts">
          <ListPosts />
        </Route>
        <Route path={`/profile/:userId`} component={UserProfile}></Route>
        <Route path={`/post/:postId`} component={PostPage}></Route>
        <Route path="/createPost">
          <CreatePost />
        </Route>
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(Body);
