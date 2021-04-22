import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/book'
import {useState} from 'react'
import { randomNum, checkValidity, title, color, page, size } from "./utility";

const initialState = {
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
}

export const useFormField = () => {

  const [bookForm, setBookForm] = useState(initialState);

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

  return {bookForm, formIsValid, fieldChangedHandler}
}