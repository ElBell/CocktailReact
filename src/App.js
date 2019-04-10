import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Loading} from "./components/Loading";
import {SearchName} from "./components/SearchName";
import {SearchIngredient} from "./components/SearchIngredient";
import {BackButton} from "./components/BackButton";

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
    loadingIngredients: true,
    drinks: [],
    ingredients: [],
    ingredientSearch: false,
    nameSearch: false
  };

  componentDidMount = async () => {
    fetch(App.SITE_URL + "drinks")
      .then(response => response.json())
      .then(data => this.setState({drinks: data, totalDrinks: data, loadingDrinks: false}));
    fetch(App.SITE_URL + "ingredients")
      .then(response => response.json())
      .then(data => this.setState({ingredients: data, loadingIngredients: false}))
  };

  static get SITE_URL() {
    return "http://localhost:8080/cocktail/";
  };

  toggleIngredientSearch = () => {
    this.setState({ingredientSearch:true})
  };

  ButtonIngredientSearch() {
    return (
      <Button onClick={() => this.toggleIngredientSearch()} variant="outline-light" size="lg" className=" btn-block">
        find by ingredient
      </Button>
    );
  }

  toggleNameSearch = () => {
    this.setState({nameSearch:true})
  };

  ButtonNameSearch() {
    return (
      <Button onClick={this.toggleNameSearch} variant="outline-light" size="lg" className=" btn-block">
        find by name
      </Button>
    );
  }

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


  reset = () => {
    this.setState({ingredientSearch: false, nameSearch: false})
  };

  render() {
    if (this.state.loadingDrinks || this.state.loadingIngredients) {
      return <Loading/>
    } else if (this.state.nameSearch) {
      return (
        <div>
          <BackButton reset={this.reset}/>
          <SearchName drinks={this.state.drinks}/>
        </div>
      )
    } else if(this.state.ingredientSearch) {
      return (
        <div>
          <BackButton reset={this.reset}/>
          <SearchIngredient ingredients={this.state.ingredients}/>
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
