import React from 'react'
import classes from './ReturnOrDiscard.module.css'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/borrow'

const ReturnOrDiscard = (props) => {

  const removeBookHandler = () => {
    props.onRemoveBorrow()
  }

  return (
    <div className={classes.ReturnOrDiscard}>
      <h1>TITLE</h1>
      <div>
        <button onClick={props.onBookReturn}>Return</button>
        <button onClick={removeBookHandler}>Discard</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onBookReturn: () => dispatch(actionCreator.returnBook()),
    onRemoveBorrow: () => dispatch(actionCreator.removeBorrowProcess())
  }
}
export default connect(null,mapDispatchToProps)(ReturnOrDiscard);