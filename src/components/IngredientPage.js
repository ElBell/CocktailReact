import React from "react";
import {App} from "../App";
import {SearchBar} from "./SearchBar";

export class IngredientPage extends React.Component {
  state = {
    totalIngredients: [],
    ingredients: [],
    selected: []
  };

  componentDidMount() {
    fetch(App.SITE_URL + "ingredients")
      .then(response => response.json())
      .then(data => this.setState({totalIngredients: data, ingredients: data}))
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
        .filter(ingredients => ingredients.toUpperCase().includes(term.toUpperCase()))});
  };

  render() {
    if(this.state.ingredients.length > 0) {
      return (
        <div>
          <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Get Drinks</button>
          <SearchBar updateDrinks={this.updateIngredients}/>
          { this.state.ingredients.map(ingredient => {
          return(<Checkbox
            label={ingredient}
            onCheckboxChange={this.handleCheckboxChange}
            key={ingredient}
            checked={this.state.selected.includes(ingredient)}/>)
        })}
        </div>
      )}
    return (
      <div>
        Loading, please wait
      </div>
    )
  }
}

const Checkbox = ({ label, onCheckboxChange, checked }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={checked}
        onChange={() => onCheckboxChange(label)}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

