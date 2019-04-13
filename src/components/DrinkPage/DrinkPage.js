import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Loading} from "../Utils/Loading";
import axios from 'axios';

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
    axios.get('https://cocktail-compendium-spring.herokuapp.com/cocktail/drinks/' + this.props.drinkId)
      .then(({ data }) => {this.setState({drink:data})});
  }

  render() {
    if (!(this.state.drink === null || this.state.drink.ingredients === undefined)) {
      const drink = this.state.drink;
      return (
        <div style={{ backgroundSize: 'cover', backgroundImage: `url(${require("../../img/drinkimages/" + drink.image)}`,
              backgroundPosition: 'center'}}>
          <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <Container style={{padding:'50px'}}>
            <DrinkTitle name={drink.name} />
            <DrinkImage image={require("../../img/drinkimages/" + drink.image)} />
            <DrinkDetails drink={drink}/>
          </Container>
          {/*<EditButton id={drink.id}/>*/}
          </div>
        </div>
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
      <Image width={30} height={30} src={require("../../img/glassimages/glasses.jpg")} />
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


