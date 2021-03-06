import React from 'react'
import classes from './BorrowOrDiscard.module.css'
import { useBorrowOrDiscard } from './useBorrowOrDiscard';
// import { removeBook } from '../../API/removeBook';

const BorrowOrDiscard = React.memo(() => {
  
  console.log("Render BorrowOrDiscard Dialog")

  const {onBookBorrowed, onRemoveBook, selectedBookIndex, books} = useBorrowOrDiscard();
  
  const removeBookHandler = async() => {
    onRemoveBook()
  }

  const borrowBookHandler = () => {
    const selectedBook = books[selectedBookIndex]
    console.log("borrowBook -- ", selectedBook)
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