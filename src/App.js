import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Init from './Init';
import ChoicePost from './component/ChoicePost';
import NewPost from './component/NewPost';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Init} />
          <Route exact path='/post/:id' component={ChoicePost} />
          <Route exact path='/new_post' component={NewPost} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


