import * as React from "react";
import {ListPage} from "./ListPage";
import {IngredientPage} from "./IngredientPage";
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


export class SearchIngredient extends React.Component{
  state = {
    limit: false,
    drinks: [],
    ingredients:null
  };

  getDrinks() {
    if (this.state.limit) {
      fetch("ingredients/limit/" + this.state.ingredients)
        .then(response => response.json())
        .then(data => this.setState({drinks: data}))
    } else {
      fetch("ingredients/include/" + this.state.ingredients)
        .then(response => response.json())
        .then(data => this.setState({drinks: data}))
    }
  }

  searchDrinks = (ingredients) => {
    console.log(ingredients);
    this.setState({ingredients: ingredients},
      () => {this.getDrinks()}
      )
  };

  handleClick = () => {
    this.setState({drinks: [], ingredients: null })
  };

  render() {
    if (this.state.drinks.length > 0) {
      return (
        <div>
          <Button variant="light" size="lg" className="btn" onClick={this.handleClick}>Do another search</Button>
          <ListPage drinks={this.state.drinks}/>
        </div>)
    } else {
      return (
        <div>
          <BootstrapSwitchButton
            checked={this.state.limit}
            onlabel='Drink must include all'
            offlabel='Drink may include any'
            offstyle='light'
            onstyle='light'
            width='250'
            onChange={(checked) => {
              this.setState({ limit: checked })
            }}
          />
          <IngredientPage ingredients={this.props.ingredients} searchDrinks={this.searchDrinks} />
        </div>
        )
    }
  }
}
