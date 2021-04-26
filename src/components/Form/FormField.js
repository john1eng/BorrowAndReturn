import React from "react";
import classes from "./FormField.module.css";
import * as util from "./utility"

const FormField = ({name, elementType, elementConfig, value, invalid, shouldValidate, touched, changed}) => {
  //style
  const formFieldStyle = classes.formField;

  const selectClasses = [classes.select];

  const inputClasses = [classes.InputElement];

  let inputElement = null;

  if(invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid)
  }


  const sizeOrPage = 
    <>
      <label>{name}</label>
      <select
        className={selectClasses}
        name={name}
        defaultValue="M"
        onChange={changed}
      >
        <option value="S">small</option>
        <option value="M">medium</option>
        <option value="L">large</option>
      </select>
    </>

    const display = new Map([[
      'input', {
        'Title':
        <>
        <label>{name}</label>
        <input 
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}/>
      </>
      }
    ],[
      'select', {
      Color: 
        <>
          <label>{name}</label>
          <select
            className={selectClasses}
            name={name}
            defaultValue="lightblue"
            onChange={changed}>
              {util.color.map((name)=>(<option key={name} value={name}>{name}</option>))}
          </select>
      </>,
      Size: sizeOrPage,
      Page: sizeOrPage
      }
    ]])

  inputElement = display.get(elementType)[name]
  
  return <div className={formFieldStyle}>{inputElement}</div>;
};

export default FormField;
