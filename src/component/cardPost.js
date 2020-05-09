import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function CardPost(props) {
  const {users,posts}=props

  return (
    <div>
    {posts.map((post) => {
      let user = users.find(y=>y.id===post.userId)
      
       return <Card style={{ marginBottom: 15 }} key={post.id}>
       <Card.Header>
         <h4>
           <Link to={post?`post/${post.id}`:'posts'}>{post?post.title:'title'}</Link>
         </h4>
       </Card.Header>
       <Card.Body>
         <Card.Text>
           Автор поста: <Link to={users?`profile/${post.userId}`:''}>{user?user.name:'author'}</Link>
         </Card.Text>
       </Card.Body>
     </Card>
        
       
    })}
</div>


  );
}

export default CardPost;