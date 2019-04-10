import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {App} from "./App";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {SearchName} from "./components/SearchName";
import {DrinkPage} from "./components/DrinkPage";
import {UnderConstruction} from "./components/Utils/UnderConstruction";
import {SearchIngredient} from "./components/SearchIngredient";


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/searchname" component={SearchName} />
      <Route path="/searchingredient" component={SearchIngredient}/>
      <Route path="/drinks/:id" component={DrinkPage} />
      <Route path="/underconstruction" component={UnderConstruction}/>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
