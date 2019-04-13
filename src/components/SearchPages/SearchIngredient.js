import * as React from "react";
import {ListPage} from "../DrinkList/ListPage";
import {IngredientPage} from "../IngredientList/IngredientPage";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {BackButton} from "../Utils/BackButton";

export class SearchIngredient extends React.Component{
  state = {
    limit: false,
    totalDrinks: [],
    drinks: [],
    ingredients:null
  };

  componentDidMount = async () => {
    const totalDrinks = await this.props.drinks;
    this.setState({totalDrinks: totalDrinks})
  };

  getDrinks() {
    let drinks = this.state.limit ? this.getLimitDrinks([]) : this.getIncludeDrinks([]);
    this.setState({drinks})
  }
  getLimitDrinks(newDrinks) {
    for(let drink of this.state.totalDrinks) {
      let names = drink.ingredients.map(i => i.name.toUpperCase());
      if(this.state.ingredients.every( ingredient => names.includes(ingredient.toUpperCase()))) {
        newDrinks.push(drink)
      }
    }
    return newDrinks;
  }
  getIncludeDrinks(newDrinks) {
    for (let drink of this.state.totalDrinks) {
      let names = drink.ingredients.map(i => i.name.toUpperCase());
      if (this.state.ingredients.some( ingredient => names.includes(ingredient.toUpperCase()))) {
        newDrinks.push(drink)
      }
    }
    return newDrinks;
  }

  searchDrinks = (ingredients) => {
    this.setState({ingredients: ingredients},
      () => {this.getDrinks()}
      )
  };

  reset = () => {
    this.setState({drinks: [], ingredients: null})
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
            offstyle='dark'
            onstyle='dark'
            width='250'
            height='55'
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
