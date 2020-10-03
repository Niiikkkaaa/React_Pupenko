import React, { Component, Fragment } from 'react';
import { Card, CardContent, Dimmer, Loader } from 'semantic-ui-react'; 

 
class Albums extends Component {

  constructor(props) {
    super(props)
    this.state = {
      albums: [],
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
    console.log(authorId)
    if (!authorId ) return;
    this.setState({
      isFetching: true
    });
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
      .then(response => response.json())
      .then(albums => this.setState({
        albums,
        isFetching: false
      }))
      .catch(err => this.setState({
        isFetching: false
      }))
  }
 

  render() {
    const { albums, isFetching } = this.state
    return(
      <Fragment>
       <Loader active={isFetching} /> 
       <ol>
         {albums.map(album => (
           <li>{album.title}</li>
        ))}  
        </ol>
      </Fragment>
    );
  }
}


export default Albums;