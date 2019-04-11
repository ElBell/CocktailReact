import * as React from "react";
import { ListItem } from "./ListItem";
import {DrinkPage} from "../DrinkPage/DrinkPage";
import {BackButton} from "../Utils/BackButton";
import {SearchBar} from "../Utils/SearchBar";

export class ListPage extends React.Component {
  state = {
    totalDrinks: this.props.drinks.sort(compare),
    showingDrinks: this.props.drinks.sort(compare),
    searchId: null
  };

  updateDrinks = (term) => {
    this.setState({showingDrinks: this.state.totalDrinks
        .filter(drink => drink.name.toUpperCase().includes(term.toUpperCase()))});
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
          <SearchBar updateDrinks={this.updateDrinks}/>
          {this.state.showingDrinks.map(drink => {
          return <ListItem key={drink.id} drink={drink} setId={this.setId}/>;
      })}
        </div>)
    }
  }
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

