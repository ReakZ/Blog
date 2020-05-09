import React from "react";
import { connect } from "react-redux";

import LikePost from './likePost'
import CommentList from './commentList'
import CommentForm from './commentForm'
import PanelPost  from './panelPost'
import EditForm from './reditPost'
import { Container, Row,Card } from "react-bootstrap";

import {Redirect} from 'react-router-dom'


const mapStateToProps = (state) => {
  const { users,posts,editPost} = state;
  return {
    users,posts,editPost
  };
};

class PostPage extends React.Component {
  render() {
    const { users,posts,editPost } = this.props;
    
    const post = posts.find((x) => x.id === this.props.match.params.postId);
    
if(!post){

  return <Redirect to="/" />

}

else if(editPost.isEdit){


  return   <Container><EditForm post={post}/>
  <CommentForm postId={post.id}/>
<CommentList postId={post.id}/>
<PanelPost userId={post.userId} postId={post.id}/>
</Container>
}
const Author=users.find((x) => x.id===post.userId)
    return (
      
        <Container>
        <Card>
        <Card.Header><h2>{post.title} </h2></Card.Header>
        <Card.Title className="text-muted">{Author.name}</Card.Title>
        <Card.Text>{post.body} </Card.Text>
        <Card.Footer ><Row><LikePost postId={post.id}/> <PanelPost userId={post.userId} postId={post.id}/></Row></Card.Footer>
        </Card>
        <CommentForm postId={post.id}/>
<CommentList postId={post.id}/>

</Container>
     
    );
  }
}

export default connect(mapStateToProps)(PostPage);





