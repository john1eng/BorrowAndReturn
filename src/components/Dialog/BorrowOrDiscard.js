import React from 'react'
import classes from './BorrowOrDiscard.module.css'
import { useBorrowOrDiscardState } from './useBorrowOrDiscardState';

const BorrowOrDiscard = React.memo(() => {
  
  console.log("Render BorrowOrDiscard Dialog")

  const {onBookBorrowed, onRemoveBook, selectedBookIndex, books} = useBorrowOrDiscardState();
  
  const removeBookHandler = () => {
    onRemoveBook()
  }

  const borrowBookHandler = () => {
    const selectedBook = books[selectedBookIndex]
    onBookBorrowed(selectedBook)
  }

  return (
    <div className={classes.BorrowOrDiscard}>
      <h1>TITLE</h1>
      <div>
        <button onClick={borrowBookHandler}>Borrow</button>
        <button onClick={removeBookHandler}>Discard</button>
      </div>
    </div>
  )
});

export default BorrowOrDiscard;