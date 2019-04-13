import * as React from "react";
import { ListItem } from "./ListItem";
import {DrinkPage} from "../DrinkPage/DrinkPage";
import {BackButton} from "../Utils/BackButton";
import {SearchBar} from "../Utils/SearchBar";
import ScrollManager from "../Utils/ScrollManager";

export class ListPage extends React.Component {
  state = {
    totalDrinks: this.props.drinks.sort(compare),
    showingDrinks: this.props.drinks.sort(compare),
    lastTerm: '',
    searchId: null
  };

  updateDrinks = (term) => {
    this.setState({lastTerm: term, showingDrinks: this.state.totalDrinks
        .filter(drink => drink.name.toUpperCase().includes(term.toUpperCase())).sort(sortBegins(term))});
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({showingDrinks: nextProps.drinks, totalDrinks:nextProps.drinks})
  };

  setId = (id) => {
    this.setState({searchId:id})
  };

  reset = () => {
    this.setState({searchId: null})
  };

  render() {
    if (this.state.searchId != null) {
      return (
        <div>
          <BackButton reset={this.reset}/>
          <DrinkPage drinkId={this.state.searchId}/>
        </div>
      )
    } else {
      return (
        <div>
          <BackButton reset={this.props.reset}/>
          <SearchBar updateDrinks={this.updateDrinks} currentTerm={this.state.lastTerm}/>
          <ScrollManager scrollKey="name-scroll" />
          <div>
            {this.state.showingDrinks.map(drink => {
              return <ListItem key={drink.id} drink={drink} setId={this.setId}/>;
            })}
          </div>
        </div>
      )
    }
  }
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

function sortBegins(term) {
  return function (a, b) {
    return a.name.toUpperCase().startsWith(term.toUpperCase()) ?
      (b.name.toUpperCase().startsWith(term.toUpperCase()) ? 0 : -1) : 1
  }
}

