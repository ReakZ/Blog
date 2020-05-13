import React from "react";
import { connect } from "react-redux";
import { Card,Container} from "react-bootstrap";
const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users,
  };
};

class UserProfile extends React.Component {
  render() {
    const { users } = this.props;

    const user = users.find((x) => x.id === this.props.match.params.userId);

    return (
      <Container>
        <Card style={{marginTop:25}}>
            <Card.Header>{user?user.name:''}</Card.Header>
            <Card.Body>           
              <Card.Text>
              <p><b>Company:</b> {user?user.company.name:''}</p>
              <p><b>Phone:</b> {user?user.phone:''}</p>
              <p><b>Email:</b> {user?user.email:''} </p>
              <p><b>Website:</b> {user?user.website:''}</p>
              
              
              </Card.Text>
            </Card.Body>
          </Card>

        </Container>
    );
  }
}

export default connect(mapStateToProps)(UserProfile);
