import React from 'react'
import {connect} from 'react-redux'
import classes from './Borrow.module.css'
import * as types from '../../shared/types'
import * as actionCreator from '../../store/actions/books'

function Borrow(props) {
  let style = {
    backgroundColor: props.bookAttr.color,
    height: types.heightSize[props.bookAttr.size]+'px',
    width: types.pageSize[props.bookAttr.page]+'px'
  }

  return (
    <div  className={classes.Borrow} 
          style={style} 
          onClick={()=>props.onSelectedBorrow(props.index)}>
      <span>{props.bookAttr.title}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectedBorrow: (index) => dispatch(actionCreator.selectedBorrow(index))
  }
} 
export default connect(null, mapDispatchToProps)(Borrow)
