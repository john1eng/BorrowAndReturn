import React from 'react'
import classes from './Borrow.module.css'

import * as types from '../../shared/types'
import { useBorrow } from './useBorrow'


function Borrow({bookAttr, id}) {
  console.log("render borrow")
  let style = {
    backgroundColor: bookAttr.color,
    height: types.bookHeightSize[bookAttr.size]+'px',
    width: types.bookPageSize[bookAttr.page]+'px'
  }
  
  const {onSelectedBorrow} = useBorrow();

  return (
    <div  className={classes.Borrow} 
          style={style} 
          onClick={()=>onSelectedBorrow(id)}>
      <span>{bookAttr.title}</span>
    </div>
  )
}

export default Borrow
