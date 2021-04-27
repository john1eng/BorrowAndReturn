import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showReturnDialog: false,
  showBorrowDialog: false
}

const toggleReturnDialog = (state, action) => {
  return {
    ...state,
    showReturnDialog: !state.showReturnDialog
  }
}

const closeReturnDialog = (state, action)  => {
  return {
    ...state,
    showReturnDialog: false
  }
}

const toggleBorrowDialog = (state, action) => {
  return {
    ...state,
    showBorrowDialog: !state.showBorrowDialog
  }
};

const closeBorrowDialog = (state, action)  => {
  return {
    ...state,
    showBorrowDialog: false
  }
}

const dialogReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.TOGGLE_RETURN_DIALOG: return toggleReturnDialog(state, action)
    case actionTypes.CLOSE_RETURN_DIALOG: return closeReturnDialog(state, action) 
    case actionTypes.TOGGLE_BORROW_DIALOG: return toggleBorrowDialog(state, action)
    case actionTypes.CLOSE_BORROW_DIALOG: return closeBorrowDialog(state, action)
    default: return state;
  }
}

export default dialogReducer;