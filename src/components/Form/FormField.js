import React from "react";
import classes from "./FormField.module.css";

const FormField = ({key, name, elementType, elementConfig, value, invalid, shouldValidate, touched, changed}) => {
  //style
  const formFieldStyle = classes.formField;

  const selectClasses = [classes.select];

  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if(invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid)
  }

  switch(elementType){
    case('input'):
      inputElement = <>
      <label>{name}</label>
      <input 
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={changed}/></>
      break;
    case('select'):
      console.log('select', name)
      if(name === 'Color')
        inputElement =  
        <>
          <label>{name}</label>
          <select
            className={selectClasses}
            name={name}
            defaultValue="lightblue"
            onChange={changed}>
            <option value="lightblue">lightblue</option>
            <option value="yellow">yellow</option>
            <option value="lightgreen">lightgreen</option>
            <option value="pink">pink</option>
          </select>
        </>
        if (name === "Size" || name === "Page") {
          inputElement = (
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
          );
        }
        break;
      default: return null;
      }
  // let field = (
  //   <>
  //     <label>{name}</label>
  //     <input
  //       className={inputClasses.join(" ")}
  //       type={type}
  //       name={name}
  //       onChange={changeFieldHandler}
  //     />
  //   </>
  // );

  // if (name === "color") {
  //   field = (
  //     <>
  //       <label>{label}</label>
  //       <select
  //         className={selectClasses}
  //         name={name}
  //         defaultValue="lightblue"
  //         onChange={changeFieldHandler}
  //       >
  //         <option value="lightblue">lightblue</option>
  //         <option value="yellow">yellow</option>
  //         <option value="lightgreen">lightgreen</option>
  //         <option value="pink">pink</option>
  //       </select>
  //     </>
  //   );
  // }
  // if (name === "size" || name === "page") {
  //   field = (
  //     <>
  //       <label>{label}</label>
  //       <select
  //         className={selectClasses}
  //         name={name}
  //         defaultValue="M"
  //         onChange={changeFieldHandler}
  //       >
  //         <option value="S">small</option>
  //         <option value="M">medium</option>
  //         <option value="L">large</option>
  //       </select>
  //     </>
  //   );
  // }
  
  return <div className={formFieldStyle}>{inputElement}</div>;
};

export default FormField;
