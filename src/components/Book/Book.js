import React from 'react'
import styles from './Book.module.css';
import * as actionCreator from '../../store/actions/book'
import { connect } from 'react-redux'
import * as types from '../../shared/types'

const Book = ({bookAttr, index, onSelectedBook}) => {
  
  const book = styles.book;

  let style = {
    backgroundColor: bookAttr.color,
    height: types.heightSize[bookAttr.size]+'px',
    width: types.pageSize[bookAttr.page]+'px'
  }
 
  return(
    <div  className={book} 
          style={style} 
          onClick={()=>onSelectedBook(index)}>
      <span>{bookAttr.title}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectedBook: (index) => dispatch(actionCreator.selectedBookProcess(index))
  }
}

export default connect(null,mapDispatchToProps)(Book);