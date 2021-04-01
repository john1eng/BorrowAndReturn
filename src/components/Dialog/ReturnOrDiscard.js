import React from 'react'
import classes from './ReturnOrDiscard.module.css'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/borrow'

const ReturnOrDiscard = (props) => {

  const removeBookHandler = () => {
    props.onRemoveBorrow()
  }

  const returnBookHandler = () => {
    const selectedBorrow = props.borrowed[props.selectedBorrowIndex];
    props.onBookReturn(selectedBorrow)
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
}
const mapStateToProps = state => {
  return{
    borrowed: state.borrow.borrowed,
    selectedBorrowIndex: state.borrow.selectedBorrowIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBookReturn: (selectedBorrow) => dispatch(actionCreator.returnBook(selectedBorrow)),
    onRemoveBorrow: () => dispatch(actionCreator.removeBorrowProcess())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReturnOrDiscard);