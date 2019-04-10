import * as React from "react";
import {ListPage} from "./DrinkList/ListPage";
import {Loading} from "./Utils/Loading";
import {SearchBar} from "./Utils/SearchBar";

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
    const drinks = await this.props.drinks;
    this.setState({drinks: drinks, totalDrinks: drinks, loading:false})
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
