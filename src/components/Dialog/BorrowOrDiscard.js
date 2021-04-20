import React from 'react'
import classes from './BorrowOrDiscard.module.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreator from '../../store/actions/book'

const BorrowOrDiscard = React.memo(() => {
  
  console.log("Render BorrowOrDiscard Dialog")

  const dispatch = useDispatch();
  const onBookBorrowed = (selectedBook) => dispatch(actionCreator.borrowBook(selectedBook));
  const onRemoveBook = () => dispatch(actionCreator.removeBookProcess());
  
  const selectedBookIndex = useSelector(state => state.book.selectedBookIndex);
  const books = useSelector(state => state.book.books);
  
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