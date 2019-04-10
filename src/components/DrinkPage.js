import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Loading} from "./Loading";
import {App} from "../App";


export class DrinkPage extends React.Component {
  state = {
    drink: null
  };

  componentDidMount = async () => {
    await this.getDrink();
  };

  componentWillReceiveProps = async () => {
    await this.getDrink();
  };

  async getDrink() {
    const { id } = await this.props.match.params;
    fetch(App.SITE_URL + "drinks/" + id)
      .then(response => response.json())
      .then(data => this.setState({drink: data}));
  }

  render() {
    if (!(this.state.drink === null || this.state.drink.ingredients === undefined)) {
      const drink = this.state.drink;
      return (
        <Container>
          <DrinkTitle name={drink.name} />
          <DrinkImage image={"/img/" + drink.image} />
          <DrinkDetails drink={drink}/>
        </Container>
      );
    }
    return <Loading />;
  }
}

const DrinkTitle = ({ name }) => {
  return (
    <div>
      <br />
      <Row className="row justify-content-center align-self-center">
        <h1 style={{ fontSize: "50px" }}>{name}</h1>
      </Row>
      <br />
    </div>
  );
};

const DrinkImage = ({ image }) => {
  return (
    <div>
      <Row className="row justify-content-center align-self-center">
        <Image width={132} height={132} src={image} roundedCircle />
      </Row>
      <br />
      <br />
    </div>
  );
};

const DrinkDetails = ({ drink }) => {
  return (
    <div>
    <Row className="row justify-content-center align-self-center">
      <Col className="col justify-content-center"
           style={{ fontSize: "25px", color: "#4d0000", backgroundColor: "#ffffff"}}>
        <br/>
        <DrinkGlass glass={drink.glass} />
        <DrinkIngredients ingredients={drink.ingredients} />
        <DrinkInstructions instructions={drink.instructions}/>
      </Col>
    </Row><br /><br />
    </div>
  )
};

const DrinkGlass = ({glass}) => {
  if (glass != null) {
    return (
        <Row className="row justify-content-center">
          <h3>{glass.name}</h3>
          <Image width={30} height={30} src={glass.image} />
        </Row>
    )
  }
  return (
    <Row className="row justify-content-center">
      <h4>{"<? extends Glass> "}</h4>
      <Image width={30} height={30} src={"http://chittagongit.com//images/drink-icon-png/drink-icon-png-16.jpg"} />
    </Row>
  )
};

const DrinkIngredients = ({ingredients}) => {
  return (
    <ul>
      {ingredients.map(ingredient => {
        return <li key={ingredient.name}>{ingredient.amount}: {ingredient.name}</li>
        }
      )}
    </ul>
  )
};

const DrinkInstructions = ({instructions}) => {
  return (
    <div>
      <h4>{instructions}</h4>
      <br/>
    </div>
  )
};


