import * as React from "react";
import { ListItem } from "./ListItem";

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

function getListItems(drinks) {
  return drinks.map(drink => {
    return <ListItem key={drink.id} drink={drink} />;
  });
}

export class ListPage extends React.Component {
  state = {
    drinks: this.props.drinks.sort(compare)
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({drinks: nextProps.drinks.sort(compare)})
  };

  render() {
    return getListItems(this.state.drinks);
  }
}
