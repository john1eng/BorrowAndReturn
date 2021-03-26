import React from 'react'
import classes from './ReturnOrDiscard.module.css'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/books'

const ReturnOrDiscard = (props) => {

  const discardBookHandler = () => {
    props.onDiscardBorrow()
  }

  return (
    <div className={classes.ReturnOrDiscard}>
      <h1>TITLE</h1>
      <div>
        <button onClick={props.onBookReturn}>Return</button>
        <button onClick={discardBookHandler}>Discard</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onBookReturn: () => dispatch(actionCreator.returnBook()),
    onDiscardBorrow: () => dispatch(actionCreator.discardBorrow())
  }
}
export default connect(null,mapDispatchToProps)(ReturnOrDiscard);