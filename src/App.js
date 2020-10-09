import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Week1 from "./homeworks/homework_1/Week1";
import Blog from "./homeworks/homework_3/Blog";
import Week2 from "./homeworks/homework_2/Week2";
import useDocumentTitle from "./homeworks/homework_4/useDocumentTitle";
import Classwork3 from "./classworks/classwork_3/classwork_3"


function App() {

    useDocumentTitle('Занятия | Hillel LMS');

    return (
      <>
        <Week2 />
        {/*<Blog />
        <Classwork3 />*/}
      </>
    );
}

export default App;
