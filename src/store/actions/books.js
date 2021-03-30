import * as actionTypes from "./actionTypes";

export const addNewBook = (book) => {
  return {
    type: actionTypes.ADD_NEW_BOOK,
    payload: book
  }
}
const removeSelectedBook = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_BOOK,
  };
};

const removeSelectedBorrow = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_BORROW,
  };
};

export const removeBookProcess = () => {
  return dispatch => {
    dispatch(removeSelectedBook());
    dispatch(toggleBorrowDialog());
  }
}

export const removeBorrowProcess = () => {
  return dispatch => {
    dispatch(removeSelectedBorrow());
    dispatch(toggleReturnDialog());
  }
}

const addReturnBook = () => {
  return {
    type: actionTypes.ADD_RETURN_BOOK,
  };
}

export const ReturnBook = () => {
  return dispatch => {
    dispatch(addReturnBook());
    dispatch(removeSelectedBorrow());
    dispatch(toggleReturnDialog());
  }
}

const addBorrow = () => {
  return {
    type: actionTypes.ADD_BORROW
  }
}

export const borrowBook = () => {
  return dispatch => {
    dispatch(addBorrow());
    dispatch(removeSelectedBook())
    dispatch(toggleBorrowDialog());
  }
}

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

const toggleBorrowDialog = () => {
  return {
    type: actionTypes.TOGGLE_BORROW_DIALOG,
  };
};
const toggleReturnDialog = () => {
  return {
    type: actionTypes.TOGGLE_RETURN_DIALOG,
  };
};

export const sortBorrow = () => {
  return {
    type: actionTypes.SORT_BORROW
  }
}

export const sortBook = () => {
  return {
    type: actionTypes.SORT_BOOK
  }
}