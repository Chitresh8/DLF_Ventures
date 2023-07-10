import React, { Fragment } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <Fragment>
      <div className="maindiv">
        <img
          src={props.image}
          alt={props.name}
        />
      </div>
    </Fragment>
  );
};

export default Card;
