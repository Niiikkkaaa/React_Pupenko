import React, { Component, Fragment } from 'react';
import { Loader } from 'semantic-ui-react'; 
import './Comments.css';
 
class Comments extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      isCommentsFetching: false
    };
  }

  componentDidMount() {
    this.fetchCommentData();
  }

  fetchCommentData() {
    const { postId } = this.props;
    if(!postId) return;
    this.setState({
      isCommentsFetching: true
    });
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)//XML http request
    .then(response => response.json())
    .then(comments => {
      this.setState({
        comments
      });
    })
  }
  
  render() {
    const { comments, isCommentsFetching } = this.state;
    return (
      <Fragment>
        <Loader size='small' active={isCommentsFetching}/>
        <ul>
          {comments.map(comment => (
              <li>
                <p className='comment-name'>{comment.name}</p>
                <p class='comment-email'>Email: {comment.email}</p>
                <p>{comment.body}</p>
              </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Comments;