import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { OpeningPage } from "./components/OpeningPage";
import { FindFavorites } from "./components/FindFavorites";
import { SearchPage} from "./components/SearchPage";
import { ListPage } from "./components/ListPage";

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={OpeningPage} />
            <Route path="/findfavorites" component={FindFavorites}/>
            <Route path="/searchpage" component={SearchPage}/>
            <Route path="/listall" component={ListPage}/>
        </div>
    </Router>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
