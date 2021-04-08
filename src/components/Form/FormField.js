import React from "react";
import styles from "./FormField.module.css";

const FormField = ({bookSetState, label, type, name}) => {
  //style
  const formFieldStyle = styles.formField;

  const inputClasses = [styles.input];

  const changeFieldHandler = (e) => {
    switch (e.target.name) {
      case "title":
        bookSetState.setTitle(e.target.value);
        break;
      case "color":
        bookSetState.setColor(e.target.value);
        break;
      case "page":
        bookSetState.setPage(e.target.value);
        break;
      case "size":
        bookSetState.setSize(e.target.value);
        break;
      default:
    }
  };

  let field = (
    <>
      <label>{label}</label>
      <input
        className={inputClasses}
        type={type}
        name={name}
        onChange={changeFieldHandler}
      />
    </>
  );

  if (name === "color") {
    field = (
      <>
        <label>{label}</label>
        <select
          name={name}
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
  if (name === "size" || name === "page") {
    field = (
      <>
        <label>{label}</label>
        <select
          name={name}
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
