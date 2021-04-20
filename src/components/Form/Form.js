import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Form.module.css";
import * as actionTypes from "../../store/actions/actionTypes";
import { randomNum, checkValidity, title, color, page, size } from "./utility";

import FormField from "./FormField";

const Form = () => {
  console.log("Render Form");
  
  //style
  const formStyle = styles.form;

  const dispatch = useDispatch();
  const onBookAdded = (book) =>
    dispatch({ type: actionTypes.ADD_NEW_BOOK, payload: book });

  const onBooksSort = () => dispatch({ type: actionTypes.SORT_BOOK });

  const [bookForm, setBookForm] = useState({
    Title: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "title",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      isTouched: false,
    },
    Color: {
      elementType: "select",
      elementConfig: {
        type: "text",
      },
      value: "lightblue",
      validation: {
        required: false,
      },
      valid: true,
    },
    Page: {
      elementType: "select",
      elementConfig: {
        type: "text",
      },
      validation: {
        required: false,
      },
      value: "M",
      valid: true,
    },
    Size: {
      elementType: "select",
      elementConfig: {
        type: "text",
      },
      validation: {
        required: false,
      },
      value: "M",
      valid: true,
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const fieldChangedHandler = (event, fieldIdentifier) => {
    const updatedFormElement = {
      ...bookForm[fieldIdentifier],
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        bookForm[fieldIdentifier].validation
      ),
      isTouched: true,
    };

    const updatedBookForm = {
      ...bookForm,
      [fieldIdentifier]: updatedFormElement,
    };

    let formIsValid = true;
    for (let inputIdentifier in updatedBookForm) {
      formIsValid = updatedBookForm[inputIdentifier].valid && formIsValid;
    }

    setBookForm(updatedBookForm);
    setFormIsValid(formIsValid);
  };

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

  const submitBookHandler = (e) => {
    const [title, color, page, size] = ['Title', 'Color', 'Page', 'Size'].map((attr)=>bookForm[attr].value);
    // const color = bookForm["Color"].value;
    // const page = bookForm["Page"].value;
    // const size = bookForm["Size"].value;

    onBookAdded({ title, color, page, size });
  };

  const randomGenerated = () => {
    const [RandomTitle, RandomColor, RandomPage, RandomSize] = [title, color, page, size].map(data=>data[randomNum(0, data.length)])
    onBookAdded({
      title: RandomTitle,
      color: RandomColor,
      page: RandomPage,
      size: RandomSize
    });
  };

  return (
    <>
      <form className={formStyle}>{form}</form>
      <div>
        <button
          className={styles.button}
          disabled={!formIsValid}
          onClick={submitBookHandler}
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
