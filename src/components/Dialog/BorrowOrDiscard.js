import React from 'react'
import classes from './BorrowOrDiscard.module.css'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/books'

const BorrowOrDiscard = (props) => {
  
  const discardBookHandler = () => {
    props.onDiscardBook()
  }

  return (
    <div className={classes.BorrowOrDiscard}>
      <h1>TITLE</h1>
      <div>
        <button onClick={props.onBookBorrowed}>Borrow</button>
        <button onClick={discardBookHandler}>Discard</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onBookBorrowed: () => dispatch(actionCreator.borrowBook()),
    onDiscardBook: () => dispatch(actionCreator.discardBook())
    // onBookRemoved: (index) => dispatch(actionCreator.removeBook(index))
  }
}
export default connect(null,mapDispatchToProps)(BorrowOrDiscard);