import React from 'react'
import classes from './BorrowOrDiscard.module.css'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/book'

const BorrowOrDiscard = (props) => {
  
  const removeBookHandler = () => {
    props.onRemoveBook()
  }

  const borrowBookHandler = () => {
    const selectedBook = props.books[props.selectedBookIndex]
    props.onBookBorrowed(selectedBook)
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
}
const mapStateToProps = state => {
  return{
    selectedBookIndex: state.book.selectedBookIndex,
    books: state.book.books
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onBookBorrowed: (selectedBook) => dispatch(actionCreator.borrowBook(selectedBook)),
    onRemoveBook: () => dispatch(actionCreator.removeBookProcess())
    // onBookRemoved: (index) => dispatch(actionCreator.removeBook(index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BorrowOrDiscard);