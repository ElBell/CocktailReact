import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class DrinkPage extends React.Component {
  state = {
    drink: null
  };

  async componentDidMount() {
    this.getDrink();
  }

  async componentWillReceiveProps() {
    this.getDrink();
  }

  async getDrink() {
    const { id } = await this.props.match.params;
    fetch("http://localhost:8080/cocktail/drinks/" + id)
      .then(response => response.json())
      .then(data => this.setState({drink: data}));
  }

  render() {
    if (this.state.drink === null || this.state.drink.ingredients === undefined) {
      return <div>Loading...</div>;
    } else {
      const drink = this.state.drink;
      return (
        <Container>
          <DrinkTitle name={drink.name} />
          <DrinkImage image={drink.image} />
          <Row className="row justify-content-center align-self-center">
            <Col className="col justify-content-center"
              style={{ fontSize: "25px", color: "#4d0000", backgroundColor: "#ffffff"}}>
              <DrinkGlass glass={drink.glass} />
              <ul>
                <DrinkIngredients ingredients={drink.ingredients} />
              </ul>
              <DrinkInstructions instructions={drink.instructions}/>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      );
    }
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

const DrinkGlass = ({glass}) => {
  if (glass != null) {
    return (
        <Row>
          <h3>{glass.name}</h3>
          <Image width={30} height={30} src={glass.image} roundedCircle />
        </Row>
    )
  } else {
    return (
      <Row>
        <h4>{"<? extends Glass> "}</h4>
        <Image width={30} height={30} src={"http://chittagongit.com//images/drink-icon-png/drink-icon-png-16.jpg"} roundedCircle />
      </Row>
    )
  }
};

const DrinkIngredients = ({ingredients}) => {
  return (
      ingredients.map(ingredient => {
        return <li key={ingredient.name}>{ingredient.amount}: {ingredient.name}</li>
        }
      )
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
