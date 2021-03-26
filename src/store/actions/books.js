import * as actionTypes from "./actionTypes";

export const discardBook = () => {
  return {
    type: actionTypes.DISCARD_BOOK,
  };
};

export const discardBorrow = () => {
  return {
    type: actionTypes.DISCARD_BORROW,
  };
};

export const borrowBook = () => {
  return {
    type: actionTypes.BORROW_BOOK,
  };
};

export const returnBook = () => {
  return {
    type: actionTypes.RETURN_BOOK,
  };
};

export const selectedBook = (index) => {
  return {
    type: actionTypes.SELECTED_BOOK,
    payload: index,
  };
};

export const selectedBorrow = (index) => {
  return {
    type: actionTypes.SELECTED_BORROW,
    payload: index,
  };
};

export const removeDialog = () => {
  return {
    type: actionTypes.REMOVE_DIALOG,
  };
};

export const sortBorrow = () => {
  return {
    type: actionTypes.SORT_BORROW
  }
}