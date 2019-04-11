import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Loading} from "./components/Utils/Loading";
import {SearchName} from "./components/SearchPages/SearchName";
import {SearchIngredient} from "./components/SearchPages/SearchIngredient";

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
    fetch( "/ingredients")
      .then(response => response.json())
      .then(data => this.setState({ingredients: data}));
    fetch("/drinks")
      .then(response => response.json())
      .then(data => this.setState({drinks: data, totalDrinks: data, loadingDrinks: false}));
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
      </div>
    );
  }
}
