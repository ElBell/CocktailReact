import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {LinkContainer} from 'react-router-bootstrap';

//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"

export class OpeningPage extends React.Component{
    render() {
        return (
          <div>
              <Header/>
              <ButtonRows/>
          </div>
        )
    }
}


function Header() {
    const headerStyle = {
        "fontFamily" : "Droid Sans"
    };
    return (
        <div><br/><br/><br/><br/>
            <h1 className="text-center"
                style = {headerStyle}
            >Cocktail Compendium</h1></div>
    );
}

function ButtonFavorites() {
    return(
        <LinkContainer to="/findfavorites">
            <Button variant="outline-light" size="lg" className=" btn-block">Find my Favorites</Button>
        </LinkContainer>
    )
}

function ButtonListAll() {
    return (
      <LinkContainer to="/listall">
          <Button variant="outline-light" size="lg" className=" btn-block">List All</Button>
      </LinkContainer>
    )
}

function ButtonRows() {
    const button1 = <ButtonFavorites />;
    const button2 = <ButtonListAll />;
    const button3 = <Button onClick={handleClick}
                            variant="outline-light" size="lg" className=" btn-block">Reccomend Me</Button>;
    const button4 = <Button onClick={handleClick}
                            variant="outline-light" size="lg" className=" btn-block">Liquor Log</Button>;

    return (<Container><br />
        <Row className="align-items-center">
            <Col>{button1}</Col>
            <Col>{button3}</Col>
        </Row><br/>
        <Row className="align-items-center">
            <Col>{button2}</Col>
            <Col>{button4}</Col>
        </Row><br/><br/><br/><br/><br/><br/><br/>
    </Container>);
}


const handleClick = () => alert('clicked1');


