import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Week1 from "./homeworks/homework_1/Week1";
import Blog from "./homeworks/homework_3/Blog";
import Week2 from "./homeworks/homework_2/Week2";

class App extends Component {

  render() {
    return (
      <>
        <Week2 />
        <Blog />
      </>
    );
  }
}

export default App;
