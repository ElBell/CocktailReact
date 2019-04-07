import * as React from "react";
import {ListPage} from "./ListPage";
import {Loading} from "./Loading";
import {SearchBar} from "./SearchBar";


export class Search extends React.Component{
  constructor(props) {
    super(props);
    this.updateDrinks = this.updateDrinks.bind(this);
  }

  state = {
    totalDrinks:null,
    drinks: null,
    loading: true
  };

  updateDrinks(term){
    this.setState({drinks: this.state.totalDrinks
        .filter(drink => drink.name.toUpperCase().includes(term.toUpperCase()))});
  };

  componentDidMount = async () => {
    fetch("http://localhost:8080/cocktail/drinks/")
      .then(response => response.json())
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
