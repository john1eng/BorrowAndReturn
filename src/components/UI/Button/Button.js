import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

function Button({link, exact, click, name}) {

  return (
    <div className={classes.ButtonContainer} >
      <Link
        to={link}
        exact={exact}
        onClick={click}
        >
        <button className={classes.Button} >
          <span>{name}</span>
        </button>
      </Link>
    </div>
  );
}

export default Button;
