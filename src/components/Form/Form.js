import React from "react";
import styles from "./Form.module.css";
import FormField from "./FormField";
import { useFormFunction } from "./useFormFunction";
import { useFormField } from "./useFormField";

const Form = () => {
  console.log("Render Form");
  
  //style
  const formStyle = styles.form;

  const {bookForm, formIsValid, fieldChangedHandler, clearForm} = useFormField();
  const {onBooksSort, submitBook, randomGenerated} = useFormFunction();

  const submitBookHandler = (bookForm) => {
    submitBook(bookForm);
    clearForm();
  }

  // convert bookForm into array
  const formElementsArray = [];
  for (let key in bookForm) {
    formElementsArray.push({
      id: key,
      config: bookForm[key],
    });
  }

  const form = formElementsArray.map((formElement) => (
    <FormField
      key={formElement.id}
      name={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config?.isTouched}
      changed={(event) => fieldChangedHandler(event, formElement.id)}
    />
  ));

  

  return (
    <>
      <form className={formStyle}>{form}</form>
      <div>
        <button
          className={styles.button}
          disabled={!formIsValid}
          onClick={()=>submitBookHandler(bookForm)}
        >
          submit
        </button>
        <button className={styles.button} onClick={randomGenerated}>
          random
        </button>
        <button className={styles.button} onClick={onBooksSort}>
          sort
        </button>
      </div>
    </>
  );
};

export default Form;
