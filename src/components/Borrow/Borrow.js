import React from 'react'
import classes from './Borrow.module.css'

import * as types from '../../shared/types'
import { useBorrowState } from './useBorrowState'


function Borrow({bookAttr, index}) {
  console.log("render borrow")
  let style = {
    backgroundColor: bookAttr.color,
    height: types.heightSize[bookAttr.size]+'px',
    width: types.pageSize[bookAttr.page]+'px'
  }
  
  const {onSelectedBorrow} = useBorrowState();

  return (
    <div  className={classes.Borrow} 
          style={style} 
          onClick={()=>onSelectedBorrow(index)}>
      <span>{bookAttr.title}</span>
    </div>
  )
}

export default Borrow
