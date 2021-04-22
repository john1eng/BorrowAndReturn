import React from "react";
import classes from "./FormField.module.css";

const FormField = ({name, elementType, elementConfig, value, invalid, shouldValidate, touched, changed}) => {
  //style
  const formFieldStyle = classes.formField;

  const selectClasses = [classes.select];

  const inputClasses = [classes.InputElement];

  let inputElement = null;

  if(invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid)
  }

  const inputDisplay = 
    <>
      <label>{name}</label>
      <input 
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={changed}/>
    </>

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
  const selectDisplay = {
    Color: 
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
     </>,
    Size: sizeOrPage,
    Page: sizeOrPage
  }

  const display = new Map([['input', inputDisplay], ['select', selectDisplay]])

  inputElement = display.get(elementType)[name] || display.get(elementType)
 

  // switch(elementType){
  //   case('input'):
  //     inputElement = inputDisplay;
  //     break;
  //   case('select'):
  //     console.log('select', name)
  //     switch(name){
  //       case('Color'):
  //         inputElement = selectDisplay.Color
  //         break;
  //         case("Size"):
  //           inputElement = selectDisplay.Size
  //           break;
  //         case("Page"): 
  //           inputElement = selectDisplay.Page
  //           break;
  //           default: return null;
  //     }
  //     break;
  //     default: return null;
  //     }
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
