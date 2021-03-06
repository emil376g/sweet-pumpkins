// App.js

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./header/header";
import Main from "./Main/Main";
import Movie from "./Main/Movie";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route component={NotFound} />
        </ Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;