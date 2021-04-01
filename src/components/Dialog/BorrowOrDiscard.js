import React from 'react'
import classes from './BorrowOrDiscard.module.css'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/book'

const BorrowOrDiscard = (props) => {
  
  const removeBookHandler = () => {
    props.onRemoveBook()
  }

  return (
    <div className={classes.BorrowOrDiscard}>
      <h1>TITLE</h1>
      <div>
        <button onClick={props.onBookBorrowed}>Borrow</button>
        <button onClick={removeBookHandler}>Discard</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onBookBorrowed: () => dispatch(actionCreator.borrowBook()),
    onRemoveBook: () => dispatch(actionCreator.removeBookProcess())
    // onBookRemoved: (index) => dispatch(actionCreator.removeBook(index))
  }
}
export default connect(null,mapDispatchToProps)(BorrowOrDiscard);