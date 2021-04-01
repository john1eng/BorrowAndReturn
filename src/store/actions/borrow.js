import * as actionTypes from "./actionTypes";


export const returnBook = (selectedBorrow) => {
  return dispatch => {
    dispatch(addReturnBook(selectedBorrow));
    dispatch(removeSelectedBorrow());
    dispatch(toggleReturnDialog());
  }
}

export const selectedBorrowProcess = (index) => {
  console.log("selected borrow process")
  return dispatch => {
    dispatch(selectedBorrowIndex(index));
    dispatch(toggleReturnDialog());
  }
}


export const sortBorrow = () => {
  return {
    type: actionTypes.SORT_BORROW
  }
}


export const removeBorrowProcess = () => {
  return dispatch => {
    dispatch(removeSelectedBorrow());
    dispatch(toggleReturnDialog());
  }
}

const selectedBorrowIndex = (index) => {
  return {
    type: actionTypes.SELECTED_BORROW_INDEX,
    payload: index,
  };
};

const toggleReturnDialog = () => {
  console.log("toggle return dialgo")
  return {
    type: actionTypes.TOGGLE_RETURN_DIALOG,
  };
};

const addReturnBook = (selectedBorrow) => {
  return {
    type: actionTypes.ADD_RETURN_BOOK,
    payload: selectedBorrow
  };
}

const removeSelectedBorrow = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_BORROW,
  };
};

