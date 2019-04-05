import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { OpeningPage } from "./components/OpeningPage";
import { ListPage } from "./components/ListPage";
import { UnderConstruction } from "./components/UnderConstruction";
import { DrinkPage } from "./components/DrinkPage";
import { SearchBarPage } from "./components/SearchBarPage"


export class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/cocktails" component={OpeningPage} />
          <Route path="/cocktails/search" component={SearchBarPage} />
          <Route path="/cocktails/listall" component={ListPage} />
          <Route path="/cocktails/drink/:id" component={DrinkPage} />
          <Route path="/cocktails/underconstruction" component={UnderConstruction}/>
        </div>
      </Router>
    )
  }
}
