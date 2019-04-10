import React from "react";
import {SearchBar} from "../Utils/SearchBar";
import {IngredientCheckbox} from "./IngredientCheckbox";

export class IngredientPage extends React.Component {
  state = {
    totalIngredients: this.props.ingredients,
    ingredients: this.props.ingredients,
    selected: []
  };

  handleCheckboxChange = (ingredient) => {
    if(this.state.selected.includes(ingredient)) {
      this.setState(({ selected }) => {
        const prevSelected = [...selected];
        prevSelected.splice(selected.indexOf(ingredient), 1);
        return {selected: prevSelected}
        }
      )
    } else {
      this.setState(prevState => ({
        selected: [
          ...prevState.selected, ingredient
        ]
      }));
    }
  };

  handleClick = () => {
    if (this.state.selected.length > 0) {
      this.props.searchDrinks(this.state.selected)
    }
  };


  updateIngredients = (term) => {
    this.setState({ingredients: this.state.totalIngredients
        .filter(ingredients => ingredients.toUpperCase().includes(term.toUpperCase()))},
      () => this.setState({ingredients: this.state.ingredients.sort(sortBegins(term))}));
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.handleClick} updateDrinks={this.updateIngredients}/>
        { this.state.ingredients.map(ingredient => {
        return(<IngredientCheckbox
          label={ingredient}
          onCheckboxChange={this.handleCheckboxChange}
          key={ingredient}
          checked={this.state.selected.includes(ingredient)}/>)
      })}
      </div>
    )}
}

function sortBegins(term) {
  return function (a, b) {
    return a.startsWith(term) ? (b.startsWith(term) ? 0 : -1) : 1
  }
}

