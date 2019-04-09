import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";

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

function ButtonFavorites() {
  return (
    <LinkContainer to="/cocktails/searchingredient">
      <Button variant="outline-light" size="lg" className=" btn-block">
        find by ingredient
      </Button>
    </LinkContainer>
  );
}

function ButtonListAll() {
  return (
    <LinkContainer to="/cocktails/searchname">
      <Button variant="outline-light" size="lg" className=" btn-block">
        List all
      </Button>
    </LinkContainer>
  );
}

function ButtonRows() {
  const button1 = <ButtonFavorites />;
  const button2 = <ButtonListAll />;
  const button3 = (
    <Button
      onClick={handleClick}
      variant="outline-light"
      size="lg"
      className=" btn-block"
    >
      Recommend a Drink
    </Button>
  );
  const button4 = (
    <Button
      onClick={handleClick}
      variant="outline-light"
      size="lg"
      className=" btn-block"
    >
      Liquor Log
    </Button>
  );

  return (
    <Container>
      <br />
      <Row className="align-items-center">
        <Col>{button1}</Col>
        <Col>{button3}</Col>
      </Row>
      <br />
      <Row className="align-items-center">
        <Col>{button2}</Col>
        <Col>{button4}</Col>
      </Row>
    </Container>
  );
}

const handleClick = () => alert("clicked1");

export class App extends React.Component {
  static get SITE_URL() {
    return "http://localhost:8080/cocktail/";
  }
  render() {
    return (
      <div>
        <Header />
        <ButtonRows />
      </div>
    );
  }
}
