import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class DrinkPage extends React.Component {
  state = {
    drink: []
  };

  async componentDidMount() {
    this.getDrink();
  }

  async componentWillReceiveProps() {
    this.getDrink();
  }

  async getDrink() {
    const { id } = await this.props.match.params;
    const url = "http://localhost:8080/cocktail/drinks/" + id;
    const response = await fetch(url);
    const body = await response.json();
    console.log(body);
    this.setState({ drink: body });
  }

  render() {
    if (this.state.drink == null) {
      return <div>Loading...</div>;
    } else {
      const drink = this.state.drink;
      return (
        <Container>
          <br />
          <Row className="row justify-content-center align-self-center">
            <h1 style={{ fontSize: "50px" }}>{drink.name}</h1>
          </Row>
          <br />
          <Row className="row justify-content-center align-self-center">
            <Image width={132} height={132} src={drink.image} roundedCircle />
          </Row>
          <br />
          <br />
          <Row
            className="row justify-content-center align-self-center"
            style={{ color: "#ffffff" }}
          >
            <Col
              style={{
                fontSize: "25px",
                color: "#4d0000",
                backgroundColor: "#ffffff"
              }}
            >
              {drink.instructions}{" "}
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      );
    }
  }
}
