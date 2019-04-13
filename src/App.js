import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Loading} from "./components/Utils/Loading";
import {SearchName} from "./components/SearchPages/SearchName";
import {SearchIngredient} from "./components/SearchPages/SearchIngredient";
import axios from 'axios';

function Header() {
  return (
    <div>
      <br />
      <br />
      <h1
        className="text-center"
        style={{ fontSize: 50, fontFamily: "Droid Sans" }}
      >
        Cocktail Compendium
      </h1>
    </div>
  );
}

function About() {
  return(
    <div style={{fontSize:'13px', color:'#b79898', position:'absolute', bottom:'0'}}>
      <p>Made by Eleonor Bart <br/>
      Checkout my <a href="https://elbell.github.io/" style={{color:'#9898b7'}}>Github!</a> <br/>
      All data from <a href="https://www.thecocktaildb.com/api.php" style={{color:'#9898b7'}}>TheCocktailDB</a></p>
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
        <br />
        <Row className="align-items-center">
          <Col>{button1}</Col>
        </Row>
        <br />
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
      <Button onClick={() => this.toggleIngredientSearch()} variant="outline-light" size="lg" className=" btn-block">
        find by ingredient
      </Button>
    );
  }

  toggleNameSearch = () => {
    this.setState({mode:'name'})
  };

  ButtonNameSearch() {
    return (
      <Button onClick={this.toggleNameSearch} variant="outline-light" size="lg" className=" btn-block">
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
          <SearchIngredient reset={this.reset} ingredients={this.state.ingredients}/>
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
