import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Loading} from "../Utils/Loading";
import './DrinkPage.css'
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
        <div className='background-image' style={{ backgroundImage: `url(${require("../../img/drinkimages/" + drink.image)}`}}>
          <div className='transparency'>
          <div className='container drink-info'>
            <DrinkTitle name={drink.name} />
            <DrinkImage image={require("../../img/drinkimages/" + drink.image)} />
            <DrinkDetails drink={drink}/>
          </div>
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
      <Row className="row justify-content-center align-self-center">
        <h1 className='drink-title'>{name}</h1>
      </Row>
    </div>
  );
};

const DrinkImage = ({ image }) => {
  return (
    <div className='drink-image'>
      <Row className="row justify-content-center align-self-center">
        <Image width={132} height={132} src={image} roundedCircle />
      </Row>
    </div>
  );
};

const DrinkDetails = ({ drink }) => {
  return (
    <div>
    <Row className="row justify-content-center align-self-center">
      <div className="details-box col justify-content-center">
        <DrinkGlass glass={drink.glass} />
        <DrinkIngredients ingredients={drink.ingredients} />
        <DrinkInstructions instructions={drink.instructions}/>
      </div>
    </Row>
    </div>
  )
};

const DrinkGlass = ({glass}) => {
  if (glass != null) {
    return (
        <Row className="row justify-content-center">
          <h5>{glass.name}</h5>
          <Image width={30} height={30} src={glass.image} />
        </Row>
    )
  }
  return (
    <Row className="row justify-content-center">
      <h5>{"Any glass"}</h5>
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
      <h5>{instructions}</h5>
      <br/>
    </div>
  )
};


