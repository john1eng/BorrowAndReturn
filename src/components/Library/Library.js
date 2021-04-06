import classes from "./Library.module.css"
import React from "react";
import Shelf from "../Shelf/Shelf";
import Form from "../Form/Form";

const Library = React.memo(() => {
  console.log("render Library")
  return (
    <div className={classes.Library}>
      <h1 className={classes.Title}>LIBRARY</h1>
      <Shelf />
      <Form />
    </div>
  );
})

export default Library;
