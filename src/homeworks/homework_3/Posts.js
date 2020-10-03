import React, { Component, Fragment } from 'react';
import { Feed, FeedContent, FeedExtra, FeedLabel, FeedSummary, Loader } from 'semantic-ui-react';
import Comments from './Comments';
 
class Posts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isPostFetching: false
    };
  }

  componentDidMount() {
    this.setState({
      isPostFetching: true
    });
    fetch('https://jsonplaceholder.typicode.com/posts')//XML http request
    .then(response => response.json())
    .then(posts => {
      this.setState({
        posts
      });
    })
  }
 
  render() {
    const { posts, isPostFetching } = this.state;
    const { onPostSelect } = this.props;

    return(
      <Fragment>
        <Loader size='small' active={isPostFetching}/>
        <Feed>
          {posts.map(post => (
            <Feed.Event>
              <FeedLabel image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
              <FeedContent>
                <FeedSummary onClick={() => onPostSelect(post)}>
                  <a>{post.title}</a>
                </FeedSummary>
                <FeedExtra>
                  {post.body}
                </FeedExtra>
                <FeedExtra>
                  <Comments postId={post.id}/>
                </FeedExtra>
              </FeedContent>
            </Feed.Event>
          ))}
        </Feed>    
      </Fragment>
    );
  }
}

export default Posts;