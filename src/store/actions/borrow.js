import * as actionTypes from "./actionTypes";


export const returnBook = () => {
  return dispatch => {
    dispatch(addReturnBook());
    dispatch(removeSelectedBorrow());
    dispatch(toggleReturnDialog());
  }
}

export const selectedBorrowProcess = (index) => {
  console.log("selected borrow process")
  return dispatch => {
    dispatch(selectedBorrow(index));
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

const selectedBorrow = (index) => {
  return {
    type: actionTypes.SELECTED_BORROW,
    payload: index,
  };
};

const toggleReturnDialog = () => {
  console.log("toggle return dialgo")
  return {
    type: actionTypes.TOGGLE_RETURN_DIALOG,
  };
};

const addReturnBook = () => {
  return {
    type: actionTypes.ADD_RETURN_BOOK,
  };
}

const removeSelectedBorrow = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_BORROW,
  };
};

