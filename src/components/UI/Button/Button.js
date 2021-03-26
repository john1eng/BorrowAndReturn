import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

function Button(props) {

  return (
    <div className={classes.ButtonContainer} >
      <Link
        to={props.link}
        exact={props.exact}
        onClick={props.click}
        >
        <button className={classes.Button} >
          <span>{props.name}</span>
        </button>
      </Link>
    </div>
  );
}

export default Button;
