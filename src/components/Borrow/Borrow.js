import React from 'react'
import {connect} from 'react-redux'
import classes from './Borrow.module.css'
import * as types from '../../shared/types'
import * as actionCreator from '../../store/actions/borrow'

function Borrow({bookAttr, index, onSelectedBorrow}) {
  let style = {
    backgroundColor: bookAttr.color,
    height: types.heightSize[bookAttr.size]+'px',
    width: types.pageSize[bookAttr.page]+'px'
  }

  return (
    <div  className={classes.Borrow} 
          style={style} 
          onClick={()=>onSelectedBorrow(index)}>
      <span>{bookAttr.title}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectedBorrow: (index) => dispatch(actionCreator.selectedBorrowProcess(index))
  }
} 
export default connect(null, mapDispatchToProps)(Borrow)
