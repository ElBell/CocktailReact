import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";

//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"

export class OpeningPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ButtonRows />
      </div>
    );
  }
}

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
    <LinkContainer to="/cocktails/findfavorites">
      <Button variant="outline-light" size="lg" className=" btn-block">
        Find my Favorites
      </Button>
    </LinkContainer>
  );
}

function ButtonListAll() {
  return (
    <LinkContainer to="/cocktails/search">
      <Button variant="outline-light" size="lg" className=" btn-block">
        List All
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
