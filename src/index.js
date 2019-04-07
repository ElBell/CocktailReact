import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {App} from "./App";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Search} from "./components/Search";
import {ListPage} from "./components/ListPage";
import {DrinkPage} from "./components/DrinkPage";
import {UnderConstruction} from "./components/UnderConstruction";


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/cocktails" component={App} />
      <Route path="/cocktails/search" component={Search} />
      <Route path="/cocktails/listall" component={ListPage} />
      <Route path="/cocktails/drink/:id" component={DrinkPage} />
      <Route path="/cocktails/underconstruction" component={UnderConstruction}/>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
