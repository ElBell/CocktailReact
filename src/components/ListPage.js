import * as React from "react";
import { ListItem } from "./ListItem";

export class ListPage extends React.Component {
  state = {
    drinks: this.props.drinks.sort(compare)
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({drinks: nextProps.drinks})
  };

  render() {
    if (this.state.drinks.length === 0) {
      return <h1>Sorry, I don't have that one</h1>
    }
    return getListItems(this.state.drinks);
  }
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

function getListItems(drinks) {
  return drinks.map(drink => {
    return <ListItem key={drink.id} drink={drink} />;
  });
}

