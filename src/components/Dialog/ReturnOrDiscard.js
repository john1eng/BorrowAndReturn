import React from 'react'
import classes from './ReturnOrDiscard.module.css'
import { useReturnOrDiscardState } from './useReturnOrDiscardState';

const ReturnOrDiscard = React.memo(() => {

  console.log("Render ReturnOrDiscard Dialog")

  const {onBookReturn, onRemoveBorrow,  borrowed, selectedBorrowIndex} = useReturnOrDiscardState()

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