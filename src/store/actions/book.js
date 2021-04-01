import * as actionTypes from "./actionTypes";

export const addNewBook = (book) => {
  return {
    type: actionTypes.ADD_NEW_BOOK,
    payload: book
  }
}

export const removeBookProcess = () => {
  return dispatch => {
    dispatch(removeSelectedBook());
    dispatch(toggleBorrowDialog());
  }
}

export const sortBook = () => {
  return {
    type: actionTypes.SORT_BOOK
  }
}

export const borrowBook = (selectedBook) => {
  return async dispatch => {
    await dispatch(addBorrow(selectedBook));
    await dispatch(removeSelectedBook());
    await dispatch(toggleBorrowDialog());
  }
}

export const selectedBookProcess = (index) => {
  console.log("selected book process")
  return dispatch => {
    dispatch(selectedBookIndex(index));
    dispatch(toggleBorrowDialog());
  }
}

const selectedBookIndex = (index) => {
  console.log("selected book:" + index)
  return {
    type: actionTypes.SELECTED_BOOK_INDEX,
    payload: index,
  };
};

const removeSelectedBook = () => {
  console.log("remove selected book")
  return {
    type: actionTypes.REMOVE_SELECTED_BOOK,
  };
};

const toggleBorrowDialog = () => {
  return {
    type: actionTypes.TOGGLE_BORROW_DIALOG,
  };
};


const addBorrow = (selectedBook) => {
  return {
    type: actionTypes.ADD_BORROW,
    payload: selectedBook
  }
}