import {LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import * as React from "react";

export const BackButton = () => {
  return(
    <LinkContainer to="/cocktails/">
      <Button variant="outline-light" size="lg" className=" btn-block">
        Back
      </Button>
    </LinkContainer>
  )
};
