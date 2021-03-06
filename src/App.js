import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Loading} from "./components/Utils/Loading";
import {SearchName} from "./components/SearchPages/SearchName";
import {SearchIngredient} from "./components/SearchPages/SearchIngredient";
import axios from 'axios';
import './App.css'

function Header() {
  return (
    <div>
      <h1
        className="text-center opening"
      >
        Cocktail Compendium
      </h1>
    </div>
  );
}

function About() {
  return(
    <div className='about'>
      <p>Made by Eleonor Bart <br/>
      Checkout my <a href="https://elbell.github.io/" className='subtle'>Github!</a> <br/>
      All data from <a href="https://www.thecocktaildb.com/api.php" className='subtle'>TheCocktailDB</a></p>
    </div>
  )
}

export class App extends React.Component {
  state = {
    loadingDrinks: true,
    drinks: [],
    ingredients: [],
    mode: "none"
  };


  ButtonRows() {
    const button1 = this.ButtonIngredientSearch();
    const button2 = this.ButtonNameSearch();
    return (
      <Container>
        <Row className="align-items-center">
          <Col>{button1}</Col>
        </Row>
        <br/>
        <Row className="align-items-center">
          <Col>{button2}</Col>
        </Row>
      </Container>
    );
  }

  componentDidMount = async () => {
    axios.get( "https://cocktail-compendium-spring.herokuapp.com/cocktail/ingredients")
      .then(({data}) => {this.setState({ingredients: data})});
    axios.get("https://cocktail-compendium-spring.herokuapp.com/cocktail/drinks")
      .then(({data}) => {this.setState({drinks: data, totalDrinks: data, loadingDrinks: false})});
  };

  toggleIngredientSearch = () => {
    this.setState({mode:'ingredient'})
  };

  ButtonIngredientSearch() {
    return (
      <Button onClick={() => this.toggleIngredientSearch()} variant="outline-light" size="lg" className="ingredient opening btn-block">
        find by ingredient
      </Button>
    );
  }

  toggleNameSearch = () => {
    this.setState({mode:'name'})
  };

  ButtonNameSearch() {
    return (
      <Button onClick={this.toggleNameSearch} variant="outline-light" size="lg" className="names opening btn-block">
        find by name
      </Button>
    );
  }

  reset = () => {
    this.setState({mode: 'none'})
  };

  render() {
    if (this.state.loadingDrinks) {
      return <Loading/>
    } else if (this.state.mode === 'name') {
      return (
        <div>
          <SearchName reset={this.reset} drinks={this.state.drinks}/>
        </div>
      )
    } else if(this.state.mode === 'ingredient') {
      return (
        <div>
          <SearchIngredient reset={this.reset} drinks={this.state.drinks} ingredients={this.state.ingredients}/>
        </div>
      )
    }
    return (
      <div>
        <Header />
        {this.ButtonRows()}
        <About />
      </div>
    );
  }
}
