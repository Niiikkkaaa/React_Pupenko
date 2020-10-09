import React, { Component } from 'react';
import { Card, CardContent, Dimmer, Loader } from 'semantic-ui-react'; 
import Albums from './Albums' 
 
class AuthorInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: null,
      isFetching: false
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.authorId !== this.props.authorId && this.props.authorId !== null) {
      this.fetchUserData()
    }
  }

  fetchUserData() {
    const { authorId } = this.props;
    if (!authorId ) return;
    this.setState({
      isFetching: true
    });
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then(response => response.json())
      .then(userData => this.setState({
        userData,
        isFetching: false
      }))
      .catch(err => this.setState({
        isFetching: false
      })) 
  }

  render() {
    const { userData, isFetching } = this.state;
    const { authorId } = this.props;
    if(userData == null) return null;

    return(
      <Card>
        <Dimmer active={isFetching}>
          <Loader active={isFetching} />
        </Dimmer>
        <Card.Content>
          <Card.Header>{userData.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Email: {userData.email}</span>
          </Card.Meta>
          <Card.Description>
            {userData.phone}
          </Card.Description>
          <CardContent>
            <Albums authorId={authorId} />
          </CardContent>
        </Card.Content>
      </Card>
    );
  }
}

export default AuthorInfo;