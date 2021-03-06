import React from "react";
import Image from "react-bootstrap/Image";
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
        <div className="drink-glass row justify-content-center">
          <div className="medium">{glass.name}</div>
          <Image width={30} height={30} src={glass.image} />
        </div>
    )
  }
  return (
    <div className="drink-glass row justify-content-center">
      <div className="medium">{"Any glass"}</div>
      <Image width={30} height={30} src={require("../../img/glassimages/glasses.jpg")} />
    </div>
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
      <div className="medium">{instructions}</div>
      <br/>
    </div>
  )
};


