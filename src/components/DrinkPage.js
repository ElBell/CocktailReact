import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class DrinkPage extends React.Component{
  state = {
    drink: null
  };

  async componentDidMount() {
    this.getDrink()
  }

  async componentWillReceiveProps() {
    this.getDrink()
  }

  async getDrink() {
    const { id } = this.props.match.params;
    const url = "http://localhost:8080/cocktail/drinks/" + id;
    const response = await fetch(url);
    const body = await response.json();
    this.setState( {drink: body} );
  }

  render() {
    if (this.state.drink != null) {
      const drink = this.state.drink;
      return (
        <Container>
          <br/>
          <Row className="row justify-content-center align-self-center">
            <h1 style={{fontSize:"50px"}} >{ drink.name }</h1>
          </Row>
          <br/>
          <Row className="row justify-content-center align-self-center">
              <Image
                width={132}
                height={132}
                src={ drink.thumb } roundedCircle />
          </Row>
          <br/><br/>
          <Row> {this.state.drink.glass} </Row>
          <Row className="row justify-content-center align-self-center"
               style={{color:"#ffffff"}}>
            <Col
              md={{ span: 1, offset: 12 }}
              style = {{fontSize: "25px", color:"#4d0000", backgroundColor:"#ffffff"}}
            >{ drink.instructions } </Col>
          </Row>
          <br/><br/>
        </Container>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}
