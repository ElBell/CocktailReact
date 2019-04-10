import * as React from "react";
import { ListItem } from "./ListItem";
import {DrinkPage} from "../DrinkPage";

export class ListPage extends React.Component {
  state = {
    drinks: this.props.drinks.sort(compare),
    showingDrink: false,
    searchId: null
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({drinks: nextProps.drinks})
  };

  setId = (id) => {
    this.setState({searchId:id, showingDrink:true})
  };

  render() {
    if (this.state.drinks.length === 0) {
      return <h1>Sorry, I don't have that one</h1>
    } else if (this.state.showingDrink) {
        return <DrinkPage drinkId={this.state.searchId}/>
    } else {
      return this.state.drinks.map(drink => {
        return <ListItem key={drink.id} drink={drink} setId={this.setId}/>;
      });
    }
  }
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

