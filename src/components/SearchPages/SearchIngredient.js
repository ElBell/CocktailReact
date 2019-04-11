import * as React from "react";
import {ListPage} from "../DrinkList/ListPage";
import {IngredientPage} from "../IngredientList/IngredientPage";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {BackButton} from "../Utils/BackButton";


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
    this.setState({ingredients: ingredients},
      () => {this.getDrinks()}
      )
  };

  reset = () => {
    this.setState({drinks: [], ingredients: null })
  };

  render() {
    if (this.state.drinks.length > 0) {
      return (
        <div>
          <ListPage reset={this.reset} drinks={this.state.drinks}/>
        </div>)
    } else {
      return (
        <div>
          <BackButton reset={this.props.reset}/>
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
