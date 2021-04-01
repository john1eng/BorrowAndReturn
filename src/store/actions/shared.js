import * as actionTypes from "./actionTypes";


const closeBorrowDialog = () => {
  return{
  type: actionTypes.CLOSE_BORROW_DIALOG
  }
}

const closeReturnDialog = () => {
  return{
  type: actionTypes.CLOSE_RETURN_DIALOG
  }
}


export const removeDialog = () => {
  return dispatch => {
    dispatch(closeReturnDialog())
    dispatch(closeBorrowDialog())
  }
}