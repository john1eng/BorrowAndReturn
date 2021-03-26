import React from "react";
import styles from "./FormField.module.css";

const FormField = (props) => {
  //style
  const formFieldStyle = styles.formField;

  const changeFieldHandler = (e) => {
    switch (e.target.name) {
      case "title":
        props.bookSetState.setTitle(e.target.value);
        break;
      case "color":
        props.bookSetState.setColor(e.target.value);
        break;
      case "page":
        props.bookSetState.setPage(e.target.value);
        break;
      case "size":
        props.bookSetState.setSize(e.target.value);
        break;
      default:
    }
  };

  let field = (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        onChange={changeFieldHandler}
      />
    </>
  );

  if (props.name === "color") {
    field = (
      <>
        <label>{props.label}</label>
        <select
          name={props.name}
          defaultValue="lightblue"
          onChange={changeFieldHandler}
        >
          <option value="lightblue">lightblue</option>
          <option value="yellow">yellow</option>
          <option value="lightgreen">lightgreen</option>
          <option value="pink">pink</option>
        </select>
      </>
    );
  }
  if (props.name === "size" || props.name === "page") {
    field = (
      <>
        <label>{props.label}</label>
        <select
          name={props.name}
          defaultValue="M"
          onChange={changeFieldHandler}
        >
          <option value="S">small</option>
          <option value="M">medium</option>
          <option value="L">large</option>
        </select>
      </>
    );
  }
  
  return <div className={formFieldStyle}>{field}</div>;
};

export default FormField;
