import * as React from "react";
import {ListPage} from "./ListPage";
import {Loading} from "./Loading";
import {SearchBar} from "./SearchBar";

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

export class SearchName extends React.Component{

  state = {
    totalDrinks:null,
    drinks: null,
    loading: true
  };

  updateDrinks = (term) => {
    this.setState({drinks: this.state.totalDrinks
        .filter(drink => drink.name.toUpperCase().includes(term.toUpperCase()))});
  };

  componentDidMount = async () => {
    let url = "http://localhost:8080/cocktail/";
    fetch(url + "drinks")
      .then(response => response.json())
      .then(data => data.sort(compare))
      .then(data => this.setState({drinks: data, totalDrinks: data, loading: false}));
  };

  render() {
    if (this.state.loading) {
      return <Loading/>
    }
    return (
      <div>
        <SearchBar updateDrinks={this.updateDrinks}/>
        <ListPage drinks={this.state.drinks}/>
      </div>
    )
  }
}
