
import Button from "react-bootstrap/Button";
import * as React from "react";

export const BackButton = ({reset}) => {
  return(
    <Button onClick={reset} variant="outline-light" size="lg" className="btn" style={{marginBottom:0}}>
      Back
    </Button>
  )
};
