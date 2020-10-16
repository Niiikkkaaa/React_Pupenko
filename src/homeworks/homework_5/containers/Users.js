import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn, Button } from "semantic-ui-react";
import UserDetails from './UserDetails';
import Albums from './Albums';
import { motion, AnimatePresence } from 'framer-motion';
export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => setUsers(users))
  }, []);

  //const location = useLocation(); 

  const { path, url } = useRouteMatch();

  return(
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
      <List>
        { users.map(user => 
         <List.Item>
         <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
           <List.Content>
             <List.Header as='a'>
             <Link to={`/users/${user.id}`}>{user.name}</Link>
             </List.Header>
             <List.Description>
               {user.email}, {user.phone}
            </List.Description>
            <Link to={`/users/${user.id}/albums`}>Albums</Link>
           </List.Content>
         </List.Item>
        )}
      </List>
      </GridColumn>
      <GridColumn className='author-column'>
      <AnimatePresence>
      <Switch>
        <Route path={`${path}/:userId`} exact>
          <UserDetails />
        </Route>
        <Route path={`${path}/:userId/albums`} exact>
          <Albums />
        </Route>
        </Switch>
      </AnimatePresence>
      </GridColumn>
    </Grid>
    </motion.div>
  );
}