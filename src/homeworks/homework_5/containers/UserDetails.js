import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation, useRouteMatch, useParams, Redirect } from 'react-router-dom';
import { Card, Icon, Loader } from "semantic-ui-react";
import { AnimatePresence, motion } from 'framer-motion';


const extraData = (
  <a>
    <Icon name='user' />
    16 Albums
  </a>
);

export default function UserDetails() {

  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => setUserDetails(user))
  }, [userId]);

  if (userDetails === null) return <Loader size="small" active/>;
  

  // const location = useLocation(); 

  return(
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
    <div className='user-details-page'>
      <Card
        image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        header={userDetails.name}
        description={userDetails.email}    
      />
    </div>
    </motion.div>
  );
} 