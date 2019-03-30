import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import Media from "react-bootstrap/Media";

export const ListItem = ({drink}) => {
  return (
    <div key = {drink.id} style = {listBorder}>
      <LinkContainer to={ "drink/" + drink.id }>
        <Media key = {drink.id}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src= {drink.image}
            alt="Generic placeholder"
          />
          <Media.Body>
            <br />
            <h5 style={{fontSize: "22px"}}>{ drink.name }</h5>
          </Media.Body>
        </Media>
      </LinkContainer>
    </div>
  )
};


const listBorder = {
  color: "white",
  borderBottomColor: "white",
  borderBottomWidth: "3px",
  borderBottomStyle: "solid"
};
