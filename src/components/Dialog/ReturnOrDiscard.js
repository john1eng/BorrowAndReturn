import React from 'react'
import classes from './ReturnOrDiscard.module.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreator from '../../store/actions/borrow'

const ReturnOrDiscard = React.memo(() => {

  console.log("Render ReturnOrDiscard Dialog")

  const dispatch = useDispatch();
  
  const onBookReturn = (selectedBorrow) => dispatch(actionCreator.returnBook(selectedBorrow));
  const onRemoveBorrow = () => dispatch(actionCreator.removeBorrowProcess());

  const borrowed = useSelector(state => state.borrow.borrowed);
  const selectedBorrowIndex = useSelector(state => state.borrow.selectedBorrowIndex);

  const removeBookHandler = () => {
    console.log("removeBookHandler")
    onRemoveBorrow()
  }

  const returnBookHandler = () => {
    console.log("returnBookHandler")
    const selectedBorrow = borrowed[selectedBorrowIndex];
    onBookReturn(selectedBorrow)
  }

  return (
    <div className={classes.ReturnOrDiscard}>
      <h1>TITLE</h1>
      <div>
        <button onClick={returnBookHandler}>Return</button>
        <button onClick={removeBookHandler}>Discard</button>
      </div>
    </div>
  )
});

export default ReturnOrDiscard;