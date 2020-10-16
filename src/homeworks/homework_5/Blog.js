import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from "semantic-ui-react";
import Users from "./containers/Users";
import Posts from "./containers/Posts";
import Page404 from "./containers/404";
import UserDetails from "./containers/UserDetails";
import { AnimatePresence, motion } from 'framer-motion';


export default function Blog({ location }) {

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/"> - Home</Link>{/*Общение напрямую с роутером*/}
            </li>
            <li>
              <Link to="/about"> - About</Link>
            </li>
            <li>
              <Link to="/users"> - Users</Link>
            </li>
            <li>
              <Link to="/posts"> - Posts</Link>
            </li>
          </ul>
        </nav>
 
         <AnimatePresence>
         <Switch >{/*Switch рендерит View в зависимости от Link*/}
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users/:userId" exact>
            <UserDetails />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
         </AnimatePresence> 
    </Router>
  );
}

function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <h2>Home</h2>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
    <h2>About</h2>
    </motion.div>
  );
}

// function Users() {
//   return <h2>Users</h2>;
// }

