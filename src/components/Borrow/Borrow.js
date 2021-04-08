import React from 'react'
import { useDispatch } from 'react-redux'
import classes from './Borrow.module.css'
import * as types from '../../shared/types'
import * as actionCreator from '../../store/actions/borrow'

function Borrow({bookAttr, index}) {

  const dispatch = useDispatch();

  const onSelectedBorrow = (index) => dispatch(actionCreator.selectedBorrowProcess(index))

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

export default Borrow
