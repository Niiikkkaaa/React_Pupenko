import React, { useState, useEffect, Fragment } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Feed, FeedContent, FeedExtra, FeedLabel, FeedSummary, Button, Grid, GridColumn  } from "semantic-ui-react";
import UserDetails from './UserDetails';
import { motion, AnimatePresence } from 'framer-motion';

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(posts => setPosts(posts))
  }, []);

  const { path, url } = useRouteMatch();
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
<Grid columns="2">
      <GridColumn>
      <AnimatePresence>
      <Button>
        <Link to={`/`} exact>Back home</Link>
      </Button>
      </AnimatePresence>
      <Feed>
        {posts.map(post => (
          <Feed.Event>
            <FeedLabel image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
              <FeedContent>
                <FeedSummary>
                <Link to={`/posts/${post.userId}`}>
                  {post.title}
                </Link>
                </FeedSummary>
                <FeedExtra>
                  {post.body}
                </FeedExtra>
              </FeedContent>
          </Feed.Event>
        ))}
      </Feed>  
      </GridColumn>
      <GridColumn className='author-column'>
      <AnimatePresence>
      <Switch>
        <Route path={`${path}/:userId`} exact>
          <UserDetails />
        </Route>
      </Switch>
      </AnimatePresence> 
      </GridColumn>  
    </Grid>  
    </motion.div>
  );
}

export default Posts;