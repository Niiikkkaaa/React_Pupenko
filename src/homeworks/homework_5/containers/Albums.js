import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation, useRouteMatch, useParams, Redirect } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn, CardHeader } from "semantic-ui-react";
import { Card, Icon, Loader } from "semantic-ui-react";
import { AnimatePresence, motion } from 'framer-motion';

const extraData = (
  <a>
    <Icon name='user' />
    16 Albums
  </a>
);

export default function Albums() {

  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then(response => response.json())
    .then(albums => setAlbums(albums))
  }, [userId]);

  if (Albums === null) return <Loader size="small" active/>;
  
  // const location = useLocation(); 

  return(
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
    <div className='albums'>
       <ol>
         {albums.map(album => (
           <li>{album.title}</li>
        ))}  
        </ol>
    </div>
    </motion.div>
  );
} 