import React from 'react'
import classes from './Borrow.module.css'
import { useDispatch } from 'react-redux'
import * as types from '../../shared/types'
import * as actionCreator from '../../store/actions/borrow'

function Borrow({bookAttr, index}) {
  console.log("render borrow")
  let style = {
    backgroundColor: bookAttr.color,
    height: types.heightSize[bookAttr.size]+'px',
    width: types.pageSize[bookAttr.page]+'px'
  }
  
  const dispatch = useDispatch();

  const onSelectedBorrow = (index) => dispatch(actionCreator.selectedBorrowProcess(index))


  return (
    <div  className={classes.Borrow} 
          style={style} 
          onClick={()=>onSelectedBorrow(index)}>
      <span>{bookAttr.title}</span>
    </div>
  )
}

export default Borrow
