import * as React from "react";
import {ListPage} from "./ListPage";
import {Loading} from "./Loading";
import {App} from "../App";
import {IngredientPage} from "./IngredientPage";
import Button from "react-bootstrap/Button";

export class SearchIngredient extends React.Component{
  state = {
    loading: true,
    limit: false,
    drinks: [],
    ingredients:null
  };

  componentDidMount = async () => {
    this.getDrinks()
  };


  getDrinks() {
    if (this.state.limit) {
      fetch(App.SITE_URL+ "ingredients/limit/" + this.state.ingredients)
        .then(response => response.json())
        .then(data => this.setState({drinks: data, loading: false}))
    } else {
      fetch(App.SITE_URL+ "ingredients/include/" + this.state.ingredients)
        .then(response => response.json())
        .then(data => this.setState({drinks: data, loading: false}))
    }
  }

  searchDrinks = (ingredients) => {
    this.setState({ingredients: ingredients},
      () => {this.getDrinks()}
      )
  };

  handleClick =() => {
    this.setState({drinks: [], ingredients: null })
  };

  switchLimited = () => {
    if (this.state.limit) {
      this.setState({limit: false})
    } else {
      this.setState({limit: true})
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading/>
    } else if (this.state.drinks.length > 0) {
      return (
        <div>
          <Button variant="light" size="lg" className="btn" onClick={this.handleClick}>Do another search</Button>
          <ListPage drinks={this.state.drinks}/>
        </div>)
    } else {
      return (
        <div>
          <Button variant="light" size="lg" className="btn" onClick={this.switchLimited}>{this.isLimited()}</Button>
          <IngredientPage searchDrinks={this.searchDrinks} />
        </div>
        )
    }
  }

  isLimited() {
    if (!this.state.limit) {
      return <p>Inclusive</p>
    } else {
      return <p>Limited</p>
    }
  }
}
